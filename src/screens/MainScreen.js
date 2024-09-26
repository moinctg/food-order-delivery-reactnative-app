import { View, Text,Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const MainScreen = () => {
  return (
   <ScrollView>
     <View className="bg-[#B94F9F">
        <Image 
         className="" 
        //  style={styles.tinyLogo}
         source={require('../../assets/time.png')}
         
         />
         <Image
         source={require('../../assets/image.png')}
         />
         <Image
         source={require('../../assets/Indicator.png')}
         />

     </View>
   </ScrollView>
      
  )
}

export default MainScreen