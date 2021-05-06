import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getListCollection} from '../services/API';

const Collections = () => {
  const [collections, setCollections] = useState();
  useEffect(() => {
    const getCollection = async () => {
      const result = await getListCollection();
      setCollections(result.data.reply.collections);
      console.log(result.data.reply.collections);
    };
    getCollection();
    return () => {
      //setCollections({});
    };
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.flatListStyle}>
        <FlatList
          data={collections}
          numColumns={2}
          key={Math.random(5)}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{width: '46%', height: 230, marginLeft: 15}}>
                <Image
                  source={{uri: item.photos?.[0].value}}
                  style={{
                    flex: 1,
                    width: null,
                    height: null,

                    resizeMode: 'cover',
                  }}
                />
                <Text>{item.name}</Text>
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
    paddingTop: 15,
    flex: 1,
  },
});
