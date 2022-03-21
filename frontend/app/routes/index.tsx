import type { LinksFunction, LoaderFunction, MetaFunction } from "remix";
import { Link, useLoaderData } from "remix";
import styles from "~/styles/tailwind.css"

export type Contenido = {
  titulo:string;
  subTitulo:string;
  subTituloDos:string;
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
    title: "Gerardo M. | Página Personal",
    description:"Este espacio esta dedicado a todos los proyectos que hago en mi tiempo libre." 
  };
};

export const loader:LoaderFunction = async() =>{
  let homepagedata= {
    titulo:"hola 👋",
    subTitulo:"soy gerardo m.",
    subTituloDos:"web apps & data analytics."
  }
  
  return homepagedata;
}

export default function Index() {
  const contenido:Contenido = useLoaderData()
  
  return (
    <div>
      {/* HEADER */}
      <section>
        <div className="flex mt-2 mx-3 gap-2 items-center justify-center">
          <div className="flex items-center justify-end">
            <div className="h-20 w-20 md:h-52 md:w-52 relative">
              <img src="https://imagesforpersonalsite.s3.us-west-2.amazonaws.com/header_image.png" alt="Gerardo M. in the snow." className="shadow-xl rounded-tl-lg rounded-br-lg"/>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <h1 className="font-thin text-3xl md:text-6xl text-black">{contenido.titulo}</h1>
            <h2 className=" font-bold text-2xl md:text-5xl text-black">{contenido.subTitulo}</h2>
            <div className="bg-pink-800 mt-1">
              <p className=" text-white text-xs md:text-lg font-semibold p-0 md:p-1">{contenido.subTituloDos}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* What I do? */}
      <section className="bg-slate-400  mt-2 mb-5 py-6">
        <div className="divide-y-2 divide-yellow-500 lg:mx-96 md:mx-60 mx-12 text-center">
          <div className="flex justify-center py-3">
            <h2 className="text-lg md:text-4xl font-bold text-gray-200">¿a que me dedico? 🤔</h2>
          </div>
          <p>&nbsp;</p>
        </div>           
          <div className="flex-row md:grid md:grid-cols-3 mx-8 space-y-7 md:space-y-0 pb-4">
            <div>
              <div className="flex justify-center">
                <h3 className="text-lg md:text-3xl font-semibold text-gray-200">data analysis</h3>
              </div>
              <div className="flex justify-center">
                <p className="text-xs md:text-lg font-extralight text-gray-100 text-center">python, r and sql are my tools of choice</p>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <h3 className="text-lg md:text-3xl font-semibold text-gray-200">business intelligence</h3>
              </div>
              <div className="flex justify-center">
                <p className="text-xs md:text-lg  font-extralight text-gray-100 text-center">excel, power bi, and tableau. from =sum() to macros.</p>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <h3 className="text-lg md:text-3xl font-semibold text-gray-200">digital marketing</h3>
              </div>
              <div className="flex justify-center">
                <p className="text-xs md:text-lg font-extralight text-gray-100 text-center">managing facebook and google ads since 2013.</p>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}
