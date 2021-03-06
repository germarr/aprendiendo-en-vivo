import type { LoaderFunction, MetaFunction } from "remix";
import {Link, useLoaderData} from "remix"
import BlogCard from "~/components/BlogCard";

export type Post = {
    id:number;
    Title: string;
    Description:string;
    Date:string;
    Body:string;
    slug:string;
    user:any;
    published_at:string;
    created_at:string;
    Calificacion:number;
    Plataforma:string;
    img_link:string;
  }

export const meta: MetaFunction = () => {
    return { 
      title: "GMARR | Peliculas del año.",
      description:"Peliculas que he visto en lo que va del año." 
    };
  };

export const loader:LoaderFunction = async() =>{
    const response = await fetch("https://cms.gmarr.me/posts")
    const posts:Post[] = await response.json()
  
    return posts;
  }

export default function Blogy() {
    const posts = useLoaderData()
  
    return (
      <div>
        <header className="px-10 py-5 bg-gradient-to-r from-slate-400">
          <h1 className="font-bold text-4xl text-white ">
            <Link to="/" title="Quniela MX" aria-label="Remix Jokes">
              <span >¿Que peliculas he visto en el año? 🎞️</span>
            </Link>
          </h1>
        </header> 
        <div className="grid sm:grid-col-1 md:grid-cols-3 gap-x-7 gap-y-4 px-10 py-5">
          {posts.map((p:Post)=>(
              <div key={p.id}>
                  <BlogCard t={p.Title}  link={`../../peliculas/${p.slug}`} desc={p.Description} date={p.Date} author={p.user.username} imagelink ={p.img_link}/>
              </div> 
          ))}
        </div>
      </div>
    );}
