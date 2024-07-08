import Link from "next/link";

export default function RecipeList({ data }) {
  return (
    <div className=" grid grid-cols-12 gap-4 mt-6">
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className="card card-compact bg-base-100  shadow-xl col-span-3 rounded-lg"
          >
            <Link href={`/recipe/${item.id}`} className="block">
              <img
                src={item.image}
                alt={item.name}
                className="h-[250px] rounded-tl-lg rounded-tr-lg w-full object-cover"
              />
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <div className="flex gap-2 flex-wrap">
                  {item.mealType.map((type, index) => (
                    <div className="badge badge-accent" key={index}>
                      {type}
                    </div>
                  ))}
                </div>
                <p>
                  Rating :{" "}
                  <span className="text-yellow-500">{item.rating}</span>
                </p>
                <div className="card-actions justify-end">
                  <Link
                    href={`/recipe/${item.id}`}
                    className="btn btn-success btn-sm text-white font-normal"
                  >
                    Add To Cart
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
