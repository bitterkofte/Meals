import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Cluster = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Sofia': require('./assets/fonts/Sofia-Pro-Regular.otf'),
    'Sofia-Bold': require('./assets/fonts/Sofia-Pro-Bold.otf'),
  });

  // useEffect(() => {
  //   async function prepare() {
  //     await SplashScreen.preventAutoHideAsync();
  //   }
  //   prepare();
  // }, []);

  // if (!fontsLoaded) {
  //   return undefined;
  // } else {
  //   SplashScreen.hideAsync();
  // }

  return (
    <NavigationContainer>
        <Cluster.Navigator
          screenOptions={defaultOpt}>
          <Cluster.Screen 
            name="MealsCategories" 
            component={CategoriesScreen}
            // options={customOpt}
            />
          <Cluster.Screen name="MealsOverview" component={MealsOverviewScreen} />
        </Cluster.Navigator>
    </NavigationContainer>
    // <View style={{justifyContent: 'center', alignItems: 'center'}}>
    //   <Text style={{fontFamily: 'Sofia',fontSize: 40}}>SOFIA</Text>
    //   <Text style={{fontSize: 40}}>SOFIA</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});

const defaultOpt = {
  title: "Categories",
  headerStyle: {backgroundColor: '#ffe0cb'},
  headerTitleStyle: {fontFamily: 'Sofia-Bold'},
  // contentStyle: {backgroundColor: '#ffe0cb'},
  // headerTransparent: true,
}