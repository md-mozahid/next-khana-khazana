import RecipeDetails from '@/components/recipes/RecipeDetails'
import RecipeMaking from '@/components/recipes/RecipeMaking'
import { getSingleRecipe } from '@/db/queries'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params: { recipeId } }) {
  const recipe = await getSingleRecipe(recipeId)

  if (recipe) {
    return {
      title: `${recipe?.name}`,
      description: recipe?.description,
      openGraph: {
        images: [
          {
            url: `http://localhost:3000/api/og?title=${recipe?.thumbnail}`,
            width: 1200,
            height: 600,
          },
        ],
      },
    }
  } else {
    return {
      title: 'Recipe Not Found',
      description: 'Recipe not found that requested by user.',
    }
  }
}

export default async function RecipeDetail({ params: { recipeId } }) {
  const recipe = await getSingleRecipe(recipeId)

  if (!recipe) {
    notFound()
  }

  return (
    <>
      <section>
        <div className="grid grid-cols-12 container gap-8 justify-items-center">
          <RecipeDetails recipe={recipe} />
        </div>
      </section>
      <RecipeMaking recipeSteps={recipe?.steps} />
    </>
  )
}
