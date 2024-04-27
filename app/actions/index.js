"use server";

import { createUser, loginUser } from "@/db/queries";
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

export { registerUser, performLogin };
