
import {Form, Button, Container} from 'react-bootstrap'
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
        <h1>CADASTRAR NOVO</h1>

         <Form >
            <Form.Group controlId="formBasicEmail" >
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Nome" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail" >
                <Form.Label>E-Mail</Form.Label>
                <Form.Control type="email" placeholder="E-Mail" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail" >
                <Form.Label>Contato</Form.Label>
                <Form.Control type="text" placeholder="Contato" value={contatc} onChange={(e)=>{setContatc(e.target.value)}}/>
            </Form.Group>


        <Container className="alinhar-botoes">

            <Button className="salvar-contact" variant="success" type="submit" onClick={createContato}>
                Salvar
            </Button>


            <Link href="/">
                <Button variant="warning">Voltar</Button>
            </Link>  

        </Container>


            
        </Form>
       
        </Container>


    )
}