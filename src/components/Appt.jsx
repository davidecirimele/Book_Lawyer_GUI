import React from 'react';
import { Row,Col,Form, Button } from 'react-bootstrap';

const Appt = ({ title, subject,date}) => {

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
                <Button variant='info' className='my-2-btn-block'> Edit</Button>
                    <Button variant='danger' className='my-2-btn-block'> Delete</Button>
                </Form>

            </Col>
        </Row>
        </>
        
    );
};

export default Appt;