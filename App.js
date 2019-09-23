import React, { Component } from "react";
import { View, StatusBar } from "react-native";

import Home from "./scenes/Home";
import Science from "./scenes/Science";
import Business from "./scenes/Business";
import Health from "./scenes/Health";
import Technology from './scenes/Technology';
import Sport from './scenes/Sport';
import Entertainment from './scenes/Entertainment';

import Footer from "./components/Footer";
import Head from "./components/Head";

import { Router, Stack, Scene } from "react-native-router-flux";

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }} >
        <StatusBar backgroundColor="#ecf0f1" barStyle="dark-content" />
        <Head style={{ flex: 0.1 }} />
        <Router style={{ flex: 0.8 }}>
          <Stack key="root">
            <Scene key="home" component={Home} hideNavBar />
            <Scene key="ciencia" component={Science} hideNavBar />
            <Scene key="negocios" component={Business} hideNavBar />
            <Scene key="entretenimento" component={Entertainment} hideNavBar />
            <Scene key="saude" component={Health} hideNavBar />
            <Scene key="tecnologia" component={Technology} hideNavBar />
            <Scene key="sporte" component={Sport} hideNavBar />
          </Stack>
        </Router>
        <Footer style={{ flex: 0.1 }} />
      </View>
    );
  }
}
