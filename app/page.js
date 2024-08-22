"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";





export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('');
  const [nav, setNav] = useState(false);
  const fullText = "- by Samaksh Khandelwal";

  // TypeWriter Function 
  useEffect(() => {
    setIsVisible(true);
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        //setText((prev) => prev + fullText[i]) // caused errors by rendering unexpected spellings and 'undefined' appended after the text
        setText(fullText.slice(0, i + 1)); // chose to not append characters like the above method and now I just set them to be substrings 

        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100);

    return () => clearInterval(typingEffect);
    setNav(true);
  }, []);


  // {NAV BUTTON }

  const NavButton = ({ href, text }) => (
    <Link
    href = {href}
    className="group rounded-lg px-5 py-4 sm:px-5 sm:py-4 transition-all ease-in-out duration-300 transform hover:scale-110 border border-transparent shadow-md hover:border-purple-500 hover:shadow-lg hover:shadow-red-950"
  >
    
 
    <div className="bg dark:bg- rounded-md h-full w-full p-2">
      <h2 className="mb-3 text-2xl font-semibold group-hover:text-pretty transition-colors duration-300">
        {text}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          
        </span>
      </h2>
    </div>
  </Link>
);

// CONNECT SECTION
const ConnectButton = ({ href, src, alt }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group rounded-lg px-5 py-4 transition-all ease-in-out duration-300 transform hover:scale-110 border border-transparent shadow-md hover:border-purple-500 hover:shadow-lg hover:shadow-red-950"
  >
    <div className="bg dark: bg- rounded-md h-full w-full p-2 flex items-center justify-center">
      <Image src={src} alt={alt} width={32} height={32} />
    </div>
  </Link>
);

  return (
    

      <main className="min-h-screen relative">



      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="fixed inset-0 z-0">
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-20 transition-opacity duration-1000 ease-in-out hover:opacity-60"
            // { implemented ease in out to bg when hover}  
            src="https://media.giphy.com/media/eJoZAwRN9OI5QjthIE/giphy.gif?cid=790b7611dsexi57wg9888md71hguds1tvikyd54k1fej6jyo&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          />
        </div>

        <div className="z-10">
          <h1 className={`text-6xl font-bold mb-2 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ease-in-out`}>
            Welcome to My Webpage
          </h1>
          <h2 className="text-3xl font-semibold text-center">{text}</h2>

        <div className={'flex flex-wrap justify-center gap-4 mt-8  '}>
            <NavButton href="#about" text="About Me" />
            <NavButton href="/projects" text="Projects" />

            <NavButton href="#connect" text="Connect!" />
          </div>
        </div>

        </section>

      <section id="about" className=" min-h-screen bg- flex items-center justify-center p-24">
        <div className=" z-10 max-w-3xl">
          <h2 className="text-4xl font-bold mb-2">Some quick introductions!!!</h2>
          <p className="text-lg">
            Thanks for visiting my profile. I am a rising junior at McGill University majoring in Computer Science and also minoring in economics and statistics. In my free time I like to play tennis, indulge in some video games, read some peak fiction and spend a lot of time with my friends. When I am not studying, You can find me frolicking somewhere on the McGill campus but I mostly spend my time at the library :)
          </p>
        </div>
      </section>

      {/* <section id="projects" className="min-h-screen bg- p-24">
        <h2 className="text-4xl font-bold mb-16 text-center">Projects</h2>
        <div>
        <a href="https://github.com/brownsugarmilkT/Cafeteria-Manager/tree/master" target="_blank" rel="noopener noreferrer" className="w-full md:w-1/3 relative overflow-hidden rounded-lg shadow-md">
          <Project 
            title="McGill Calorie Tracker"
            imageSrc="/0.png"
            videoSrc="/video0.mp4"
            description="Meal recommender system based on calorie required from different cafs of McGIll."
            githubLink="https://github.com/brownsugarmilkT/Cafeteria-Manager/tree/master"
          />
          </a>

          <a href="https://github.com/brownsugarmilkT/MAIS202-Winter-2024" target="_blank" rel="noopener noreferrer" className="w-full md:w-1/3 relative overflow-hidden rounded-lg shadow-md">
          <Project 
            title="Stock Price Predictor Tool"
            imageSrc="/0.png"
            videoSrc="/video0.mp4"
            description="stockr.ai is a machine learning based stock predictor for S&P 500 stocks (as long as the stock has been public for atleast the last 9 years). stockr.ai can approximate the close price for the next 30 days of any given stock."
            githubLink="https://github.com/brownsugarmilkT/MAIS202-Winter-2024"
          />
          </a>
        </div>
        
      </section>
      
      MOVED PROJECTS TO ITS OWN PAGE
      
      */
      
      }  



<section id="connect" className="min-h-screen bg- flex items-center justify-center p-24">
        <div className="z-10 max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-8">Connect</h2>
          <p className="text-lg mb-8">
            Feel free to reach out through any of the channels below.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <ConnectButton
              href="https://github.com/brownsugarmilkT"
              src="/779088.png"
              alt="GitHub"
            />
            <ConnectButton
              href="https://www.linkedin.com/in/samaksh-khandelwal"
              src="/174857.png"
              alt="LinkedIn"
            />
            <ConnectButton
              href="https://www.instagram.com/kaysam__"
              src="/2111463.png"
              alt="Instagram"/>
              <ConnectButton
              href="mailto:ksamaksh0601.com"
              src="/7769890.png"
              alt="Email"
            />
              
            </div>
          </div>
        </section>
    </main>
  );
}