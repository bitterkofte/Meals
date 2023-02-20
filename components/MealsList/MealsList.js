import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import MealItem from './MealItem';

const MealsList = ({showRelatedMeals}) => {
  function renderMealItem(itemData) {
    const ii = itemData.item;

    const mealItemProps = {
    title: ii.title,
    iUrl: ii.imageUrl,
    price: ii.affordability,
    level: ii.complexity,
    time: ii.duration,
    id: ii.id,
    };

    return <MealItem {...mealItemProps} />;
}

return(
    <View style={styles.mealsContainer}>
        <FlatList   data={showRelatedMeals}
                    renderItem={renderMealItem}
                    keyExtractor={(item) => item.id} />
    </View>
)
}

export default MealsList

const styles = StyleSheet.create({
  mealsContainer: {
    flex: 1,
    padding: 10,
    // alignItems: 'center',
},
})