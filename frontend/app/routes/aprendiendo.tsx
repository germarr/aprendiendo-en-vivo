import { LinksFunction, LoaderFunction, Outlet, useLoaderData} from "remix";
import { Link } from "remix";
import { api_blogCategories } from "~/api/blogApi";
import styles from "~/styles/tailwind.css"

//Importar TailwindCSS
export const links: LinksFunction = () =>{
    return[
        {
            rel:"stylesheet",
            href:styles,
        }
    ]
  }


export const loader:LoaderFunction = async() =>{
  const blogcat:any = api_blogCategories
  return blogcat
}

export default function Index() {
  const cards = useLoaderData()

  return (
    <div>
      <header className="px-10 py-5 bg-gradient-to-r bg-purple-600">
        <h1 className="font-bold text-4xl text-white ">
          <Link to="/" title="Quniela MX" aria-label="Remix Jokes">
            <span >Gmarr | Mis Notas de Todo</span>
          </Link>
        </h1>
      </header> 
      <div className="h-screen">
        <div className="flex space-x-10">
          <div className="flex flex-col space-y-6 p-10">
            {cards.map((n)=>(
              <div key={n.link}>
                <Link prefetch="intent" to={n.link}>
                  <div className="w-48 shadow-md shadow-slate-200 p-6 bg-slate-300/30 rounded-md hover:bg-slate-200 cursor-pointer">
                    <p className="text-center">{n.titulo}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div>
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
}