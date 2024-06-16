import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "../global.css"

import { useColorScheme } from '@/hooks/useColorScheme';
import { Timestamp } from 'firebase/firestore';
import { RootSiblingParent } from 'react-native-root-siblings';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();


// const initialState = {
//   userData: {
//     fullname: '',
//     email: '',
//     password: '',
//     _id: "",
//     isAdmin: false,
//     referred: 0,
//     timeStamp: Timestamp.now(),
//     isVerified: false,
//   },
//   fetchingData: false,
//   isLoggedIn: false;


// };

export default function RootLayout() {
  const user = false
  const router = useRouter()
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Klashik: require('@/assets/fonts/Klasik Regular.otf'),
    KlashikRough: require('@/assets/fonts/Klasik Rough.otf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
        if(!user) router.replace('login')

    }
  }, [loaded]);


  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootSiblingParent>
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      </RootSiblingParent>
    </ThemeProvider>
  );
}
