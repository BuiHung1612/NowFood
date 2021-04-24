import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Homebtn = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{paddingVertical:15}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.btn}>
              <View style={styles.btn}>
                <Image
                  source={{
                    uri:
                      'https://play-lh.googleusercontent.com/72H-H7JuK7bizqKiy9d_fOwBm-BsAJaP3nGYiwUnKCmH_RiLINI6UnAgW0s2bwxAtNCF',
                  }}
                  style={styles.image}
                />
              </View>
              <Text style={styles.text}>Đại tiệc giảm 50%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <View style={styles.btn}>
                <Image
                  source={{
                    uri:
                      'https://img.icons8.com/plasticine/2x/rice-bowl.png',
                  }}
                  style={styles.image}
                />
              </View>
              <Text style={styles.text}>Cơm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <View style={styles.btn}>
                <Image
                  source={{
                    uri:
                      'https://png.pngtree.com/png-vector/20190120/ourlarge/pngtree-drink-milk-tea-fast-food-hand-painted-png-image_501233.jpg',
                  }}
                  style={styles.image}
                />
              </View>
              <Text style={styles.text}>Trà Sữa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <View style={styles.btn}>
                <Image
                  source={{
                    uri:
                      'https://inhat.vn/ha-noi/wp-content/uploads/2019/05/mon-an-vat-ha-noi-13-1.jpg',
                  }}
                  style={styles.image}
                />
              </View>
              <Text style={styles.text}>Ăn vặt</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <View style={styles.btn}>
                <Image
                  source={{
                    uri:
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXWXsMX7Rp4yrxzL1twQHWCv2ZEqNrvFcU6w&usqp=CAU',
                  }}
                  style={styles.image}
                />
              </View>
              <Text style={styles.text}>Quán mới giảm 50%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <View style={styles.btn}>
                <Image
                  source={{
                    uri:
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKNWkLJi632bc_U9GwcBBD4EolZ6qJ7Nu2Yg&usqp=CAU',
                  }}
                  style={styles.image}
                />
              </View>
              <Text style={styles.text}>NowTable đặt bàn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <View style={styles.btn}>
                <Image
                  source={{
                    uri:
                      'https://previews.123rf.com/images/ylivdesign/ylivdesign1703/ylivdesign170302503/73646243-market-icon-flat-style.jpg',
                  }}
                  style={styles.image}
                />
              </View>
              <Text style={styles.text}>Siêu thị</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <View style={styles.btn}>
                <Image
                  source={{
                    uri:
                      'https://i.pinimg.com/originals/3b/c5/a8/3bc5a837df100ebcfce798c0aae86be4.png',
                  }}
                  style={styles.image}
                />
              </View>
              <Text style={styles.text}>Thú cưng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <View style={styles.btn}>
                <Image
                  source={{
                    uri:
                      'https://img.kam.vn/images/414x0/d90955bae7804ac39f67a500a1fc61f1/image/20-again-sale-up-to-70-toan-bo-san-pham.jpg',
                  }}
                  style={styles.image}
                />
              </View>
              <Text style={styles.text}>Giảm 70K</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row',marginTop:10}}>
            <TouchableOpacity style={styles.btn}>
              <View style={styles.btn}>
                <Image
                  source={{
                    uri:
                      'https://cf.shopee.vn/file/b2d71e27d77d4bc5ae61e5eba365bfc5',
                  }}
                  style={styles.image}
                />
              </View>
              <Text style={styles.text}>FreeShip Extra</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <View style={styles.btn}>
                <Image
                  source={{
                    uri:
                      'http://image.foody.vn/bookingcollection/s/beauty-upload-api-1200x630-191030172514.jpg',
                  }}
                  style={styles.image}
                />
              </View>
              <Text style={styles.text}>NowShip- Giao Hàng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <View style={styles.btn}>
                <Image
                  source={{
                    uri:
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ro-nbZou643YL1jRBBV4SpEmqytGgEDRTg&usqp=CAU',
                  }}
                  style={styles.image}
                />
              </View>
              <Text style={styles.text}>Ưu đãi Airpay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <View style={styles.btn}>
                <Image
                  source={{
                    uri:
                      'https://media-cdn.laodong.vn/Storage/NewsPortal/2021/3/18/890473/Do-Vang-Va-Mau-Dao-H.jpg?w=414&h=276&crop=auto&scale=both',
                  }}
                  style={styles.image}
                />
              </View>
              <Text style={styles.text}>NowFresh-Thực phẩm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <View style={styles.btn}>
                <Image
                  source={{
                    uri:
                      'https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-handshake-icon-png-image_695923.jpg',
                  }}
                  style={styles.image}
                />
              </View>
              <Text style={styles.text}>Ưu đãi đối tác</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <View style={styles.btn}>
                <Image
                  source={{
                    uri:
                      'https://mangtay.net/wp-content/uploads/2020/03/ky-thuat-trong-hoa-huong-duong-1.jpg',
                  }}
                  style={styles.image}
                />
              </View>
              <Text style={styles.text}>Hoa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <View style={styles.btn}>
                <Image
                  source={{
                    uri:
                      'https://cdn0.iconfinder.com/data/icons/health-icons-rounded/110/Medicine-2-512.png',
                  }}
                  style={styles.image}
                />
              </View>
              <Text style={styles.text}>Thuốc</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <View style={styles.btn}>
                <Image
                  source={{
                    uri:
                      'https://play-lh.googleusercontent.com/72H-H7JuK7bizqKiy9d_fOwBm-BsAJaP3nGYiwUnKCmH_RiLINI6UnAgW0s2bwxAtNCF',
                  }}
                  style={styles.image}
                />
              </View>
              <Text style={styles.text}>Đại tiệc giảm 50%</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Homebtn;

const styles = StyleSheet.create({
  btn: {
    width: 100,
    marginLeft: 5,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 15,
  },
  text: {
      left:-5,
    width: 80,
    textAlign: 'center',
    fontSize: 15,

  },
});
