import { useUserContext } from "../hooks/UserProvider"
import { useNavigate } from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute"
import Layout from "./Layout"

function Panel() {

  const { dataUser } = useUserContext()
  const navigate = useNavigate()
  const userLogged = JSON.parse(localStorage.getItem('userLogged'))
  //console.log({ userLogged })
  return (
    <Layout>
      <ProtectedRoute isAllowed={userLogged} redirectTo={'/'}>
        <div className="panel">
          <div className='flex justify-center items-center flex-grow text-2xl'>
            <h2 className="text-secondary">Bienvenido {dataUser.username}</h2>
          </div>
        </div>
      </ProtectedRoute>      
    </Layout>
  )
}

export default Panel