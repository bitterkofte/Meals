import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons'


function FavoritesScreen() {
    return (
        <View style={styles.fav}>
            <Pressable style={styles.press} >
                <Ionicons name="star" color={'#999999'} size={150} />
            </Pressable>
            <Text style={styles.text}>Favorites Page Is Under Construction :)</Text>
        </View>
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
        overflow: 'hidden',
    },

    text: {
        color: '#999999'
    },
});