import React from 'react';
import {View, Text} from 'react-native';
import {
  useAppActive,
  useAppInactive,
  useHide,
  useMount,
  useResize,
  useShow,
  useUnmount,
} from 'react-native-lifecycle';
import {Hoc} from '../../../components';

const Index = () => {
  // Called when the application switches from the background to the foreground
  useAppActive(() => {
    console.log('User useAppActive');
  });

  // Called when the application switches from the foreground to background
  useAppInactive(() => {
    console.log('User useAppInactive');
  });

  // Called when the component is mounted
  useMount(() => {
    console.log('User useMount');
  });

  // Called when the page is displayed, or when the application switches from the background to the foreground
  useShow(() => {
    console.log('User useShow');
  });

  // Called when the page is hidden, or when the application switches from the foreground to the background
  useHide(() => {
    console.log('User useHide');
  });

  // Called when the component is unmounted
  useUnmount(() => {
    console.log('User useUnmount');
  });

  // Called after the page window resize
  useResize(() => {
    console.log('User useResize');
  });

  return (
    <View>
      <Text>/user/index</Text>
    </View>
  );
};

export default Hoc(Index);
