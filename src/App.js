import React from 'react'
import Header from './Header/Header'
import Signup from './Components/signup/signup'
import Center from './Components/Center/Center'

export default function App() {


    const [user, setUser,] = React.useState(null)

    return (
        <div>
            <Center>
                <Header user={user} />
                {!user && <Signup setUser={setUser} />}
            </Center>
        </div>
    );

}

