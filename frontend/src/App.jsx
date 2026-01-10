import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SignedIn, SignedOut, SignInButton, UserButton, SignOutButton } from '@clerk/clerk-react'

/**
 * Root React component that renders the app header and authentication controls.
 *
 * @returns {JSX.Element} The rendered JSX containing a heading and Clerk authentication UI:
 * the modal SignIn button when signed out, and UserButton with SignOutButton when signed in.
 */
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