import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Ionicons } from '@expo/vector-icons'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import FavCtxProvider from './store/context/fav-context';

const Cluster = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return(
    <Drawer.Navigator screenOptions={drawerOpt} >
      <Drawer.Screen name="Categories" component={CategoriesScreen}
        options={{drawerIcon: ({color, size}) => <Ionicons name='list' color={color} size={size} />}} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen}
              options={{drawerIcon: ({color, size}) => <Ionicons name='star' color={color} size={size} />}} />
    </Drawer.Navigator>
  )
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'Sofia': require('./assets/fonts/Sofia-Pro-Regular.otf'),
    'SofiaProBold': require('./assets/fonts/Sofia-Pro-Bold.otf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <FavCtxProvider>
    <NavigationContainer>
        <Cluster.Navigator
          screenOptions={defaultOpt}>
          <Cluster.Screen 
            name="MealsCategories" 
            component={DrawerNavigator}
            options={{headerShown: false}}
            />
          <Cluster.Screen name="MealsOverview" component={MealsOverviewScreen}
            options={mealsOpt} />
          <Cluster.Screen name="MealDetail" component={MealDetailScreen}
            options={detailsOpt} />
        </Cluster.Navigator>
    </NavigationContainer>
    </FavCtxProvider>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});

const drawerOpt = {
  headerStyle: {backgroundColor: '#ffe0cb'},
  headerTitleStyle: {fontFamily: 'SofiaProBold'},
  sceneContainerStyle: {backgroundColor: '#fff0e7'},
  drawerContentStyle: {backgroundColor: '#fbc9a7'},
  drawerActiveTintColor: '#a80bf6',
  drawerInactiveTintColor: '#86309b',
}

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