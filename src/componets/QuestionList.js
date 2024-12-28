import React from 'react';
import { View, Button } from 'react-native';
import QuestionEditor from './QuestionEditor';

const QuestionList = ({ questions, setQuestions }) => {
  const updateQuestion = (index, updatedQuestion) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = updatedQuestion;
    setQuestions(updatedQuestions);
  };

  const deleteQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  const addQuestion = (type) => {
    setQuestions([...questions, { type, content: '', image: '' }]);
  };

  return (
    <View>
      {questions.map((q, index) => (
        <QuestionEditor
          key={index}
          question={q}
          index={index}
          updateQuestion={updateQuestion}
          deleteQuestion={deleteQuestion}
        />
      ))}
      <Button title="Add Text Question" onPress={() => addQuestion('Text')} />
      <Button title="Add Grid Question" onPress={() => addQuestion('Grid')} />
      <Button title="Add CheckBox Question" onPress={() => addQuestion('CheckBox')} />
    </View>
  );
};

export default QuestionList;
