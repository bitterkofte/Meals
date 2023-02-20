import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const IconButton = ({onPress, name, color}) => {
  const navigation = useNavigation();
  return (
    <View>
      <Pressable onPress={onPress} onLongPress={() => navigation.navigate('Favorites')} >
        <AntDesign style={styles.icon} name={name} size={32} color={color} />
      </Pressable>
    </View>
  )
}

export default IconButton

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.3,
  },
  icon: {
    // elevation: 3,
    // backgroundColor: '#ffffff',
  }
})