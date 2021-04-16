
import {Form,Button, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import {useRouter} from 'next/router'

export default function ContactEdit(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contatc, setContatc] = useState('')

    function createContato(e){
        e.preventDefault()
        api.put('/',{
            id: parseInt(id),
            name: name,
            email: email,
            contact: contatc
        })
    }


        const router = useRouter()
        const { id } = router.query

        useEffect(()=>{
            if(!id)return
            getContactById()
        },[id])

        const getContactById = async()=>{
            const response = await api.get(`/${id}`)
            const {name, email, contact} = response.data[0]
            setName(name)
            setEmail(email)
            setContatc(contact)
        }

        const deleteContactById = async(e)=>{
            e.preventDefault()
            api.delete(`/${id}`)
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
            <Button variant="danger" type="submit" onClick={deleteContactById}>
                Deletar
            </Button>
        </Form>
        </Container>
       
    )
}