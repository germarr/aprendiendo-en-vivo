import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import Navbar from "./components/Navbar";

export const meta: MetaFunction = () => {
  return { title: "GMARR | Aprendiendo en Público." };
};

export default function App() {
  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* Header and Navbar */}
        <header>
          <Navbar/> 
        </header> 
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
