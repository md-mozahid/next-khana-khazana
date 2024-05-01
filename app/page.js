import Hero from '@/components/Hero'
import RecipeCard from '@/components/recipes/RecipeCard'
import Sidebar from '@/components/recipes/Sidebar'
import { getAllRecipes } from '@/db/queries'

export default async function Home() {
  const allRecipes = await getAllRecipes()
  return (
    <div className="container">
      <Hero />
      <section className=" py-8">
        <div className="grid grid-cols-12 py-4">
          <Sidebar />
          <div className="col-span-12 md:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
              {allRecipes.map((recipe) => (
                <RecipeCard key={recipe?.id} recipe={recipe} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
