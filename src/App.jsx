import './App.css'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import LayoutPage from './layOut/layoutPage';
import Board from './Components/Board/Board';



const router = createBrowserRouter([
  {
    path:"/",
    element:<LayoutPage/>,
    errorElement:<h1>Ohh Sorry Try Again</h1>,
    children: [
      {
        index: true,
        element: <Board/>,
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


