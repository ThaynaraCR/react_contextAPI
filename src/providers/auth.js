import React, {useState} from "react";


export const Authcontext = React.createContext({})

export const AuthProvider = (props) =>{
   
   const [user, setUser] = useState({
       name: 'thaynara'
   })

    return (
        <Authcontext.Provider value={{user, setUser}}>
            {props.children}
        </Authcontext.Provider>
    )

}

//HOOK 
export const useAuth = () => React.useContext(Authcontext)
