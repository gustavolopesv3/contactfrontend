import Head from "next/head";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import styles from "../styles/Home.module.css";
import { Button, Table, Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";



export default function Home() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    api.get("/").then((res) => setPhones(res.data));
  }, []);

  return (
    <>
      <Container>
        <h1> PROJETO TECNOLOGIAS WEB</h1>
        <Table striped bordered hover  variant="dark">
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-Mail</th>
              <th>Contato</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {phones.map((phone) => {
              return (
                <tr key={phone.id}>
                  <td>{phone.name}</td>
                  <td>{phone.email}</td>
                  <td>{phone.contact}</td>
                  <Link href={`/contact/${phone.id}`}>
                    <Button variant="warning">Editar</Button>
                  </Link>
                </tr>
              );
            })}
          </tbody>
        </Table>


        <Container className="alinhar-botoes">
          <Link href="/contact">
            <Button variant="warning">Criar novo contato</Button>
          </Link>      
        </Container>

     </Container>



    </>


  );
  
}
