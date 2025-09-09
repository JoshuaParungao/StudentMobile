import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert, Image } from 'react-native';


let studentId = '';
let fullName = '';
let course = '';
let yearLevel = '';

const studentNumbers = [];

const FormScreen = ({ navigation }) => {
		const handleSubmit = () => {
			if (!studentId || !fullName || !course || !yearLevel) {
				Alert.alert('Error', 'Please fill out the entire form.');
				return;
			}
			if (studentNumbers.includes(studentId)) {
				Alert.alert('Error', 'This student number already exists.');
				return;
			}
			studentNumbers.push(studentId);
			Alert.alert('Submitted', `ID: ${studentId}\nName: ${fullName}\nCourse: ${course}\nYear: ${yearLevel}`);
			navigation.navigate('Screen', { date: new Date().toLocaleString() });
		};

		return (
			<ScrollView contentContainerStyle={styles.scrollContainer}>
				<View style={styles.container}>
							<Image
								source={require('../images/UA-Logo.png')}
								style={styles.logo}
							/>
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
					<Button title="Submit" onPress={handleSubmit} color="#26a400ff" />
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
	logo: {
		width: 100,
		height: 100,
		marginBottom: 16,
		borderRadius: 50,
		borderWidth: 2,
		borderColor: '#3670f6ff',
		backgroundColor: '#fff',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 24,
		color: '#3670f6ff',
		textAlign: 'center',
		letterSpacing: 1,
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