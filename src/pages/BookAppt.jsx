import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState,useEffect } from 'react';
import axios from "axios";
import Sidebar from '../components/Sidebar';





function BookAppt() {


  const [customer, setCustomer] = useState('')
  const [title, setTitle] = useState('')
  const [subject, setSubject] = useState('')
  const [date, setDate] = useState('')
  console.log({ customer, title, subject, date })
  const handleCustomer = (e) => {
    setCustomer(e.target.value)
  }

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }
  const handleSubject = (e) => {
    setSubject(e.target.value)
  }
  const handleDate = (e) => {
    setDate(e.target.value)
  }

  const getToken = () => sessionStorage.getItem("token");

  // const handleApi = () => {
  //   console.log({ customer, title, subject, date })
  //   axios.post('http://127.0.0.1:8000/api/v1/appointments/customer/', {
  //     // customer: "2",
  //     title: title,
  //     subject: subject,
  //     date: date
  //   },
  //   {headers: {
  //            authorization: `Token ${getToken()}`
  //         }}
  //   ).then(result => {
  //     console.log(result.data)
  //     alert('success')
  //   })
  //     .catch(error => {
  //       alert('service error')
  //       console.log(error)
  //     })
  // }
  const [userpk, setPk] = useState("")   

  const getUserpk = async () => {
  
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/auth/user', 
        {headers: {
          authorization: `Token ${getToken()}`
        }}) 
        const { data } = response
        setPk(data.pk)
        console.log("PK IIIS")
        console.log(data.pk)
       
    } catch (err) {
        console.log(err)
    }
  }

  useEffect(() => {
    getUserpk()
  }, [])

  const handleApi = async () => {
    
  //  await axios.get('http://127.0.0.1:8000/api/v1/auth/user',
  //  {headers: {
  //   authorization: `Token ${getToken()}`
  // }}).then(result => {
  //    customer = result.data;
  //    console.log(customer)});



    await axios.post('http://127.0.0.1:8000/api/v1/appointments/customer/', {
     customer: userpk,
    //  customer: '2',
      title: title,
      subject: subject,
      date: date
    },
    {headers: {
      authorization: `Token ${getToken()}`
    }}).then(result => {
      console.log(result.data)
      alert('success')
    })
      .catch(error => {
        alert('service error')
        console.log(error)
      });
console.log("HERE 2")
  }
    
    return (
      <Sidebar>
        <Form>         
        <Form.Group className="mb-3" controlId="formBasicEmail">
            
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" value={title} onChange={handleTitle}/>
            
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" name="subject" value={subject} onChange={handleSubject} />
        </Form.Group>
        

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Date</Form.Label>
            <Form.Control type="datetime-local" name="date" value={date} onChange={handleDate} />
        </Form.Group>
        
        <Button variant="primary" type="submit" onClick={handleApi} >
            Submit
        </Button>
        </Form>
        </Sidebar>
    );
}

export default BookAppt;