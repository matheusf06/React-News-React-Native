import React, { Component } from "react";
import {
  ImageBackground,
  View,
  Alert,
  StyleSheet,
  RefreshControl,
  FlatList,
  TouchableWithoutFeedback,
  Linking,
} from "react-native";

import { Subheading } from 'react-native-paper';

import axios from "axios";

export default class Health extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dado: [],
      refreshing: true
    };
    this.getData();
  }

  getData() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=br&category=health&apiKey=1bc6aeb4cdcd4185a6aef6921082eaec"
      )
      .then(res => {
        this.setState({ dado: res.data.articles });
        this.setState({ refreshing: false });
      })
      .catch(err => {
        this.setState({ refreshing: false });
        Alert.alert(err);
      });
  }

  onRefresh() {
    this.setState({ dado: [] });
    this.getData();
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ecf0f1' }}>
        <FlatList
          data={this.state.dado}
          renderItem={({ item }) => (
            <View>
              <TouchableWithoutFeedback
                onPress={() =>
                  Alert.alert(
                    item.title,
                    item.description,
                    [
                      {text: 'Compartilhar', onPress: () => Share.share({ message: item.url.toString() })},
                      {text: 'Voltar', onPress: () => console.log('Voltar para as notícias')},
                    ],
                    {cancelable: false},
                    )}>
                <ImageBackground
                  source={{ uri: item.urlToImage? item.urlToImage : 'https://www.uergs.edu.br/themes/modelo-noticias/images/outros/GD_imgSemImagem.png?classificacao=34747' }}
                  style={styles.imagem}
                >
                  <View style={styles.txtView}>
                    <Subheading style={styles.txt}>{item.title}</Subheading>
                  </View>
                </ImageBackground>
              </TouchableWithoutFeedback>

            </View>
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh.bind(this)}
            />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imagem: {
    height: 300,
    width: null,
    flex: 1,
    marginBottom: 10
  },
  txtView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start"
  },
  txt: {
    color: "#FFF",
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.5)"
  }
});
