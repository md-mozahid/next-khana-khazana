import Image from "next/image";
import Link from "next/link";

export default function RecipeCard({ recipe }) {
  return (
    <div className="card">
      <Link href={`/recipes/${recipe?.id}`}>
        <Image
          src={recipe?.thumbnail}
          className="rounded-md"
          alt="recipe"
          width={500}
          height={500}
        />
        <h4 className="my-2">{recipe?.name}</h4>
      </Link>
      <div className="py-2 flex justify-between text-xs text-gray-500">
        <span>⭐️ {recipe?.rating}</span>
        <span>{recipe?.author}</span>
      </div>
    </div>
  );
}
