import { Link } from "remix";

export type Contentpill = {
    titulo:string;
    desc:string;
    link:string;
}


export default function DataPill({pilldata}) {
    const data:Contentpill= pilldata 

  return (
    <div>
        <div className="shadow-md shadow-slate-200 p-4 h-44 grid content-center bg-white rounded-b-md">
            <div className="">
                <h3 className="font-bold text-lg">{data.titulo}</h3>
                <p className="font-thin text-lg h-14">{data.desc}</p>
            </div>
            <div className="gap-y-4 divide-y-2 divide-slate-500/60 pt-2 pb-2">
                <div></div>
                <div></div>
            </div>
            <div className="grid grid-cols-2 gap-x-4">
                <div>
                    <Link prefetch="intent" to={data.link} title="Holi">
                        <button className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center justify-center">
                            <p className="text-center text-slate-800">Visitar</p>
                        </button>
                    </Link>
                </div>
                <div className="flex items-center justify-center">
                  <a href="https://github.com" title="Gerardo's Github">
                    <svg className="fill-gray-400 hover:fill-gray-500" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
                  </a>
                </div>
            </div>
        </div>
    </div>
  ) 
}
