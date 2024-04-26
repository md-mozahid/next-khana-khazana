import Image from 'next/image'
import { Recipe } from '@/constant/images'
import Link from 'next/link'

export default function RecipeCard() {
  return (
    <div className="card">
      <Link href="/recipes/1">
        <Image src={Recipe} className="rounded-md" alt="recipe" />
        <h4 className="my-2">Chef John`s Turkey Sloppy Joes</h4>
      </Link>
      <div className="py-2 flex justify-between text-xs text-gray-500">
        <span>⭐️ 5.0</span>
        <span>By: John Doe</span>
      </div>
    </div>
  )
}
