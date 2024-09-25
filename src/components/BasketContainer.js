import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import {useNavigation} from '@react-navigation/native'
import { selectBasketItems, selectBasketTotal } from '../slices/basketSlice'
import { TouchableOpacity } from 'react-native'
import Currency from "react-currency-formatter";

const BasketContainer = () => {
    const items = useSelector(selectBasketItems);
    const basektTotalPrice = useSelector(selectBasketTotal)
    const navigation = useNavigation()
    if (items.length === 0)
     return null 
  return (
    <View className="absolute bootom-14 w-full z-50">
        <TouchableOpacity onPress={()=> navigation.navigate("Basket")} className="flex-row bg-[#00ccbb" p-4 rounded-lg shadow-lg items-center space-x-1 mx-5 >
<Text  className="text-white font-extrabold text-xl  rounded-md bg-[#01a296] py-1 px-2 ">
  {items.length}
</Text>
<Text className="flex-1 text-white font-extrabold text-center"> View Basket </Text>
<Text> <Currency quantity= {basektTotalPrice} currency="bd"/> </Text>
        </TouchableOpacity>
      <Text>BasketContainer</Text>
    </View>
  )
}

export default BasketContainer