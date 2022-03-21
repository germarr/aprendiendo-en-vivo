import { LinksFunction} from "remix";
import { Link } from "remix";
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

export default function Index() {
  const cards:any[] = [
    {
      titulo:"¿Que peliculas he visto en el año?",
      desc:"Peliculas que he visto en lo que va del año.",
      link:"./peliculas"
    },
    {
      titulo:"¿Que series he visto en el año?",
      desc:"Series que he visto en lo que va del año.",
      link:"./series"
    }
  ]
  console.log(cards)
  return (
    <div>
      <header className="px-10 py-5 bg-gradient-to-r bg-purple-600">
        <h1 className="font-bold text-4xl text-white ">
          <Link to="/" title="Quniela MX" aria-label="Remix Jokes">
            <span >Gmarr | Mis Notas de Todo</span>
          </Link>
        </h1>
      </header> 
      <div className="flex flex-col items-center justify-center ">
        <div>
        <Link to="./newsletter.tsx">
          <h1 className="font-semibold text-3xl">Newsletter</h1>
        </Link>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center w-screen h-screen space-x-3">
          {cards.map((c)=>(
            <div key={c.link} className="shadow-md shadow-slate-200 p-6 bg-slate-300/30 rounded-md hover:bg-slate-200 cursor-pointer">
              <Link prefetch="intent" to={c.link} title={c.titulo}>
                <p className="font-semibold">{c.titulo}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}