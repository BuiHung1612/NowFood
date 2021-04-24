import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Me = ({navigation}) => {
  // useEffect(() => {
  //   navigation.setOptions({
  //     tabBarVisible: true,
  //     tabBarOptions:({
  //       style:{}
  //     })
  //   });
  // }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <ImageBackground
            source={{
              uri:
                'https://i.pinimg.com/564x/a8/f7/cf/a8f7cf02e5ffaf226068108a42d07f07.jpg',
            }}
            style={styles.ImageBackground}>
            <Text style={{fontSize: 20, top: -40, fontWeight: 'bold'}}>
              Tôi
            </Text>
            <Image
              source={{
                uri:
                  'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-9/148889733_2804212123228229_1584969750114084438_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_ohc=49a0EzaNUPUAX8LE3Z6&_nc_ht=scontent.fhan3-1.fna&oh=3f46fd7ebff5b387f6840abcc2dc6ecc&oe=60A71607',
              }}
              style={styles.userImg}
            />
            <Ionicons
              name="checkmark-circle"
              size={30}
              color="#EE9800"
              style={styles.checkIcon}
            />
            <Text style={styles.userName}>Bùi Hùng</Text>
          </ImageBackground>
        </View>
        <View style={{flex: 0.6}}>
          <View style={styles.boderBottom}>
            <TouchableOpacity style={styles.btn}>
              <Ionicons
                name="pricetag-outline"
                size={25}
                color="#000"
                style={{width: '10%'}}
              />
              <Text style={{width: '80%', fontSize: 18}}>Ví Voucher</Text>
              <Ionicons name="chevron-forward-outline" size={25} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Fontisto
                name="shopify"
                size={25}
                color="#000"
                style={{width: '10%'}}
              />
              <Text style={{width: '67%', fontSize: 18}}>Shopee Xu</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 18}}>500 Xu</Text>
                <Ionicons
                  name="chevron-forward-outline"
                  size={25}
                  color="#000"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Ionicons
                name="card-outline"
                size={25}
                color="#000"
                style={{width: '10%'}}
              />
              <Text style={{width: '80%', fontSize: 18}}>Thanh toán</Text>
              <Ionicons name="chevron-forward-outline" size={25} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Ionicons
                name="location-outline"
                size={25}
                color="#000"
                style={{width: '10%'}}
              />
              <Text style={{width: '80%', fontSize: 18}}>Địa chỉ</Text>
              <Ionicons name="chevron-forward-outline" size={25} color="#000" />
            </TouchableOpacity>
          </View>
          {/* bạn bè, trung tâm trợ giúp */}
          <View style={styles.boderBottom}>
            <TouchableOpacity style={styles.btn}>
              <Ionicons
                name="person-outline"
                size={25}
                color="#000"
                style={{width: '10%'}}
              />
              <Text style={{width: '80%', fontSize: 18}}>Bạn bè</Text>
              <Ionicons name="chevron-forward-outline" size={25} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Ionicons
                name="help-circle-outline"
                size={25}
                color="#000"
                style={{width: '10%'}}
              />
              <Text style={{width: '80%', fontSize: 18}}>
                Trung tâm trợ giúp
              </Text>
              <Ionicons name="chevron-forward-outline" size={25} color="#000" />
            </TouchableOpacity>
          </View>
          {/* ứng dụng cho chủ quán */}
          <View style={styles.boderBottom}>
            <TouchableOpacity style={styles.btn}>
              <Entypo
                name="shop"
                size={25}
                color="#000"
                style={{width: '10%'}}
              />
              <Text style={{width: '80%', fontSize: 18}}>
                Ứng dụng cho chủ quán
              </Text>
              <Ionicons name="chevron-forward-outline" size={25} color="#000" />
            </TouchableOpacity>
          </View>
          {/* chính sách quy định, cài đặt */}
          <View style={styles.boderBottom}>
            <TouchableOpacity style={styles.btn}>
              <Ionicons
                name="help-circle-outline"
                size={25}
                color="#000"
                style={{width: '10%'}}
              />
              <Text style={{width: '80%', fontSize: 18}}>
                Chính sách quy định
              </Text>
              <Ionicons name="chevron-forward-outline" size={25} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Ionicons
                name="settings-outline"
                size={25}
                color="#000"
                style={{width: '10%'}}
              />
              <Text style={{width: '80%', fontSize: 18}}>Cài đặt</Text>
              <Ionicons name="chevron-forward-outline" size={25} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Ionicons
                name="information-circle-outline"
                size={25}
                color="#000"
                style={{width: '10%'}}
              />
              <Text style={{width: '80%', fontSize: 18}}>Về Now</Text>
              <Ionicons name="chevron-forward-outline" size={25} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Me;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
  },
  userImg: {
    width: 130,
    height: 130,
    borderRadius: 80,
  },
  header: {
    flex: 0.4,
    height: windowHeight * 0.35,
  },
  ImageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#F5F6FA',
  },
  userName: {
    fontSize: 17,
    marginTop: 5,
    fontWeight: 'bold',
  },
  checkIcon: {
    position: 'absolute',
    right: 140,
    top: 160,
  },
  btn: {
    flexDirection: 'row',
    height: windowHeight * 0.07,
    borderBottomWidth: 1,
    borderBottomColor: '#F7F7F7',
    alignItems: 'center',
    paddingLeft: 10,
  },
  boderBottom: {borderBottomWidth: 10, borderBottomColor: '#F5F6FA'},
});
