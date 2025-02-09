import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

import TodosNavigator from "./ToDoNavigator";
import ProfileScreen from "../../screens/ProfilScreen";

const Tab = createMaterialTopTabNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Todos" tabBarPosition="bottom">
        <Tab.Screen
          name="Todos"
          component={TodosNavigator}
          options={{
            tabBarLabel: "Todos",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="list-sharp"
                size={24}
                color={focused ? "blue" : "black"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profil",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="person"
                size={24}
                color={focused ? "blue" : "black"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
