'use client'

import RecipeCard from '@/components/recipes/RecipeCard'
import { getAllRecipes } from '@/db/queries'
import { useEffect, useState } from 'react'

export default function CategoryName({ params: { categoryName } }) {
  const [recipes, setRecipes] = useState(null)
  console.log(recipes)
  useEffect(() => {
    console.log('useeffect')
    const fetchData = async () => {
      const allRecipes = await getAllRecipes()
      console.log(allRecipes)
      if (categoryName) {
        if (categoryName === 'all') {
          setRecipes(allRecipes)
        } else {
          const category = allRecipes.filter(
            (recipe) => recipe?.category === categoryName
          )
          setRecipes(category)
        }
      }
    }
    fetchData()
  }, [categoryName])

  return (
    <section className="container py-8">
      <div>
        <h3 className="font-semibold text-xl">Appetizers & Snacks</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
          {recipes &&
            recipes?.map((recipe) => (
              <RecipeCard key={recipe?.id} recipe={recipe} />
            ))}
        </div>
      </div>
    </section>
  )
}
