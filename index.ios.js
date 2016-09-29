/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Navigator
} from 'react-native';
import Drawer from 'react-native-drawer'
import Home from './Home';
import Announcements from './Announcements';
import _styles from './styles';

class MobilePoC extends Component {
  closeControlPanel = () => {
    this._drawer.close()
  };

  openControlPanel = () => {
    this._drawer.open()
  };

  render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={
          <View style={styles.drawerNav}>
            <Text style={styles.navCloseButton} onPress={this.closeControlPanel}>✕</Text>
            <Text style={styles.bigText}>
              Täällä ei vielä mitään.
            </Text>
          </View>
        }>
        <StatusBar
          barStyle="light-content"
        />
        <View style={styles.titleBar}>
          <Text
            style={styles.hamburger}
            onPress={this.openControlPanel}>≡</Text>
          <Text style={styles.title}>Mobile PoC</Text>
          <View style={styles.dummyPlaceholder} />
        </View>
        <Navigator
          initialRoute={{ index: 0 }}
          renderScene={({index}, navigator) => {
            const handleForward = idx => {
                navigator.push({
                  index: idx
                });
              };
             const handleBack = () => {
                if (index > 0) {
                  navigator.pop();
                }
              };
            return {
              [0]: <Home onForward={handleForward} />,
              [1]: <Announcements onBack={handleBack} />,
              [2]: <Announcements onBack={handleBack} />
            }[index];
          }} />
      </Drawer>
    );
  }
}

const styles = StyleSheet.create(_styles);

AppRegistry.registerComponent('MobilePoC', () => MobilePoC);
