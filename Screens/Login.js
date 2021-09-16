import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dimensions} from 'react-native';
import {
  AccessToken,
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
import {useDispatch} from 'react-redux';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Login = () => {
  const dispatch = useDispatch();
  const getInfoFromToken = token => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'id,name,first_name,last_name,picture,short_name',
      },
    };
    const profileRequest = new GraphRequest(
      '/me',
      {token, parameters: PROFILE_REQUEST_PARAMS},
      (error, result) => {
        if (error) {
          console.log('Login info has an error :', error);
        } else {
          dispatch({type: 'Login', data: {userInfo: result, token: token}});
          console.log('result', result);
        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
  };
  const SignInFb = () => {
    LoginManager.logInWithPermissions(['public_profile']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            const accessToken = data.accessToken.toString();
            getInfoFromToken(accessToken);
            console.log(accessToken);
          });
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
      },
    );
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.logoView}>
        <Image
          source={{
            uri:
              'https://apprecs.org/gp/images/app-icons/300/25/com.deliverynow.jpg',
          }}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.textInputView}>
        <Ionicons name="call-outline" size={22} color="#000" />
        <TextInput
          placeholder="Số điện thoai"
          keyboardType="numeric"
          style={styles.TextInput}
        />
      </View>
      <View style={styles.viewBtn}>
        <TouchableOpacity style={styles.btn}>
          <Text style={{color: '#828689'}}>Tiếp tục</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginWithPassWord}>
          <Text style={styles.textLogin}>Đăng nhập bằng mật khẩu</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.viewBtn1}>
        <View style={styles.viewDivider}>
          <View style={styles.divider} />
          <Text style={{color: '#A4A4A4'}}>HOẶC </Text>
          <View style={styles.divider} />
        </View>

        <TouchableOpacity style={styles.btn2}>
          <Image
            source={{
              uri:
                'https://freepngimg.com/thumb/google/66912-logo-now-google-plus-search-free-transparent-image-hd.png',
            }}
            style={styles.btnLogo}
          />
          <Text style={styles.textBtn}>Tiếp tục với Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2} onPress={SignInFb}>
          <Image
            source={{
              uri:
                'https://www.eipm.org/wp-content/uploads/2018/03/facebook-round-white.png',
            }}
            style={styles.btnLogo}
          />
          <Text style={styles.textBtn}>Tiếp tục với Facebook</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.textFooter}>
          Chúng tôi không sử dụng thông tin của bạn với bất kỳ mục đích nào.
        </Text>
        <Text style={styles.textFooter}>
          Bằng cách đăng nhập hoặc đăng ký bạn đồng ý với{' '}
          <Text style={styles.termsOfService}>
            Chính sách quy định của Foody
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    flex: 0.08,
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  logoView: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    height: 60,
    width: 60,
  },
  textInputView: {
    flexDirection: 'row',
    width: windowWidth * 0.91,

    alignItems: 'center',
    left: 15,
    right: 15,
    justifyContent: 'space-around',
    borderBottomWidth: 0.7,
    borderBottomColor: '#bdbdbd',
  },
  TextInput: {
    width: windowWidth * 0.85,
    paddingRight: 40,
    fontSize: 17,
    paddingLeft: 15,
  },
  viewBtn: {
    flex: 0.17,
    alignItems: 'center',
  },
  viewBtn1: {
    flex: 0.4,
    alignItems: 'center',
  },
  btn: {
    marginTop: 15,
    width: windowWidth * 0.85,
    borderRadius: 40,
    height: windowHeight * 0.06,
    backgroundColor: '#E6E9EE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginWithPassWord: {
    marginTop: 8,
    height: 25,
    width: windowWidth * 0.91,
  },
  textLogin: {
    color: '#3383EF',
    width: '100%',
    fontSize: 15,
    textAlign: 'right',
  },
  viewDivider: {
    marginTop: 25,
    height: 25,
    width: windowWidth * 0.91,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  divider: {
    height: 0.3,
    backgroundColor: '#E6E6E6',
    width: '40%',
  },
  btn2: {
    flexDirection: 'row',
    marginTop: 15,
    width: windowWidth * 0.85,
    borderRadius: 40,
    height: windowHeight * 0.06,
    backgroundColor: '#2884FF',
    alignItems: 'center',
  },
  textBtn: {
    fontWeight: 'bold',
    color: '#fff',
  },
  btnLogo: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 56,
  },
  footer: {
    flex: 0.23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFooter: {
    fontSize: 10,
    color: '#A4A4A4',
    width: '87%',
    textAlign: 'center',
  },
  termsOfService: {
    color: '#3589F8',
    textDecorationLine: 'underline',
  },
});
