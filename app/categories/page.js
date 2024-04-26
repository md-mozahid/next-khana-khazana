import RecipeCard from '@/components/recipes/RecipeCard'

export default function Categories() {
  return (
    <section className="container py-8">
      <div>
        <h3 className="font-semibold text-xl">Appetizers & Snacks</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </div>
    </section>
  )
}
