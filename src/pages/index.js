import Head from 'next/head'
import { useEffect, useState } from 'react'
import { api } from '../services/api'
import styles from '../styles/Home.module.css'
import {Button, Table} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'

export default function Home() {

  

  const [phones, setPhones] = useState([])

  useEffect(()=>{
    api.get('/').then(res=> setPhones(res.data))
  },[])

  return (
   <>
   <Table striped bordered hover>
     <thead>
       <tr>
         <th>Nome</th>
         <th>email</th>
         <th>contato</th>
         <th></th>
       </tr>
     </thead>
     <tbody>
      {phones.map((phone)=>{
        return(
          <tr key={phone.id}>
            <td>{phone.name}</td>
            <td>{phone.email}</td>
            <td>{phone.contact}</td>
            <Link href={`/contact/${phone.id}`}>
              <Button variant="secondary">Editar</Button>
            </Link>
          </tr>
        )
      })}
     </tbody>
   </Table>
   <Link href='/contact'>criar novo contato</Link>
   </>
  )
}
