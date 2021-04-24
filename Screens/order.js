import React, {useState} from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Comming from '../components/Comming';
import Draft from '../components/Draft';
import History from '../components/History';

const Order = () => {
  const [screen, setscreen] = useState('comming');
  const RenderItem=()=>{
      if(screen=='comming')
        return <Comming/>
      if(screen=='history')
        return <History/>
      if(screen=='draft')
        return <Draft/>
  }
    const Header=()=>{
        return(
            <View style={styles.header}>
        <TouchableOpacity onPress={()=>setscreen('comming')}>
          <Text style={[styles.headertext, {borderBottomColor:screen=='comming'?'#F33232':'#fff',color:screen=='comming'?'#F33232':'#919191',fontWeight:screen=='comming'?'bold':'500'}]}>Đang đến</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={()=>setscreen('history')}>
          <Text style={[styles.headertext, {borderBottomColor:screen=='history'?'#F33232':'#fff',color:screen=='history'?'#F33232':'#919191',fontWeight:screen=='history'?'bold':'500'}]}>
            Lịch sử
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>setscreen('draft')}>
          <Text style={[styles.headertext, {borderBottomColor:screen=='draft'?'#F33232':'#fff',color:screen=='draft'?'#F33232':'#919191',fontWeight:screen=='draft'?'bold':'500'}]}>Đơn nháp</Text>
        </TouchableOpacity>
      </View>
        )
    }
  return (
    <View style={styles.container}>
      <FlatList
          ListHeaderComponent={Header}
          ListFooterComponent={RenderItem}
      />

    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  headertext: {
    fontSize: 17,

    borderBottomWidth: 3,
    paddingBottom:4,
    
  },
  
});
