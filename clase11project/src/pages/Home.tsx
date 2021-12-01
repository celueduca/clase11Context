import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const Home = () => {
    const { user } = useContext(AuthContext);

    return (
        <>
            {user ?
                (<h1>{'Este es el home ' + user.name}</h1>
                ) :
                <h1>{'Este es el home '}</h1>
            }
        </>
    )
}

export default Home
