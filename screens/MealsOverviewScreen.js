import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/source';
import MealsList from '../components/MealsList/MealsList';


function MealsOverviewScreen({ route, navigation }) {
    const catgId = route.params.categoryId;
    //to extract the object that set in current screen (CategoriesScreen)

    const showRelatedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catgId) >= 0;
        //categoryIds is an element in the MEALS object
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catgId).title;
        navigation.setOptions({title: categoryTitle,});
        }, [catgId, navigation]);
        
    return <MealsList showRelatedMeals={showRelatedMeals} />
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    
});