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
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getShop} from '../services/API';
import {cos} from 'react-native-reanimated';
const ProductDescribe = ({route, navigation}) => {
  const {id} = route.params;
  const data = useSelector(store => store.idShop);
  const dispatch = useDispatch();
  const [productDetail, setProductDetail] = useState();
  console.log('ID_SHOP', id);
  console.log('ID_PRODUCT', data.id_Product);
  useEffect(() => {
    const getDetailProduct = async () => {
      //console.log('id:', id);
      //console.log(data.id_Product);

      const result = await getShop(id);
      setProductDetail(result.data.reply.menu_infos);
      console.log(result.data.reply.menu_infos);
    };

    getDetailProduct();
  }, []);
  const RenderItem = item => {
    // console.log('id1d', item.id);
    // console.log('id2d', data.id_Product);
    return (
      <View key={item.id}>
        <ImageBackground
          source={{uri: item.photos?.[4].value}}
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
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.name}</Text>
          <Text style={styles.sold}>
            999+ đã bán | {item.total_like} đã thích
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
              <Text style={styles.price}>{item.price.text}</Text>
              <Text style={styles.oldprice}>{item.price.text}</Text>
            </View>
            <TouchableOpacity onPress={() => addCart()}>
              <Ionicons name="add-circle" size={35} color="#EA3534" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const addCart = () => {
    console.log('click');
    dispatch({
      type: 'addCart',
      data: {
        idShop: id,
        id_Product: data.id_Product,
        dishes_type_id: data.dish_type_id,
      },
    });
  };
  // const Footer = () => {
  //   return (
  //     <FlatList
  //       data={Rate}
  //       renderItem={({item}) => {
  //         return (
  //           <View style={styles.boxCmt}>
  //             <Image source={{uri: item.imgUser}} style={styles.imgUrl} />
  //             <View>
  //               <View style={styles.boxname}>
  //                 <Text style={styles.userName}>{item.userName}</Text>
  //                 <Text style={styles.dateTime}>{item.dateTime}</Text>
  //               </View>

  //               {item.stars == 5 ? (
  //                 <View style={styles.star}>
  //                   <Ionicons name="star" size={20} color="yellow" />
  //                   <Ionicons name="star" size={20} color="yellow" />
  //                   <Ionicons name="star" size={20} color="yellow" />
  //                   <Ionicons name="star" size={20} color="yellow" />
  //                   <Ionicons name="star" size={20} color="yellow" />
  //                   <Text style={styles.stars}>{item.stars} tuyệt vời</Text>
  //                 </View>
  //               ) : item.stars == 4 ? (
  //                 <View style={styles.star}>
  //                   <Ionicons name="star" size={20} color="yellow" />
  //                   <Ionicons name="star" size={20} color="yellow" />
  //                   <Ionicons name="star" size={20} color="yellow" />
  //                   <Ionicons name="star" size={20} color="yellow" />
  //                   <Text style={styles.stars}>{item.stars} tuyệt vời</Text>
  //                 </View>
  //               ) : item.stars == 3 ? (
  //                 <View style={styles.star}>
  //                   <Ionicons name="star" size={20} color="#FFB200" />
  //                   <Ionicons name="star" size={20} color="#FFB200" />
  //                   <Ionicons name="star" size={20} color="#FFB200" />
  //                   <Text style={styles.stars}>{item.stars} tuyệt vời</Text>
  //                 </View>
  //               ) : item.stars == 2 ? (
  //                 <View style={styles.star}>
  //                   <Ionicons name="star" size={20} color="#FFB200" />
  //                   <Ionicons name="star" size={20} color="#FFB200" />
  //                   <Text style={styles.stars}>{item.stars} tuyệt vời</Text>
  //                 </View>
  //               ) : item.stars == 1 ? (
  //                 <View style={styles.star}>
  //                   <Ionicons name="star" size={20} color="#FFB200" />
  //                   <Text style={styles.stars}>{item.stars} tuyệt vời</Text>
  //                 </View>
  //               ) : (
  //                 console.log('null')
  //               )}
  //               <Text>{item.comment}</Text>
  //             </View>
  //           </View>
  //         );
  //       }}
  //     />
  //   );
  // };if(item.dish_type_id==data.dish_type_id)

  return (
    <View style={styles.container}>
      <FlatList
        data={productDetail}
        renderItem={({item}) =>
          item.dishes.map((e, i) => {
            if (
              e.id == data.id_Product &&
              item.dish_type_id == data.dish_type_id
            ) {
              // console.log(data.dish_type_id, item.dish_type_id);
              return RenderItem(e);
            }
          })
        }
        keyExtractor={item => item.dish_type_id}
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
