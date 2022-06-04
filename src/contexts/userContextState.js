import { createContext } from 'react'

const UserContext = createContext();

const userState = (props) => {

    const [user, setUser] = useState({
        authToken: null
    })
    
    return {
        <UserContext.Provider value={state}>
            {props.children}
        </UserContext.Provider>
    }
}
