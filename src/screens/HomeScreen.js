import React, { useEffect, useLayoutEffect, useState } from 'react'
import {NavigationContainer} from "@react-navigation/native"
import { StatusBar } from 'expo-status-bar'
import { StyleSheet,Text,View,Image,LogBox,ScrollView,TextInput, SafeAreaView} from 'react-native-web'
import { useNavigation } from 'expo-router'
 
const HomeScreen = () => {
    // state and hooks 
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);
    //  side effect  
     useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:false,
        });
     }, []);
     useEffect(() => {

     })
  return (
    <>
    <SafeAreaView className="bg-white pt-5">
        {/* header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
            }}
            className=" h-7 w-7 bg-gray-300 p-4  rounded-full"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
            <Text className="font-bold text-xl  ">
              Current location <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
          <UserIcon size={25} color="#00CCBB" />
        </View>

        {/* search bar */}
        <View className="flex-row mx-4 items-center space-x-2 pb-2">
          <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3 rounded-md">
            <MagnifyingGlassIcon color="gray" />
            <TextInput placeholder="Restaurants and cuisines" keyboardType="default" />
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>

        {/* body */}
        <ScrollView className="bg-gray-100" contentContainerStyle={{ paddingBottom: 100 }}>
          {/* categories */}
          <Categories />

          {/* featured rows */}
          {featuredCategories.map((category) => (
            <FeaturedRow
              key={category._id}
              title={category.name}
              description={category.short_description}
              id={category._id}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>

      
    
  )
}

export default HomeScreen
