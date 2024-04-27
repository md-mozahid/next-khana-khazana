"use client";

import { favoriteRecipe } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";

export default function Favourite({ recipeId }) {
  const { auth } = useAuth();

  const handleFavorite = async () => {
    await favoriteRecipe(recipeId, auth?.id);
  };

  const isFavorites = auth?.favourites?.find((id) => id === recipeId);
  return (
    <div
      className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#eb4a36]"
      onClick={handleFavorite}
    >
      {isFavorites ? (
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
          className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
        >
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
          className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
      )}
      <span>Favourite</span>
    </div>
  );
}
