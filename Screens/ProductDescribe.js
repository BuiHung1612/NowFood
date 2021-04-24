import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Products from '../data/Products';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Rate from '../data/Rate';
const ProductDescribe = ({route, navigation}) => {
  const {id} = route.params;

  const RenderItem = item => {
    if (item.id === id)
      return (
        <View>
          <ImageBackground
            source={{uri: item.url}}
            style={styles.imgbackground}
            resizeMode="cover">
            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
              <Ionicons
                name="chevron-back-outline"
                size={35}
                color="#fff"
                style={{marginTop: 15, marginLeft: 8}}
              />
            </TouchableOpacity>
          </ImageBackground>
          <View style={styles.boxtitle}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.title}</Text>
            <Text style={styles.sold}>
              {item.sold}+ đã bán | {item.liked}+ đã thích
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.price}>{item.price - 4500}đ</Text>
                <Text style={styles.oldprice}>{item.price}đ</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="add-circle" size={35} color="#EA3534" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
  };
  const Footer = () => {
    return (
      <FlatList
        data={Rate}
        renderItem={({item}) => {
          return (
            <View style={styles.boxCmt}>
              <Image source={{uri: item.imgUser}} style={styles.imgUrl} />
              <View>
                <View style={styles.boxname}>
                  <Text style={styles.userName}>{item.userName}</Text>
                  <Text style={styles.dateTime}>{item.dateTime}</Text>
                </View>

                {item.stars == 5 ? (
                  <View style={styles.star}>
                    <Ionicons name="star" size={20} color="yellow" />
                    <Ionicons name="star" size={20} color="yellow" />
                    <Ionicons name="star" size={20} color="yellow" />
                    <Ionicons name="star" size={20} color="yellow" />
                    <Ionicons name="star" size={20} color="yellow" />
                    <Text style={styles.stars}>{item.stars} tuyệt vời</Text>
                  </View>
                ) : item.stars == 4 ? (
                  <View style={styles.star}>
                    <Ionicons name="star" size={20} color="yellow" />
                    <Ionicons name="star" size={20} color="yellow" />
                    <Ionicons name="star" size={20} color="yellow" />
                    <Ionicons name="star" size={20} color="yellow" />
                    <Text style={styles.stars}>{item.stars} tuyệt vời</Text>
                  </View>
                ) : item.stars == 3 ? (
                  <View style={styles.star}>
                    <Ionicons name="star" size={20} color="#FFB200" />
                    <Ionicons name="star" size={20} color="#FFB200" />
                    <Ionicons name="star" size={20} color="#FFB200" />
                    <Text style={styles.stars}>{item.stars} tuyệt vời</Text>
                  </View>
                ) : item.stars == 2 ? (
                  <View style={styles.star}>
                    <Ionicons name="star" size={20} color="#FFB200" />
                    <Ionicons name="star" size={20} color="#FFB200" />
                    <Text style={styles.stars}>{item.stars} tuyệt vời</Text>
                  </View>
                ) : item.stars == 1 ? (
                  <View style={styles.star}>
                    <Ionicons name="star" size={20} color="#FFB200" />
                    <Text style={styles.stars}>{item.stars} tuyệt vời</Text>
                  </View>
                ) : (
                  console.log('null')
                )}
                <Text>{item.comment}</Text>
              </View>
            </View>
          );
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={Products}
        ListFooterComponent={Footer}
        renderItem={({item}) => RenderItem(item)}
      />
    </View>
  );
};

export default ProductDescribe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imgbackground: {
    width: '100%',
    height: 300,
  },
  boxtitle: {
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 20,
    height: 140,

    borderBottomWidth: 1,
    borderBottomColor: '#EBEDEE',
  },
  sold: {
    fontSize: 16,
    color: '#959595',
    marginTop: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  oldprice: {
    textDecorationLine: 'line-through',
    fontSize: 20,
    color: '#C5C5C5',

    marginLeft: 10,
  },
  boxCmt: {
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  boxname: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
  },
  imgUrl: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  star: {
    flexDirection: 'row',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
