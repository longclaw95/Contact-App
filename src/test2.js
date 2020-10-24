import React from 'react'
import { useHistory } from 'react-router-dom'
import './Form.css'
const Form = ({setCurrentUser,addCard,editing,setEditing,currentUser,editCard}) => {
    const history = useHistory()
    return (
        <div className="formPage">
            <h2>{editing?'Edit contact':'Add contact'}</h2>
            
            <form className="formPage__form">
                    <label>Name:</label>
                    <input onChange={(e)=>setCurrentUser(currentUser,[currentUser.name=e.target.value])} placeholder={currentUser.name} ></input>
                    <label>Email:</label>
                    <input onChange={(e)=>setCurrentUser(currentUser,[currentUser.email=e.target.value])} placeholder={currentUser.email} ></input>
                    <label>Image url:</label>
                    <input onChange={(e)=>setCurrentUser(currentUser,[currentUser.img=e.target.value])} placeholder={currentUser.img} ></input>
                    <button type="submit" onClick={(e)=>{if(currentUser.name.trim() && currentUser.email.trim() && currentUser.img.trim()!==''){
                        if(!editing){
                            addCard([{
                                name: currentUser.name,
                                email: currentUser.email,
                                img: currentUser.img,
                                id: Math.random()
                            }])
                            e.preventDefault()
                            history.push('/contact-list')} 
                        else {
                            editCard({
                                name: currentUser.name,
                                email: currentUser.email,
                                img: currentUser.img,
                                id: currentUser.id
                                })
                            setEditing(false)
                            e.preventDefault()
                            history.push('/contact-list')
                        }
                    } else {
                            alert('Please, fill all fields')
                        }}}>
                    {editing?'Save':'Add'}</button>                             
                </form>
        </div>
    )
}
export default Form