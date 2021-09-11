import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

import AppHeader from '../components/AppHeader';
import db from '../config';

export default class HomeScreen extends Component {
  teamA() {
    db.ref('/').update({
      teamA: 1,
    });
  }

  teamB() {
    console.log(db);
    db.ref('/').update({
      teamB: 2,
    });
  }

  render() {
    return (
      <View>
        <AppHeader />
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity>
              <Image
                style={{ width: 300, height: 220, marginLeft: 5 }}
                source={require('../assets/TeamImage.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.ratingContainer}>
            <Text style={{ textAlign: 'center', fontSize: 25 }}>Vote Here</Text>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <TouchableOpacity style={styles.buttons} onPress={this.teamA()}>
                <Text style={{ fontSize: 20 }}>Team A</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttons} onPress={this.teamB()}>
                <Text style={{ fontSize: 20 }}>Team B</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ textAlign: 'center', fontSize: 25 }}>Rating</Text>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Image
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  margin: 10,
                  width: 40,
                  height: 40,
                  marginLeft: 100,
                }}
                source={require('../assets/thumbs-up-hand-symbol.png')}
              />
              <Image
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  margin: 10,
                  width: 40,
                  height: 40,
                }}
                source={require('../assets/thumbs-down-silhouette.png')}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    backgroundColor: 'coral',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 15,
    margin: 10,
    width: 130,
    height: 50,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});
