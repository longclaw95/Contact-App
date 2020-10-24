import React,{useState} from 'react';
import './App.css';
import {users}  from './UsersData.js'
import {Button} from 'react-bootstrap'
import UserCard from './components/UserCard'
import {Route,Link} from 'react-router-dom'
import AddContact from './components/AddContact';

function App() {
  const [newPerson, SetNewPerson] = useState({
    name:'',
    image:'',
    id:'',
    email:''})
  const [CardList, SetCardList] = useState(users)
  const [PersonToEdit, SetPersonToEdit] = useState([])
  const handlechange=(e)=> SetNewPerson({...newPerson,[e.target.name]:e.target.value,id:Math.random()})
  const handlesubmit =()=> SetCardList([...CardList,newPerson])
  const Delete =(id)=>{
    const updatedCardList = CardList.filter((users) => 
    users.id !== id) ;
    SetCardList(updatedCardList)}
  
  const Reset=()=>SetNewPerson({
    name:'',
    image:'',
    id:'',
    email:''})

  const Edit =(id)=>{
    const CardToEdit = CardList.filter((users) => 
    users.id === id) ;
    SetPersonToEdit(CardToEdit)}

  return (
    <div className="App">
      <div className="home-btn" >
      <Link exact={true} to='/List_contact'>
      <Button variant="primary">List Contact</Button>
      </Link>
      <Link to='/Add_contact'>
      <Button variant="primary">Add Contact </Button>
      </Link>
      </div>
      <div className="card-list ">
      <Route path='/List_contact' render={(props)=>CardList.map((el)=><UserCard el={el} id={el.id} key={el.id} Delete={Delete}  Edit={Edit}/>)} />
      </div>
      <div className="home-btn" >
      <Route path='/Add_contact' render={(props)=><AddContact handlechange={handlechange} handlesubmit={handlesubmit} Reset={Reset} Edit={PersonToEdit}/> }/>
      </div>
    </div>
  );
}

export default App;
