import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {getNearMe} from '../services/API';
import {getImage} from '../ultis/index';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
const NearMe = props => {
  const [loading, setLoading] = useState(false);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const navigation = useNavigation();
  const [DataNearMe, setNearMe] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    let componentMounted = true;
    setLoading(true);
    const getApiProduct = async () => {
      const result = await getNearMe();
      setNearMe(result.data.reply.delivery_infos);
    };
    if (componentMounted == true) {
      getApiProduct();
      setLoading(false);
    }
    return () => {
      // This code runs when component is unmounted
      componentMounted = false; // (4) set it to false if we leave the page
    };
  }, []);
  return (
    <View>
      {loading ? (
        <View>
          <Text>LOADING...</Text>
        </View>
      ) : (
        <FlatList
          data={DataNearMe}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.boxBtn}
                activeOpacity={0.7}
                onPress={() =>
                  navigation.navigate('Detail', {
                    id: item.delivery_id,
                    idScreen: props.idScreen,
                    service_type: item.service_type,
                  })
                }>
                <View style={styles.ImgView}>
                  <Image
                    source={{
                      uri: getImage(
                        item.image_name,
                        item.restaurant_id,
                        item.photos?.[0].value,
                      ),
                    }}
                    style={{width: '85%', height: '90%'}}
                  />
                </View>
                <View style={{width: '70%'}}>
                  <Text style={styles.text} numberOfLines={2}>
                    {item.name}
                  </Text>
                  <View style={styles.itemViewRight}>
                    <View style={{flexDirection: 'row'}}>
                      <Ionicons name="star" size={17} color="#FDC532" />
                      <Text style={{marginLeft: 5}}>{item.rating.avg}</Text>
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

                  <TouchableOpacity style={{flexDirection: 'row'}}>
                    <Text style={styles.location}>{item.location_url}</Text>
                    <Ionicons
                      name="chevron-forward-outline"
                      size={17}
                      color="#9DC5EE"
                      style={{top: 11}}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

export default NearMe;

const styles = StyleSheet.create({
  boxBtn: {
    width: Dimensions.get('window').width,
    height: 110,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#F6F6F6',
    paddingTop: 8,
    paddingBottom: 8,
  },
  text: {
    width: '95%',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sale: {
    fontSize: 11,
    color: '#CB4A50',
  },
  boxsale: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#CB4A50',
    paddingLeft: 5,
    paddingRight: 5,
    height: 20,
    marginRight: 8,
  },
  location: {
    color: '#3881E0',
    marginTop: 10,
  },
  ImgView: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemViewRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 5,
  },
});
