import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from './AuthContext'; 

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const { login, isLoggedIn, user } = useAuth()


  useEffect(() => {
    if (isLoggedIn) {
     
      navigation.reset({ index: 0, routes: [{ name: 'OneStopShop' }] });
    }
  }, [isLoggedIn, user, navigation]);

  const handleLogin = async (): Promise<void> => {
    try {
      await login(email, password);
      
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.logo}>OneStopShop</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#000000"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#000000"
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupBtn} onPress={handleSignup}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.reset({ index : 0, routes : [{name : 'OneStopShop'}]})}>
          <Text>Login as Guest</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66BB6A',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  subContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 50,
    color: '#fff',
    marginBottom: 40,
  },
  inputView: {
    width: '60%',
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#000000',
  },
  loginBtn: {
    width: '30%',
    backgroundColor: '#000a00',
    borderRadius: 15,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: '#fafafa',
    fontSize: 18,
  },
  signupBtn: {
    width: '30%',
    backgroundColor: '#0c610c',
    borderRadius: 15,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    color: '#fafafa',
    fontSize: 18,
  },
});

export default Login;
