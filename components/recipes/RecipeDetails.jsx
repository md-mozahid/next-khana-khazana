import Image from 'next/image'
import Favourite from './Favourite';

export default function RecipeDetails({ recipe }) {
  
  return (
    <>
      <div className="col-span-12 md:col-span-6">
        <Image
          src={recipe?.thumbnail}
          alt="recipe"
          className="w-full h-full rounded-lg object-contain"
          width={500}
          height={500}
        />
      </div>
      <div className="col-span-12 md:col-span-6 py-8 flex flex-col justify-center">
        <h2 className="font-semibold text-4xl lg:w-8/12 leading-10">
          {recipe?.name}
        </h2>
        <p className="text-xs text-[#eb4a36] italic my-2">{recipe?.category}</p>
        <p className="text-gray-600 text-sm my-6 leading-6">
          {recipe?.description}
        </p>

        <div className="flex gap-4 justify-center divide-x my-12">
          <div className="flex-1 text-center">
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
              className="mx-auto"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
              <path d="M12 7v5l3 3" />
            </svg>
            <h3 className="font-medium text-lg text-gray-700 mt-2">
              Prep time
            </h3>
            <p className="text-gray-500 text-sm">{recipe?.activeTime}</p>
          </div>
          <div className="flex-1 text-center">
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
              className="mx-auto"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6.5 17h11" />
              <path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" />
              <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z" />
            </svg>
            <h3 className="font-medium text-lg text-gray-700 mt-2">
              Cook time
            </h3>
            <p className="text-gray-500 text-sm">{recipe?.totalTime}</p>
          </div>
          <div className="flex-1 text-center">
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
              className="mx-auto"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>
            <h3 className="font-medium text-lg text-gray-700 mt-2">Servings</h3>
            <p className="text-gray-500 text-sm">{recipe?.serves}</p>
          </div>
        </div>

        <div className="flex gap-4 justify-end">
          <Favourite recipeId={recipe?.id} />
        </div>

        <div className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6]">
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
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M8.7 10.7l6.6 -3.4" />
            <path d="M8.7 13.3l6.6 3.4" />
          </svg>
          <span>Share</span>
        </div>
      </div>
    </>
  );
}
