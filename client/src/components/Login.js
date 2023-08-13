
import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import img2 from '../images/Untitled design.png'
import { NavLink ,useNavigate} from 'react-router-dom'
const Login = () => {
  const Navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const loginUser = async (e) => {
    e.preventDefaulit();
    const res = await fetch("/signin", {
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          email, password
        }
      )
    });
     
     const data = await res.json();
     if (data.status === 422 || !data) {
         window.alert("Invalid credintioal")
         console.log("error");
     } else {
         window.alert(" login SuccessFull")
         console.log("success");
         Navigate.push("/")

     }
  }

  return (
    <>
      <section className='signin'>
        <div className='container mt-5'>
          <div className='signin-content'>
            <div className='signin-image'>
              <figure>
                <img src={img2} alt='signin' />
              </figure>
              <NavLink to="/Signup" className="signin-image-link">Create an acount</NavLink>
            </div>
            <div className='signin-from'>
              <h2 className="form-tittle">Login</h2>
              <form method="POST" className='Login-from' id='Login-from'>

                <div className='form-group'>
                  <label htmlFor='email'>
                    <i class="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input type="email" name='email' id="email" autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="your email" />

                </div>

                <div className='form-group'>
                  <label htmlFor='password'>
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input type="password" name='password' id="password" autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="your password" />

                </div>

                <div className='from-group form-button'>
                  <input type="submit" name='signin' id='signin' className='from-submit' value="Login" onClick={loginUser} />
                </div>
              </form>
            </div>


          </div>
        </div>
      </section>

    </>
  )
}

export default Login
