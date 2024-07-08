import Link from "next/link";

const fetchData = async () => {
  try {
    const data = await fetch("https://dummyjson.com/users");
    const response = await data.json();
    return response.users;
  } catch (error) {
    throw new Error(error);
  }
};

export default async function ServerFetchData() {
  const getData = await fetchData();

  return (
    <div className="p-3">
      <h2 className="mb-6">All Users</h2>
      <ul>
        {getData && getData.length > 0
          ? getData.map((user) => (
              <li key={user.id}>
                <Link
                  href={`/server-fetch-data/${user.id}`}
                  className="mb-3 block hover:text-sky-500"
                >
                  {user.firstName}
                </Link>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}
