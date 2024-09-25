import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const Categories = () => {
  const [categories,setCategories] = useState([]);
  useEffect (()=>{
    fetch('').then((data)=>console.log(data))

  },[]);
  return (
    <View>
      <Text>Categories</Text>
    </View>
  )
}

export default Categories