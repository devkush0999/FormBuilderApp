import React from 'react';
import { View, TextInput, Button } from 'react-native';

const QuestionEditor = ({ question, index, updateQuestion, deleteQuestion }) => {
  return (
    <View className="border p-4 mb-4 rounded bg-gray-100">
      <TextInput
        className="border p-2 mb-2"
        placeholder={`Question ${index + 1} Content`}
        value={question.content}
        onChangeText={(text) => updateQuestion(index, { ...question, content: text })}
      />
      {question.type !== 'Text' && (
        <TextInput
          className="border p-2 mb-2"
          placeholder={`Question ${index + 1} Image URL`}
          value={question.image}
          onChangeText={(text) => updateQuestion(index, { ...question, image: text })}
        />
      )}
      <Button title="Delete Question" color="red" onPress={() => deleteQuestion(index)} />
    </View>
  );
};

export default QuestionEditor;
