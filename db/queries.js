import connectMongo from '@/dbConnect/connectMongo'
import { recipeModel } from '@/models/recipe-models'
import { userModel } from '@/models/user-models'
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from '@/utils/data-utils'
import mongoose from 'mongoose'

// get all recipes
async function getAllRecipes() {
  try {
    await connectMongo()
    const allRecipes = await recipeModel.find().lean()
    return replaceMongoIdInArray(allRecipes)
  } catch (error) {
    console.error('Error fetching recipes:', error.message)
    throw new Error('Failed to fetch recipes')
  }
}

// get single recipes
async function getSingleRecipe(recipeId) {
  try {
    await connectMongo()
    const recipe = await recipeModel.findById(recipeId).lean()
    if (recipe) {
      return replaceMongoIdInObject(recipe)
    }
  } catch (error) {
    console.error('Error finding single recipe:', error.message)
    return null
  }
}

// recipe by category
async function getRecipeByCategories(categoryName) {
  try {
    await connectMongo()
    const allRecipes = await recipeModel.find({ category: categoryName }).lean()
    return replaceMongoIdInArray(allRecipes)
  } catch (error) {
    throw error
  }
}

// create user
async function createUser(user) {
  try {
    await connectMongo()
    const newUser = await userModel.create(user)
    return newUser
  } catch (error) {
    console.error('Error creating user:', error.message)
    throw new Error('Failed to create user')
  }
}

// login user
async function loginUser(credential) {
  try {
    await connectMongo()
    const user = await userModel.findOne(credential).lean()
    if (user) {
      return replaceMongoIdInObject(user)
    }
    return null
  } catch (error) {
    console.error('Error in login:', error.message)
    throw new Error('Failed to login')
  }
}

// favorites recipe
async function updateFavorites(recipeId, userId) {
  try {
    await connectMongo()
    const user = await userModel.findById(userId)

    if (userId) {
      const foundRecipe = user.favourites.find(
        (id) => id.toString() === recipeId
      )
      if (foundRecipe) {
        user.favourites.pull(new mongoose.Types.ObjectId(recipeId))
      } else {
        user.favourites.push(new mongoose.Types.ObjectId(recipeId))
      }
      user.save()
    }
  } catch (error) {
    throw error
  }
}

export {
  createUser,
  getAllRecipes,
  getRecipeByCategories,
  getSingleRecipe,
  loginUser,
  updateFavorites,
}
