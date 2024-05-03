import Loading from '@/components/Loading'
import RecipeDetails from '@/components/recipes/RecipeDetails'
import RecipeMaking from '@/components/recipes/RecipeMaking'
import { getSingleRecipe } from '@/db/queries'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

export async function generateMetadata({ params: { recipeId } }) {
  const recipe = await getSingleRecipe(recipeId)

  if (recipe) {
    return {
      title: `${recipe?.name}`,
      description: recipe?.description?.slice(0, 100),
      openGraph: {
        title: `${recipe?.name}`,
        siteName: 'Khana Khazana',
        url: `https://m-khana-khazana.vercel.app/recipes/${recipeId}`,
        type: 'website',
        images: [
          {
            url: recipe?.image,
            alt: recipe?.name,
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
      <Suspense fallback={<Loading />}>
        <section>
          <div className="grid grid-cols-12 container gap-8 justify-items-center">
            <RecipeDetails recipe={recipe} />
          </div>
        </section>
      </Suspense>
      <RecipeMaking recipeSteps={recipe?.steps} />
    </>
  )
}
