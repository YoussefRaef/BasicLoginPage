import React from 'react'

export default function Emailreveal(props) {
    const{newEmail,newPassword}=props
  return (
    <h2 className=' text-xl text-white'>
        Your email is {newEmail} and your password is {newPassword} </h2>
  )
}
