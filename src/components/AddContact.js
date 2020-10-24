import React from 'react'
import {Form,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const AddContact = ({handlechange,handlesubmit,Reset,PersonToEdit}) => {
    
    return (
        <Form>
            <Form.Group>
                <Form.Label className="title">Contact's Name</Form.Label>
                <Form.Control name='name' type="text"  placeholder="Enter Contact's Name" onChange={handlechange}  />
                
            </Form.Group>

            <Form.Group>
                <Form.Label className="title">Contant's Email address</Form.Label>
                <Form.Control  name='email' type="email" placeholder="Enter Contact's email"  onChange={handlechange}  />
                
            </Form.Group>

            <Form.Group>
                <Form.Label className="title">Contant's Image Url</Form.Label>
                <Form.Control name='image'type="text" placeholder="Enter Contant's Image Url"  onChange={handlechange} />
                
            </Form.Group>
            
            <Link to='/List_contact'>
            <Button variant="primary" onClick={()=>{handlesubmit(); Reset()}} >Add</Button>
            </Link>
            <Link to='/List_contact'>
            <Button variant="secondary">Cancel</Button>
            </Link>
        </Form>
    )
}

export default AddContact
