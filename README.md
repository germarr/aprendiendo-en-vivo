### 1.1 Installing Remix
npx create-remix@latest frontend

### 1.2 Installing Tailwind CSS
Now we are going to install TailwindCSS.

```bash
npm install -D concurrently tailwindcss @tailwindcss/aspect-ratio @tailwindcss/forms @heroicons/react
```

Open the `package.json` file and add the next snippets inside the `scripts` dictionary. 

```json
  "scripts": {
    "build": "npm run build:css && remix build ",
    "build:css": "tailwindcss -o ./app/tailwind.css",
    "dev": " concurrently \"npm run dev:css\" \"remix dev\"",
    "dev:css":"tailwindcss -o ./app/tailwind.css --watch",
    "postinstall": "remix setup node",
    "start": "remix-serve build"}
```

Now run the next snippet of code in the terminal:
```bash 
npx tailwind init
```

Now you have a file called `tailwind.config.js` on the root folder. Open it and add the next code:

```js
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}",],
    theme: {
      extend: {},
    },
    plugins: [
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/forms")
    ],
  }
```

### 1.3 Instalando FastAPI
```txt
fastapi
Jinja2
pandas
psycopg2-binary
uvicorn[standard]
sqlmodel
```