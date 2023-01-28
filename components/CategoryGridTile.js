import { Pressable, View, Text, StyleSheet, SafeAreaView } from "react-native";

// import { useNavigation } '@react-navigation/native';
// useNavigation prop to navigate from components


function CategoryGridTile({title, color, pressFunc}) {
    return (
        <View style={[styles.tileContainer, {backgroundColor: color}]} >
            <Pressable  android_ripple={{color: '#cccccc'}} 
                        style={styles.button}
                        onPress={pressFunc} >
                <View style={[styles.innerContainer]} >
                    <Text style={styles.title} >{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile;

const styles = StyleSheet.create({

    tileContainer: {
        flex: 1,
        margin: 10,
        height: 300,
        // borderWidth: 3,
        borderRadius: 10,
        elevation: 5,
        overflow: 'hidden',
    },

    button: {
        flex: 1,
    },

    innerContainer: {
        flex: 1,
        // padding: 16,
        // borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontFamily: 'Sofia-Bold',
        fontSize: 20,
    },
});