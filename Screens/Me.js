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
  Alert,
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
            <Text style={{fontSize: 16, top: -10, fontWeight: 'bold'}}>
              Tôi
            </Text>
            <Image
              source={{
                uri:
                  'https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-9/148889733_2804212123228229_1584969750114084438_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174920&_nc_ohc=49a0EzaNUPUAX8LE3Z6&_nc_ht=scontent.fhan3-1.fna&oh=3f46fd7ebff5b387f6840abcc2dc6ecc&oe=60A71607',
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
                size={20}
                color="#000"
                style={{width: '10%'}}
              />
              <Text style={{width: '80%', fontSize: 16}}>Ví Voucher</Text>
              <Ionicons name="chevron-forward-outline" size={20} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Fontisto
                name="shopify"
                size={20}
                color="#000"
                style={{width: '10%'}}
              />
              <Text style={{width: '67%', fontSize: 16}}>Shopee Xu</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 16}}>500 Xu</Text>
                <Ionicons
                  name="chevron-forward-outline"
                  size={20}
                  color="#000"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Ionicons
                name="card-outline"
                size={20}
                color="#000"
                style={{width: '10%'}}
              />
              <Text style={{width: '80%', fontSize: 16}}>Thanh toán</Text>
              <Ionicons name="chevron-forward-outline" size={20} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Ionicons
                name="location-outline"
                size={20}
                color="#000"
                style={{width: '10%'}}
              />
              <Text style={{width: '80%', fontSize: 16}}>Địa chỉ</Text>
              <Ionicons name="chevron-forward-outline" size={20} color="#000" />
            </TouchableOpacity>
          </View>
          {/* bạn bè, trung tâm trợ giúp */}
          <View style={styles.boderBottom}>
            <TouchableOpacity style={styles.btn}>
              <Ionicons
                name="person-outline"
                size={20}
                color="#000"
                style={{width: '10%'}}
              />
              <Text style={{width: '80%', fontSize: 16}}>Bạn bè</Text>
              <Ionicons name="chevron-forward-outline" size={20} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Ionicons
                name="help-circle-outline"
                size={20}
                color="#000"
                style={{width: '10%'}}
              />
              <Text style={{width: '80%', fontSize: 16}}>
                Trung tâm trợ giúp
              </Text>
              <Ionicons name="chevron-forward-outline" size={20} color="#000" />
            </TouchableOpacity>
          </View>
          {/* ứng dụng cho chủ quán */}
          <View style={styles.boderBottom}>
            <TouchableOpacity style={styles.btn}>
              <Entypo
                name="shop"
                size={20}
                color="#000"
                style={{width: '10%'}}
              />
              <Text style={{width: '80%', fontSize: 16}}>
                Ứng dụng cho chủ quán
              </Text>
              <Ionicons name="chevron-forward-outline" size={20} color="#000" />
            </TouchableOpacity>
          </View>
          {/* chính sách quy định, cài đặt */}
          <View style={styles.boderBottom}>
            <TouchableOpacity style={styles.btn}>
              <Ionicons
                name="help-circle-outline"
                size={20}
                color="#000"
                style={{width: '10%'}}
              />
              <Text style={{width: '80%', fontSize: 16}}>
                Chính sách quy định
              </Text>
              <Ionicons name="chevron-forward-outline" size={20} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Ionicons
                name="settings-outline"
                size={20}
                color="#000"
                style={{width: '10%'}}
              />
              <Text style={{width: '80%', fontSize: 16}}>Cài đặt</Text>
              <Ionicons name="chevron-forward-outline" size={20} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Ionicons
                name="information-circle-outline"
                size={20}
                color="#000"
                style={{width: '10%'}}
              />
              <Text style={{width: '80%', fontSize: 16}}>Về Now</Text>
              <Ionicons name="chevron-forward-outline" size={20} color="#000" />
            </TouchableOpacity>
            <View style={styles.logOut}>
              <TouchableOpacity
                style={styles.btnLogOut}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Login')}>
                <Text>Đăng Xuất</Text>
              </TouchableOpacity>
              <View style={{top: 8}}>
                <Text style={styles.logOutText}>Phiên bản 4.41.22</Text>
                <Text style={styles.logOutText}>A Foody Corporation</Text>
              </View>
            </View>
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
    width: 110,
    height: 110,
    borderRadius: 80,
  },
  header: {
    flex: 0.3,
    height: windowHeight * 0.3,
  },
  ImageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#F5F6FA',
  },
  userName: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'bold',
  },
  checkIcon: {
    position: 'absolute',
    right: 125,
    top: 120,
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
  logOut: {
    height: windowHeight * 0.17,
    borderBottomWidth: 1,
    backgroundColor: '#F2F2F2',
    borderBottomColor: '#F7F7F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnLogOut: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.06,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logOutText: {
    fontSize: 14,
    color: '#A4A4A4',
    textAlign: 'center',
  },
});
