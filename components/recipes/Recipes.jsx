import RecipeCard from './RecipeCard'
import Sidebar from './Sidebar'

export default function Recipes() {
  return (
    <section className="container py-8">
      <div className="grid grid-cols-12 py-4">
        <Sidebar />
        <div className="col-span-12 md:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
          </div>
        </div>
      </div>
    </section>
  )
}
