import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

  const [data,setData]=useState([]);

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




  return (
    <div className="App">

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
          {
            data.map((value,index)=>{
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
          }
        </tbody>
      </table>


    </div>
  );
}

export default App;
