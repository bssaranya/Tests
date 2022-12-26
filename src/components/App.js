import React, { useEffect } from 'react'
import { decrpt, encrypt } from '../utils/passwordHashing'
import SignupForm from './SignupForm'

const App = () => {
    // console.log(encrypt('admin'));
   
  return (
    <div><SignupForm /></div>
  )
}

export default App