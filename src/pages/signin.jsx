import { useState, useEffect} from 'react';
import { useNavigate } from "react-router";
import Social from '../Components/social'
import { IoMdEye ,} from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaTwitter  } from "react-icons/fa";
import { dencryptPassword,  USER_KEY, getSession, } from '../utilities/validation';
import {db} from '../../db'
import * as jose from 'jose'

// const secretKey = 'hustle'


function SignInPage() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('')
    const navigate = useNavigate();


  // Check whether the isLoggedIn flag is equal to true and redirect the user to the dashboard
    useEffect(() => {
      const isLogged = getSession(USER_KEY) 
      const logginDetails = JSON.parse(isLogged)

      if(logginDetails !== null && logginDetails.isLoggedIn){
        navigate("/dashboard")
      }
    },[navigate])

    function handleChange(e) {
        if (e.target.name === 'email'){
          setEmail( e.target.value)
        }else if (e.target.name === 'password') {
          setPassword( e.target.value)
        }
    }

   

    async function handleSubmit(e) {
      e.preventDefault()
      try {
        const userEmailAuthentication = await db.userDetails
        .where("email").equalsIgnoreCase(email)
        .first() 

        if(userEmailAuthentication){
          const decrptPassword = dencryptPassword(userEmailAuthentication.password)
          if(decrptPassword){
            const alg = import.meta.env.VITE_SOME_ALGO
            const secret = import.meta.env.VITE_SECRET

            const secretJWTA = new TextEncoder().encode(secret)
            const jwt = await new jose.SignJWT({ email:userEmailAuthentication.email})
            .setProtectedHeader({ alg })
            .setExpirationTime('2h')
            .sign(secretJWTA)
            
            localStorage.setItem('JWTTOKEN',JSON.stringify(jwt))
            // const { payload, protectedHeader } = await jose.jwtVerify(jwt, secretJWTA,)
            // console.log('header',protectedHeader)
            // console.log('pay',payload)
            navigate("/dashboard")

          }
        }
        // const secretJWT = new TextEncoder().encode('hustle')
        
      }
      catch (error){
        console.log(error)
        setError("Invalid email or password. Please try again."); 
      }
    }

  return (
    <>
    <div className=" sm:flex sm:flex-row sm:w-[80%] sm:mx-auto sm:mt-8 sm:gap-[26px]">
      <div className="hidden md:w-[45%] md:block md:self-center">
        <img src='/greenChair.png'/>
      </div>
      <div className='w-[80%] mx-auto mt-[40px] md:self-stretch md:w-[50%] md:m-0 }'>
            
        <form onSubmit={(e) => handleSubmit(e)}>
          <h1 className="text-center font-semibold text-2xl mb-[15px]">Sign in</h1>
          <input 
            type ='email' 
            name='email'  
            placeholder='Email' 
            className=" w-full mb-3 p-2 rounded-lg border border-gray-400" 
            value={email} 
            onChange={handleChange}
            required
          />

          <div className="relative">
            <input 
              type ='password' 
              name='password'  
              placeholder='Password' 
              className="w-full mb-3 p-2 rounded-lg border border-gray-400 text-black"
              value={password} 
              onChange={handleChange}
              required
            />
            <div className="absolute top-3 right-2">
              <IoMdEye />
            </div>
          </div>
          <button 
            type='submit' 
            className="w-full bg-black text-white p-2.5 rounded-lg mb-1">Sign in
          </button>
          {error && <p className="text-center  text-[16px] text-red-600">{error}</p>}
        </form>
        <div className="w-full  text-center my-3">.....................or.......................</div>
        <div className="text-center my-3">
          <p>
            Don &apos;t have an account  
            <a className="no-underline text-red-600 hover:cursor-pointer ml-1">
              Sign up
            </a>
          </p>
        </div>
          <Social icon={<FcGoogle />} title='Continue with Google'/>
          <Social icon={<FaApple />} title='Continue with Apple'/>
          <Social icon={<FaTwitter />} title='Continue with Twitter'/>
      </div>
    </div>
  </>
  )
}

export default SignInPage