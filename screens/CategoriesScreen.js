import { FlatList } from 'react-native';

import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/source';


function CategoriesScreen({navigation}) {

    function renderCategoryItem(itemData) {
        function pressHandler() {navigation.navigate("MealsOverview", //To Meals
                                    {categoryId: itemData.item.id});}
        return <CategoryGridTile 
                title={itemData.item.title}
                color={itemData.item.color}
                pressFunc={pressHandler} />;
    }

    return(
        <FlatList data={CATEGORIES} 
        keyExtractor={(item) => item.id} 
        renderItem={renderCategoryItem} 
        numColumns={2} />
    )
}

export default CategoriesScreen;