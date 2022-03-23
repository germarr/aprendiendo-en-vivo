import { Link } from "remix";

export default function LastPost({articulo, eltitulo, elcontenido, lafecha}) {

  return (
    <div className="flex space-x-4 shadow p-5">
        {/* Fecha */}
        <div className="grid content-center">
            <div><p className="text-base font-semibold">Date: <span className="font-normal">{lafecha}</span></p></div>
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
