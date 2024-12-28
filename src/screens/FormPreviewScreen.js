import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { getForm } from '../services/api';

const FormPreviewScreen = ({ route, navigation }) => {
  const { formId } = route.params;
  const [form, setForm] = useState(null);

  useEffect(() => {
    const fetchForm = async () => {
      const response = await getForm(formId);
      setForm(response);
    };
    fetchForm();
  }, [formId]);

  if (!form) return <Text>Loading...</Text>;

  return (
    <View className="p-4">
      <Text className="text-xl font-bold mb-4">{form.title}</Text>
      {form.questions.map((q, index) => (
        <View key={index} className="mb-4">
          <Text>{q.content}</Text>
        </View>
      ))}
      <Button title="View Responses" onPress={() => navigation.navigate('FormResponse', { formId })} />
    </View>
  );
};

export default FormPreviewScreen;
