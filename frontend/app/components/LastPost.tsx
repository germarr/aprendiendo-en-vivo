import { Link } from "remix";

export function MediaCards({lafecha, laPlataforma, laCalificacion}){
    return(
        <div>
            <div><p className="text-sm font-semibold">Date: <span className="font-sm font-thin">{lafecha}</span></p></div>
            <div><p className="text-sm font-semibold">Platform: <span className="font-sm font-thin">{laPlataforma}</span></p></div>
            <div><p className="text-sm font-semibold">Calif: <span className="font-sm">{`⭐`.repeat(laCalificacion)}</span></p></div>
        </div>
    )
}

export function TechCards({lafecha}){
    return(
        <div>
            <div><p className="text-sm font-semibold">Date: <span className="font-sm font-thin">{lafecha}</span></p></div>
      </div>
    )
}

function Cards(props) {
    const isLoggedIn = props.isLoggedIn;
    const fech = props.date;
    const plat = props.platform;
    const calif = props.calification
    
    if (isLoggedIn) {
      return <TechCards lafecha={fech}/>;
    }
    return <MediaCards lafecha={fech} laPlataforma={plat} laCalificacion={calif}/>;
  }

export default function LastPost({tech, articulo, eltitulo, elcontenido, lafecha, img_link, laPlataforma, laCalificacion}) {

  return (
    <div className="flex md:flex-row flex-col space-x-4 shadow p-5">
        
        {/* Fecha */}
        <div className="grid justify-center content-center md:w-40">
            {/* <div><p className="text-sm font-semibold">Date: <span className="font-sm font-thin">{lafecha}</span></p></div>
            <div><p className="text-sm font-semibold">Platform: <span className="font-sm font-thin">{laPlataforma}</span></p></div>
            <div><p className="text-sm font-semibold">Calif: <span className="font-sm">{`⭐`.repeat(laCalificacion)}</span></p></div> */}
            <Cards isLoggedIn = {tech} date={lafecha} platform={laPlataforma} calification={laCalificacion}/>
        </div>

        <div className="grid grid-cols-2 divide-x-2 divide-slate-500 py-4">
            <div></div>
            <div></div>
        </div>

        {/* Contenido */}
        <div className="flex flex-col space-y-2">
            <div className=""><h3 className="text-xl font-semibold underline">{eltitulo}</h3></div>
            <div className="inline text-ellipsis"><p>{elcontenido}</p></div>
            <div>
                <Link to={`../${articulo}`} prefetch="intent">
                    <button className="text-blue-500"><span className="underline">Read</span> ➡️</button>
                </Link>
            </div>
        </div>
    </div>
  )
}
