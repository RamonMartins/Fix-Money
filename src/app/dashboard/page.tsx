import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard"
}

export default async function Home() {
  const busca = await fetch("https://api.github.com/users/ramonmartins")
  const data = await busca.json()
  const user = JSON.stringify(data, null, 2)

  return (
    <>
      <h1>{data.name}</h1>
      <pre>{user}</pre>
    </>
  );
}
