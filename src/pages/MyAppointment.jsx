import {React} from 'react';
import { useState, useEffect } from 'react';
import './table.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import Appt from '../components/Appt';
import Sidebar from '../components/Sidebar';







const MyAppointment = () => {
  const [appts, setAppts] = useState([])    //by calling setAppts the array appt will be set to []
  const getToken = () => sessionStorage.getItem("token");

  const getAppts = async () => {
  
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/appointments/customer/', 
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
  


   

    console.log("data 2")
    console.log(appts);


    
    


    
    return (
        
      
      <Sidebar>
      <Container>
        <Row className='justify-content-center pt-5'>
          <Col>
            <Card className='p-5'>
              <h3>My Appointments</h3>
              {appts.map((appt,index)=>(
                <Appt title={appt.title}  subject={appt.subject}  date={appt.date} />

              ))}

             
            </Card>
          </Col>
        </Row>
      </Container>
      </Sidebar>
      
    );
};

export default MyAppointment;