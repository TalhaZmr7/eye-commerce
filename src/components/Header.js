import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = props => {
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    header : {
        width: '100%',
        height:90,
        paddingTop:30,
        backgroundColor:'#455a64',
      

    },
    headerTitle:{
        color:'black',
        fontSize: 18
    }
});
export default Header;

