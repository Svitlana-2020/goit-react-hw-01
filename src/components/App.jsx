// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../App.css'
import ProfileCard from './ProfileCard'


const userData = {
  username: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308
  }
};



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
<ProfileCard user={userData} />
    </>
  )
}

export default App
