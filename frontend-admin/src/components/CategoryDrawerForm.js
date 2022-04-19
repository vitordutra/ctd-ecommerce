import { useState } from 'react';
import { Drawer, Input, Col, Select, Form, Row, Button, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { saveProduct } from '../services/productsService';
import { successNotification, errorNotification } from '../utils/notifications';
import { saveCategory } from '../services/categoriesService';

const { Option } = Select;
const { TextArea } = Input;

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export function CategoryDrawerForm({
  showDrawer,
  setShowDrawer,
  fetchStudents
}) {
  const [submitting, setSubmitting] = useState(false);

  function handleClose() {
    setShowDrawer(false);
  }

  async function handleFinish(category) {
    setSubmitting(true);
    try {
      await saveCategory(category);
      handleClose();
      successNotification(
        'Categoria adicionada com sucesso',
        `${category.name} foi adicionada ao sistema`
      );
      fetchStudents();
    } catch (error) {
      const res = error.response;
      errorNotification(
        'Houve um erro',
        `${res.message} [${res.status}] [${res.error}]`,
        'bottomLeft'
      );
    } finally {
      setSubmitting(false);
    }
  }

  function handleFinishFailed(errorInfo) {
    alert(JSON.stringify(errorInfo, null, 2));
  }

  return (
    <Drawer
      title="Cadastro de Categoria"
      width={720}
      onClose={handleClose}
      visible={showDrawer}
      bodyStyle={{ paddingBottom: 80 }}
      footer={
        <div
          style={{
            textAlign: 'right'
          }}
        >
          <Button onClick={handleClose} style={{ marginRight: 8 }}>
            Cancelar
          </Button>
        </div>
      }
    >
      <Form
        layout="vertical"
        onFinishFailed={handleFinishFailed}
        onFinish={handleFinish}
        hideRequiredMark
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="name"
              label="Nome"
              rules={[
                {
                  required: true,
                  message: 'Por favor informe o nome da categoria'
                }
              ]}
            >
              <Input placeholder="Nome da categoria" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item>
              <Button type="primary" htmlType="submit" ghost>
                Cadastrar
              </Button>
            </Form.Item>
          </Col>
        </Row>
        <Row>{submitting && <Spin indicator={antIcon} />}</Row>
      </Form>
    </Drawer>
  );
}
