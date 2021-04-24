import React, { useState } from 'react'
import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import NearMeData from '../data/NearMeData'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import Order from '../components/order'
import Comment from '../components/comment'
import Information from '../components/Infomation'
import { set } from 'react-native-reanimated'
const Detail = ({route,navigation}) => {
    const {id}=route.params;
    const [screen,setscreen]=useState('order')
    const Footer=()=>{
        if(screen=='order')
        return (
          
                <Order/>
               
       
        )
        if(screen=='comment')
        return (
                <Comment/>
    
        )
        if(screen=='information')
        return <Information/>
    }
    return (
        <View style={styles.container}>

            <FlatList
            ListFooterComponent={Footer}
            data={NearMeData}
            renderItem={({item})=>{
                if(item.id==id)
                return(
                    <View>
                        <ImageBackground source={{uri:item.url}} style={styles.imgbackground} >
                            <TouchableOpacity onPress={()=>navigation.goBack()} activeOpacity={0.7}>
                            <Ionicons name="chevron-back-outline" size={40} color={'#fff'} style={{marginLeft:15,marginTop:13}}/>
                            </TouchableOpacity>
                           <View style={{flexDirection:'row',paddingRight:15}}>
                           <TouchableOpacity activeOpacity={0.7}>
                           <Ionicons name="search" size={35} color={'#fff'} style={{marginLeft:15,marginTop:13}}/>
                           </TouchableOpacity>

                           <TouchableOpacity activeOpacity={0.7}>
                           <Ionicons name="heart-outline" size={35} color={'#fff'} style={{marginLeft:15,marginTop:13}}/>
                           </TouchableOpacity>
                         
                           <TouchableOpacity activeOpacity={0.7}>
                           <Ionicons name="ellipsis-horizontal-outline" size={35} color={'#fff'} style={{marginLeft:15,marginTop:13}}/>
                           </TouchableOpacity>
                           </View>
                        </ImageBackground>
                        <View style={{borderBottomWidth:15,paddingBottom:9,borderBottomColor:'#F5F6F8'}}>
                        <Text style={styles.title}>{item.title}</Text>
                        <View style={styles.rate}>
                        <Ionicons name="star" size={23} color="#FEC629"/>
                        <Text style={styles.textrate}>{item.rate}(999+)</Text>
                        <Entypo name="dot-single" size={15} color="#000" style={{top:7,left:4,right:4}} />
                        <Text style={styles.textrate}>{item.range}</Text>
                        </View>
                        </View>

                        <View style={{flexDirection:'row',width:'70%',justifyContent:'space-around'}}>
                        <TouchableOpacity onPress={()=>setscreen('order')}>
                            <Text style={[styles.textscreen,{fontWeight:screen=='order'?'bold':'500',borderBottomColor:screen=='order'?'#EE3231':'#fff'}]}>Đặt đơn</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setscreen('comment')}>
                            <Text style={[styles.textscreen,{fontWeight:screen=='comment'?'bold':'500',borderBottomColor:screen=='comment'?'#EE3231':'#fff'}]}>Bình luận</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>setscreen('information')}>
                            <Text style={[styles.textscreen,{fontWeight:screen=='information'?'bold':'500',borderBottomColor:screen=='information'?'#EE3231':'#fff'}]}>Thông tin</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                )
            }}
            />
            
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
        
    },
    imgbackground:{
        width:'100%',
        height:250,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    title:{
        fontSize:22,
        fontWeight:'bold',
        width:'95%',
        marginLeft:10
    },
    rate:{
        flexDirection:'row',
        marginLeft:20,
        marginTop:10
    },
    textrate:{
        left:5,
        top:2,
        fontSize:16
    },
    textscreen:{
        fontSize:17,
        paddingTop:5,
        paddingBottom:5,
        borderBottomWidth:2
    }
})
