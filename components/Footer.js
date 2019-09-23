import React, { Component } from "react";
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { Actions } from "react-native-router-flux";

import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button
} from "native-base";

export default class MyFooter extends Component {
  render() {
    return (
      <Footer>
        <FooterTab style={{backgroundColor:'#ecf0f1'}}>
          <Button onPress={() => {Actions.home()}} >
            <IconEntypo name="home" color="#666" size={25}/>
          </Button>
          <Button onPress={() => {Actions.ciencia()}}>
            <IconEntypo name="lab-flask" color="#666" size={25}/>
          </Button>
          <Button onPress={() => {Actions.negocios()}}>
            <IconFontAwesome5 name="suitcase" color="#666" size={25}/>
          </Button>
          <Button onPress={() => {Actions.entretenimento()}}>
            <IconFontAwesome5 name="theater-masks" color="#666" size={25}/>
          </Button>
          <Button onPress={() => {Actions.saude()}}>
            <IconEntypo name="heart-outlined" color="#666" size={25}/>
          </Button>
          <Button onPress={() => {Actions.tecnologia()}}>
            <IconFontAwesome5 name="robot" color="#666" size={25}/>
          </Button>
          <Button onPress={() => {Actions.sporte()}}>
            <IconFontAwesome name="soccer-ball-o" color="#666" size={25}/>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
