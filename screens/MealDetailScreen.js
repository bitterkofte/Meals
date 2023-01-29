import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { MEALS } from '../data/source';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';

function MealDetailScreen({ route }) {
    const MealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === MealId);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                time={selectedMeal.duration}
                level={selectedMeal.complexity}
                price={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List veri={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List veri={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
      marginBottom: 32
    },
    image: {
      width: '100%',
      height: 350,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 24,
      margin: 8,
      textAlign: 'center',
      // color: 'white',
    },
    detailText: {
      // color: 'white',
      fontFamily: 'SofiaProBold',
    },
    listOuterContainer: {
      alignItems: 'center',
    },
    listContainer: {
      width: '80%',
    },
  });