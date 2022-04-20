import { useEffect, useState } from 'react';
import {
  Row,
  Col,
  Container,
  Table,
  Button,
  Modal,
  Form
} from 'react-bootstrap';
import { Sidebar } from '../components/Sidebar';
import axios from '../services/axios';

export function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productCategories, setProductCategories] = useState([]);

  useEffect(() => {
    axios.get('/products').then(data => {
      setProducts(data.data.content);
    });
    axios.get('/categories').then(data => {
      setCategories(data.data.content);
    });
  }, []);

  useEffect(() => {
    if (productToEdit) {
      setProductName(productToEdit.title);
      setProductDescription(productToEdit.description);
      setProductPrice(productToEdit.price);
      setProductImage(productToEdit.image);
      setProductCategories(productToEdit.categories);
    } else {
      resetValues();
    }
  }, [productToEdit]);

  function handleDeleteCategory(product) {
    axios.delete('/products/' + product.id).then(data => {
      const newProducts = products.filter(p => p.id !== product.id);
      setProducts(newProducts);
    });
  }

  function handleCreateCategory() {
    setShowModal(true);
  }

  function handleEditCategory(category) {
    setProductToEdit(category);
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
    setProductToEdit(null);
  }

  function handleSubmitCategory() {
    if (productToEdit) {
      axios
        .put('/products/' + productToEdit.id, {
          title: productName,
          description: productDescription,
          price: productPrice,
          image: productImage,
          categories: productCategories
        })
        .then(() => {
          const updatedCategories = products.map(c => {
            return c.id === productToEdit.id
              ? {
                  ...productToEdit,
                  title: productName,
                  description: productDescription,
                  price: productPrice,
                  image: productImage,
                  categories: productCategories
                }
              : c;
          });
          setProducts(updatedCategories);
          handleCloseModal();
          resetValues();
        });
    } else {
      axios
        .post('/products', {
          title: productName,
          description: productDescription,
          price: productPrice,
          image: productImage,
          categories: productCategories
        })
        .then(data => {
          setProducts([...products, {...data.data, categories: productCategories}]);
          handleCloseModal();
          resetValues();
        });
    }
  }

  function resetValues() {
    setProductName('');
  }

  function handleCategoryCheckboxChange(event, category) {
    const checked = event.target.checked;
    if (checked) {
      setProductCategories([...productCategories, category]);
    } else {
      setProductCategories(
        productCategories.filter(pc => pc.id !== category.id)
      );
    }
    console.log(productCategories);
  }

  return (
    <Container fluid>
      <Row>
        <Col md={2} className="gx-0">
          <Sidebar />
        </Col>
        <Col md={10} className="gx-0 p-4">
          <h1>Lista de Produtos</h1>
          <Button size="sm" className="mb-2" onClick={handleCreateCategory}>
            Adicionar Produto
          </Button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Preço</th>
                <th>Categoria</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>
                    {categories
                      .filter(c =>
                        product.categories.some(pc => pc.name === c.name)
                      )
                      .map(c => c.name)
                      .join(', ')}
                  </td>
                  <td>
                    <Button
                      size="sm"
                      variant="danger"
                      className="m-2"
                      onClick={() => handleDeleteCategory(product)}
                    >
                      Remover
                    </Button>
                    <Button
                      size="sm"
                      variant="warning"
                      onClick={() => handleEditCategory(product)}
                    >
                      Editar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {productToEdit ? 'Edição de Jogo' : 'Cadastro de Jogo'}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                value={productName}
                onChange={e => setProductName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                type="text"
                value={productDescription}
                onChange={e => setProductDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Preço</Form.Label>
              <Form.Control
                type="text"
                value={productPrice}
                onChange={e => setProductPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Imagem</Form.Label>
              <Form.Control
                type="text"
                value={productImage}
                onChange={e => setProductImage(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Categorias</Form.Label>
              {categories.map(c => (
                <Form.Check
                  key={c.id}
                  type="checkbox"
                  label={c.name}
                  value={c.id}
                  checked={productCategories.some(pc => pc.id === c.id)}
                  onChange={e => handleCategoryCheckboxChange(e, c)}
                />
              ))}
            </Form.Group>

            {/* <Form.Select aria-label="Default select example">
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </Form.Select> */}
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmitCategory}>
            {productToEdit ? 'Editar' : 'Cadastrar'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
