import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Jobs from "./src/Pages/Jobs/Jobs";
import Detail from "./src/Pages/Detail/Detail"
import Favorite from "./src/Pages/Favorite/Favorite"
import Provider from "./src/context/Provider";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const JobsScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: true,
        headerTintColor:"#ef5350"
      })}
    >
      <Stack.Screen
        options={{ title: "Jobs" }}
        name="JobsPage"
        component={Jobs}
      />
      <Stack.Screen
        options={{ title: "Detail" }}
        name="DetailPage"
        component={Detail}
      />
    </Stack.Navigator>
  );
};


const App = () => {
  return (
    <Provider>
    <NavigationContainer>
      <Drawer.Navigator  screenOptions={{headerShown:false}} initialRouteName="JobsScreen">
        <Drawer.Screen  name="Jobs" component={JobsScreen} />
        <Drawer.Screen name="Favorite Jobs" component={Favorite} />
      </Drawer.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
