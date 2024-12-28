import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getResponses } from '../services/api';

const FormResponseScreen = ({ route }) => {
  const { formId } = route.params;
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const fetchResponses = async () => {
      const response = await getResponses(formId);
      setResponses(response);
    };
    fetchResponses();
  }, [formId]);

  return (
    <View className="p-4">
      {responses.map((response, index) => (
        <View key={index} className="mb-4">
          <Text>Response {index + 1}</Text>
          <Text>{JSON.stringify(response.answers)}</Text>
        </View>
      ))}
    </View>
  );
};

export default FormResponseScreen;
