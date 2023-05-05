import {useState} from 'react';
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router';

import ServerApi from '../serverApi/axios';

const registerUrl = 'api/v1/auth/register';




const Register = () => {
    const navigate = useNavigate();

    const [registerUser, setRegisterUser] = useState({
        firstName : "",
        lastName: "",
        username: "",
        password: "",
        location : "",
    });

    const [errMsg, setErrMsg] = useState(null);

    const handleChange = (e) => {
        setRegisterUser({ ...registerUser, [e.target.name]: e.target.value });
    };

    const RegisterSubmit = async (e) => {
        e.preventDefault(); //stops reloading page
        const {firstName, lastName, email, username, password, location} = registerUser;
        const registerUserJson = {
            name: firstName + ' ' + lastName, 
            email,
            username,
            password,
            location
        }
        console.log(registerUserJson)
        
        try {
                await ServerApi.post(
                registerUrl, 
                registerUserJson,
                {withCredentials: true}
                )  

            setRegisterUser({ name: '', email: '', password: '', location: "" });
            navigate("/");

        } 
            
            catch (error) {
            setErrMsg(error.response.data.msg)
            console.log(error);
        }
        
    };



    
    return (
    <div className='p-4 flex flex-col justify-center items-center' >            
    <h2 className='font-bold text-2xl mb-8 text-center mt-4'>Sign up</h2>
            <form onSubmit={RegisterSubmit} className='flex flex-col justify-center items-center gap-12 max-w-[900px]'>
                <div className='flex flex-row space-x-6 w-[95%] justify-center'>
                    <div>
                        <span className=' font-light '>First Name</span>
                        <input
                                type='name'
                                name = 'firstName'
                                className='border-2  border-black w-full  px-4 py-2' 
                                onChange={handleChange}
                                />
                    </div>

                    <div>
                        <span className=' font-light '>Second Name</span>
                        <input
                                type='lastName'
                                name = 'lastName'
                                className='border-2  border-black w-full  px-4 py-2' 
                                onChange={handleChange}
                                />
                    </div>



                </div>


                    <div className='w-[95%]'>
                        <span className=' font-light '>Location</span>
                        <input
                                type='location'
                                name = 'location'
                                className='border-2  border-black w-full  px-4 py-2' 
                                onChange={handleChange}
                                />
                    </div>

                
                <div className='w-[95%]'>
                    <span className=' font-light '>Email</span>
                    <input
                        type='email'
                        name = 'email'
                        className='border-2  border-black w-full  px-4 py-2' 
                        onChange={handleChange}
                        />
                </div>
                <div className='w-[95%]'>
                    <span className=' font-light '>Username</span>
                    <input
                        type='username'
                        name = 'username'
                        className='border-2  border-black w-full  px-4 py-2' 
                        onChange={handleChange}
                        />
                </div>

                <div className='w-[95%]'>
                    <span className=' font-light '>Password</span>
                    <input
                        type='password'
                        name = 'password'
                        className='border-2  border-black w-full  px-4 py-2' 
                        onChange={handleChange}
                        />
                </div>

                <button className=' bg-black text-lg  py-2 font-bold w-[95%] text-white'>Register</button>

            </form>

            <p className='mt-8 text-blue-600'>Already have an account?</p>
            <Link className=' border-2 border-black text-lg text-center  py-2 font-bold w-[95%]  text-black mt-1' to ='/login'><button>Login</button></Link>

    </div>
    )
}

export default Register