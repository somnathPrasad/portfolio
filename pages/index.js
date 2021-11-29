import Head from "next/head";
import DownArrow from "../components/downArrow";
import Typewriter from "typewriter-effect";
import utilStyles from "../styles/utils.module.css";
import DisplayBox from "../components/displayBox";
import flashCardImage from "../public/images/flash_card.png";
import mehboobMusicImage from "../public/images/mehboob_music.png";
import typingRaceImage from "../public/images/typing_race.png";
import og_image from '../public/images/og_image.png'

export default function Home(props) {
  const carouselData =  [
    {
      id: 1,
      img: flashCardImage,
      title: "Flash Cards Learn",
      link: "https://flashcardlearn.herokuapp.com/"
    },
    {
      id: 2,
      img: mehboobMusicImage,
      title: "Mehboob Music Official",
      link: "https://mehboobmusicofficial.herokuapp.com/"
    },
    {
      id: 3,
      img: typingRaceImage,
      title: "Typing Race",
      link: "https://desolate-beach-76075.herokuapp.com/"
    }
  ]
  return (
    <div className="">
      <Head>
        <title>Somnath Prasad</title>
        <meta name="description" content="Somnath Prasad Portfolio Website" />
        <meta name="image" property="og:image" content="../public/images/og_image.png" />
        <meta
          name="description"
          property="og:description"
          content="Somnath Prasad Portfolio Website"
        />
        <meta name="author" content="Somnath Prasad" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
        />
      </Head>

      <main className="">
        <section>
          <div className="bg-black h-screen flex justify-center items-center flex-col relative">
            <span className="text-white text-8xl font-semibold text-center">
              <span className={utilStyles.animationPulseColor}>
                Hello, I am Somnath.
              </span>
            </span>
            <DownArrow />
          </div>
        </section>

        <section>
          <div className="h-screen bg-red-500 flex justify-center items-center flex-col relative text-white md:text-8xl text-6xl font-semibold text-center">
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("I am a <strong>web developer</strong>")
                  .pauseFor(2500)
                  .deleteChars(13)
                  .pauseFor(20)
                  .typeString("<strong>learner</strong>")
                  .pauseFor(2500)
                  .deleteChars(7)
                  .pauseFor(20)
                  .typeString("<strong>coder</strong>")
                  .pauseFor(2500)
                  .deleteAll()
                  .start();
              }}
            />
            <DownArrow />
          </div>
        </section>

        <section>
          <div className="bg-gradient-to-r from-green-400 to-blue-500  h-screen flex justify-center items-center flex-col relative">
            <span className="text-white text-4xl absolute top-3">
              Some of my works
            </span>
            <div className="md:px-0 px-4 pt-10">
              <DisplayBox data={carouselData}/>
            </div>
            <DownArrow />
          </div>
        </section>

      </main>
    </div>
  );
}
