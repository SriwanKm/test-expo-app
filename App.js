import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Kookai app!</Text>
          <Text style={styles.text}>Firstname - Lastname</Text>

          <TextInput
              style={{ height: 40, borderColor: '#766666', borderWidth: 1, width: 250 }}
              />
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FD91A5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        color: 'white',
      fontSize: 24,
      marginBottom: 5,
    },
    text: {
      marginBottom: 5,
      color: '#766666',
    }
});
