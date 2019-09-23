import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Head = () => (
  <View style={styles.viewTitulo}>
    <Text style={styles.titulo}>React News</Text>
  </View>
);

const styles = StyleSheet.create({
  viewTitulo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#ecf0f1"
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#666',
    paddingBottom: 8,
  },
});

export default Head;
