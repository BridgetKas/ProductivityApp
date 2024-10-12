import './App.css'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import LayoutPage from './layOut/layoutPage';
import Board from './Components/Board/Board';
import SettingsComponent from './Components/Settingsf/Settings';
import Home from './Components/Home/home'




const router = createBrowserRouter([
  {
    path:"/",
    element:<LayoutPage/>,
    errorElement:<h1>Ohh Sorry Try Again</h1>,
    children: [
      {
        index: true,
        element:<Home/>,
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
        path:'exit',
        element:'four'
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


