import './App.css'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import LayoutPage from './layOut/layoutPage';
import Board from './Components/Board/Board';
import SettingsComponent from './Components/Settingsf/Settings';
import DashBoard from './Components/dashboard/dashboard'
import SignInPage from './pages/signin';
import SignUp from './pages/signup';
import LandingPage from './pages/landingPage';


const router = createBrowserRouter([
  {
    path:'/',
    element:<LandingPage/>,
    errorElement:<h1>Try again</h1>
  },
  {
    path:'/signIn',
    element:<SignInPage/>,
    errorElement:<h1>Error encounted try again</h1>
  },
  {
    path:'/signUp',
    element:<SignUp/>
  },
  {
    path:"/dashboard",
    element:<LayoutPage/>,
    errorElement:<h1>Ohh Sorry Try Again</h1>,
    children: [
      {
        index: true,
        element:<DashBoard/>
      },
      {
        path:'tasks',
        element:<Board/>
      },
      {
        path:'settings',
        element:<SettingsComponent/>
      },
      {
        path:'logout',
        element:<LandingPage/>,
      }
      
    ]
  },
])


function App() {
  return (
    <RouterProvider router={router}/>
  )
}


export default App


