import RecipeCard from '@/components/recipes/RecipeCard'
import { getAllRecipes } from '@/db/queries'

export default async function Recipe() {
  const allRecipes = await getAllRecipes()
  return (
    <section className="container py-8">
      <div>
        <h3 className="font-semibold text-xl">Recipes</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
          {allRecipes.length > 0 ? (
            allRecipes?.map((recipe) => (
              <RecipeCard key={recipe?.id} recipe={recipe} />
            ))
          ) : (
            <li className="text-xl text-center mt-5">No recipes found!</li>
          )}
        </div>
      </div>
    </section>
  )
}
