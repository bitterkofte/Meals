import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MEALS } from '../data/source';
import MealItem from '../components/MealItem';


function MealsOverviewScreen({ route }) {
    const catgId = route.params.categoryId;
    //to extract the object that set in current screen (CategoriesScreen)

    const showRelatedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catgId) >= 0;
        //categoryIds is an element in the MEALS object
    });

    function renderMealItem(itemData) {
        const ii = itemData.item;

        const mealItemProps = {
        title: ii.title,
        iUrl: ii.imageUrl,
        price: ii.affordability,
        level: ii.complexity,
        time: ii.duration
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

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    mealsContainer: {
        flex: 1,
        padding: 10,
        // alignItems: 'center',
    },
});