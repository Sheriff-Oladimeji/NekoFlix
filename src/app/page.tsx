import Header from "@/components/Header";
import { fetchAnime } from "./action"
import Popular from "@/components/Popular";

export default async  function Home() {
  const data = await fetchAnime(11757)
  console.log(data);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <Header />
      <Popular/>
    </main>
  )
}
