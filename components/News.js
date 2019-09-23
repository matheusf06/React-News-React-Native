import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";

function News ({ title }){
  return (
      <ImageBackground
        source={{ uri: "https://artfiles.alphacoders.com/121/121464.jpg" }}
        style={styles.imagem}
      >
        <View style={styles.txtView}>
          <Text style={styles.txt}>{title}</Text>
        </View>
      </ImageBackground>
    );
}


const styles = StyleSheet.create({
  imagem: {
    height: 300,
    width: null,
    flex: 1,
    marginVertical: 15
  },
  txtView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start"
  },
  txt: {
    color: "#FFF",
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.4)"
  }
});


export default News;
