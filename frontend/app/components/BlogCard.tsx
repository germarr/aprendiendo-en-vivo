import { Link } from "remix"

export default function BlogCard({ t, link, desc, author, date, imagelink}) {
  return (
    <div className="bg-slate-100 w-auto md:h-64 rounded-lg shadow-sm shadow-slate-400">
        <div className="w-full h-20 overflow-hidden relative">            
            <div className="absolute flex justify-center items-center w-full h-full bg-white/50">
                <h3 className="text-xl font-bold text-black">{t}</h3>
            </div>
            <div className="">
                <img className="w-full h-auto" style={{marginTop:-100}} src={imagelink} alt="" />
            </div>
        </div>
        <div className="flex flex-col px-5 pt-2">
            <div className="pt-1">
                <p className="text-xs"><span className="font-semibold">Autor:</span> {author}</p>
                <p className="text-xs"><span className="font-semibold">Fecha:</span> {date}</p>
            </div>
            <div className="py-3">
                <p className="text-xs"><span className="font-semibold">Descripción:</span></p>
                <p className="text-xs">{desc}</p>
            </div>
                <div className="pt-1 mb-2 md:pt-4">
                    <Link to={link} prefetch="intent">
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-small rounded-sm text-base px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Leer</button>
                    </Link>
                </div>
        </div>
    </div>
  )
}
