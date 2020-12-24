import React from 'react';
import { Text, View } from 'react-native';

const ProfileScreen = ({navigation,route}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        {route.params.value}
      </Text>
    </View>
  );
}

export default ProfileScreen;