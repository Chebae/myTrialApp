import React, { useRef, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Loader from '../Components/Loader'
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"
import { app } from '../js/Firebase'
import { collection, doc, getFirestore, setDoc } from 'firebase/firestore'

function Register() {
  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
const [error, setError] = useState('')

  const handleSubmit = (e)=>{
e.preventDefault()
const email = emailRef.current.value
const password = passwordRef.current.value
const name = nameRef.current.value

const auth = getAuth()
const db = getFirestore(app)

if(!email && !password && !name){
  setIsLoading(false)
}

else{
  setIsLoading(true);
createUserWithEmailAndPassword(auth, email, password, name).then((userCredential)=>{
const user = userCredential.user.uid
const newUser = doc(collection(db, "Users"))
setDoc(newUser, {
  userId: user, 
  userName: name,
  userEmail: email,
})
.then(()=>{
  navigate("/")
}).catch((err)=>{

})
}).catch((err)=>{
  console.log(err.message)
  setError(err.message);
  setIsLoading(false);
})
}

  }
//   const create = ()=>{
//     setIsLoading(true)
//     setTimeout(()=>{
// navigate("/")
//     }, 3000)
//   }

  return (
    <div className='register'>
        <form onSubmit={handleSubmit} className='details'>
            <input ref={nameRef} type="text"  placeholder='Enter your name'/>
            <input ref={emailRef} type="email" placeholder='Enter your email address'/>
            <input ref={passwordRef} type="password" placeholder='Set your password'/>

            {error && (
          <p className='error'> 
         
              {error === "Firebase: Error (auth/network-request-failed)." && "Network Error. Please check your internet connection."}
              {error === "Firebase: Error (auth/email-already-in-use)." && "Email is already in use"}
          </p>
        )}
            <button>Create account</button>
            <div>
                <p>Already have an account?</p>
                <Link to="/Login">Log in</Link>
            </div>
           
        </form>
        {isLoading && <Loader/>}
    </div>
  )
}

export default Register