import { View, Button } from 'react-native';
import { router } from 'expo-router';

export default function ThreeScreen() {
  return (
    <View>
      <Button
        title="Ouvrir Modal"
        onPress={() => router.push('/(components)/modal')}
      />
    </View>
  );
}