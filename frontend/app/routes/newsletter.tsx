import { Form, useActionData } from "remix"
import type {ActionFunction} from "remix"


// export let action: ActionFunction = async({request}) =>{
//   let formData = await request.formData();
//   let email = formData.get("email")
//   console.log({email})
//   return {ok:true}
// }

export let action: ActionFunction =async ({request}) => {
  let formData = await request.formData();
  console.log(formData)
  
  const API = "http://localhost:8787";
  const price = 73

  let res = await fetch(`${API}/cook/${price}`,{
    method:"post",
    body:JSON.stringify({
      "name": `${formData.get("name")}`,
      "description": `${formData.get("description")}`,
      "price": `${formData.get("price")}`,
      "tax": `${formData.get("tax")}`,
    }),
    headers:{
      "Content-Type":"application/json; charset=utf-8"
    }
  })

  let gra = await res.json()

  console.log("🐶",gra)

  return gra;

}

export default function Newsletter() {
  let actionData = useActionData();
  
  let state: "success" | "error" = actionData ? "success" : "error"
  
  return (
    <main>
          <Form method="post">
            <h2>Subscribe</h2>
            <p>Don't miss any of the action</p>
            <fieldset>
              <input type="text" name="name" placeholder="Gerardo M."/>
              <input type="text" name="description" placeholder="Champagne Supernova"/>
              <input type="number" name="price" placeholder="5"/>
              <input type="number" name="tax" placeholder="1.7"/>
              <button type="submit">Subscribe</button>
            </fieldset>
          </Form>
          <div>
            <h2>Data Came back!</h2>
            <pre>
              {JSON.stringify(actionData,null)}
            </pre>
          </div>
          <p>{actionData?.error ? (
              actionData.message):
              <>&nbsp;</>
          }</p>
    </main>
  )
}