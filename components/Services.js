import React, { useState } from 'react'
import { StyleSheet, Text, View,Modal, TouchableOpacity, FlatList } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ServicesData from '../data/ServicesData'
const Services = (props) => {
    const [title,setTitle]=useState('Dịch vụ')
    return (
        <Modal animationType='none' visible={props.enable} onRequestClose={props.toggle}  transparent >
            <TouchableOpacity style={{flex:1,marginTop:'22%'}}   onPress={props.toggle} activeOpacity={1} >
            <TouchableOpacity style={{flex:0.5,backgroundColor:'#fff'}} activeOpacity={1} >
                <FlatList
                    data={ServicesData}
                    renderItem={({item})=>{
                        
                        return(
                            <TouchableOpacity style={{paddingLeft:20,height:50,alignItems:'center',borderBottomWidth:0.8,borderBottomColor:'#ECEBED',flexDirection:'row',justifyContent:'space-between'}} onPress={()=>{                              
                              
                                setTitle(item.title)
                                props.onsend(item.title)
                                
                            }}>
                                <Text style={{fontSize:20,fontWeight:item.title==title?'bold':'500'}}>{item.title}</Text>
                                {
                                    item.title==title?<AntDesign name="check" size={25} color={'#000'} style={{right:20}} />:null
                                }
                                
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={item=>item.id}
                />
            
            </TouchableOpacity>
            <TouchableOpacity style={{flex:0.41,opacity:0.1,backgroundColor:'#808080'}} activeOpacity={0.0001} onPress={props.toggle}>

            </TouchableOpacity>
                
            </TouchableOpacity>
        </Modal>
    )
}

export default Services

const styles = StyleSheet.create({})
