import React from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import Heading from '../Heading/Heading';

export default function LoadingScreen() {
  let opacity = new Animated.Value(0);

  const animate = (easing) => {
    opacity.setValue(0);
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: false,
      easing
    }).start();
  };

  const size = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 80]
  });

  const animatedStyles = [
    styles.box,
    {
      opacity,
      width: size,
      height: size
    }
  ];

  return (
    <View style={styles.container}>
      <Heading text={'Loading...'}/>
      <View
        style={styles.boxContainer}
        onLayout={() => animate(Easing.elastic(3))}
      >
        <Animated.View style={animatedStyles} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff3e6',
    alignItems: 'stretch',
    padding: 20,
    justifyContent: 'center'
  },
  boxContainer: {
    height: 160,
    alignItems: 'center'
  },
  box: {
    marginTop: 32,
    borderRadius: 5,
    backgroundColor: '#c1a1d3'
  }
});
