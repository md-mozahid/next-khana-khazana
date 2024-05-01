import { getAllRecipes } from '@/db/queries'
import { findUniqueCategoryName } from '@/utils/data-utils'
import Link from 'next/link'

export default async function Sidebar() {
  const allRecipes = await getAllRecipes()
  const categories = findUniqueCategoryName(allRecipes)

  return (
    <div className="col-span-12 md:col-span-3">
      <h3 className="font-bold text-xl">Recipes</h3>
      <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
        {categories?.map((category) => (
          <li key={category}>
            <Link href={`/categories/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
