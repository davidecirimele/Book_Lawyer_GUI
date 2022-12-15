import React,{useState} from 'react';
import { Row,Col,Form, Button,Modal } from 'react-bootstrap';

const ApptLawyer = ({ id,customer, title, subject,date, deleteAppt}) => {




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
               
                    <Button variant='danger' className='my-2-btn-block' onClick={() => deleteAppt(id)}> Delete</Button>
                </Form>

            </Col>
        </Row>



        </>
        
    );
};

export default ApptLawyer;