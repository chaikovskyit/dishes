import { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MealsList from '../components/MealsList/MealsList'
import { FavoritesContext} from '../store/context/favorite-context'
import {MEALS} from '../data/dummy-data'

const FavoritesScreen = () => {

  const FavoriteMealsCtx = useContext(FavoritesContext)

  const favoriteMeals = MEALS.filter(meal => FavoriteMealsCtx.ids.includes(meal.id) )

  return (
    <MealsList items={favoriteMeals}/>
  )
}

export default FavoritesScreen