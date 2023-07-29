'use client'

import { useRouter } from 'next/navigation'
import { ReactNode, createContext, useEffect, useState } from "react"

type UserType = {name: string, token: string} | null

type UserSetFunction = React.Dispatch<React.SetStateAction<UserType>>

type UserContextType = [UserType, UserSetFunction]

const UserContext = createContext<UserContextType>([null, () => {}])

interface UserProviderProps {
    children: ReactNode
}

const UserProvider: React.FC<UserProviderProps> = ({children}) => {
    const [user, setUser] = useState<{name: string} | null>(null);
    const router = useRouter()

    useEffect(()=> {
        const loggedInUser = JSON.parse(localStorage.getItem('user') || '{}');
        console.log(loggedInUser)
        if(loggedInUser){
            router.push('/login')
        }else{
            router.push('/login')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <UserContext.Provider value={[user, setUser]}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider