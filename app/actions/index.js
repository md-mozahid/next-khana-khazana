"use server";

import { createUser, findUser, loginUser, updateFavorites } from "@/db/queries";
import { redirect } from "next/navigation";

// register user
async function registerUser(formData) {
  const user = Object.fromEntries(formData);
  const created = await createUser(user);
  redirect("/login");
}

// login user
async function performLogin(formData) {
  try {
    const credential = {};
    credential.email = formData.get("email");
    credential.password = formData.get("password");
    const found = await loginUser(credential);
    return found;
  } catch (error) {
    throw error;
  }
}

// favorite recipe
async function favoriteRecipe(recipeId, userId) {
  try {
    await updateFavorites(recipeId, userId);
  } catch (error) {
    throw error;
  }
}

export { registerUser, performLogin, favoriteRecipe };
