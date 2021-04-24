import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View,Dimensions,Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Services from './Services';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const History = () => {
  const [onClick,setOnClick]=useState(false)
  const [text,setText]=useState('Dịch vụ')
  const onHandlePress=(item)=>{
    setOnClick(!onClick)
  }
  const show=(item)=>{

    setText(item)
  }
    return (
        <View style={styles.container}>
           <View style={{flex:0.07,flexDirection:'row',justifyContent:'space-around',alignItems:'center',borderBottomWidth:15,borderBottomColor:'#F5F6F8'}}>
               <TouchableOpacity style={styles.headertab} onPress={onHandlePress}>
                   <Text style={styles.headertabtext}>{text}</Text>
                   <Ionicons name="chevron-down-outline" size={17} color="#000" style={{top:3,left:2}}/>
               </TouchableOpacity>
               <TouchableOpacity style={styles.headertab} >
                   <Text style={styles.headertabtext}>Tất cả</Text>
                   <Ionicons name="chevron-down-outline" size={17} color="#000" style={{top:3,left:2}}/>
               </TouchableOpacity>
               <TouchableOpacity style={styles.headertab}>
                   <Text style={styles.headertabtext}>18/01/21 - 18/04/21</Text>
                   <Ionicons name="chevron-down-outline" size={17} color="#000" style={{top:3,left:2}}/>
               </TouchableOpacity>
           </View>
           <View style={{flex: 0.8, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{
              uri:
                'https://timviec365.vn/pictures/images/working-paper-la-gi1(1).jpg',
            }}
            style={styles.image1}
          />
          <Text style={styles.text1}>Cùng ghi lại hành trình ăn uống của bạn nào</Text>
          <Text style={styles.text2} numberOfLines={3}>
            Dễ dàng tìm lại món bạn thích,quán bạn yêu trong phần lịch sử đã đặt nha !
          </Text>
        </View>
        <Services enable={onClick} toggle={onHandlePress} onsend={show}/>
        </View>
    )
}

export default History

const styles = StyleSheet.create({
    container:{
        width:windowWidth,
        height:windowHeight*0.95
    },
    headertab:{
 
        flexDirection:'row'
    },
    headertabtext:{
        fontSize:16,
        
    },
    image1: {
        width: 150,
        height: 150,
        borderRadius: 80,
      },
      text1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginTop:15
      },
      text2: {
          top:20,
        fontSize: 17,
        width: '85%',
        color:'#959595'
      },
})
