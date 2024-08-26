import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import "./lib/storage";
import LoaderProvider from "./components/LoaderProvider";
import SettingsProvider from "./components/SettingsProvider";
import MainNavigator from "./components/navigation/MainNavigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <SettingsProvider>
        <LoaderProvider>
          <MainNavigator />
          <StatusBar style="auto" />
        </LoaderProvider>
      </SettingsProvider>
    </SafeAreaProvider>
  );
}
