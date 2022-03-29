import React from 'react'
import {View, Text} from 'react-native'
import Carousel from '../component/Carousel'
import { dummyData } from '../data/Data'


const Home = () =>{
    return (
        <View style={{marginTop: 30}}>
            <Carousel data = {dummyData}/>
        </View>
    )
}

export default Home