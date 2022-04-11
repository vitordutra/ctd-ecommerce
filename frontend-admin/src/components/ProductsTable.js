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

import { getProducts, deleteProduct } from '../services/productsService';
import { errorNotification, successNotification } from '../utils/notifications';

import { ProductDrawerForm } from './ProductDrawerForm';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function getColumns(fetchStudents) {
  return [
    {
      title: 'Nome',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'Descrição',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Preço',
      dataIndex: 'price',
      key: 'price'
    },
    {
      title: 'Categoria',
      dataIndex: 'category',
      key: 'category'
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, student) => (
        <Radio.Group>
          <Popconfirm
            placement="topRight"
            title={`Are you sure to delete ${student.name}`}
            onConfirm={() => removeProduct(student.id, fetchStudents)}
            okText="Yes"
            cancelText="No"
          >
            <Radio.Button value="small">Delete</Radio.Button>
          </Popconfirm>
          <Radio.Button
            onClick={() => alert('TODO: Implement edit student')}
            value="small"
          >
            Edit
          </Radio.Button>
        </Radio.Group>
      )
    }
  ];
}

async function removeProduct(productId, callback) {
  try {
    await deleteProduct(productId);
    successNotification(
      'Produto deletado',
      `O produto com o id ${productId} foi deletado`
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

export function ProductsTable() {
  const [products, setProducts] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [showDrawer, setShowDrawer] = useState(false);

  async function fetchProduct() {
    try {
      const { data } = await getProducts();
      setProducts(data);
    } catch (error) {
      const res = error.response;
      errorNotification(
        'Houve um erro ao obter os produtos',
        `${res.message} [${res.status}] [${res.error}]`
      );
    } finally {
      setFetching(false);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  if (fetching) {
    return <Spin indicator={antIcon} />;
  }

  if (products.length <= 0) {
    return (
      <>
        <Button
          onClick={() => setShowDrawer(!showDrawer)}
          type="primary"
          shape="default"
          icon={<PlusOutlined />}
          size="small"
        >
          Adiconar Jogo
        </Button>
        <ProductDrawerForm
          showDrawer={showDrawer}
          setShowDrawer={setShowDrawer}
          fetchStudents={fetchProduct}
        />
        <Empty description="Nenhum game encontrado" />
      </>
    );
  }
  return (
    <>
      <ProductDrawerForm
        showDrawer={showDrawer}
        setShowDrawer={setShowDrawer}
        fetchStudents={fetchProduct}
      />
      <Table
        dataSource={products}
        columns={getColumns(fetchProduct)}
        bordered
        title={() => (
          <>
            <Tag>Number of students</Tag>
            <Badge count={products.length} className="site-badge-count-4" />
            <br />
            <br />
            <Button
              onClick={() => setShowDrawer(!showDrawer)}
              type="primary"
              shape="round"
              icon={<PlusOutlined />}
              size="small"
            >
              Add New Student
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
