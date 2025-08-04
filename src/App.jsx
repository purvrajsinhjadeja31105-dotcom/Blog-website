import { useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService 

function App() {

  // this is way to access the enviroment variable
  // now when we run this it will give error in the console and will not show anything on the screen
  // This way is used only if we have made the application with "create react app"
  // but we have made with "vite"
  // console.log(process.env.REACT_APP_APPWRITE_URL)

  // we have created file with vite so we will use "import.meta.env."
  // console.log(import.meta.env.VITE_APPWRITE_URL)

  // loading state
  const [loading, setLoading] = useState(true)
  
  // dispatch
  const dispatch = useDispatch()
  

  return (
    <>
      <h1>Mega project of Blog</h1>
    </>
  )
}

export default App
