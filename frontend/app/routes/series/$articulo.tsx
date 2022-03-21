import { MetaFunction, LoaderFunction, LinksFunction, Link } from "remix";
import { useLoaderData } from "remix";
import styles from "~/styles/tailwind.css";
import {marked} from "marked"
import { getSerie } from "~/api/getArticle";

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

export const loader:LoaderFunction = async({params}) =>{
  const urlParam = params.articulo
  const articleList = await getSerie()
  let getId = articleList.find(n => n[0] === urlParam )[1]

  console.log(urlParam, articleList)


  const response = await fetch(`https://cms.gmarr.me/serie-nuevas/${getId}`)
  const posts:Serie = await response.json()


  return [posts, urlParam];
}

export const meta: MetaFunction = ({data}) => {

    const exportData:Serie = data[0]

    return {
      title: `GMARR | ${exportData.Titulo}`,
      description: `${exportData.small_desc}`
    };

  };


export default function Blog() {
    const posts:Serie = useLoaderData()[0]
    const calif = posts.Calificacion
    const body = marked.parse(`${posts.Body}`)

    console.log(posts)

    return (
        <div>
            <header className="flex p-3">
                <Link to="/series">
                    <nav>HOME</nav>
                </Link>
            </header>
            <div className="flex flex-col justify-center items-center">
                <div className="pt-10 pb-3">
                    <h1 className="text-4xl font-bold">{posts.Titulo}</h1>
                    <p className="text-center"><span className="font-semibold">Por: </span>{posts.user.username}</p>
                    <p className="text-center"><span className="font-semibold">Publicado el: </span>{posts.date}</p>
                    <p className="text-center"><span className="font-semibold">Calificación: </span>{`⭐`.repeat(calif)}<span className="font-semibold"> / 5</span></p>
                </div>
                <div className="prose lg:prose-xl px-10 md:px-0" dangerouslySetInnerHTML={{__html:body}}>
                </div>
            </div>
        </div>
    )
  }