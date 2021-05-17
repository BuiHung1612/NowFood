import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import ImgData from '../data/ImgData';
import Swiper from 'react-native-swiper';
import {getListCollection} from '../services/API';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Collections = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [collections, setCollections] = useState();
  const ListImg = () => {
    return ImgData.map((e, i) => {
      return (
        <Image
          key={e.id}
          source={{uri: e.url}}
          style={{flex: 1, resizeMode: 'stretch'}}
        />
      );
    });
  };
  const header = () => {
    return (
      <View style={{flex: 1}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Swiper
            height={windowHeight * 0.18}
            width={windowWidth * 0.95}
            style={{
              backgroundColor: '#d8d8d8',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            autoplay
            autoplayTimeout={1}>
            {ListImg()}
          </Swiper>
        </View>
      </View>
    );
  };

  useEffect(() => {
    const getCollection = async () => {
      const result = await getListCollection();
      setCollections(result.data.reply.collections);
      // console.log('check');
      // console.log('data1', result.data.reply.collections);
    };
    getCollection();
    // return () => {
    //   setCollections({});
    // };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headertab}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="chevron-back-outline" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={{left: 150, fontSize: 17, fontWeight: 'bold'}}>
          Bộ sưu tập
        </Text>
      </View>
      <View style={styles.flatListStyle}>
        <FlatList
          ListHeaderComponent={header}
          data={collections}
          numColumns={2}
          key={Math.random(5)}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  width: windowWidth * 0.46,
                  height: windowHeight * 0.25,
                  marginLeft: 10,
                }}>
                <Image
                  source={{uri: item.photos?.[0].value}}
                  style={{
                    width: '100%',
                    height: 140,

                    // flex: 1,
                    // width: null,
                    // height: null,
                    resizeMode: 'contain',
                  }}
                />
                <Text style={{fontSize: 17}}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Collections;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flatListStyle: {
    borderTopWidth: 0.5,

    paddingBottom: 20,
    flex: 1,
  },
  headertab: {
    flex: 0.08,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
