import { Route, Routes } from 'react-router-dom'
import UserDisplay from './Components/user'
import UpdateUser from './Components/updateUser'

function App() {
  return (
    <>
        <Routes>
          <Route Component={UserDisplay} path='/'/>
          <Route Component={UpdateUser} path='/update_user'/>
        </Routes>
    </>
  )
}

export default App