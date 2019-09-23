import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';

import { Provider as PaperProvider, Dialog, Portal } from 'react-native-paper';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

export default class MyCard extends Component {
  render() {
    if(this.props.id == this.props.dado.title ){
      return (
      <PaperProvider>
        <Portal>
          <Dialog visible={this.props.visible} onDismiss={this._hideDialog}>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail
                    source={{
                      uri: 'https://newsapi.org/images/n-logo-border.png',
                    }}
                  />
                  <Body>
                    <Text>{this.props.dado.title}</Text>
                    <Text note>{this.props.dado.source.name}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image
                  source={{
                    uri: 'https://artfiles.alphacoders.com/121/121464.jpg',
                  }}
                  style={styles.imagem}
                />
              </CardItem>
              <CardItem>
                <Body>
                  <Text>{this.props.dado.description}</Text>
                </Body>
                <Button transparent textStyle={{ color: '#87838B' }}>
                  <IconFontAwesome
                    name="external-link"
                    color="#87838B"
                    size={25}
                  />
                  <Text>Link</Text>
                </Button>
              </CardItem>
            </Card>
          </Dialog>
        </Portal>
      </PaperProvider>
    );
    }
  }
}

const styles = StyleSheet.create({
  imagem: {
    height: 200,
    width: null,
    flex: 1,
    marginVertical: 10,
  },
});
