import { View, Text, StyleSheet } from 'react-native';

function MealDetails({
  time,
  level,
  price,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{time}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {level}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {price}
      </Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
    fontFamily: 'Sofia',
  },
});