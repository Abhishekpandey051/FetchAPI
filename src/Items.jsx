import React, { useEffect, useState } from 'react'

export default function Items(){
  const[data, setdata]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users').then((result)=>
    result.json().then((res)=>{
      setdata(res)
      console.log(res)
    })
    )
  },[])
  return(
    <div>
   <table border='1px'>
     <tr>
       <td>Id</td>
       <td>name</td>
       <td>usename</td>
       <td>emai</td>
       <td>street</td>
       <td>suite</td>
       <td>zipcode</td>
       <td>lat</td>
       <td>lng</td>
       <td>phone</td>
       <td>website</td>
       <td>name</td>
       <td>catchPhrase</td>
       <td>bs</td>
     </tr>
       {
        data.map((elm,index)=>{
         return(
          <tr>
          <td>{elm.id}</td>
          <td>{elm.name}</td>
          <td>{elm.username}</td>
          <td>{elm.email}</td>
          <td>{elm.address.street}</td>
          <td>{elm.address.suite}</td>
          <td>{elm.address.zipcode}</td>
         <td>{elm.address.geo.lat}</td>
         <td>{elm.address.geo.lng}</td>
          <td>{elm.phone}</td>
          <td>{elm.website}</td>
          <td>{elm.company.name}</td>
          <td>{elm.company.catchPhrase}</td>
          <td>{elm.company.bs}</td>
        </tr> 
         )
        })
       }
     
     </table>
    </div
    >
  )
}