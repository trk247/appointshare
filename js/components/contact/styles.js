'use strict';

var React = require('react-native');

var { StyleSheet } = React;

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
    },
    textarea: {
      height:200,
      backgroundColor: '#fff',
      alignItems:'center', 
      justifyContent:'center',
      color: '#000',
      marginRight:40,
      marginLeft:40,
      marginTop:10,
      paddingTop:10,
      paddingBottom:10,
      borderRadius:6,
      borderWidth: 1,
      borderColor: '#fff'
    },
    input: {
      marginTop:10,
      marginLeft: 10,
      marginRight: 10,
      backgroundColor: '#fff'
    },
  submit: {
    marginTop: 10,
    // backgroundColor: '#0097d6'
    
  }
    
    

});
