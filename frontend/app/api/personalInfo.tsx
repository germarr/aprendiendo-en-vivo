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
        css_l:string;
      }];
    }
  }

// Contenido en Ingels
export const api_homepagedataEN:Contenido= {
    titulo:"hello i am",
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
      contenidoUno:"I've spent the last 7 years working in digital strategy, business intelligence and marketing analytics.\n\n From 2012 to 2019 I got the awesome opportunity to work for 2 of the most popular automotive brands in the world and on 2020, while finishing my master's degree, I changed gears and went on to do consulting work for Rappi (one of Latam's biggest startups) and Planet Fitness (one of the largest gym chains in the US).\n\n After those experiences I accepted a Marketing Analytics position at Corsair. On this position I supported the marketing efforts on their e-commerce platform.\n\n Just recently I changed jobs and now I'm working as a Marketing Analyst at Microsoft.",
      tituloDos:"favorite tech",
      subtituloDos:"most of my projects are build with a combination of this tech",
      contenidoDos:[
        {nombre:"fastapi",
        images:"https://gmarrstorage.blob.core.windows.net/images/fastapilogo.png",
        url_link:"https://google.com",
        css_l:"object-fill h-20 w-full"},
        {nombre:"postgresql",
        images:"https://gmarrstorage.blob.core.windows.net/images/postgreslogo.png",
        url_link:"https://google.com",
        css_l:"object-fill h-14 w-14"},
        {nombre:"chartjs",
        images:"https://gmarrstorage.blob.core.windows.net/images/chartjslogo.png",
        url_link:"https://google.com",
        css_l:"object-fill h-14 w-14"},
        {nombre:"remix run",
        images:"https://gmarrstorage.blob.core.windows.net/images/remixlogo.png",
        url_link:"https://google.com",
        css_l:"object-fill h-14 w-14"},
        {nombre:"powerbi",
        images:"https://gmarrstorage.blob.core.windows.net/images/powerbilogo.png",
        url_link:"https://google.com",
        css_l:"object-fill h-14 w-14"},
        {nombre:"python pandas",
        images:"https://gmarrstorage.blob.core.windows.net/images/pandaslogo.png",
        url_link:"https://google.com",
        css_l:"object-fill h-20 w-full"},
        {nombre:"react js",
        images:"https://gmarrstorage.blob.core.windows.net/images/reactlogo.png",
        url_link:"https://google.com",
        css_l:"object-fill h-14 w-14 animate-spin"},
        {nombre:"tailwindcss",
        images:"https://gmarrstorage.blob.core.windows.net/images/tailwindlogo.png",
        url_link:"https://google.com",
        css_l:"object-fill h-14 w-14"},
        {nombre:"supabase",
        images:"https://gmarrstorage.blob.core.windows.net/images/supabaselogo.png",
        url_link:"https://google.com",
        css_l:"object-fill h-20 w-full"}]
    }
  }  

// Contenido en Español
export const api_homepagedata:Contenido= {
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
        {nombre:"fastapi",
        images:"https://gmarrstorage.blob.core.windows.net/images/fastapilogo.png",
        url_link:"https://google.com",
        css_l:"object-fill h-20 w-full"},
        {nombre:"postgresql",
        images:"https://gmarrstorage.blob.core.windows.net/images/postgreslogo.png",
        url_link:"https://google.com",
        css_l:"object-fill h-14 w-14"},
        {nombre:"chartjs",
        images:"https://gmarrstorage.blob.core.windows.net/images/chartjslogo.png",
        url_link:"https://google.com",
        css_l:"object-fill h-14 w-14"},
        {nombre:"remix run",
        images:"https://gmarrstorage.blob.core.windows.net/images/remixlogo.png",
        url_link:"https://google.com",
        css_l:"object-fill h-14 w-14"},
        {nombre:"powerbi",
        images:"https://gmarrstorage.blob.core.windows.net/images/powerbilogo.png",
        url_link:"https://google.com",
        css_l:"object-fill h-14 w-14"},
        {nombre:"python pandas",
        images:"https://gmarrstorage.blob.core.windows.net/images/pandaslogo.png",
        url_link:"https://google.com",
        css_l:"object-fill h-20 w-full"},
        {nombre:"react js",
        images:"https://gmarrstorage.blob.core.windows.net/images/reactlogo.png",
        url_link:"https://google.com",
        css_l:"object-fill h-14 w-14 animate-spin"},
        {nombre:"tailwindcss",
        images:"https://gmarrstorage.blob.core.windows.net/images/tailwindlogo.png",
        url_link:"https://google.com",
        css_l:"object-fill h-14 w-14"},
        {nombre:"supabase",
        images:"https://gmarrstorage.blob.core.windows.net/images/supabaselogo.png",
        url_link:"https://google.com",
        css_l:"object-fill h-20 w-full"}]
    }
  }

// Lista de Programas que uso
export const api_proyectlist:any = [{
    titulo:"Blog 📝",
    desc:"Checkout my notes about different topics. From Star Wars to Machine Learning.",
    link:"./aprendiendo"
  },{
    titulo:"Youtube Analyzer 🎞️",
    desc:"Check the top stats from any Youtube channel in a nice dashboard.",
    link:"./aprendiendo"
  },{
    titulo:"LegisladoresMX 🏛️",
    desc:"Look for your congressmen in Mexico with an easier UI.",
    link:"./aprendiendo"
  },{
    titulo:"Ecobici Dashboard 🚲",
    desc:"Visualize the top metrics from Mexico's City shared bike program.",
    link:"./aprendiendo"
  },{
    titulo:"Twitch Dashboard 👾",
    desc:"Wich are the top Twith streamers, around the world, right now?",
    link:"./aprendiendo"
  },{
    titulo:"Youtube Dashboard 📽️",
    desc:"What's popular in Youtube, around the world, tight now?",
    link:"./aprendiendo"
  }]

