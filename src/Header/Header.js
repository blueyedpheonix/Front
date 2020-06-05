import React from 'react'
import Center from '../Components/Center/Center'

export default function Header({user, }) {
        
        return (
            <div>
                <Center>
                    <h1>
                        {`Hello ${!!user ? user.name : 'guest, please sign up'}`}
                    </h1>
                </Center>
            </div>
        )
}
