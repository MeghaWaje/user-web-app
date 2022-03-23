import React, { useState } from 'react';
//import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import { Button, Card, Row, Col } from 'react-bootstrap';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    console.log('before');
    const response = await fetch("https://reqres.in/api/users?page=1");

    const jsonresponse = await response.json();
    console.log('after', jsonresponse.data)

    setUsers(jsonresponse.data);
  };


  return (
    <div className='App'>
      <h1>hello all</h1>
      <button onClick={loadUsers}>Get Users</button>



      <h2>Users</h2>
      <Row>


        {users.map(({ id, first_name, last_name, avatar, email }) => (

          <Col key={id} md={4}>
            <Card >
              <Card.Img variant="top" src={avatar} />
              <Card.Body>
                <Card.Title>{first_name} {last_name} </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">{email}</Button>
              </Card.Body>
            </Card>
          </Col>
          // <li key={id}> name: {first_name} {last_name} Email:{email} </li>

        ))}
      </Row>
    </div>
  )
}
export default App;