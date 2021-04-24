import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity,Dimensions } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Comming = () => {
    return (
        <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{
              uri:
                'https://timviec365.vn/pictures/images/working-paper-la-gi1(1).jpg',
            }}
            style={styles.image1}
          />
          <Text style={styles.text1}>Quên chưa đặt món rồi nè bạn ơi ?</Text>
          <Text style={styles.text2} numberOfLines={3}>
            Những đơn hàng đã được xác nhận,đang được chuẩn bị và giao đi đều sẽ
            được hiển thị ở đây để bạn có thể theo dõi nhé!
          </Text>
        </View>
      </View>
    )
}

export default Comming

const styles = StyleSheet.create({
    container:{
        width:windowWidth,
        height:windowHeight
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
        width: '75%',
        color:'#959595'
      },
})
