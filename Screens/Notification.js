import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  FlatList,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Promotion from '../data/Promotion';

const Notification = ({navigation}) => {
  const [showPromotion, setShowPromotion] = useState(false);
  const ToggleModal = () => {
    setShowPromotion(!showPromotion);
  };
  const [showNews, setshowNews] = useState(false);
  const ToggleModal1 = () => {
    setshowNews(!showNews);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headertext}>Thông báo</Text>
        <TouchableOpacity>
          <Ionicons
            name="settings-outline"
            size={25}
            color="#000"
            style={{top: 15}}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.promotion} onPress={ToggleModal}>
        <View style={[styles.icon, {backgroundColor: '#F05C02'}]}>
          <Ionicons name="pricetag" size={23} color="white" />
        </View>
        <View style={{width: '80%'}}>
          <Text style={styles.promotionText}>Khuyến mãi</Text>
          <Text style={styles.promotionText1}>Cả nhà ăn tối CHỈ 130K</Text>
        </View>
        <Ionicons
          name="chevron-forward-outline"
          size={25}
          color="#000"
          style={{top: 20}}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.promotion} onPress={ToggleModal1}>
        <View style={[styles.icon, {backgroundColor: '#017DEF'}]}>
          <Ionicons name="volume-high" size={23} color="white" />
        </View>
        <View style={{width: '80%'}}>
          <Text style={styles.promotionText}>Tin tức</Text>
          <Text style={styles.promotionText1} numberOfLines={1}>
            Thay đổi chính sách áp dụng Phụ phí đêm từ 100k
          </Text>
        </View>
        <Ionicons
          name="chevron-forward-outline"
          size={25}
          color="#000"
          style={{top: 20}}
        />
      </TouchableOpacity>
      <View style={styles.updateOrders}>
        <Text style={{fontSize: 16, left: 10, marginTop: 10}}>
          Cập nhật đơn hàng
        </Text>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={{
              uri:
                'https://tamnguyen.com.vn/hinhanh/tintuc/Chuong-14-Order-Unorder-list.jpg',
            }}
            style={styles.image}
          />
          <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 10}}>
            Trải nghiệm ngay
          </Text>
          <Text
            style={{
              width: '80%',
              fontSize: 16,
              color: '#919395',
              marginTop: 10,
              textAlign: 'center',
            }}>
            Thông tin đơn hàng sẽ được cập nhật tại đây
          </Text>
        </View>
      </View>
      {/* Modal Promotion */}
      <Modal
        animationType="slide"
        visible={showPromotion}
        onRequestClose={ToggleModal}>
        <View style={{flex: 1}}>
          <View style={styles.ModalHeader}>
            <TouchableOpacity
              style={{marginLeft: 10, width: '20%'}}
              onPress={ToggleModal}>
              <Ionicons name="chevron-back" size={35} color="#000" />
            </TouchableOpacity>
            <Text style={styles.ModalHeaderText}>Thông báo</Text>
          </View>
          <View style={styles.ModalContain}>
            <FlatList
              data={Promotion}
              renderItem={({item}) => {
                return (
                  <View key={item.id} style={styles.modalItemView}>
                    <Image
                      source={{uri: item.image}}
                      style={styles.PromotionImage}
                    />
                    <View style={{paddingLeft: 10, width: '100%'}}>
                      <Text style={styles.PromotionTitle}>{item.title}</Text>
                      <Text style={styles.PromotionSubTitle}>
                        {item.subtitle}
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.datetime}>{item.date}</Text>
                        <Text style={styles.datetime}>{item.time}</Text>
                      </View>
                    </View>
                  </View>
                );
              }}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </Modal>

      {/* Modal News */}
      <Modal
        animationType="slide"
        visible={showNews}
        onRequestClose={ToggleModal1}>
        <View style={{flex: 1}}>
          <View style={styles.ModalHeader}>
            <TouchableOpacity
              style={{marginLeft: 10, width: '20%'}}
              onPress={ToggleModal1}>
              <Ionicons name="chevron-back" size={35} color="#000" />
            </TouchableOpacity>
            <Text style={styles.ModalHeaderText}>Tin tức</Text>
          </View>
          <View style={styles.ModalContain}>
            <FlatList
              data={Promotion}
              renderItem={({item}) => {
                return (
                  <View key={item.id} style={styles.modalItemView}>
                    <Image
                      source={{uri: item.image}}
                      style={styles.PromotionImage}
                    />
                    <View style={{paddingLeft: 10, width: '100%'}}>
                      <Text style={styles.PromotionTitle}>{item.title}</Text>
                      <Text style={styles.PromotionSubTitle}>
                        {item.subtitle}
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.datetime}>{item.date}</Text>
                        <Text style={styles.datetime}>{item.time}</Text>
                      </View>
                    </View>
                  </View>
                );
              }}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 0.08,
    flexDirection: 'row',

    borderBottomWidth: 1,
    borderBottomColor: '#EDECEF',
  },
  headertext: {
    width: '90%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    top: 15,
    left: 15,
  },
  promotion: {
    flex: 0.11,
    borderBottomWidth: 1,
    borderBottomColor: '#EDECEF',
    flexDirection: 'row',
  },
  icon: {
    width: 40,
    left: 10,
    height: 40,
    borderRadius: 50,
    top: 8,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  promotionText: {
    fontSize: 18,
    fontWeight: 'bold',
    top: 10,
    left: 30,
  },
  promotionText1: {
    color: '#7E7E7E',
    fontSize: 14,
    left: 30,
    top: 10,
    width: '85%',
  },
  updateOrders: {
    flex: 0.7,
    backgroundColor: '#F5F6F8',
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 80,
  },
  ModalHeader: {
    flex: 0.09,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 15,
    borderBottomColor: '#ECEBF1',
  },
  ModalHeaderText: {
    width: '80%',
    fontSize: 22,
    fontWeight: 'bold',
    left: 80,
  },
  ModalContain: {
    flex: 0.91,
  },
  modalItemView: {
    flexDirection: 'row',
    height: Dimensions.get('window').height * 0.25,
    borderBottomWidth: 15,
    borderBottomColor: '#ECEBF1',
    paddingLeft: 10,
    paddingTop: 15,
    paddingRight: 10,
  },

  PromotionImage: {
    width: 100,
    height: 100,
  },
  PromotionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    width: '70%',
  },
  PromotionSubTitle: {
    fontSize: 14,
    color: '#727272',
    width: '70%',
  },
  datetime: {
    fontSize: 15,
    color: '#9C9C9C',
  },
});
