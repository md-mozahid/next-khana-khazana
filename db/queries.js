import connectMongo from "@/dbConnect/connectMongo";
import { recipeModel } from "@/models/recipe-models";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-utils";

// get all recipes
async function getAllRecipes() {
  await connectMongo();
  const allRecipes = await recipeModel.find().lean();
  return replaceMongoIdInArray(allRecipes);
}

// get single recipes
async function getSingleRecipe(recipeId) {
  // await connectMongo()
  const recipe = await recipeModel.findById(recipeId).lean();
  return replaceMongoIdInObject(recipe);
}

// get categories
async function getRecipesCategoryWise(name) {
  const recipes = await recipeModel.find(name);
  return replaceMongoIdInArray(recipes);
}
export { getAllRecipes, getSingleRecipe, getRecipesCategoryWise };
