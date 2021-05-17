import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HeaderTab = () => {
  return (
    <View style={styles.header}>
      <Text>Đăng nhập và đăng ký</Text>
    </View>
  );
};

export default HeaderTab;

const styles = StyleSheet.create({
  header: {
    flex: 0.07,
    backgroundColor: '#0B2161',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
