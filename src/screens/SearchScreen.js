import React, { useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";

const patients = [
  { id: 1, name: "John Doe", condition: "Flu" },
  { id: 2, name: "Jane Smith", condition: "Cold" },
  { id: 3, name: "Emily Johnson", condition: "Asthma" },
];

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter patients based on the search term
  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Patients</Text>
      <TextInput
        style={styles.input}
        placeholder="Search by name"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <FlatList
        data={filteredPatients}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.patientCard}>
            <Text style={styles.patientName}>{item.name}</Text>
            <Text style={styles.patientCondition}>
              Condition: {item.condition}
            </Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>No patients found</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  patientCard: {
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  patientName: { fontSize: 18, fontWeight: "bold" },
  patientCondition: { fontSize: 14, color: "#555" },
  emptyMessage: { textAlign: "center", color: "#888" },
});

export default SearchScreen;
