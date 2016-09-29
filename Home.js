/**
 * @flow
 */
import React, {Component} from 'react';
import {
  AppRegistry, StyleSheet,
  Text, StatusBar,
  View, Image,
  Alert, TouchableHighlight
} from 'react-native';
import Svg, {
  Circle,
  G,
  Path,
} from 'react-native-svg';
import _styles from './styles';

const styles = StyleSheet.create(_styles);

const muskelManIcon = <Svg
  height="80"
  width="80" viewBox="0 0 80 80">
  <G>
    <G>
      <G>
        <Circle fill="white" cx="36.966" cy="19.113" r="6.036" />
      </G>
    </G>
    <Path fill="white" d="M69.054,0.584l-3.222-0.521c-2.697-0.435-5.26,1.416-5.694,4.111l-0.599,3.707c-20.264-4.665-39.78-1.702-45.935-0.535
    l-0.513-3.172c-0.435-2.695-2.997-4.546-5.693-4.111L4.176,0.584C1.478,1.019-0.371,3.582,0.063,6.278l1.501,9.296
    c0.435,2.695,2.997,4.546,5.694,4.11l3.223-0.52c2.695-0.437,4.546-2.997,4.111-5.693l-0.311-1.928
    c1.015-0.189,2.467-0.439,4.267-0.693c0.375,5.2,2.025,12.335,7.377,22.669l5.354,9.318c-0.33,0.396-8.793,13.146-9.94,22.339
    c-0.139,1.118,0.714,2.131,1.927,2.324c0.05,0.008,0.1,0.015,0.15,0.019c1.294,0.132,2.459-0.705,2.604-1.868
    c0.846-6.782,8.606-15.69,11.044-18.35c2.627,2.889,10.023,11.521,10.851,18.138c0.096,0.765,0.636,1.382,1.357,1.682
    c0.461,0.301,1.038,0.461,1.648,0.398c0.05-0.004,0.102-0.011,0.15-0.019c1.212-0.193,2.066-1.206,1.927-2.324
    c-1.147-9.192-9.611-21.942-9.941-22.339l5.355-9.318c5.158-9.963,6.873-16.947,7.327-22.094c1.039,0.2,2.081,0.413,3.122,0.656
    l-0.224,1.39c-0.435,2.696,1.415,5.257,4.112,5.693l3.222,0.52c2.697,0.435,5.26-1.415,5.695-4.11l1.499-9.296
    C73.6,3.582,71.751,1.019,69.054,0.584z M41.276,27.297l-0.214,0.059c-0.004,0.002-0.055,0.019-0.135,0.043l-2.917,0.391
    c-0.271,0.042-0.545,0.068-0.815,0.081c-0.01,0-0.018,0.002-0.027,0.003c-0.01-0.001-0.02-0.003-0.028-0.003
    c-0.271-0.013-0.545-0.039-0.817-0.081c-0.163-0.024-0.324-0.021-0.48-0.005c-0.691-0.065-1.355-0.158-1.923-0.25
    c-0.398-0.097-0.641-0.175-0.647-0.179l-0.214-0.059c-7.507-1.578-9.615-11.743-10.209-16.601
    c8.792-1.28,17.185-1.242,23.915-0.783c1.747,0.137,3.496,0.323,5.232,0.555c-0.236,2.454-0.962,7.171-3.12,11.029
    C47.031,24.297,44.528,26.614,41.276,27.297z" />
  </G>
</Svg>;

const cutleryIcon = <Svg
  height="80"
  width="80" viewBox="0 0 80 80">
  <G>
    <Path fill="white" d="M39.106,32.898c-2.386-2.472-3.833-5.58-4.075-8.749c-0.24-3.212,0.784-6.1,2.886-8.13L54.507,0l3.069,3.181l-14.39,13.888
    c-1.034,1.147-1.982,2.883-0.457,4.464c0.084,0.106,0.148,0.197,0.266,0.32c0.321,0.332,0.868,0.732,1.655,0.738
    c1.002,0.008,2.133-0.606,3.361-1.832l0.842-0.841l0.01,0.053L61.699,7.578l3.512,3.642L51.084,24.856
    c-2.242,2.349-1.474,3.85-0.813,4.534c0.112,0.116,0.196,0.182,0.211,0.19c0.652,0.662,1.265,0.943,1.957,0.936
    c1.624-0.024,3.12-1.636,3.134-1.656l0.022,0.019l13.867-13.385l3.064,3.173L55.933,34.684
    C51.622,38.844,44.072,38.043,39.106,32.898L39.106,32.898z" />
    <G>
      <Path fill="white" d="M23.105,48.347l-2.638-3.501L4.755,60.189c-1.319,1.273-1.356,3.381-0.087,4.696l0.659,0.682
      c1.27,1.319,3.38,1.356,4.7,0.082L25.74,50.307C24.705,49.885,23.786,49.22,23.105,48.347z" />
    </G>
    <Path fill="white" d="M60.456,65.648c-1.321,1.274-3.429,1.237-4.702-0.084L36.843,45.968c-0.835-0.865-2.44-1.123-3.507-0.562l-1.568,0.835
    c-1.569,0.833-3.732,0.368-4.823-1.035L1.886,11.968c-1.084-1.403-1.122-3.629-0.088-5.064l1.311-1.83
    c0.117-0.161,0.244-0.31,0.381-0.44c1.156-1.114,2.886-1.065,4.028,0.119l53.701,55.539c1.271,1.319,1.235,3.427-0.079,4.697
    L60.456,65.648z" />
  </G>
</Svg>;

function notImplemented() {
  Alert.alert(
    'Ei toteutettu', '',
    [
      {text: 'OK', onPress: () => console.log('OK Pressed')}
    ]
  )
}

const NaviBox = props =>
  <TouchableHighlight style={[styles.navBox, props.dark && styles.darkNavBox]} onPress={props.onPress || notImplemented}>
    <View style={styles.navBoxInner}>
      <View style={styles.navBoxIconHolder}>{props.icon}</View>
      <Text onPress={props.onPress} style={styles.navBoxTitle}>{props.title || 'DEFAULT'}</Text>
    </View>
  </TouchableHighlight>;

export default class Home extends Component {
  render() {
    return (
      <Image source={require('./camo_bg.png')} style={styles.container}>
        <View style={styles.homeContent}>
          <View style={styles.flexRow}>
            <NaviBox onPress={() => this.props.onForward(1)}
              icon={muskelManIcon} title="TIEDOTTEET" />
            <NaviBox onPress={() => this.props.onForward(2)}
              icon={cutleryIcon} title="VIIKKO-OHJELMA" />
          </View>
          <View style={styles.flexRow}>
            <NaviBox icon={muskelManIcon} title="TULOKSET" />
            <NaviBox icon={cutleryIcon} title="TREENIOHJELMA" />
          </View>
          <View style={styles.flexRow}>
            <NaviBox icon={muskelManIcon} title="RUOKA" />
            <NaviBox icon={cutleryIcon} title="INFO" />
          </View>
          <View style={styles.flexRow}>
            <NaviBox dark title="LOMAKKEET" />
            <NaviBox dark title="MUUTA" />
          </View>
        </View>
      </Image>
    );
  }
}


