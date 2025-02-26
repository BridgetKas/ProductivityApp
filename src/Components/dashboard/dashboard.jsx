import TodoPage from "../BarChart/stat"
import ProjectSummary from "./projectSummary"
import { useEffect, useState} from "react"
import { useNavigate } from "react-router";

import * as jose from 'jose'



function DashBoard() {
  const [error,setError] = useState('')
  const navigate = useNavigate()
   useEffect(() =>{
    async function jwtToken() {
      const jwtToken = JSON.parse(localStorage.getItem('JWTTOKEN'))
      const secret = import.meta.env.VITE_SECRET
      const secretJWTA = new TextEncoder().encode(secret)
      const { payload, protectedHeader} = await jose.jwtVerify(jwtToken, secretJWTA,)
      const timeNow = parseInt(new Date().valueOf()/1000)

      try {
        if(timeNow > payload.exp) {
          navigate('./signIn')
        }else if(!payload || !protectedHeader) {
          navigate('./signIn')
        }
      }catch(error) {
        console.log(error)
        setError('Invalid password or email')
      }
    }
    jwtToken()
  },[navigate])


  return (

    <div className="w-[95%] mx-auto my-12">
        <div className="flex items-center justify-between p-2.5">
            <p className="mx-0 my-1.5 text-xl text-white">Dashboard</p>
            <div className ="text-white text-[22px]"><ion-icon name="notifications-outline"></ion-icon></div>
        </div>
        <ProjectSummary />
        <TodoPage/>
        {error && <alert>{error}</alert>}
    </div>
  )
}

export default DashBoard