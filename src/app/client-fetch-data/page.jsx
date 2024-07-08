"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ClientFetchData() {
  const [loading, setLoading] = useState(true);
  const [user, storeUser] = useState([]);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const data = await fetch("https://dummyjson.com/users");
      const response = await data.json();

      if (response?.users) {
        setLoading(false);
        storeUser(response.users);
      }

      return response.users;
    } catch (error) {
      setLoading(false);
      storeUser([]);
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="">
      {loading ? (
        <div className="text-white text-[50px] grid place-items-center h-[92vh]">
          Loading please wait...
        </div>
      ) : (
        <div>
          <ul>
            {user?.map((user) => (
              <li key={user.id}>
                <Link
                  href={`/client-fetch-data/${user.id}`}
                  className="mb-3 block hover:text-sky-500"
                >
                  {user.firstName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
