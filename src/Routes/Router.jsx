import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main'
import HomePage from '../Pages/Home/HomePage/HomePage'

import Contact from '../Pages/Contact/Contact'
import DemoTests from '../Pages/Home/DemoTest/DemoTests'

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
        element: <Contact></Contact>
      }
    ]
  }
])

export default router
