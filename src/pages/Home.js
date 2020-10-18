import React, { Component } from 'react';
import {TextInput, StyleSheet, View, Text, KeyboardAvoidingView,TouchableWithoutFeedback,Image, Keyboard, FlatList} 
        from 'react-native';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu"; 
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Home extends Component{
//  constructor(props) {
//    super(props);
    
//      this.state={
//      data: []
//    }
//  }

// componentDidMount(){
// this.getProucts();
// }
// getProucts=async ()=>{
//   const array=[{
//     id:1,
//     name:'aleem'
//   },{
//     id:2,name:'Talha'
//   }];
//     this.setState({data:array});
// };

   render(){

     <View>
       <Text> HOme Page</Text>
     </View>
      const {navigate} = this.props.navigation;
      return(
        <KeyboardAvoidingView  style={{ flex: 1 }}
        behavior="padding">
        <TouchableWithoutFeedback onPress={() =>  {
          Keyboard.dismiss();
        } }>
          <View>
         <View style={styles.container}>
         <MenuProvider style={{ flexDirection: "column" }}>
         <Menu onSelect={value => alert(`You Clicked : ${value}`)}>
          
          
      <MenuTrigger>
        <View style={{paddingRight:50}}>
          <View style={styles.SectionStyle}>
           <Image
					  source={require('../images/menu2.png')}
            style={styles.ImageStyle}
            />  
           <TextInput style={{ flex: 1, fontSize:20, color:'white' }}
               placeholder="Search Here"
               placeholderTextColor = "#ffffff" 
               underlineColorAndroid='rgba(0,0,0,0)'
               />
        </View> 
          </View>
      </MenuTrigger>
           
           
               
           
           <MenuOptions style={styles.menuContent} >
             <View style={styles.menuText}>
             <MenuOption>
                  <Image
					         source={require('../images/profIcon.png')}
                   style={{height: 40,width: 40,resizeMode: 'stretch', alignSelf:'center'}} />
                    <Text style={{color:'black', fontSize:20,paddingTop:5}}> Hello, Talha 
                    </Text>
            </MenuOption> 
              </View>
             
             <MenuOption value={"Home"}>
               <Text  style={styles.menuWrite}>Home</Text>
             </MenuOption>
             <MenuOption value={"Account"}>
               <Text style={styles.menuWrite} >Account</Text>
             </MenuOption>
             <MenuOption value={"Order"}>
               <Text style={styles.menuWrite}>Order</Text>
             </MenuOption>
             <MenuOption value={"Logout"}>
               <Text style={styles.menuWrite} >Logout</Text>
             </MenuOption>
           
             <MenuOption value={3} disabled={true}>
               <Text style={styles.menuContent}>Disabled Menu</Text>
             </MenuOption>
             
           </MenuOptions>
           
          
          
         </Menu>
         
      
       </MenuProvider>
       </View>
       <View>
         {/* <FlatList 
         data={this.state.data}

         renderItem={({ item }) => <View><Text>{item.id} </Text><Text>{item.name} </Text></View> } 
         
         /> */}
       </View>
       </View>
       </TouchableWithoutFeedback>
       </KeyboardAvoidingView>
     );
   }
    
} 



const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex:0,
    flexGrow: 1,
    justifyContent :'center', 
    paddingBottom: 150 
  },
 menuContent: {
   flex:1,
   backgroundColor:'white',
   color:'white',
   fontWeight: "bold",
   height:'100%',
   width:'100%'
  
},
menuText:{
  color:'white',
  fontSize:20,
  fontWeight:"bold",
  alignContent:"center",
  alignItems:'center',
  
},
SectionStyle: {
  flexDirection: 'row',
  backgroundColor:'#1c313a',
  borderWidth: 0.5,
  borderColor: '#000',
  height: 40,
  borderRadius: 5,
  margin: 30,
  width:330,
  color:'#1c313a',
  
},

ImageStyle: {
  margin: 7,
  height: 20,
  width: 25,
  resizeMode: 'stretch'
},
menuWrite:{
  color:'black',
  fontWeight:'bold', 
  paddingLeft:10,
  fontSize:15

}
});