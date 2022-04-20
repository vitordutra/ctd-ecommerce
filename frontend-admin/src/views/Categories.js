import { useEffect, useState } from 'react';
import { Row, Col, Container, Table, Button, Modal, Form } from 'react-bootstrap';
import { Sidebar } from '../components/Sidebar';
import axios from '../services/axios';

export function Categories() {
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [categoryToEdit, setCategoryToEdit] = useState(null);

  useEffect(() => {
    axios.get('/categories').then(data => {
      setCategories(data.data.content)
    })
  }, [])

  useEffect(() => {
    if (categoryToEdit) {
      setCategoryName(categoryToEdit.name)
    } else {
      setCategoryName('')
    }
  }, [categoryToEdit])

  function handleDeleteCategory(category) {
    axios.delete('/categories/' + category.id).then(data => {
      const newCategories = categories.filter(c => c.id !== category.id);
      setCategories(newCategories)
    })
  }

  function handleCreateCategory() {
    setShowModal(true);
  }

  function handleEditCategory(category) {
    setCategoryToEdit(category);
    setShowModal(true);
  }
  
  function handleCloseModal() {
    setShowModal(false);
    setCategoryToEdit(null);
  }

  function handleSubmitCategory() {
    if (categoryToEdit) {
      axios.put('/categories/' + categoryToEdit.id, {
        name: categoryName
      }).then(() => {
        const updatedCategories = categories.map(c => {
          return c.id === categoryToEdit.id ?  {
            ...categoryToEdit,
            name: categoryName
          }: c;
        })
        setCategories(updatedCategories)
        handleCloseModal();
        clearForm()
      })
    } else {
      axios.post('/categories', {
        name: categoryName
      }).then((data) => {
        setCategories([...categories, data.data ]);
        handleCloseModal();
        clearForm()
      })
    }
  }
  
  function clearForm() {
    setCategoryName('');
  }

  return (
    <Container fluid>
      <Row>
        <Col md={2} className="gx-0">
          <Sidebar />
        </Col>
        <Col md={10} className="gx-0 p-4">
          <h1>Lista de Categorias</h1>
          <Button size="sm" className='mb-2' onClick={handleCreateCategory}>Adicionar Categoria</Button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {categories.map(category => (
                <tr>
                  <td>{category.name}</td>
                  <td>
                    <Button size="sm" variant="danger" className='m-2' onClick={() => handleDeleteCategory(category)}>Remover</Button>
                    <Button size="sm" variant="warning" onClick={() => handleEditCategory(category)}>Editar</Button>
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
            {categoryToEdit ? 'Edição de Categoria' : 'Cadastro de Categoria'}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
        
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Nome da categoria" value={categoryName} onChange={e => setCategoryName(e.target.value)} />
          </Form.Group>
        </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmitCategory}>
            {categoryToEdit ? 'Editar' : 'Cadastrar'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
