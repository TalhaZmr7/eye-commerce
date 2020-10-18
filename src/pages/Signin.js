import React, { Component } from 'react';
import { TextInput, StyleSheet, View, Text, Button, Alert, TouchableOpacity, TouchableWithoutFeedback, Keyboard,KeyboardAvoidingView  } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Signin extends Component{

  constructor(props){
    
    super(props);

    this.state={
      email:'',
      emailValidate:true,
      password:'',
      passwordValidate:true,
    };

  }

  validate(text,type)
  {
      
      em=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      num=/^[0-9a-zA-Z]+$/
      
      if(type=='email')
      {
          if(email.test(text))
          {
            this.setState({
              emailValidate:true,
            })  
           
          }
          else
          {
            this.setState({
              emailValidate:false,
            })
          }
      }
      else if(type=='password')
      {
          if(num.test(text))
          {
            this.setState({
              passwordValidate:true,
            })  
           
          }
          else
          {
            this.setState({
              passwordValidate:false,
            })
          }
        }
      }
  // submit = () =>{
  //   Alert.alert(this.state.email + this.state.password);
  // }
  render(){
    const {navigate} = this.props.navigation;
    // const {email,password} =this.state;
    return(
      <KeyboardAvoidingView  style={{ flex: 1 }}
      behavior="padding">
      <TouchableWithoutFeedback onPress={() =>  {
        Keyboard.dismiss();
      } }>
      <View style={styles.container}>
        <Logo/>
        
          
          <View style={{padding: 10}}>
              <TextInput style={[styles.inputBox, ! this.state.emailValidate? styles.error:null]}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Email Addres"
                placeholderTextColor = "#ffffff"
                selectionColor="#fff"
                keyboardType="email-address"
                onChangeText={text=>this.validate(text,'email')}/>
              <TextInput style={[styles.inputBox, ! this.state.passwordValidate? styles.error:null]}
               placeholder="Password"
               placeholderTextColor = "#ffffff" 
               underlineColorAndroid='rgba(0,0,0,0)'
               secureTextEntry 
               autoCorrect={false} 
               onChangeText={text=>this.validate(text,'password')}
               maxLength = {12}
              />
          </View>
          <View style={styles.Signinbutton}>
            <TouchableOpacity  onPress={() => navigate('Home')}>
              <Text style={styles.SigninText} >Sign In</Text>
            </TouchableOpacity>
          {/* <Button title= "Sign In" onPress={this.submit}/> */}
          </View>
          <View style={styles.signupTextCont}>
          <Text style={styles.signupText}> Don't have an Account</Text>

            <TouchableOpacity onPress={() => navigate('Signup')}>
              <Text style={styles.signupButton}> Sign UP </Text>          
            </TouchableOpacity>
          </View>
      </View>
   </TouchableWithoutFeedback>
  </KeyboardAvoidingView >
  );
  }
  
}


  


const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    flexGrow: 1,
    alignItems:'center',
    justifyContent :'center'   
  },

  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },

  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:18
  },
  
  signupButton: {  
    color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  },
  inputBox: {
    width:300,
    height:50,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  Signinbutton: {
    fontSize:20,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center',
    width:300,
    height: 50,
    backgroundColor:'#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 10
  },
  inputText:{
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  SigninText:{
    width:300,
    fontSize:16,
    color:'#ffffff',
    textAlign:'center',
    paddingTop:5
  },
  error:{
    borderWidth:3,
    borderColor:'red'
}
  
});