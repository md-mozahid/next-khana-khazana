import { getAllRecipes } from '@/db/queries'
import Link from 'next/link'

export default async function Sidebar() {
  const allRecipes = await getAllRecipes()

  const categories = Object.values(
    allRecipes.reduce((a, { category }) => {
      a[category] = { category }
      return a
    }, {})
  )
  // console.log(categories)

  return (
    <div className="col-span-12 md:col-span-3">
      <h3 className="font-bold text-xl">Recipes</h3>
      <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
        <li>
          <Link href="/categories">Breakfast & Brunch</Link>
        </li>

        <li>
          <Link href="/categories">Dessert</Link>
        </li>

        {/* <li>
          <Link href="/categories">Brunch Haven Delights</Link>
        </li>

        <li>
          <Link href="/categories">Rise & Dine Eatery</Link>
        </li>

        <li>
          <Link href="/categories">Breakfast Oasis Junction</Link>
        </li> */}
      </ul>
    </div>
  )
}
