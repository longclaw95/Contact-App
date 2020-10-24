import React, { useState} from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import ContactCard from './Components/ContactCard'
import Form from './Components/Form'
function App() {
    
  const [contacts, setContacts] = useState([
    {'name':'John',
     'email': 'john@example.com',
     'img': 'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png',
     'id': Math.random()},
     {'name':'Joe',
     'email': 'joe@example.com',
     'img': 'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png',
     'id': Math.random()},
     {'name':'Johann',
     'email': 'johann@example.com',
     'img': 'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png',
     'id': Math.random()},
  ])
  const [currentUser, setCurrentUser] = useState(
    {'name':'',
     'email': '',
     'img': '',
     'id': 0}
  )
  const addCard = (e) => {
    setContacts([...e,...contacts])
  }
  const editCard = (e) => {
    setContacts(contacts.map(el=>el.id===e.id? e : el))
  }
  const currentUserHandler = (e) => {
    setCurrentUser(e)
  }
  const deleteCard = (e) => {
    setContacts(contacts.filter(person=>person.id !== e))
  }
  const [editing, setEditing] = useState(false)
  return (
    <Router>
      <div className="app">
        <div className="app__header">
          <Link to="/contact-list">
           <button>Contact List</button>
          </Link>
          <Link to="/add-form">
            <button onClick={()=>{setEditing(false)
                                  setCurrentUser({'name':'',
                                  'email': '',
                                  'img': '',
                                  'id': 0})
            }}>Add Contact</button>
          </Link>
        </div>
        <Switch>
          <Route path="/contact-list">
            <div className="app__contactList">
             {contacts.map((contact,i)=>{return <ContactCard currentUserHandler={currentUserHandler} setEditing={setEditing} key={i} deleteCard={deleteCard} name={contact.name} email={contact.email} id={contact.id} img={contact.img}/>} )}
            </div>
          </Route>
          {editing ?
            <Route path="/edit-form"><Form editCard={editCard} setEditing={setEditing} setCurrentUser={setCurrentUser}  currentUser={currentUser}  editing={editing}/></Route> :
            <Route path="/add-form"><Form addCard={addCard} setCurrentUser={setCurrentUser} currentUser={currentUser}  editing={editing}/></Route>}
        </Switch>
      </div>
    </Router>
  );
}
export default App;