import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main'
import HomePage from '../Pages/Home/HomePage/HomePage'
import Contact from '../Pages/Contact/Contact'
import DemoTests from '../Pages/Home/DemoTest/DemoTests'
import Login from '../Pages/Authentication/Login/Login'
import Registration from '../Pages/Authentication/Registration/Registration'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/demo-test',
        element: <DemoTests />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signUp',
    element: <Registration/>
  }
])

export default router
