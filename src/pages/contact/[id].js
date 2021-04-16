
import {Form,Button, Container, Div} from 'react-bootstrap'
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
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="E-Mail" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail" >
                <Form.Label>Contato</Form.Label>
                <Form.Control type="text" placeholder="Contato" value={contatc} onChange={(e)=>{setContatc(e.target.value)}}/>
            </Form.Group>

           <Container className="alinhar-botoes">
                <Button className="botao-salvar" variant="success" type="submit" onClick={createContato}>
                    Salvar
                </Button>

                <Button variant="danger" type="submit" onClick={deleteContactById}>
                    Deletar
                </Button>
           </Container>

        </Form>
        </Container>
       
    )
}