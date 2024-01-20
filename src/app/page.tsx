import { fetchAnime } from "./action"

export default async  function Home() {
  const data = await fetchAnime(11757)
  console.log(data);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <h1>Hello</h1>
    </main>
  )
}
