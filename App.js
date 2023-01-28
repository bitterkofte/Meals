import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';


const Cluster = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Cluster.Navigator>
          <Cluster.Screen name="MealsCategories" component={CategoriesScreen} />
          <Cluster.Screen name="MealsOverview" component={MealsOverviewScreen} />
        </Cluster.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
