import { topNine } from "./api/dbSearch";
import Poster from "./components/Poster";

export default async function Home() {

    const result = await topNine()

    return (
      <>
        <h1 className="text-2xl text-emerald-400 pb-10">GAS Station Movie Database</h1>
        <Poster movies={result} />
      </>
    )
}
