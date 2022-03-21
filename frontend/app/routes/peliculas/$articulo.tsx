import type { MetaFunction, LoaderFunction, LinksFunction } from "remix";
import { useLoaderData } from "remix";
import styles from "~/styles/tailwind.css";
import {marked} from "marked"
import { getPosts } from "~/api/getArticle";

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
    Plataforma:string
}


export const links: LinksFunction = () =>{
    return[
        {
            rel:"stylesheet",
            href:styles,
        }
    ]
}

export const loader:LoaderFunction = async({params}) =>{
  const urlParam = params.articulo
  const articleList = await getPosts()
  let getId = articleList.find(n => n[0] === urlParam )[1]

  
  const response = await fetch(`https://cms.gmarr.me/posts/${getId}`)
  const posts:Post = await response.json()


  return [posts, urlParam];
}

export const meta: MetaFunction = ({data}) => {

    const exportData:Post = data[0]

    return { 
      title: `GMARR | ${exportData.Title}`,
      description: `${exportData.Description}`  
    };
  };


export default function Blog() {
    const posts:Post = useLoaderData()[0]
    const calif = posts.Calificacion
    const body = marked.parse(`${posts.Body}`)

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="pt-10 pb-3">
                <h1 className="text-4xl font-bold">{posts.Title}</h1>
                <p className="text-center"><span className="font-semibold">Por: </span>{posts.user.username}</p>
                <p className="text-center"><span className="font-semibold">Publicado el: </span>{posts.Date}</p>       
                <p className="text-center"><span className="font-semibold">Calificación: </span>{`⭐`.repeat(calif)}<span className="font-semibold"> / 5</span></p>
            </div>
            <div className="prose lg:prose-xl px-10 md:px-0" dangerouslySetInnerHTML={{__html:body}}>
            </div>
        </div>
    )
  }