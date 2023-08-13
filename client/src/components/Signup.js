import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Signup = () => {
    const Navigate = useNavigate();
    const [user, setUser] = useState({
        name: "", email: "", phone: "", work: "", password: "", cpassword: ""
    })
    const handleInputs = (e) => {
        // console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUser({ ...user, [name]: value })
    }

    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, phone, work, password, cpassword } = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    name, email, phone, work, password, cpassword
                }
            )
        })

        const data = await res.json();
        if (data.status === 422 || !data) {
            window.alert("Invalid Registration")
            console.log("error");
        } else {
            window.alert("Registration SuccessFull")
            console.log("success");
            const sendSubmit = () => {
                Navigate("/signin");
            };
            sendSubmit();

        }

    }
    return (
        <>
            <section className='signup'>
                <div className='container mt-5'>
                    <div className='signup-content'>
                        <div className='signup-form'>
                            <h2 className='form-title'>Sign Up</h2>
                            <form method='POST' className='register-form' onSubmit={PostData} id='register-form'>
                                <div className='form-group'>
                                    <label htmlFor="name" className='mr-3'>
                                        <i className="zmdi zmdi-account material-icons-name"></i>

                                    </label>
                                    <input type='text' name='name' id='name' autoComplete='off' placeholder='Your Name' value={user.name} onChange={handleInputs} />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor="email" className='mr-3'>
                                        <i className="zmdi zmdi-email material-icons-name"></i>

                                    </label>
                                    <input type='email' name='email' id='email' autoComplete='off' placeholder='Your Email' value={user.email} onChange={handleInputs} />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor="phone" className='mr-3'>
                                        <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>

                                    </label>
                                    <input type='mobile' name='phone' id='phone' autoComplete='off' placeholder='Your Phone' value={user.phone} onChange={handleInputs} />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor="work" className='mr-3'>
                                        <i className="zmdi zmdi-slideshow material-icons-name"></i>

                                    </label>
                                    <input type='text' name='work' id='work' autoComplete='off' placeholder='Your Profession' value={user.work} onChange={handleInputs} />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor="password" className='mr-3'>
                                        <i className="zmdi zmdi-lock material-icons-name"></i>

                                    </label>
                                    <input type='password' name='password' id='password' autoComplete='off' placeholder='Your Password' value={user.password} onChange={handleInputs} />
                                </div>

                                <div className='form-group'>
                                    <label htmlFor="cpassword" className='mr-3'>
                                        <i className="zmdi zmdi-lock material-icons-name"></i>

                                    </label>
                                    <input type='password' name='cpassword' id='cpassword' autoComplete='off' placeholder='Confirm Password' value={user.cpassword} onChange={handleInputs} />
                                </div>
                                <div className='form-group form-button'>
                                    {/* <input type='submit' name='signup' id='signup' className='form-submit' value='register'
                                onClick={PostData}/> */}
                                    <button type='submit' name='signup' value='register'  >register</button>
                                </div>
                            </form>
                            <NavLink to='/login'>I am Already Registered</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup