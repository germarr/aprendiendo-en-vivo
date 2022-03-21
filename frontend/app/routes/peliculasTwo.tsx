import { Outlet } from "remix"
import type {MetaFunction, LinksFunction} from "remix"
import styles from "~/styles/tailwind.css"

export const meta: MetaFunction = () => {
    return { 
      title: "GMARR | Peliculas Favoritas",
      description:"En este espacio comparto las peliculas que he visto y mi opinión sobre ellas." 
    };
  };

export const links: LinksFunction = () =>{
    return[
        {
            rel:"stylesheet",
            href:styles,
        }
    ]
}

export default function Blog() {
  return (
      <div className="flex justify-center">
          <div className="prose lg:prose-xl py-10">
            <Outlet />
          </div>
      </div>
  )
}
