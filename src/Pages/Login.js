import React, { useRef, useState } from "react";
import Loader from "../Components/Loader";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../js/Firebase";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const auth = getAuth();

    if (!email && !password) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          console.log(err.message);
          setError(err.message);
          setIsLoading(false);
        });
    }
  };

  //   const signin = ()=>{
  //     setIsLoading(true)
  //     setTimeout(()=>{
  // navigate("/")
  //     }, 3000)
  //   }

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="details">
        <input
          ref={emailRef}
          type="email"
          placeholder="Enter your email address"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Enter your password"
        />
        {error && (
          <p className="error">
            {error === "Firebase: Error (auth/invalid-login-credentials)." &&
              "Login failed! Please check your email address and password, and then try again."}
              {error === "Firebase: Error (auth/network-request-failed)." && "Network Error. Please check your internet connection."}
          </p>
        )}
        <button>Log in</button>
        <div>
          <p>Don't have an account?</p>
          <Link to="/Register">Register</Link>
        </div>
      </form>
      {isLoading && <Loader />}
    </div>
  );
}

export default Login;
