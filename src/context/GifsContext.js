import React, {useState} from 'react'

const Context = React.createContext({})

export function GifsContextProvider ({children}) {
  const [gifs, setGifs] = useState([])

  return <Context.Provider value={{gifs, setGifs}}>
    {children}
  </Context.Provider>
}

export default Context