import {  useLoaderData } from "remix";
import { Link } from "remix";
import styles from "~/styles/tailwind.css"
import type { LinksFunction, LoaderFunction, MetaFunction } from "remix"
import BlogCard from "~/components/BlogCard";


export type Serie = {
    Body:string;
    Calificacion:number;
    Plataforma:string;
    Titulo:string;
    created_at:string;
    date:string;
    id:number;
    img_url:string;
    published_at:string;
    slug:string;
    small_desc:string;
    updated_at:string;
    user:any;
}


export const links: LinksFunction = () =>{
  return[
      {
          rel:"stylesheet",
          href:styles,
      }
  ]
}

export const meta: MetaFunction = () => {
    return { 
      title: "GMARR | Series del año.",
      description:"En este espacio comparto las series que he visto y mi opinión sobre ellas." 
    };
  };

export const loader:LoaderFunction = async() =>{
  const response = await fetch("https://cms.gmarr.me/serie-nuevas")
  const posts:Serie[] = await response.json()

  return posts;
}

export default function Index() {
  const posts = useLoaderData()

  console.log(posts)

  return (
    <div>
      <header className="px-10 py-5 bg-gradient-to-r from-slate-400">
        <h1 className="font-bold text-4xl text-white ">
          <Link to="/" title="Quniela MX" aria-label="Remix Jokes">
            <span >¿Que series he visto en el año? 🎞️</span>
          </Link>
        </h1>
      </header> 
      <div className="grid sm:grid-col-1 md:grid-cols-3 gap-x-7 gap-y-4 px-10 py-5">
        {posts.map((p:Serie)=>(
            <div key={p.id}>
                <BlogCard t={p.Titulo}  link={`./${p.slug}`} desc={p.small_desc} date={p.date} author={p.user.username} imagelink ={p.img_url}/>
            </div> 
        ))}
      </div>
    </div>
  );
}
