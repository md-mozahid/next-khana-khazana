import Link from 'next/link'

export default function Sidebar() {
  return (
    <div className="col-span-12 md:col-span-3">
      <h3 className="font-bold text-xl">Recipes</h3>
      <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
        <li>
          <Link href="/categories">Morning Bliss Café</Link>
        </li>

        <li>
          <Link href="/categories">Sunrise Bites Kitchen</Link>
        </li>

        <li>
          <Link href="/categories">Brunch Haven Delights</Link>
        </li>

        <li>
          <Link href="/categories">Rise & Dine Eatery</Link>
        </li>

        <li>
          <Link href="/categories">Breakfast Oasis Junction</Link>
        </li>
      </ul>
    </div>
  )
}
