import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

const Screen = ({ navigation, route }) => {
    const date = route?.params?.date;
    return (
        <View style={styles.container}>
            <Image
                source={require('../images/UA-Logo.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>Confirmation</Text>
            <Text style={styles.subtitle}>Your action has been successfully completed.</Text>
            {date && <Text style={styles.date}>Date: {date}</Text>}
            <Button title="Back to Form" onPress={() => navigation.navigate('Form')} color="#3670f6ff" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff8f0',
        padding: 20,
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
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#3670f6ff',
        textAlign: 'center',
        letterSpacing: 1,
    },
    subtitle: {
        fontSize: 18,
        color: '#333',
        marginBottom: 8,
        textAlign: 'center',
    },
    date: {
        fontSize: 15,
        color: '#3670f6ff',
        marginTop: 16,
        fontStyle: 'italic',
    },
});

export default Screen;