
import Card from "./Components/Card/CardSection"
import Footer from "./Components/Footer"
import Main from "./Components/Main"
import Mid from "./Components/Mid"
import { Suspense } from "react";
import Nav from "./Components/Nav"
import type { Icard } from "./Type/cardType";


const cardFetch = async (): Promise<Icard[]> => {
  const res = await fetch('./data.json');
  const data = await res.json();
  return data;

}

function App() {

    const cardPromise = cardFetch();
  return (
    <>
      <Nav />
      <Main />
      <Mid />
      <Suspense fallback={<h2>Loading....</h2>}>
        <Card cardPromise={cardPromise} />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
