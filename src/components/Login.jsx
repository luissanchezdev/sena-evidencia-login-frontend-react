import { useEffect, useState, useRef } from 'react'
import Notification from './Notification'
//import db from '../db/database.json'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../hooks/UserProvider'
import logo from '../assets/logo.png'
import Footer from './Footer'
import axios from 'axios'

function Login() {
  const navigate = useNavigate()
  const {dataUser, setDataUser} = useUserContext()

  // Hooks para manejar los estados de los inputs y el mensaje de notificación
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [type, setType] = useState('');
  const inputRef = useRef()

  useEffect(()=>{
    /* inputRef.current.addEventListener('input', () => {
      inputRef.current.validity.setPatternMismatch('No coinciden con el patrón')
    }) */
   const inputUsername = inputRef.current

   const handleInput = () => {
    if(inputUsername.validity.patternMismatch){
      inputUsername.setCustomValidity('El valor introducido no es válido. No se permiten caracteres especiales')
    } else {
      inputUsername.setCustomValidity('')
    }
   } 

   inputUsername.addEventListener('input', handleInput)

   return () => inputUsername.removeEventListener('input', handleInput)

   //return inputUsername.removeEventListener('input' )
  }, [])

  // Función para cambiár el estado tan pronto se cambia el valor del input username
  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  // Función para cambiár el estado tan pronto se cambia el valor del input password
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  // Función para manejar el envió del formulario. Al dar click en el botón "Acceder", se actualizará el estado de la variable message, y este mensaje se pasara al componente Notificación el cuál lo mostrará
  const handleSubmit = async (e) => {
    e.preventDefault()
    // const users = db.usuarios
   
      
    //const userForAuth = users.filter((user) => user.username === username)
    await axios.post('http://localhost:4000/login',{
      username,
      password
    })
    .then(response => {
      const userForAuth = response.data.user
      localStorage.setItem('userLogged', JSON.stringify(userForAuth))
      setMessage('Ingresando...')
      setType('success')
      setDataUser(userForAuth)
      setTimeout(() => {
        setMessage('')
        navigate('/dashboard')
      },1000)
    })
    .catch((error) => {
      console.log(error.response)
      if(error.code === 'ERR_BAD_REQUEST'){
        if(error.response.data.message){
          setType('error')
          setMessage(error.response.data.message)
          setTimeout(() => {
            setMessage('')
          },5000)
          return
        }

        if(Array.isArray(error.response.data))
          setType('error')
          setMessage('El nombre de usuario no debe tener caracteres especiales')
          setTimeout(() => {
            setMessage('')
          },5000)
          return 
      }

      setMessage('Error en el servidor')
      setTimeout(() => {
        setMessage('')
      },5000)
      return 

      
    })

  
    
  }

  return (
    <div className='layout'>
      <main className='main'>
        <div className='login-card'>
          <div className='flex justify-center'>
            <a href="#">
              <h1>
                <img src={logo} className="w-4/5 mx-auto"></img>
              </h1>
            </a>
          </div>
          <h2 className='h2'>Inicio de sesión</h2>
          { /* En el onSubmit se pasa el evento a la función handleSubmit */ }
          <form id='login-form' className='login-form' onSubmit={(e) => handleSubmit(e)}>
            <div className='group-input'>
              <label htmlFor='username' className='label' >
                Nombre de usuario
              </label>
              { /* Con el onChange podemos verficar los cambios en el input, para esto pasamos el evento a la función handleUsername  */ }
              <input onChange={(e) => handleUsername(e)} type='text' name='username' pattern='^[A-Za-z0-9]+$' ref={inputRef} id='username' placeholder='aprendiz' className='input' value={username} required/>
            </div> 
            <div className='group-input'>
              <label htmlFor='password' className='label'>Contraseña</label>
              <input type='password' name="password" id='password' className='input' value={password} required onChange={(e) => handlePassword(e)}/>
            </div>
            <button className='btn-send'>Acceder</button>
            { /* Al componente Notificación se le pasa la variable message como prop */ }
            <Notification message={message} type={type}/>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  ) 
}

export default Login