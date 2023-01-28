import { View, Text, StyleSheet } from 'react-native';
import { MEALS } from '../data/source';


function MealsOverviewScreen({ route }) {
    const catgId = route.params.categoryId;
    //to extract the object that set in current screen (CategoriesScreen)

    return(
        <View style={styles.mealsContainer}>
            <Text>MEALS - {catgId}</Text>
        </View>
    )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    mealsContainer: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
});