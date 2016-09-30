'use strict';

import React, { Component } from 'react';
import { Image, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';

import { Container, Header, Title, Content, Text, Button, Icon, Card, CardItem, View } from 'native-base';

import theme from '../../themes/base-theme';
import styles from './styles';


import ModalPicker from 'react-native-modal-picker'


class Settings extends Component {

  constructor(props) {
      super(props);
      this.state = {
        selectedItem: undefined,
          time: 'key0',
          results: {
                items: []
            }
      };
      
  }

    popRoute() {
        this.props.popRoute();
    }

    onValueChange (value: string) {
        this.setState({
            time : value
        });
    }
    
    setTime() {
      
    }
    
    render() {
      let index = 0;
      const data = [
          // { key: index++, section: true, label: 'Fruits' },
          { key: index++, label: '8 AM' },
          { key: index++, label: '9 AM' },
          { key: index++, label: '10 AM' },
          { key: index++, label: '11 AM' },
          { key: index++, label: '12 AM' },
          { key: index++, label: '1 PM' },
          { key: index++, label: '2 PM' },
          { key: index++, label: '3 PM' },
          { key: index++, label: '4 PM' },
          { key: index++, label: '5 PM' },
      ];
      return (
        <Container theme={theme} style={{backgroundColor: '#384850'}}>
            <Image source={require('../../../images/glow2.png')} style={styles.container} >
                <Header>
                    <Button transparent onPress={() => this.popRoute()}>
                        <Icon name='ios-arrow-back' style={{fontSize: 30, lineHeight: 32}} />
                    </Button>

                    <Title>Settings</Title>

                    <Button transparent onPress={this.props.openDrawer}>
                        <Icon name='ios-menu' style={{fontSize: 30, lineHeight: 32}} />
                    </Button>
                </Header>
        
           <View style={{flex:1, marginTop:20, padding:5}}>

               <ModalPicker
                   data={data}
                   initValue="Set Favorite Appointment Times"
                   style={{backgroundColor:'#fff'}}
                   onChange={(option)=>{ 
                    //  alert(`${option.label} (${option.key}) nom nom nom`) 
                  }} />
                  
                  
                  <Button rounded block style={{marginTop: 20}} 
                  // onPress={() => this.replaceRoute('home', {email: this.state.email, password: this.state.password})}
                  // onPress={() => this.signIn()}
                  >
                      Save
                  </Button>

           </View>
           </Image>
           </Container>
       );
        return (
            <Container theme={theme} style={{backgroundColor: '#384850'}}>
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>
                        <Button transparent onPress={() => this.popRoute()}>
                            <Icon name='ios-arrow-back' style={{fontSize: 30, lineHeight: 32}} />
                        </Button>

                        <Title>Settings</Title>

                        <Button transparent onPress={this.props.openDrawer}>
                            <Icon name='ios-menu' style={{fontSize: 30, lineHeight: 32}} />
                        </Button>
                    </Header>

                    <Container>
                  <Content>
                      <Picker
                          iosHeader="Select one"
                          mode="dropdown"
                          selectedValue={this.state.time}
                          onValueChange={this.onValueChange.bind(this)}>
                          <Picker.Item label="Set Favorite Appointment Time" style={{backgroundColor:'#fff'}} value="key0" />
                          <Picker.Item label="9 AM" value="key1" />
                          <Picker.Item label="10 AM" value="key2" />
                          <Picker.Item label="11 AM" value="key3" />
                          <Picker.Item label="12 AM" value="key4" />
                          <Picker.Item label="1 PM" value="key5" />
                          <Picker.Item label="2 PM" value="key6" />
                          <Picker.Item label="3 PM" value="key7" />
                     </Picker>
                     
                     <Button rounded block style={{marginBottom: 20}} textStyle={{color: '#00c497'}} 
                       // onPress={() => this.signIn()}
                     >
                         Set
                     </Button>
                     
                     
                  </Content>
              </Container>
                </Image>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        popRoute: () => dispatch(popRoute())
    }
}

export default connect(null, bindAction)(Settings);
