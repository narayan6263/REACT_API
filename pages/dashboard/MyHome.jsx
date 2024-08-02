import { useEffect, useState } from 'react';
import axios from 'axios'
import whatsicon from '../../assets/icons/whatsapp.jpg'
import { Link } from 'react-router-dom';

function MyHome() {

  const [data,setData]=useState([]);
  const [search, setSearch] =useState('');


  //Using Fetch Method

  // useEffect(()=>{
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((res)=>{
  //    return res.json()
  //   })
  //   .then((res)=>{
  //     console.log("hellooo",res)
  //     setData(res)
  //   })
  //   .catch((err)=>{
  //     console.log("Api failed", err)
  //   })

  // },[])
  // console.log(data,"mydataaaaa")


  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
      console.log(res.data)
      setData(res.data)
    })
    .catch((err)=>{
           console.log("Api failed", err)
         })
  },[])

  const handelChange=(e)=>{
    setSearch(e.target.value)
  }

  const findValue = data.filter((item)=>{
 return item.name.toLowerCase().includes(search.toLowerCase()) ||
 item.phone.toLowerCase().includes(search.toLowerCase()) ||
 item.username.toLowerCase().includes(search.toLowerCase())

  })




  return (
    <div className="App">
        <div style={{textAlign:'center'}}>
        <input 
        type='text' 
        placeholder='Search here......' 
        style={{width:'400px',height:'50px'}}
        onChange={handelChange}

        />
<Link to='https://wa.me/9926141274?text=Hello' target='_blank'>

        <img 
        src={whatsicon} 
        alt='whatsapp image'
        style={{width:'50px', height:'50px', marginTop:'20px' }}
         />
</Link>
        </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Username</th>
            <th>Website</th>
            <th>Email</th>
            <th>City</th>
            <th>Street</th>
            <th>Suite</th>
            <th>Zipcode</th>
            <th>Geo Lat</th>
            <th>Geo Lng</th>
            <th>Company Name</th>
            <th>Company catchPhrase</th>
            <th>Company bs</th>
          </tr>
        </thead>
        <tbody>
          { findValue.length > 0 ? (
            findValue.map((value,index)=>{
              return(
                <tr key={index}>
                  <td> {index + 1} </td>
                  <td> {value.name} </td>
                  <td> {value.phone} </td>
                  <td> {value.username} </td>
                  <td> {value.website} </td>
                  <td> {value.email} </td>
                  <td> {value.address.city} </td>
                  <td> {value.address.street} </td>
                  <td> {value.address.suite} </td>
                  <td> {value.address.zipcode} </td>
                  <td> {value.address.geo.lat} </td>
                  <td> {value.address.geo.lng} </td>
                  <td> {value.company.name} </td>
                  <td> {value.company.catchPhrase} </td>
                  <td> {value.company.bs} </td>
                </tr>
              )

            })
        ):(
            <tr>
                <td colSpan='19'><h1 style={{textAlign:'center'}}>No Record Found</h1></td>

            </tr>
            
        )
          }
        </tbody>
      </table>


    </div>
  );
}

export default MyHome;
