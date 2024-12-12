import { useState } from 'react';
import Social from '../Components/social'
import { IoMdEye ,} from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaTwitter  } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {validateEmail,validatePassword,validatePhone ,encryptPassword} from '../utilities/validation'
import {db} from '../../db'

function SignUpPage() {
  const [country,setCountry] = useState('country 1')
  const [error,setError] = useState('')
  const [userData, setUserData] = useState({
    email:'',
    password:'',
    phoneNumber:'',
  })
  const navigate = useNavigate();

  function handleCountryChange(e) {
    setCountry(e.target.value)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
 
  async function handleSubmit(e) {
    e.preventDefault()
    if(validatePhone(userData.phoneNumber)) {
      setError(validatePhone(userData.phoneNumber))
      return
    }

    if(validateEmail(userData.email)){
      setError(validateEmail(userData.email))
      return
    }

    if(validatePassword(userData.password)) {
      setError(validatePassword(userData.password) )
      return
    }

    try {
      const encryptedPassword = encryptPassword(userData.password);
      const updatedUserData = { ...userData, password: encryptedPassword ,country:country};
      // Add the new friend!
      const id = await db.userDetails.add(updatedUserData);
      console.log('id', id)
      alert("Data stored successfully!");
      setUserData({ email: "", password: "", phoneNumber: ""});
      setError('')
      navigate('/signIn')
    } catch (error) {
       if(error.name === 'ConstraintError'){
        setError(`Failed to add ${userData.email}: Account already exists`)
       }else {
        setError('Invalid email or password.Please try again')
      }
    }
  }
  
  return (
    <>
      <div  className=" sm:flex sm:flex-row  sm:w-[80%] sm:mx-auto sm:mt-8 sm:gap-[26px]">
        <div className="hidden md:w-[45%] md:block md:self-center" >
          <img src='/greenChair.png'/>
        </div>
        <div className='w-[80%] mx-auto mt-[40px] md:self-stretch md:w-[50%] md:m-0 }'>
          <form  onSubmit={(e) => handleSubmit(e)} >
            <h1 className="text-center font-semibold text-2xl mb-[15px]">Create an account</h1>
            <select className="w-full p-2.5 mb-2 rounded-lg border border-gray-400 bg-transparent mt-2 text-black" value={country} onChange={(event) => handleCountryChange(event)} >
              <option>Country 1</option>
              <option>Country 2</option>
              <option>Country 3</option>
              <option>Country 4</option>
            </select>
            <input 
              type='tel' 
              name='phoneNumber' 
              className=" w-full mb-3 p-2 rounded-lg border border-gray-400 text-black "
              placeholder="Phone number"
              value={userData.phoneNumber}
              onChange={handleChange}
              required
            />
            <input 
              type ='email' 
              name='email'  
              placeholder='Email' 
              className="input w-full mb-3 p-2 rounded-lg border border-gray-400" 
              value={userData.email} 
              onChange={handleChange}
              required
            />

            <div className="relative">
              <input 
                type ='password' 
                name='password'  
                placeholder='Password' 
                className="w-full mb-3 p-2 rounded-lg border border-gray-400 text-black"
                value={userData.password} 
                onChange={handleChange}
                required
              />
              <div className="absolute top-3 right-2">
                <IoMdEye />
              </div>
            </div>
            <button 
              type='submit' 
              className="w-full bg-black text-white p-2.5 rounded-lg mb-2">Create account
            </button>
            {error && <p className="text-center  text-[16px] text-red-600">{error}</p>}
          </form>
          <div className="w-full  text-center my-2">.....................or.......................</div>
          <div className="text-center my-2">
            <p>
              Already have an account  
              <a className="no-underline text-red-600 hover:cursor-pointer ml-1">
                Sign in 
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


export default SignUpPage