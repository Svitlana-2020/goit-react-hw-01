// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../App.css'
import ProfileCard from './Profile/Profile'
import userData from '../userdata.json'
import Friendslist from './FriendList/FriendsList'
import friends from '../friendslist.json'
import TransactionHistory from './TransactionHistory/TransactionHistory'
import items from '../transactions.json'

export default function App () {
  return (
    <>
<ProfileCard user={userData} />
<Friendslist friends={friends} />
<TransactionHistory items={items}/>
    </>
  )
}


