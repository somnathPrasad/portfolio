import Head from "next/head";
import DownArrow from "../components/downArrow";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Somnath Prasad</title>
        <meta name="description" content="Somnath Prasad Portfolio Website" />
        <meta name="image" property="og:image" content="[Image URL here]" />
        <meta
          name="description"
          property="og:description"
          content="Somnath Prasad Portfolio Website"
        />
        <meta name="author" content="Somnath Prasad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="bg-black h-screen flex justify-center items-center flex-col relative">
          <span className="text-white text-8xl font-semibold text-center">
            Hello, I am Somnath.
          </span>
          <DownArrow />
        </div>
        <div className="bg-blue-500 h-screen flex justify-center items-center flex-col relative text-white text-8xl font-semibold text-center">
          <Typewriter
          options={{loop:true}}
            onInit={(typewriter) => {
              typewriter
                .typeString("I am a <strong>web developer</strong>")
                .pauseFor(2500)
                .deleteChars(13)
                .pauseFor(20)
                .typeString("<strong>Student</strong>")
                .pauseFor(2500)
                .deleteAll()
                .start();
            }}
          />
          <DownArrow />
        </div>
      </main>

      <footer className=""></footer>
    </div>
  );
}
