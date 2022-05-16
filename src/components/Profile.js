import React, { useState } from 'react'

const Profile = () => {
    var [name,setName]=useState("")

    const changeName=()=>{
        setName(
            name="tom"
        )
    

    }

       

  return (
    <div>Logged in as {name}
    <button onClick={changeName} className='btn btn-info'> LOGIN</button>
    </div>
  )
}

export default Profile