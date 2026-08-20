import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

export default function App() {
  const [form, setForm] = useState({ fullName: '', email: '', password: '', confirmPassword: '' });
  const [users, setUsers] = useState([]);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleCreateAccount = () => {
    // Alert confirm box base sa demo sa instructor
    Alert.alert("Hello " + form.fullName, "Are you sure?", [
      { text: "Cancel", onPress: () => console.log("Cancelled") },
      { 
        text: "Yes", 
        onPress: () => {
          // Output sa terminal/console
          console.log("User Registered:", form);
          setUsers([...users, form]);
          setForm({ fullName: '', email: '', password: '', confirmPassword: '' });
        } 
      }
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Restaurant Booking App</Text>
      <Text style={styles.subHeader}>Create Account</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Full Name" 
        value={form.fullName} 
        onChangeText={(text) => handleChange('fullName', text)} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Email Address" 
        value={form.email} 
        onChangeText={(text) => handleChange('email', text)} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        secureTextEntry 
        value={form.password} 
        onChangeText={(text) => handleChange('password', text)} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Confirm Password" 
        secureTextEntry 
        value={form.confirmPassword} 
        onChangeText={(text) => handleChange('confirmPassword', text)} 
      />

      <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <Text style={styles.listHeader}>Registered Users</Text>
      {users.map((user, index) => (
        <View key={index} style={styles.userCard}>
          <Text>{index + 1}. {user.fullName} ({user.email})</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50, backgroundColor: '#f5f5f5' },
  header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  subHeader: { fontSize: 18, marginBottom: 15 },
  input: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 10 },
  button: { backgroundColor: '#6200ee', padding: 12, borderRadius: 5, alignItems: 'center', marginVertical: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  listHeader: { fontSize: 16, fontWeight: 'bold', marginTop: 20, marginBottom: 10 },
  userCard: { backgroundColor: '#fff', padding: 10, marginBottom: 5, borderRadius: 5, borderWidth: 1, borderColor: '#eee' }
});