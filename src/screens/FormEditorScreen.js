import React, { useState } from 'react';
import { View, TextInput, Button, ScrollView } from 'react-native';
import { createForm } from '../services/api';

const FormEditorScreen = ({ navigation }) => {
  const [formTitle, setFormTitle] = useState('');
  const [headerImage, setHeaderImage] = useState('');
  const [questions, setQuestions] = useState([]);

  const addQuestion = (type) => {
    setQuestions([...questions, { type, content: '', image: '' }]);
  };

  const handleCreateForm = async () => {
    try {
      const formData = { title: formTitle, headerImage, questions };
      const response = await createForm(formData);
      navigation.navigate('FormPreview', { formId: response._id });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView className="p-4">
      <TextInput
        className="border p-2 mb-4"
        placeholder="Form Title"
        value={formTitle}
        onChangeText={setFormTitle}
      />
      <TextInput
        className="border p-2 mb-4"
        placeholder="Header Image URL"
        value={headerImage}
        onChangeText={setHeaderImage}
      />
      {questions.map((q, index) => (
        <View key={index} className="mb-4">
          <TextInput
            className="border p-2"
            placeholder={`Question ${index + 1} Content`}
            value={q.content}
            onChangeText={(text) =>
              setQuestions((prev) =>
                prev.map((item, idx) => (idx === index ? { ...item, content: text } : item))
              )
            }
          />
        </View>
      ))}
      <Button title="Add Text Question" onPress={() => addQuestion('Text')} />
      <Button title="Add Grid Question" onPress={() => addQuestion('Grid')} />
      <Button title="Add CheckBox Question" onPress={() => addQuestion('CheckBox')} />
      <Button title="Create Form" onPress={handleCreateForm} />
    </ScrollView>
  );
};

export default FormEditorScreen;
