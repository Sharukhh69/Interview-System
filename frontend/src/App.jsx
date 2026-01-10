import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SignedIn, SignedOut, SignInButton, UserButton, SignOutButton } from '@clerk/clerk-react'

function App() {

  return (
    <>
      <h1>welcome to the app</h1>
      <SignedOut>
      <SignInButton mode="modal">
        <button>Sign in</button>
      </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton/>
        <SignOutButton/>
      </SignedIn>
    </>
  )
}

export default App
