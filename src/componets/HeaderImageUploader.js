import React from 'react';
import { View, TextInput, Button, Image, Text } from 'react-native';

const HeaderImageUploader = ({ headerImage, setHeaderImage }) => {
  return (
    <View className="mb-4">
      <TextInput
        className="border p-2 mb-2"
        placeholder="Header Image URL"
        value={headerImage}
        onChangeText={setHeaderImage}
      />
      {headerImage ? (
        <Image source={{ uri: headerImage }} className="w-full h-40 mb-2" />
      ) : (
        <View className="w-full h-40 bg-gray-200 mb-2 flex items-center justify-center">
          <Text>No Image</Text>
        </View>
      )}
      <Button title="Clear Header Image" onPress={() => setHeaderImage('')} />
    </View>
  );
};

export default HeaderImageUploader;
