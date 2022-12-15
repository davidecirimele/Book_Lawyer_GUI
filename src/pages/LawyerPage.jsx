import {React} from 'react';
import { useState, useEffect } from 'react';
import './table.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import Appt from '../components/ApptLawyer';
import Sidebar from '../components/Sidebar';
import SideBarLaw from '../components/SideBarLaw';







const MyAppointment = () => {
  const [appts, setAppts] = useState([])    //by calling setAppts the array appt will be set to []
  const getToken = () => sessionStorage.getItem("token");

  const getAppts = async () => {
  
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/appointments/lawyer', 
        {headers: {
          authorization: `Token ${getToken()}`
        }}) 
        const { data } = response
        setAppts(data)
        console.log("data 1")
        console.log(data)
       
    } catch (err) {
        console.log(err)
    }
  }
  
  useEffect(() => {
    getAppts()
  }, [])
  

  const deleteAppt = async id => {
		try {
			await axios.delete(`http://127.0.0.1:8000/api/v1/appointments/lawyer/${id}/`, {headers: {
        authorization: `Token ${getToken()}`
      }})
			getAppts()
		} catch(err) {
			console.log(err)
		}
	}


    
    return (
        
      
    <SideBarLaw>
      <Container >
        <Row className='justify-content-center pt-5'>
          <Col>
            <Card className='p-5'>
              <h3>All Appointments</h3>
              {appts.map((appt,index)=>(
                <Appt id={appt.id} customer={appt.customer} title={appt.title}  subject={appt.subject}  date={appt.date}  deleteAppt={deleteAppt} />

              ))}

             
            </Card>
          </Col>
        </Row>
      </Container>
      </SideBarLaw>
    
      
    );
};

export default MyAppointment;