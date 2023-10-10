import React from 'react';
import {View, Pressable, Text} from 'react-native';
import {
  useAppActive,
  useAppInactive,
  useMount,
  useShow,
  useHide,
  useUnmount,
  useResize,
} from 'react-native-lifecycle';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();

  const onClick = () => {
    navigation.navigate('/user/index');
  };

  // Called when the application switches from the background to the foreground
  useAppActive(() => {
    console.log('Home useAppActive');
  });

  // Called when the application switches from the foreground to background
  useAppInactive(() => {
    console.log('Home useAppInactive');
  });

  // Called when the component is mounted
  useMount(() => {
    console.log('Home useMount');
  });

  // Called when the page is displayed, or when the application switches from the background to the foreground
  useShow(() => {
    console.log('Home useShow');
  });

  // Called when the page is hidden, or when the application switches from the foreground to the background
  useHide(() => {
    console.log('Home useHide');
  });

  // Called when the component is unmounted
  useUnmount(() => {
    console.log('Home useUnmount');
  });

  // Called after the page window resize
  useResize(() => {
    console.log('Home useResize');
  });

  return (
    <View>
      <Pressable onPress={onClick}>
        <Text>home/index</Text>
      </Pressable>
    </View>
  );
};
