import { View, Text, Image, Pressable, StyleSheet } from 'react-native'


function MealItem({title, iUrl, price, level, time}) {
    return (
        <View style={styles.outer}>
            <Pressable android_ripple={{color: '#ffffb8'}}>
                <View style={styles.head}>
                    <Image source={{uri: iUrl}} style={styles.img} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.text}>Time: {time}m</Text>
                    <Text style={styles.text}>Price: {price.toUpperCase()}</Text>
                    <Text style={styles.text}>Difficulty: {level.toUpperCase()}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    outer: {
        margin: 16,
        // padding: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#cacaca',
        elevation: 5,
    },

    head: {
        paddingTop: 16,
        alignItems: 'center',
    },

    img: {
        width: '90%',
        height: 200,
        // padding: 16,
        borderRadius: 8,
        marginBottom: 10,
    },

    title: {
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'Sofia-Bold',
    },

    details: {
        padding: 16,
    },

    text: {
        fontFamily: 'Sofia',
    }
});