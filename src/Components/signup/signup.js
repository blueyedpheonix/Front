import React from 'react'

export default function Signup({setUser, }) {
      
        const [name , setName] = React.useState('')
        const [age , setAge] = React.useState('')
        const [nameError , setNameError] = React.useState(false)
        const [ageError , setAgeError] = React.useState(false)

        const nameImput = React.ref()
        const ageImput = React.ref()

        const styleName = {
            border: nameError ? '1px solid red' : '1px solid gray'
        }
        
        const styleAge = {
            border: ageError ? '1px solid red' : '1px solid gray'
        }

        function handleClick() {
            if(name === ''){
                setNameError(true)
                nameImput.current.focus()
                return
            }

            if(age === ''){
                setAgeError(true)
                ageImput.current.focus()
                return
            }

            setUser({name, age, })
        }

        return (
            <div>
                <input 
                  ref = {nameImput}
                  style={styleName}
                  type="text"  
                  placeholder="name" 
                  value={name}
                  onChange={event => {
                      setName(event.target.value) 
                      setNameError(false)
                  }}
                  />
                <input 
                  ref = {ageImput}
                  style={styleAge}
                  type="number"  
                  placeholder="age" 
                  min="0" 
                  max="0" 
                  value={age}
                  onChange={event =>{
                  setAge(event.target.value) 
                  setAgeError(false)
                  }}
                  />
                <button 
                  onClick={handleClick}
                >Sign Up</button>
            </div>
        )
}
