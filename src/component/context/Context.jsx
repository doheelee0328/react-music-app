import { useState, createContext, useContext } from 'react'

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState('')

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {/* name of the context and this providees with the value that are states */}
      {children}
      {user === '' && <p>Please Enter To Get In!</p>}
    </AuthContext.Provider>
  )
}

export const useAuthentication = () => useContext(AuthContext)
