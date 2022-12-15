import React,{useState} from 'react';
import { Row,Col,Form, Button,Modal } from 'react-bootstrap';

const Appt = ({ id,customer, title, subject,date, deleteAppt, editAppt}) => {

  const [show, setShow] = useState(false);
  const [newCustomer, setCustomer] = useState(customer)

  const [newTitle, setTitle] = useState(title)
  const [newSubject, setSubject] = useState(subject)
  const [newDate, setDate] = useState(date)

  const handleClose = () => {
    setShow(false);
    setCustomer(customer)
    setTitle(title)
    setSubject(subject)
    setDate(date)
  }
  
  const handleShow = () => setShow(true);

  const editApptHandler = (customer, title, subject,date) => {
    handleClose()
    const appt = {
      id,
      customer,
      title,
      subject,
      date
    }

    editAppt(appt)
    setCustomer(customer)
    setTitle(title)
    setSubject(subject)
    setDate(date)
    console.log(appt)
  }


    return (
        <>
        <Row className='border-bottom pt-3'>
            <Col md={1}>
		    <Form>
		      <Form.Check
		        type='checkbox' 
		      />
		    </Form>
		    </Col>
            <Col>
        
       
		      <h5>{title}</h5>
		      <p>{subject}</p>
		    </Col>
            <Col>
		     
		      <p>{date}</p>
		    </Col>
            <Col md={2}>
                <Form>
                <Button variant='info' className='my-2-btn-block' onClick={handleShow}> Edit</Button>
                    <Button variant='danger' className='my-2-btn-block' onClick={() => deleteAppt(id)}> Delete</Button>
                </Form>

            </Col>
        </Row>

        <Modal show={show} onHide={handleClose}>
	        <Modal.Header closeButton>
	          <Modal.Title>Edit Todo</Modal.Title>
	        </Modal.Header>
	        <Modal.Body>
	        	<Form>
					<Form.Group controlId='title'>
					  <Form.Label>Title</Form.Label>
					  <Form.Control type='text' value={newTitle} onChange={e => setTitle(e.target.value)} />
					</Form.Group>

					<Form.Group controlId='subject'>
					  <Form.Label>Subject</Form.Label>
					  <Form.Control type='text' value={newSubject} onChange={e => setSubject(e.target.value)} />
					</Form.Group>
          <Form.Group controlId='date'>
					  <Form.Label>Date</Form.Label>
					  <Form.Control type='date' value={newDate} onChange={e => setDate(e.target.value)} />
					</Form.Group>
				</Form>
       
				
	        </Modal.Body>
	        <Modal.Footer>
	          <Button variant="secondary" onClick={handleClose}>
	            Close
	          </Button>
	          <Button variant="primary" onClick={() => editApptHandler(newCustomer,newTitle, newSubject, newDate)}>
	            Save Changes
	          </Button>
	        </Modal.Footer>
	      </Modal>

        </>
        
    );
};

export default Appt;