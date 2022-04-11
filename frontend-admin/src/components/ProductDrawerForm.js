import { useState } from 'react';
import { Drawer, Input, Col, Select, Form, Row, Button, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { saveProduct } from '../services/productsService';
import { successNotification, errorNotification } from '../utils/notifications';

const { Option } = Select;
const { TextArea } = Input;

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export function ProductDrawerForm({
  showDrawer,
  setShowDrawer,
  fetchStudents
}) {
  const [submitting, setSubmitting] = useState(false);

  function handleClose() {
    setShowDrawer(false);
  }

  async function handleFinish(product) {
    setSubmitting(true);
    try {
      await saveProduct(product);
      handleClose();
      successNotification(
        'Game adicionado com sucesso',
        `${product.title} foi adicionado ao sistema`
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
      title="Cadastro de Games"
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
            Cancel
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
              name="title"
              label="Nome"
              rules={[
                { required: true, message: 'Por favor informe o nome do jogo' }
              ]}
            >
              <Input placeholder="Nome do jogo" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="category"
              label="Categoria"
              rules={[
                {
                  required: true,
                  message: 'Por favor informe a categoria do jogo'
                }
              ]}
            >
              <Select placeholder="Categoria do jogo">
                <Option value="1">Ação</Option>
                <Option value="2">Esportes</Option>
                <Option value="3">Luta</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="price"
              label="Preço"
              rules={[
                {
                  required: true,
                  message: 'Por favor informe o preço do jogo'
                }
              ]}
            >
              <Input placeholder="Preço do jogo" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="image"
              label="Imagem"
              rules={[
                {
                  required: true,
                  message: 'Por favor informe a URL da imagem do jogo'
                }
              ]}
            >
              <Input placeholder="URL da imagem do jogo" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="description"
              label="Descrição"
              rules={[
                {
                  required: true,
                  message: 'Por favor informe a descrição do jogo'
                }
              ]}
            >
              <TextArea rows={4} placeholder="Descrição do jogo" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
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
