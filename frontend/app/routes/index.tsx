import React from "react";
import type {LinksFunction, LoaderFunction, MetaFunction } from "remix";
import {useLoaderData } from "remix";
import styles from "~/styles/tailwind.css"
import {marked} from "marked"
import type { Contentpill } from "~/components/DataPill";
import DataPill from "~/components/DataPill";
import LastPost from "~/components/LastPost";
import { getPosts, getSerie } from "~/api/getArticle";

export type Contenido = {
  titulo:string;
  subTitulo:string;
  subTituloDos:string;
  bloqueUno:string;
  desc1:{
    titulo:string;
    subtitulo:string;
  },
  desc2:{
    titulo:string;
    subtitulo:string;
  }
  desc3:{
    titulo:string;
    subtitulo:string;
  },
  cv:{
    tituloUno:string;
    subtituloUno:string;
    contenidoUno:string;
    tituloDos:string;
    subtituloDos:string;
    contenidoDos:[{
      nombre:string;
      images:string;
      url_link:string;
    }];
  }
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
    subTituloDos:"web apps & data analytics.",
    bloqueUno:"¿a que me dedico?",
    desc1:{
      titulo:"analisis de datos",
      subtitulo:"python, r y sql son mis herraminetas favoritas."
    },
    desc2:{
      titulo:"business intelligence",
      subtitulo:"excel, power bi y tableau. de =sum() a DAX"
    },
    desc3:{
      titulo:"marketing digital",
      subtitulo:"administrando anuncios de facebook y google desde el 2013"
    },
    cv:{
      tituloUno:"¿quien soy?",
      subtituloUno:"Entusiaste del analisis de los datos. Actualmente viviendo en New Jersey, pero nacido en la Cd. de Méxcio.",
      contenidoUno:"Pendiente ...",
      tituloDos:"tecnologías favoritas",
      subtituloDos:"la mayoría de mis proyectos usan:",
      contenidoDos:[
        {nombre:"postgresql",
        images:"https://gmarrstorage.blob.core.windows.net/images/postgreslogo.png",
        url_link:"https://google.com"}],
    }
  }

  let homepagedataEN= {
    titulo:"hello 👋 i am",
    subTitulo:"gerardo m.",
    subTituloDos:"web apps & data analytics.",
    bloqueUno:"what i do?",
    desc1:{
      titulo:"data analysis",
      subtitulo:"python, r and sql are my tools of choice"
    },
    desc2:{
      titulo:"business intelligence",
      subtitulo:"excel, power bi and tableau. from =sum() to DAX"
    },
    desc3:{
      titulo:"digital marketing",
      subtitulo:"managing faceboo and google ads since 2013"
    },
    cv:{
      tituloUno:"who am i?",
      subtituloUno:"Data Enthusiast. Currently Living in the 🇺🇸 but originally from 🇲🇽",
      contenidoUno:"I've spent the last 7 years working in digital strategy, business intelligence and marketing analytics.\n\n From 2012 to 2019 I got the awesome opportunity to work for 2 of the most popular automotive brands in the world and on 2020, while finishing my master's degree, I changed gears and went on to do consulting work for Rappi (one of Latam's biggest startups) and Planet Fitness (one of the largest gym chains in the US).\n\n Currently I'm working for Corsair as a Marketing Analytics specialist for their E-commerce platform.",
      tituloDos:"favorite tech",
      subtituloDos:"most of my projects are build with a combination of this tech",
      contenidoDos:[
        {nombre:"fastapi",
        images:"https://gmarrstorage.blob.core.windows.net/images/fastapilogo.png",
        url_link:"https://google.com"},
        {nombre:"postgresql",
        images:"https://gmarrstorage.blob.core.windows.net/images/postgreslogo.png",
        url_link:"https://google.com"},
        {nombre:"chartjs",
        images:"https://gmarrstorage.blob.core.windows.net/images/chartjslogo.png",
        url_link:"https://google.com"},
        {nombre:"remix run",
        images:"https://gmarrstorage.blob.core.windows.net/images/remixlogo.png",
        url_link:"https://google.com"},
        {nombre:"powerbi",
        images:"https://gmarrstorage.blob.core.windows.net/images/powerbilogo.png",
        url_link:"https://google.com"},
        {nombre:"python pandas",
        images:"https://gmarrstorage.blob.core.windows.net/images/pandaslogo.png",
        url_link:"https://google.com"},
        {nombre:"react js",
        images:"https://gmarrstorage.blob.core.windows.net/images/reactlogo.png",
        url_link:"https://google.com"},
        {nombre:"tailwindcss",
        images:"https://gmarrstorage.blob.core.windows.net/images/tailwindlogo.png",
        url_link:"https://google.com"},
        {nombre:"supabase",
        images:"https://gmarrstorage.blob.core.windows.net/images/supabaselogo.png",
        url_link:"https://google.com"}]
    }
  }

  let proyectlist = [{
    titulo:"Blog 📝",
    desc:"Checkout my notes about different topics. From Star Wars to Machine Learning.",
    link:"./aprendiendo.tsx"
  },{
    titulo:"Youtube Analyzer 🎞️",
    desc:"Check the top stats from any Youtube channel in a nice dashboard.",
    link:"./aprendiendo.tsx"
  },{
    titulo:"LegisladoresMX 🏛️",
    desc:"Look for your congressmen in Mexico with an easier UI.",
    link:"./aprendiendo.tsx"
  },{
    titulo:"Ecobici Dashboard 🚲",
    desc:"Visualize the top metrics from Mexico's City shared bike program.",
    link:"./aprendiendo.tsx"
  },{
    titulo:"Twitch Dashboard 👾",
    desc:"Wich are the top Twith streamers, around the world, right now?",
    link:"./aprendiendo.tsx"
  },{
    titulo:"Youtube Dashboard 📽️",
    desc:"What's popular in Youtube, around the world, tight now?",
    link:"./aprendiendo.tsx"
  }]

  //Get Movie Posts
  const moviePosts = await getPosts()
  let movieNumber = Math.max(...moviePosts.map((p)=>p[1]))
  let moviePost = moviePosts.filter(n=> n[1] >= movieNumber - 1)

  //Get Series Posts
  const seriesPosts = await getSerie() 
  let seriesNumber = Math.max(...seriesPosts.map((p)=>p[1]))
  let seriesPost = seriesPosts.filter(n=> n[1] >= seriesNumber - 1)

  return [homepagedata,homepagedataEN, proyectlist, moviePost, seriesPost];
}

