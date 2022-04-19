import { useEffect, useState } from 'react';
import {
  Table,
  Spin,
  Empty,
  Button,
  Badge,
  Tag,
  Radio,
  Popconfirm
} from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import { errorNotification, successNotification } from '../utils/notifications';

import { CategoryDrawerForm } from './CategoryDrawerForm';
import { deleteCategory, getCategories } from '../services/categoriesService';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function getColumns(fetchStudents) {
  return [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, category) => (
        <>
          <Popconfirm
            placement="topRight"
            title={`Tem certeza que deseja remover ${category.name}?`}
            onConfirm={() => removeCategory(category.id, fetchStudents)}
            okText="Sim"
            cancelText="Não"
          >
            <Button value="small">Remover</Button>
          </Popconfirm>
          <Button
            onClick={() => alert('TODO: Implementar edição')}
            value="small"
          >
            Editar
          </Button>
        </>
      )
    }
  ];
}

async function removeCategory(categoryId, callback) {
  try {
    await deleteCategory(categoryId);
    successNotification(
      'Categoria removida',
      `A categoria com o id ${categoryId} foi removida`
    );
    callback();
  } catch (err) {
    const res = err.response;
    errorNotification(
      'Houve um erro',
      `${res.message} [${res.status}] [${res.error}]`
    );
  }
}

export function CategoriesTable() {
  const [categories, setCategories] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [showDrawer, setShowDrawer] = useState(false);

  async function fetchCategories() {
    try {
      const { data } = await getCategories();
      setCategories(data.content);
    } catch (error) {
      const res = error.response;
      errorNotification(
        'Houve um erro ao obter as categories',
        `${res.message} [${res.status}] [${res.error}]`
      );
    } finally {
      setFetching(false);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  if (fetching) {
    return <Spin indicator={antIcon} />;
  }

  if (categories.length === 0) {
    return (
      <>
        <Button
          onClick={() => setShowDrawer(!showDrawer)}
          type="primary"
          shape="default"
          icon={<PlusOutlined />}
          size="small"
        >
          Adiconar categoria
        </Button>
        <CategoryDrawerForm
          showDrawer={showDrawer}
          setShowDrawer={setShowDrawer}
          fetchStudents={fetchCategories}
        />
        <Empty description="Nenhuma categoria encontrada" />
      </>
    );
  }

  return (
    <>
      <CategoryDrawerForm
        showDrawer={showDrawer}
        setShowDrawer={setShowDrawer}
        fetchStudents={fetchCategories}
      />
      <Table
        dataSource={categories}
        columns={getColumns(fetchCategories)}
        bordered
        title={() => (
          <>
            <Tag>Num. de Categorias</Tag>
            <Badge count={categories.length} className="site-badge-count-4" />
            <br />
            <br />
            <Button
              onClick={() => setShowDrawer(!showDrawer)}
              type="primary"
              shape="round"
              icon={<PlusOutlined />}
              size="small"
            >
              Adicionar categoria
            </Button>
          </>
        )}
        pagination={{ pageSize: 50 }}
        scroll={{ y: 500 }}
        rowKey={student => student.id}
      />
    </>
  );
}
