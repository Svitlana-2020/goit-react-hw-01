// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../App.css'
import ProfileCard from './ProfileCard'
import userData from '../userdata.json'


export default function App () {
  return (
    <>
<ProfileCard user={userData} />
    </>
  )
}


