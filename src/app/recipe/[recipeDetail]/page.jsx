const fetchData = async (id) => {
  try {
    const data = await fetch(`https://dummyjson.com/recipes/${id}`);
    const response = await data.json();
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export default async function RecipeDetail({ params }) {
  const recipeData = await fetchData(params.recipeDetail);
  console.log(recipeData);

  return <div>Recipe: {params.recipeDetail}</div>;
}
