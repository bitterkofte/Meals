import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import MealDetails from '../MealDetails';

function MealItem({title, iUrl, price, level, time, id}) {
    const navigation = useNavigation();

    function selectMealHandler() {
        navigation.navigate('MealDetail', {
            mealId: id,
        });
    }

    return (
        <View style={styles.outer}>
            <Pressable android_ripple={{color: '#ffffb8'}}
                       onPress={selectMealHandler}>
                <View style={styles.head}>
                    <Image source={{uri: iUrl}} style={styles.img} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={{paddingBottom: 10}}>
                    <MealDetails
                        time={time}
                        price={price}
                        level={level}
                    />
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
        fontFamily: 'SofiaProBold',
    },

    details: {
        padding: 16,
    },

    text: {
        fontFamily: 'Sofia',
    }
});