import React from 'react'
import {useAuthStore} from "../store/useAuthStore.js"

const HomePage = () => {
  const {userAuth} = useAuthStore()
  return <div>HomePage</div>
}

export default HomePage