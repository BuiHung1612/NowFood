import axios from 'axios';
import React, {useEffect} from 'react';
import {useState} from 'react';
import {Image, StyleSheet, Text, View, FlatList} from 'react-native';

const Test = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get('https://api.ahacafe.vn/delivery/menu/v2').then(result => {
      //console.log(result.data);
      setData(result.data);
    });
  });
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <View>
              <Image
                source={{
                  uri: `https://api.ahacafe.vn/user/2/menu-items/${
                    item.ID / 100
                  }.jpg`,
                }}
                style={{width: 100, height: 100}}
              />
              <Text>{item.Name}</Text>
            </View>
          );
        }}
        initialNumToRender={1}
      />
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
