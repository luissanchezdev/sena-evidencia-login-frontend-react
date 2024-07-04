import { useContext, createContext, useState } from "react";

const userContext = createContext()

export const useUserContext = () => {
  return useContext(userContext)
}

function UserProvider({ children }) {

  const [dataUser, setDataUser] = useState('')

  return (
    <userContext.Provider value={ {dataUser, setDataUser} }>
      {children}
    </userContext.Provider>
  )
}

export default UserProvider