export default function Index() {
  const fcontenido = useLoaderData()
  const [state, setState] = React.useState("");
  let contenido:Contenido;
  let pelisContent:any = fcontenido[3]
  let seriesContent:any = fcontenido[4]

  React.useEffect(() => {
    let lang:string = navigator.language
    setState(lang)
  }, [state]);

  if(state != "en"){
    contenido= fcontenido[0]
  }else{
    contenido = fcontenido[1]
  }

  const body = marked.parse(`${contenido.cv.contenidoUno}`)
  const proyectList = fcontenido[2]

  
  return (
    <div className="grid grid-cols-1 gap-y-3 md:gap-y-10 mb-10">
      
      {/* HEADER */}
      <section>
        <div className="flex mt-2 mx-3 gap-2 items-center justify-center">
          <div className="flex items-center justify-end">
            <div className="hover:-rotate-45 h-20 w-20 md:h-52 md:w-52 relative">
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
      <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  mt-2 mb-5 py-11">
          <div className="divide-y-2 divide-yellow-500 lg:mx-96 md:mx-60 mx-12 text-center">
            <div className="flex justify-center py-3">
              <h2 className="text-lg md:text-4xl font-bold text-gray-200">{contenido.bloqueUno} 🤔</h2>
            </div>
            <p>&nbsp;</p>
          </div>           
            <div className="flex-row md:grid md:grid-cols-3 mx-8 space-y-7 md:space-y-0 pb-4">
              <div>
                <div className="flex justify-center">
                  <h3 className="text-lg md:text-3xl font-semibold text-gray-200">{contenido.desc1.titulo}</h3>
                </div>
                <div className="flex justify-center">
                  <p className="text-xs md:text-lg font-extralight text-gray-100 text-center">{contenido.desc1.subtitulo}</p>
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
      
      {/* Presentation Cards */}
      <div className="grid grid-cols-1 gap-y-10 px-10">    
        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
          {/* Card 1 */}
          <div className="shadow-md p-5 rounded-tl-md">
            <div className="grid grid-cols-1 gap-y-2">
              {/* Title and Subtitle */}
              <div>
                <h2 className="font-bold text-2xl">{contenido.cv.tituloUno}</h2>
                <div className="bg-gray-800/75 py-1 px-2"><h3 className="text-white font-semibold text-left text-sm md:text-base">{contenido.cv.subtituloUno}</h3></div>
              </div>
              {/* Content Paragraph */}
              <div>
                <div className="flex flex-col space-y-2" dangerouslySetInnerHTML={{__html:body}}></div>
              </div>
              <div className="divide-y-2 divide-slate-500/60 px-3 my-4">
                  <div></div>
                  <div></div>
              </div>
              {/* Social Media Logos */}
              <div className="grid content-center md:mt-5">
                  <div className="flex items-center justify-center space-x-4">
                    <div>
                      <a href="https://linkedin.com" title="Gerardo's LinkedIn">
                        <svg className="fill-gray-500 hover:fill-gray-400 " xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </a>
                    </div>
                    <div>
                      <a href="https://github.com" title="Gerardo's Github">
                      <svg className="fill-gray-500 hover:fill-gray-400" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
                      </a>
                    </div>
                    <div>
                      <a href="https://twitter.com" title="Gerardo's Github">
                        <svg className="fill-gray-500 hover:fill-gray-400" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"/></svg>
                      </a>
                    </div>
                    <div>
                      <a href="https://twitter.com" title="Gerardo's Github">
                        <svg className="fill-gray-500 hover:fill-gray-400"  xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M9.97 18.492l2.03-2.03h3.821l2.388-2.388v-7.641h-11.463v10.03h3.224v2.029zm4.418-9.313h1.433v4.175h-1.433v-4.175zm-3.821 0h1.433v4.175h-1.433v-4.175zm8.433-9.179h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.642 14.791l-4.179 4.179h-3.104l-2.031 2.03h-2.149v-2.03h-3.821v-11.224l1.075-2.746h14.209v9.791z"/></svg>
                      </a>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col space-y-4 shadow-md p-5 rounded-tl-md">
            <div>
              <h2 className="font-bold text-2xl">{contenido.cv.tituloDos}</h2>
              <div className="bg-gray-800/75 py-1 px-2"><h3 className="text-white font-semibold text-left text-sm md:text-base">{contenido.cv.subtituloDos}</h3></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {contenido.cv.contenidoDos.map((e)=>(
                <a key={e.nombre} href={e.url_link} title={`Logo de ${e.nombre}`} >
                  <div className="flex items-center justify-center p-3 shadow-md shadow-slate-100">
                    <div className="flex items-center flex-col justify-center space-y-2">
                      <div><p className="text-xs font-semibold">{e.nombre}</p></div>
                      <div>
                        <img className="object-fill h-14 w-14" src={e.images} alt="" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Project Cards */}
      <div className="bg-slate-100 pb-10 pt-2">
        <div  className="grid grid-cols-1 gap-y-10 px-10 py-5">
          <section className="grid grid-cols-1 gap-y-4 divide-y-2 divide-yellow-500">
            <div className="flex justify-end">
              <div className="flex flex-col">
                <h2 className="font-bold text-2xl">recent projects 🧪</h2>
                <div className="bg-gray-800/75 py-1 px-2"><h3 className="text-white font-semibold text-left text-sm md:text-base">i 💖 react and experimenting with apis.</h3></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-4 pt-4">
              {proyectList.map((e:Contentpill)=>(
                <DataPill key={e.titulo} pilldata={e} />
              ))}
            </div>
          </section>
        </div>
      </div>
      
      {/* Blog Cards */}
      <section className="px-10 grid grid-cols-1 gap-y-4 divide-y-2 divide-yellow-500">
        <div>
          <div className="flex flex-col">
            <h2 className="font-bold text-2xl">latest blog entries 📚</h2>
            <div className="bg-gray-800/75 py-1 px-2 w-full md:w-1/4"><h3 className="text-white font-semibold text-left text-sm md:text-base">read my notes about different topics.</h3></div>
          </div>
        </div>
        <div className="grid gap-y-4 px-5">
          <div className="mt-4">
            <h2 className="font-bold text-xl"><span className="underline">tech notes</span> 🖥️</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 pt-4">
              <LastPost/>
              <LastPost/>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="font-bold text-xl"><span className="underline">movies</span> 🍿</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 pt-4">
              {pelisContent.map((ob, i)=>(
                <LastPost key={`peliculas_${i}`}  lafecha={pelisContent[i][4]} eltitulo={pelisContent[i][3]} elcontenido={pelisContent[i][2]} articulo={`/peliculas/${pelisContent[i][0]}`}/>
              ))}
            </div>
          </div>
          <div className="mt-0">
            <h2 className="font-bold text-xl"><span className="underline">series</span> 📺</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 pt-4">
              {seriesContent.map((ob, i)=>(
                <LastPost key={`series_${i}`}  lafecha={seriesContent[i][4]} eltitulo={seriesContent[i][3]} elcontenido={seriesContent[i][2]} articulo={`/series/${seriesContent[i][0]}`}/>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
