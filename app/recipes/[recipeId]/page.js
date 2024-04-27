import RecipeDetails from "@/components/recipes/RecipeDetails";
import RecipeMaking from "@/components/recipes/RecipeMaking";
import { getSingleRecipe } from "@/db/queries";

export async function generateMetadata({ params: { recipeId }, parent }) {
  const recipe = await getSingleRecipe(recipeId);

  return {
    title: recipe?.name,
    description: recipe?.description,
  };
}

export default async function RecipeDetail({ params: { recipeId } }) {
  const recipe = await getSingleRecipe(recipeId);

  return (
    <>
      <section>
        <div className="grid grid-cols-12 container gap-8 justify-items-center">
          <RecipeDetails recipe={recipe} />
        </div>
      </section>
      <RecipeMaking recipeSteps={recipe?.steps} />
    </>
  );
}
