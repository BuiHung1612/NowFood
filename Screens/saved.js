import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Services from '../components/Services';
import {useSelector, useDispatch} from 'react-redux';
const Saved = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [text, setText] = useState('Dịch vụ');
  const [onClick, setOnClick] = useState(false);
  const data = useSelector(store => store.favouriteShop);
  console.log(data);
  const onHandlePress = item => {
    setOnClick(!onClick);
  };

  const show = item => {
    setText(item);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerTextBox}>
        <Text style={styles.headerText}>Đã lưu</Text>
      </View>
      <View style={styles.serviceBox}>
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={onHandlePress}>
          <Text style={styles.text1}>{text}</Text>
          <Ionicons
            name="chevron-down-outline"
            size={17}
            color="#000"
            style={{top: 9, left: 3}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.contain}>
        {data != '' ? (
          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <View style={styles.itemContain}>
                  <View style={{width: windowWidth * 0.28}}>
                    <Image source={{uri: item.img}} style={styles.itemImg} />
                  </View>

                  <View
                    style={{
                      width: windowWidth * 0.69,
                      height: windowHeight * 0.15,
                      paddingLeft: 8,
                    }}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <View style={styles.itemViewFlex}>
                      <View style={{flexDirection: 'row'}}>
                        <Ionicons name="star" size={17} color="#FDC532" />
                        <Text style={{marginLeft: 5}}>{item.rating}</Text>
                      </View>

                      <View style={{flexDirection: 'row'}}>
                        <Ionicons name="time-outline" size={17} color="#000" />
                        <Text>15p</Text>
                        <Entypo
                          name="dot-single"
                          size={22}
                          color="#000"
                          style={{bottom: 3, marginLeft: -3, marginRight: -3}}
                        />
                        <Text>0.6km</Text>
                      </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      {item.promotion?.map((e, i) => {
                        return (
                          <View style={styles.itemPromotion} key={i}>
                            <Text style={{color: 'red', fontSize: 13}}>
                              {e.text}
                            </Text>
                          </View>
                        );
                      })}
                    </View>
                  </View>
                </View>
              );
            }}
            keyExtractor={(_, index) => index}
          />
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image
              source={{
                uri:
                  'https://images.foody.vn/res/g103/1025005/prof/s576x330/foody-upload-api-foody-mobile-hmzz-200522103018.jpg',
              }}
              style={styles.image}
            />
            <Text style={styles.text3}>Thả tim vào quán bạn yêu nào!</Text>
            <Text style={styles.text2} numberOfLines={3}>
              Hãy lấp đầy dạ dày bằng một trái tim xinh. Thả tim(icon)để lưu lại
              quán ngon bạn thích nhé!
            </Text>
          </View>
        )}
      </View>
      <Services enable={onClick} toggle={onHandlePress} onsend={show} />
    </View>
  );
};

export default Saved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerTextBox: {
    flex: 0.07,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  serviceBox: {
    flex: 0.06,
    backgroundColor: '#F5F6F8',
  },
  text1: {
    fontSize: 15,
    marginTop: 7,
    marginLeft: 12,
    fontWeight: '600',
  },
  contain: {
    flex: 0.87,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 80,
  },
  itemContain: {
    alignItems: 'center',
    paddingLeft: 10,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.19,
    borderBottomWidth: 0.5,
    borderBottomColor: '#bdbdbd',
    flexDirection: 'row',
  },
  itemImg: {
    width: 100,
    height: 100,
  },
  itemViewFlex: {
    flexDirection: 'row',
    top: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
    width: '100%',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPromotion: {
    borderWidth: 1,
    marginRight: 5,
    top: 15,
    borderColor: 'red',
    width: 85,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text2: {
    fontSize: 15,
    width: Dimensions.get('window').width * 0.8,
    color: '#969696',
    marginTop: 5,
    textAlign: 'center',
  },
  text3: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
