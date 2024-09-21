import { useState } from 'react'
import Emailreveal from './Emailreveal'
import Login_form from './Login_form'

function App() {
  const [newEmail, setNewEmail] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [reveal, setReveal] = useState(false)

  function handleSignIn(){
    setReveal(!reveal)
  }

  return (
    <div className='h-screen bold bg-gradient-to-r from-black to-blue-200
     sm:text-base ' style={{ paddingTop: '50px' }}>
   <div className='p-2 bold flex justify-center items-center mx-auto' >
        <h1 className='text-3xl'>
          Welcome to <span className='text-blue-600'>Facebook</span>!
        </h1>
      </div>
     {reveal ? <Emailreveal newEmail={newEmail} newPassword={newPassword}/>
     :<Login_form handleSignIn={handleSignIn}
     setNewEmail={setNewEmail}
     setNewPassword={setNewPassword}/>}
    </div>
  )
}

export default App
