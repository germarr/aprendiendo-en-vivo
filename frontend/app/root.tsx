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
import Bottombar from "./components/Bottombar";

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
        <header className="sticky top-0 z-50">
          <Navbar/> 
        </header> 
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Bottombar />
      </body>
    </html>
  );
}
