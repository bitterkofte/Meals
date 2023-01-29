import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Cluster = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Sofia': require('./assets/fonts/Sofia-Pro-Regular.otf'),
    'SofiaProBold': require('./assets/fonts/Sofia-Pro-Bold.otf'),
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
          <Cluster.Screen name="MealsOverview" component={MealsOverviewScreen}
            options={mealsOpt} />
          <Cluster.Screen name="MealDetail" component={MealDetailScreen}
            options={detailsOpt} />
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
  headerTitleStyle: {fontFamily: 'SofiaProBold'},
  // contentStyle: {backgroundColor: '#ffe0cb'},
  // headerTransparent: true,
}

const mealsOpt = {
  title: "Details",
  headerStyle: {backgroundColor: '#cbe3ff'},
  headerTitleStyle: {fontFamily: 'SofiaProBold'},
  contentStyle: {backgroundColor: '#e7efff'},
}

const detailsOpt = {
  title: "Details",
  headerStyle: {backgroundColor: '#cbffcc'},
  headerTitleStyle: {fontFamily: 'SofiaProBold'},
  contentStyle: {backgroundColor: '#e7ffef'},
}