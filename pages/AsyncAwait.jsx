import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Audio } from 'react-loader-spinner'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Modal, ModalBody, ModalHeader, Row, Col } from 'reactstrap'

function AsyncAwait() {

    const [data, setData]= useState([])
    const [popUp, setPopUp]=useState(false)

    // useEffect(()=>{
    //     axios.get('https://66a4a5b65dc27a3c19096e14.mockapi.io/std/data/stddata')
    //     .then((res)=>{
    //         console.log(res.data)
    //         setData(res.data)
    //     }).catch((err)=>{
    //         console.log('error in fetching data', err)
    //     })
    // },[])

    useEffect(()=>{
        let record = async ()=>{
         let response=  await axios.get('https://66a4a5b65dc27a3c19096e14.mockapi.io/std/data/stddata')
         console.log(response,'myresponse')
         setData(response.data)

        }
        record()
    },[])

    if( !data || data.length === 0 ){
        return <div> Please Wait... Data is Loading
            <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
             </div>

    }

    const colour ={
        backgroundColor:"red",
        borderRadius:"10px"
    }


  return (
    <div>

        {/* <Button>Click to Open Modal </Button> */}
        <button 
        style={colour}
        onClick={()=> setPopUp(true)}
        > Click To Open Button</button>

        <Modal 
        size='lg'
        isOpen={popUp}
        toggle={()=> setPopUp(!popUp) }
        >
            <ModalHeader 
            toggle={()=> setPopUp(!popUp) }
            >
        Student Form
            </ModalHeader>
            <ModalBody>
                <form>
                    <Row>
                        <Col>
                        <label>Name:</label>
                        <input type='text' placeholder='Enter Your Name' className='form-control' />
                        

                        </Col>
                        <Col>
                        <label>Email:</label>
                        <input type='text' placeholder='Enter Your Name' className='form-control' />
                        </Col>
                        <Col>
                        <label>Email:</label>
                        <input type='text' placeholder='Enter Your Name' className='form-control' />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <label>Email:</label>
                        <input type='email' placeholder='Enter Your Email' className='form-control' />

                        </Col>
                    </Row>
                </form>

            </ModalBody>
        </Modal>



      <h1>Async and Await</h1>
      <table>
        <thead>
            <tr>
                <th> SNO </th>
                <th> First Name </th>
                <th> Last Name </th>
                <th> Email </th>
                <th> Password </th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((value,index)=>{
                    return(
                        <tr key={index}> 
                            <td> {index + 1} </td>
                            <td> {value.Firstname} </td>
                            <td> {value.Lastname} </td>
                            <td> {value.Email} </td>
                            <td> {value.Password} </td>
                            
                             </tr>
                    )
                })
            }

        </tbody>
      </table>
    </div>
  )
}

export default AsyncAwait
