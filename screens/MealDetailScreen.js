import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { MEALS } from '../data/source';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavContext } from "../store/context/fav-context";

function MealDetailScreen({ route, navigation }) {
    const FMC = useContext(FavContext);

    const MealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === MealId);

    const mealIsFav = FMC.ids.includes(MealId);

    function favHandler() {
      if(mealIsFav) {
        FMC.remFav(MealId);
      } else {
        FMC.addFav(MealId);
      }
    }

    useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => {return <IconButton 
                                    name={mealIsFav ? "star" : 'staro' }
                                    color={mealIsFav ? "#00d0ff" : 'black' }
                                    onPress={favHandler} />;}
      });
    }, [navigation, favHandler]);

    return (
        <ScrollView style={styles.rootContainer} fadingEdgeLength={2} >
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