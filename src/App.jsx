import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Components/shared/Navbar'
import Home from './Components/Home'
import Login from './Components/auth/Login'
import Signup from './Components/auth/Signup'
import Job from './Components/ui/Job'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element:<Home />
  },
  {
    path: '/login',   // URL will be /login
    element:<Login />
  },
  {
    path: '/signup',  // URL will be /signup
    element:<Signup />
  },
  {
    path:"/jobs",  //URL wil be /jobs
    element:<Job />
   },
 
])

function App() {
  return
  (
    <div>
    <RouterProvider router= {appRouter}/>
    </div>
  )
}

export default App;
