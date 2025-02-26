import { FcTodoList } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { SiNewyorktimes } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import Button from "../Components/button";

const mainbar = [
    {
        component:<Button title='Sign up'/>,
        id:1,
        path:'/signUp'
    },
    {
        component:<Button title='Sign in'/>,
        id:2,
        path:'/signIn'
    },
    
]

function LandingPage() {
  return (
    <>
        <div className="flex items-center justify-between  mx-auto mt-10 mb-14 bg-red-900 ">
            <div className="text-4xl">
                <FcTodoList/>
            </div>

            <div className="hidden sm:flex sm:items-center sm:gap-4">
                {
                    mainbar.map(item =>(
                        <div key={item.id} >
                            <div>
                                <NavLink to={item.path} >{item.component}</NavLink>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="block text-4xl items-center sm:hidden">
                <MdMenu />
            </div>
        </div>
        <div className='text-center p-3  bg-yellow-900'>
            <h1 className='text-white  mt-0  text-[25px] sm:text-4xl pr-8 pl-8 lg:pr-14 lg:pl-14 bg-purple-700'>Easy Task 
                Managment  <span className='text-red-500 '>anytime</span>
            </h1>
            <p className='text-[17px] mt-5 sm:text-[19px]'>Manage all your projects in one place with your team and increase your productivity.</p>
        </div>
        <div className='flex flex-col align-center gap-2.5 sm:flex-row sm:items-center sm:justify-center'>
            <div>
                <Button title='Request a demo'/>
            </div>
            <div>
                <Button title='Get Started'/>
            </div>
        </div>
        <div>
            <h2 className='text-[18px] mt-5'>Join millions of users in the world </h2>
            <div className='flex items-center gap-8 justify-center mt-4 text-2xl'>
                <SiNewyorktimes />
                <RiNetflixFill />
                <FaAmazon />
                <FaGoogle />
            </div>
        </div>
    </>
  )
}

export default LandingPage