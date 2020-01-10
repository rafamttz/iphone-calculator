/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.body}>
        <View style={styles.result}>
          <Text style={styles.resultContent}>0</Text>
        </View>
        <View style={styles.keyboard}>
          <View style={styles.keyboardSpace}>
            <View style={styles.specialKeycap}>
              <Text style={styles.specialKeycapText}>AC</Text>
            </View>
            <View style={styles.specialKeycap}>
              <Text style={styles.specialKeycapText}>+/−</Text>
            </View>
            <View style={styles.specialKeycap}>
              <Text style={styles.specialKeycapText}>%</Text>
            </View>
            <View style={styles.keyCap}>
              <Text style={styles.keycapText}>÷</Text>
            </View>
          </View>
          <View style={styles.keyboardSpace}>
            <View style={styles.numberKeycap}>
              <Text style={styles.keycapText}>7</Text>
            </View>
            <View style={styles.numberKeycap}>
              <Text style={styles.keycapText}>8</Text>
            </View>
            <View style={styles.numberKeycap}>
              <Text style={styles.keycapText}>9</Text>
            </View>
            <View style={styles.keyCap}>
              <Text style={styles.keycapText}>×</Text>
            </View>
          </View>
          <View style={styles.keyboardSpace}>
            <View style={styles.numberKeycap}>
              <Text style={styles.keycapText}>4</Text>
            </View>
            <View style={styles.numberKeycap}>
              <Text style={styles.keycapText}>5</Text>
            </View>
            <View style={styles.numberKeycap}>
              <Text style={styles.keycapText}>6</Text>
            </View>
            <View style={styles.keyCap}>
              <Text style={styles.keycapText}>−</Text>
            </View>
          </View>
          <View style={styles.keyboardSpace}>
            <View style={styles.numberKeycap}>
              <Text style={styles.keycapText}>1</Text>
            </View>
            <View style={styles.numberKeycap}>
              <Text style={styles.keycapText}>2</Text>
            </View>
            <View style={styles.numberKeycap}>
              <Text style={styles.keycapText}>3</Text>
            </View>
            <View style={styles.keyCap}>
              <Text style={styles.keycapText}>+</Text>
            </View>
          </View>
          <View style={styles.keyboardSpace}>
            <View style={styles.zeroKeycap}>
              <Text style={styles.keycapText}>0</Text>
            </View>
            <View style={styles.numberKeycap}>
              <Text style={styles.keycapText}>.</Text>
            </View>
            <View style={styles.keyCap}>
              <Text style={styles.keycapText}>=</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    borderLeftWidth: 10,
    borderRightWidth: 10,
  },
  result: {
    flex: 1.6,
    backgroundColor: Colors.black,
    alignItems: 'flex-end',
  },
  resultContent: {
    color: Colors.white,
    fontSize: 70,
    paddingTop: 60,
    paddingRight: 15,
    fontFamily: 'Helvetica-Light',
    fontWeight: '100',
  },
  keyboard: {
    flex: 4,
    backgroundColor: Colors.black,
    justifyContent: 'space-between',
  },
  keyboardSpace: {
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  numberKeycap: {
    height: 75,
    width: 75,
    backgroundColor: '#505050',
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyCap: {
    height: 75,
    width: 75,
    backgroundColor: '#FF9500',
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  specialKeycap: {
    height: 75,
    width: 75,
    backgroundColor: '#D4D4D2',
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  zeroKeycap: {
    height: 75,
    width: 162,
    backgroundColor: '#505050',
    borderRadius: 75,
    justifyContent: 'center',
    paddingLeft: 25,
  },
  keycapText: {
    color: Colors.white,
    fontSize: 35,
    fontWeight: '100',
    fontFamily: 'Helvetica',
  },
  specialKeycapText: {
    color: Colors.black,
    fontSize: 35,
    fontWeight: '100',
    fontFamily: 'Helvetica',
  },
});

export default App;
