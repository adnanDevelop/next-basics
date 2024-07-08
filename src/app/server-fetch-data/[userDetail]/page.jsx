const fetchData = async (id) => {
  try {
    const data = await fetch(`https://dummyjson.com/users/${id}`);
    const response = await data.json();
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export default async function UserDetail({ params }) {
  const getSingleData = await fetchData(params.userDetail);
  console.log(getSingleData);
  return (
    <div>
      <div className="mb-4"> User detail page:{params.userDetail}</div>
      <div>{getSingleData?.firstName}</div>
      <div>{getSingleData?.lastName}</div>
      <div>{getSingleData?.age}</div>
      <div>{getSingleData?.birthDate}</div>
    </div>
  );
}
