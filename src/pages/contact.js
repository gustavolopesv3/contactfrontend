
import {Form,Button, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { api } from '../services/api';
import { useState } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router'

export default function Contact(){
    const router = useRouter()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contatc, setContatc] = useState('')

    function createContato(e){
        e.preventDefault()
        api.post('/',{
            name: name,
            email: email,
            contact: contatc
        })
        router.push('/')
    }



    return(
        <Container >
         <Form >
            <Form.Group controlId="formBasicEmail" >
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Nome" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail" >
                <Form.Label>email</Form.Label>
                <Form.Control type="email" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail" >
                <Form.Label>contato</Form.Label>
                <Form.Control type="text" placeholder="Contato" value={contatc} onChange={(e)=>{setContatc(e.target.value)}}/>
            </Form.Group>

           <Button variant="success" type="submit" onClick={createContato}>
                Salvar
            </Button>

            
        </Form>
        </Container>
       
    )
}