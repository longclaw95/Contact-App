import React from 'react';

import {Button, Card} from "react-bootstrap"
import {Link} from 'react-router-dom'
function UserCard({id,el,Delete,Edit}) {
  return (
    <Card style={{ width: '18rem'  }}>
    <Card.Img variant="top" src={el.image}/>
    <Card.Body>
      <Card.Title>{el.name}</Card.Title>
      <Card.Text>
        {el.email}
      </Card.Text>
      <Link to='/Add_contact'>
      <Button variant="primary"onClick={()=>{Edit(id)}}>Edit</Button>
      </Link>
      <Button variant="danger" onClick={()=>{Delete(id)}} >Delete</Button>
    </Card.Body>
  </Card>
    );
}

export default UserCard;