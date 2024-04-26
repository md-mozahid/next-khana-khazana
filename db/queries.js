import connectMongo from '@/dbConnect/connectMongo'
import { recipeModel } from '@/models/recipe-models'
import { replaceMongoIdInArray } from '@/utils/data-utils'

async function getAllRecipes() {
  await connectMongo()
  const allRecipes = await recipeModel.find()
  // console.log(allRecipes)
  return replaceMongoIdInArray(allRecipes)
}

export { getAllRecipes }
