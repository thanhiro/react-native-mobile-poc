/**
 * @flow
 */
import React, {Component} from 'react';
import {
  AppRegistry, StyleSheet,
  Text, StatusBar,
  View, Image, ListView,
  Alert, TouchableHighlight
} from 'react-native';
import _styles from './styles';

const styles = StyleSheet.create(_styles);

export default class Announcements extends Component {
  constructor() {
    super();
    this.state = {dataSource: null};
  }

  async getDataFromApi() {
    console.log('getDataFromApi');
    try {
      let response = await fetch('https://api.icndb.com/jokes/random/10');
      let responseJson = await response.json();
      return responseJson.value;
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
    this.getDataFromApi().then(d => {
      this.setState({
        dataSource: ds.cloneWithRows(d)
      });
    });
  }

  render() {
    return (
      <Image source={require('./camo_bg.png')} style={styles.container}>
        <View style={styles.innerScene}>
          <View style={styles.subTitleBar}>
            <Text
              style={styles.backLink}
              onPress={this.props.onBack}>‹</Text>
            <Text style={styles.title}>Tiedotteet</Text>
            <View style={styles.dummyPlaceholder} />
          </View>
          {this.state.dataSource &&
          <ListView
            dataSource={this.state.dataSource}
            renderRow={data => <View style={styles.listRow} >
              <Text style={styles.listRowText}>{data.joke}</Text>
            </View>}
          />}
        </View>
      </Image>
    );
  }
}


