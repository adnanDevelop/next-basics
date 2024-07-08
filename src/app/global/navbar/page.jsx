import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="bg-base-100 ">
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">
            daisyUI
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"products"}>Products</Link>
            </li>
            <li>
              <Link href={"client-fetch-data"}>Get client Data</Link>
            </li>
            <li>
              <details>
                <summary>Projects</summary>
                <ul className="bg-base-100 rounded-t-none p-2 w-[150px]">
                  <li>
                    <Link href={"/recipe"}>Recipe app</Link>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
