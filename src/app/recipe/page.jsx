import RecipeList from "./recipe-list/page";

const fetchData = async () => {
  try {
    const data = await fetch("https://dummyjson.com/recipes");
    const response = await data.json();
    return response?.recipes;
  } catch (error) {
    throw new Error(error);
  }
};

export default async function Recipe() {
  const recipeData = await fetchData();

  return (
    <div className="h-full max-w-[1200px] mx-auto">
      <h2 className="my-6 text-[40px]">Recipes</h2>
      <RecipeList data={recipeData} />
    </div>
  );
}
