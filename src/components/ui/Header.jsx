import { useNavigate } from "react-router-dom"
import { useUserContext } from "../../hooks/UserProvider"
import logo from '../../assets/logo.png'

function Header() {

  const navigate = useNavigate()
  const { dataUser, setDataUser } = useUserContext()

  function logout() {
    window.localStorage.clear('userLogged')
    setDataUser('')
    navigate('/')
  }

  return (
    <div className="header">
      <div className="py-4 px-2 flex justify-between items-center text-white w-4/5">
        <a href="#">
          <h1>
            <img src={logo} className="w-[192px]"></img>
          </h1>
        </a>
        <button className="py-1 px-5 bg-gray-500 text-white rounded-md hover:bg-red-500 text- transition-all duration-100 ease-linear" onClick={() => logout()}>Salir</button>
      </div>
    </div>
  )
}

export default Header