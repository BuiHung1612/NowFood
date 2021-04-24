import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Recent from '../data/Recent'
import Products from '../data/Products'
import { useNavigation } from '@react-navigation/native';
const order = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.contain}>
        <View style={styles.box}>
          <View style={{width: '15%', paddingLeft: 10}}>
            <Image
              source={{
                uri: 'https://image.vietstock.vn/2019/04/02/GIAO-HANG.jpg',
              }}
              style={styles.image}
            />
          </View>
          <View style={{width: '65%', paddingLeft: 10}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', left: 10}}>
              Giao hàng tiêu chuẩn
            </Text>
            <Text style={{fontSize: 16, left: 10}}>Dự kiến giao lúc 09:55</Text>
          </View>
          <TouchableOpacity style={{width: '15%'}}>
            <Text style={{color: '#347EEF', fontWeight: 'bold', top: 5}}>
              Thay đổi
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <View style={{width: '15%', paddingLeft: 10}}>
            <Image
              source={{
                uri:
                  'https://img.freepik.com/free-vector/group-young-people-posing-photo_52683-18823.jpg?size=338&ext=jpg',
              }}
              style={styles.image}
            />
          </View>
          <View style={{width: '65%', paddingLeft: 10}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', left: 10}}>
              Đặt nhóm
            </Text>
            <Text style={{fontSize: 16, left: 10}}>Chia tiền nhanh chóng</Text>
          </View>
          <TouchableOpacity style={{width: '15%'}}>
            <Text
              style={{color: '#347EEF', fontWeight: 'bold', top: 5, left: 15}}>
              Mời
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{borderBottomWidth:15,borderBottomColor:'#F5F6F8',paddingBottom:25}}>
          <View style={{flexDirection: 'row', paddingLeft: 10}}>
            <Ionicons
              name="pricetag-outline"
              size={17}
              color="#fff"
              style={{top: 5, backgroundColor: 'red'}}
            />
            <Text style={styles.salecode} numberOfLines={1}>
              Nhập "TUHUKHAO":Giảm 25k trên giá món
            </Text>
          </View>

          <View style={{flexDirection: 'row', paddingLeft: 10, marginTop: 5}}>
            <Ionicons
              name="pricetag-outline"
              size={17}
              color="#fff"
              style={{top: 5, backgroundColor: '#1593F9'}}
            />
            <Text style={styles.salecode} numberOfLines={1}>
              Nhập "ALLFREE":Freeship tới 3km,đơn tối thiểu 40k
            </Text>
            <TouchableOpacity>
              <Text style={{color: '#3B8AE6', fontWeight: 'bold', top: 7}}>
                Xem tất cả
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{flex: 0.5,paddingTop:20,paddingLeft:20}}>
        <Text style={{color: '#676767', fontSize: 18, fontWeight: 'bold'}}>
          Món đang giảm
        </Text>
        
        <FlatList
          data={Products}
          renderItem={({item})=>{
            return(
              <TouchableOpacity style={{flexDirection:'row',borderBottomColor:'#EFEFEF',borderBottomWidth:1,height:150,}} onPress={()=>navigation.navigate('ProductDescribe',{id:item.id})}>
              <Image source={{uri:item.url}} style={styles.image1} />
              <View style={{left:15,width:'65%'}}>
              <Text style={{fontSize:18}}>{item.title}</Text>
              <Text style={{fontSize:16,color:'#959595',marginTop:5}}>Khách hàng vui lòng ghi chú th...</Text>
              <Text style={{fontSize:16,color:'#959595',marginTop:6}}>{item.sold}+đã bán | {item.liked}+ thích</Text>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{marginTop:6,fontSize:18,fontWeight:'bold'}}>{item.price}đ</Text>
              <TouchableOpacity>
              <Ionicons name='add-circle' size={35} color="#EA3534"/>
              </TouchableOpacity>
              
              </View>
              </View>

              </TouchableOpacity>
            )
          }}
        />
      
       
      </View>
    </View>
  );
};

export default order;

const styles = StyleSheet.create({
  container: {
   flex:1
  },
  contain: {
    top: 15,
    flex: 0.3,

  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'red',
  },
  box: {
    flexDirection: 'row',
    height: 75,
    paddingTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F7F9FA',
    paddingBottom: 7,
  },
  salecode: {
    fontSize: 17,
    marginLeft: 7,
    top: 4,
    width: '75%',
  },
  image1:{
    width:120,
    height:120,
    marginTop:10
  }
});
