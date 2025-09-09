// This file is a duplicate. Please use screens/FormScreen.js only.

import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';

let studentId = '';
let fullName = '';
let course = '';
let yearLevel = '';

const FormScreen = () => {
  const handleSubmit = () => {
    Alert.alert('Submitted', `ID: ${studentId}\nName: ${fullName}\nCourse: ${course}\nYear: ${yearLevel}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Student Registration Form</Text>
        <TextInput
          style={styles.input}
          placeholder="Student ID"
          defaultValue={studentId}
          onChangeText={text => { studentId = text; }}
        />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          defaultValue={fullName}
          onChangeText={text => { fullName = text; }}
        />
        <TextInput
          style={styles.input}
          placeholder="Course"
          defaultValue={course}
          onChangeText={text => { course = text; }}
        />
        <TextInput
          style={styles.input}
          placeholder="Year Level"
          defaultValue={yearLevel}
          onChangeText={text => { yearLevel = text; }}
          keyboardType="numeric"
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 16,
    fontSize: 16,
  },
});

export default FormScreen;