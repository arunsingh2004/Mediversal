import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "./screens/RegistrationScreen";
import SearchScreen from "./screens/SearchScreen";
import PatientSearch from "./components/PatientSearch";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Register"
          component={RegistrationScreen}
          options={{ title: "Register" }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: "Search Patients" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
