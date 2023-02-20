import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { useContext } from "react";
import { FavContext } from "../store/context/fav-context";
import { MEALS } from "../data/source";
import MealsList from "../components/MealsList/MealsList";


function FavoritesScreen() {
    const FMC = useContext(FavContext);
    const favMeals = MEALS.filter(meal => FMC.ids.includes(meal.id));
    
    if (favMeals.length === 0) {
        return (
            <View style={styles.fav}>
                <Pressable onPress={() => console.log('e')} style={[({pressed}) => pressed && styles.pressed]}>
                    <Ionicons name="star" color={'#999999'} size={150} />
                </Pressable>
                <Text style={styles.text}>It seems you don't have a favorite meal yet.</Text>
            </View>
        )
    }
    return (
        <MealsList showRelatedMeals={favMeals} />
    );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    fav: {
        flex:1,
        marginTop: 220,
        // justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 2,
    },

    press: {
        // backgroundColor: 'red',
        marginBottom: 10,
    },
    pressed: {
        opacity: 0.3,
    },

    text: {
        color: '#999999',
        fontFamily: 'SofiaProBold',
    },
});