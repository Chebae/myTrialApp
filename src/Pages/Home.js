import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import Loader from '../Components/Loader'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import Navbar from '../Components/Navbar'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import { app } from '../js/Firebase'
import HandleSignOut from '../Components/Modal'



function Home() {
  const [show, setShow] = useState(false);

 
  const handleShow = () => setShow(true);
 
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState("")
  const navigate = useNavigate()

const auth = getAuth()
const db = getFirestore(app)


document.title = "Java Script"
useEffect(function(){
  document.title = user
},[user])
useEffect(()=>{
  onAuthStateChanged(auth, (user)=>{
    if(!user){
      navigate("/Login")
    }

    else{
      const fetchUser = async ()=>{
        const querryDocument = query(
          collection(db, "Users"),
          where("userId", "==", user.uid)
        )
        const querrySnapshot = await getDocs(querryDocument)
        querrySnapshot.forEach((userDoc)=>{
          const username = userDoc.data().userName
          setUser(username)
        })

      }
      fetchUser()
    }
  })
})


  const signout = ()=>{
    const auth = getAuth()
    setTimeout(()=>{

      setIsLoading(true)
      signOut(auth).then(()=>{
        document.title = "Firebase App"
        navigate("/Login")
      })
    }, 3000)
//     setTimeout(()=>{
// navigate("/Login")
//     }, 3000)
  }
  return (
    <div className='home'>
        <Navbar user = {user}/>
      
        <div className='main'>
            <h1>WELCOME HOME <span>{user}</span></h1>
            <button onClick={handleShow}>Log out</button>
        {isLoading && <Loader/>}
        </div>
{show && <HandleSignOut signout = {signout} handleShow = {handleShow} show = {show} setShow = {setShow}/> }




    
       
    </div>
  
  )
}

export default Home