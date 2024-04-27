import connectMongo from "@/dbConnect/connectMongo";
import { recipeModel } from "@/models/recipe-models";
import { userModel } from "@/models/user-models";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-utils";

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

// create user
async function createUser(user) {
  return await userModel.create(user);
}

// login user
async function loginUser(credential) {
  const user = await userModel.findOne(credential).lean();
  if (user) {
    return replaceMongoIdInObject(user);
  }
  return null;
}

export { getAllRecipes, getSingleRecipe, createUser, loginUser };
