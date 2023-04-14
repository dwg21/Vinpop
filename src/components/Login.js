import {useState} from 'react';
import { Navigate, useNavigate } from 'react-router';

import ServerApi from '../serverApi/axios';
import { Link } from 'react-router-dom';
const loginUrl = 'api/v1/auth/login';

const Login = () => {
    const navigate = useNavigate();

    const [loginUser, setLoginUser] = useState({
        name : "",
        password: ""
    });

    const [errMsg, setErrMsg] = useState(null);




    const loginSubmit = async (e) => {
        e.preventDefault(); //stops reloading page
        const {email, password} = loginUser;
        const loginUserJson = {email, password};
        try {
                await ServerApi.post(
                loginUrl, 
                loginUserJson,
                {withCredentials: true}
                )  

            setLoginUser({ name: '', email: '', password: '' });
            navigate("/home");

        } 
            
            catch (error) {
            setErrMsg(error.response.data.msg)
            console.log({ text: error.response.data.msg });
        }
        
    };


    // logs in with guest credentials
    const guestAccess = async (e) => {
        e.preventDefault(); //stops reloading page
        const loginUser = {
            "email": "john@gmail.com",
            "password": "secret"
        }
        try {
                await ServerApi.post(
                LOGIN_URL, 
                loginUser,
                {headers: {'Content-Type': 'application/json'}},
                )  

            setValues({ name: '', email: '', password: '' });
            navigate("/home");

        } 
            
            catch (error) {
            setErrMsg(error.response.data.msg)

        }
    };


    const handleChange = (e) => {
        setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
    };





    return (
    <div className='p-4 flex justify-center h-[80vh]  '>
        <div className='flex flex-col justify-center w-full max-w-[650px] px-5'>
            <h2 className='font-bold text-2xl mb-5'>Log in</h2>
            <form className='flex flex-col gap-4 justify-center'>
                <input
                    type='email'
                    name = 'email'
                    placeholder='Email Address' 
                    className='border-2  border-black  px-4 py-2' 
                    value = {loginUser.email}
                    onChange={handleChange}
                    />
                <input
                    type='password' 
                    name = 'password'
                    placeholder='Password' 
                    className='border-2 border-black w-full px-4 py-2' 
                    value = {loginUser.password}
                    onChange={handleChange}
                    />
                <p className=' text-right text-blue-700'>Forgot password?</p>
                <button onClick={loginSubmit} className=' bg-black text-lg  py-2 font-bold w-full text-white'>Log in</button>
                <p className=' text-center'>Dont have an account? <Link to = '/register'><span className='text-blue-700'> Sign up</span></Link> </p>
            </form>
        </div>
    </div>
    )
}

export default Login