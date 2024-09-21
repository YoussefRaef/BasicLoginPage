import React from 'react'

export default function Login_form(props) {
    const{setNewEmail,setNewPassword,handleSignIn,newEmail
        ,newPassword
    }=props
  return (
    <>
       
      
      <div className=' bg-slate-400 flex flex-col justify-center 
      items-center border-4 border-blue-400 p-5 rounded-lg mx-auto'
           style={{ width: '300px' }}>

        <input onChange={e=>setNewEmail(e.target.value)} value={newEmail}
        type='text'
          placeholder='Type your email..'
          className='m-3 w-full border-2 border-black
           text-black rounded-lg p-2'/>
        
      
        <input onChange={e=>setNewPassword(e.target.value)} value={newPassword} 
        type='password'
          placeholder='Type your password..'
          className='m-3 w-full border-2 border-black
           text-black rounded-lg p-2'/>
         
         <button onClick={handleSignIn} className='bold hover:text-blue-200'>Sign in</button>

      </div>
    </>
  )
}
