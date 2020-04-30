import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  let [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: 'increment', payload: 1 })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: 'decrement', payload: 1 })}
      />
      <Text style={StyleSheet.textStyle}>Current Count: {state.count}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default CounterScreen;
