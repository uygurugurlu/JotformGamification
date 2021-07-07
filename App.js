import * as React from 'react';
import CreateNavigation from "./src/navigation/createNavigation";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
      <SafeAreaProvider>
        <CreateNavigation />
      </SafeAreaProvider>
  );
}
