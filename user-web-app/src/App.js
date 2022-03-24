import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Navbar, Container } from "react-bootstrap";
import { TailSpin } from "react-loader-spinner";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [spinnerLoading, setSpinnerLoading] = useState(true);

  const loadUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonresponse = await response.json();
    setUsers(jsonresponse.data);
    setSpinnerLoading(false);
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Users</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <button onClick={loadUsers}>Get Users</button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row>
        {users.map(({ id, first_name, last_name, avatar, email }) => (
          <Col key={id} md={4}>
            <Card style={{ margin: "20px" }}>
              <Card.Img variant="top" src={avatar} />
              <Card.Body>
                <Card.Title>
                  {first_name} {last_name}{" "}
                </Card.Title>
                <Card.Text>
                  E-mail: <a href={"mailto:" + email}>{email}</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {spinnerLoading ? (
        <div className="centered">
          <TailSpin
            visible={spinnerLoading}
            color="#00BFFF"
            height={100}
            width={100}
          />
        </div>
      ) : null}
    </div>
  );
};
export default App;
