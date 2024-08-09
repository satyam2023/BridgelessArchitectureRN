import React from 'react'
import HomeScreen from '../views/HomeScreen'


const HomeViewModel = () => {

  const data:string[]=["Batched Layout","Min Height","Static Position","Row Position"];

  return (
  <HomeScreen
  {...{
    data
  }}
  />
  )
}

export default HomeViewModel