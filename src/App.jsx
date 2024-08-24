import './App.css'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import BoardComponent from './Components/Board/Board';
import LayoutPage from './layOut/layoutPage';



const router = createBrowserRouter([
  {
    path:"/",
    element:<LayoutPage/>,
    errorElement:<h1>Ohh Sorry Try Again</h1>,
    children: [
      {
        index: true,
        element: <BoardComponent/>,
      },
      
    ]
  },
])


function App() {
  return (
    <RouterProvider router={router}/>
  )
}


export default App


