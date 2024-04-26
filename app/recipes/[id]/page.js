import RecipeDetails from '@/components/recipes/RecipeDetails'
import RecipeMaking from '@/components/recipes/RecipeMaking'

export default function RecipeDetail({ params: { id } }) {
  return (
    <>
      <section>
        <div className="grid grid-cols-12 container gap-8 justify-items-center">
          <RecipeDetails />
        </div>
      </section>
      <RecipeMaking />
    </>
  )
}
