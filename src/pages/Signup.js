import React, { Component } from 'react';
import { TextInput, StyleSheet, View, Text, Button, Alert, TouchableOpacity, TouchableWithoutFeedback, 
          Keyboard } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Logo from '../components/Logo';
import Header from '../components/Header';
// import Form from '../components/Form';

export default class Signup extends Component{

  constructor(props){
    super(props);

    this.state={
      name:'',
      nameValidate:true,
      lastName:'',
      lastNameValidate:true,
      email:'',
      emailValidate:true,
      password:'',
      passwordValidate:true,
    };

  }

  validate(text,type)
  {
      alph=/^[a-zA-Z]+$/
      num=/^[0-9a-zA-Z]+$/
      email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      
      if(type=='name')
      {
          if(alph.test(text))
          {
            this.setState({
                nameValidate:true,
            })  
           
          }
          else
          {
            this.setState({
                nameValidate:false,
            })
          }
      }
      else if(type=='lastName')
      {
          if(alph.test(text))
          {
            this.setState({
                lastNameValidate:true,
            })  
           
          }
          else
          {
            this.setState({
                lastNameValidate:false,
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
     else if(type=='email')
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
  }

//   submit = () =>{
//     Alert.alert(this.state.name + this.state.email + this.state.email + this.state.password);
//   }
  render(){
    const {navigate} = this.props.navigation;
    const {name,email,password} =this.state;
    return(
      <KeyboardAwareScrollView>
      <TouchableWithoutFeedback onPress={() =>  {
        Keyboard.dismiss();
      } }>
      <View style={styles.container}>
      <Header/>
        <Logo/>
        

          <View style={{padding:35}}>
          
            <TextInput style={[styles.inputBox,
                !this.state.nameValidate? styles.error:null]}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="First Name"
                placeholderTextColor = "#ffffff"
                selectionColor="#fff"
                onChangeText={text=>this.validate(text,'name')}
               
                />
                

            <TextInput style={[styles.inputBox, ! this.state.lastNameValidate? styles.error:null]}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Last Name"
                placeholderTextColor = "#ffffff"
                selectionColor="#fff"
                onChangeText={text=>this.validate(text,'lastName')}
                />    
         
            <TextInput  style={[styles.inputBox, ! this.state.emailValidate? styles.error:null]}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Email Addres"
                placeholderTextColor = "#ffffff"
                selectionColor="#fff"
                keyboardType="email-address"
                onChangeText={text=>this.validate(text,'email')}

                />
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
            <TouchableOpacity  onPress={this.submit}>
              <Text style={styles.SigninText} >Sign UP</Text>
            </TouchableOpacity>
          </View>
          
      </View>
      </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
      
  );
  }
  
}


  


const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex:0,
    flexGrow: 1,
    alignItems:'center',
    justifyContent :'center', 
    paddingBottom: 150 
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