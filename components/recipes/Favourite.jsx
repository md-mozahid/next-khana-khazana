'use client'

import { favoriteRecipe } from '@/app/actions'
import { useAuth } from '@/app/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'

export default function Favourite({ recipeId }) {
  const { auth } = useAuth()
  const router = useRouter()

  const isFavorites = auth?.favourites?.find((id) => id === recipeId)
  const [favorite, setFavorite] = useState(isFavorites)
  const [isPending, startTransition] = useTransition()

  const handleFavorite = async () => {
    if (auth) {
      favoriteRecipe(recipeId, auth?.id)
      setFavorite(!favorite)
    } else {
      router.push('/login')
    }
  }
  return (
    <div
      className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#eb4a36]"
      onClick={() =>
        startTransition(() => {
          handleFavorite()
        })
      }>
      {favorite ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="red"
          stroke="red"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-heart">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-heart">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
      )}
      <span>Favourite</span>
    </div>
  )
}
