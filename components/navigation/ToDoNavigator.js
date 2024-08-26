import { createStackNavigator } from "@react-navigation/stack";

import TodosListScreen from "../../screens/ToDoListScreen";
import CreateToDoScreen from "../../screens/CreateToDoScreen";
import EditToDoScreen from "../../screens/EditToDoScreen";

const Stack = createStackNavigator();

function TodosNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="TodosList"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="TodosList" component={TodosListScreen} />
      <Stack.Screen name="CreateTodo" component={CreateToDoScreen} />
      <Stack.Screen name="EditTodo" component={EditToDoScreen} />
    </Stack.Navigator>
  );
}

export default TodosNavigator;
