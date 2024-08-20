"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('');
  const fullText = "Aspiring Software Dev";


  function Project({ title, imageSrc, videoSrc, description, githubLink }) {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef(null);
  
    useEffect(() => {
      if (isHovered && videoRef.current) {
        videoRef.current.play();
      } else if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }, [isHovered]);
  
    return (
      <div className="flex flex-col md:flex-row items-start gap-8 mb-24">
        <div 
          className="w-full md:w-1/3 relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-110"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image 
            src={imageSrc} 
            alt={title} 
            width={400} 
            height={300} 
            className={`rounded-lg transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <video 
            ref={videoRef}
            src={videoSrc}
            className={`absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            loop
            muted
            playsInline
          />
        </div>
        <div className="w-full md:w-2/3">
          <Link href={githubLink} target="_blank" rel="noopener noreferrer">
            <h3 className="text-2xl font-bold mb-4 hover:text-blue-500 transition-colors duration-300">
              {title}
            </h3>
          </Link>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    );
  }

  useEffect(() => {
    setIsVisible(true);
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText((prev) => prev + fullText[i]);
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100);

    return () => clearInterval(typingEffect);
  }, []);

  return (
    

      <main className="min-h-screen relative">
      {/* GitHub link */}
      <a 
        href="https://github.com/brownsugarmilkT" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed top-4 left-4 z-50 transition-transform duration-300 hover:scale-110"
      >
        <Image src="/githubb.png" alt="GitHub" width={40} height={40} />
      </a>

      {/* LinkedIn link */}
      <a 
        href="https://www.linkedin.com/in/samaksh-khandelwal" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed top-4 right-4 z-50 transition-transform duration-300 hover:scale-110"
      >
        <Image src="/linkedin.png" alt="LinkedIn" width={40} height={40} />
      </a>
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <div className="fixed inset-0 z-0">
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-20 transition-opacity duration-1000 ease-in-out hover:opacity-30"
            src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHJycmppaXhtaHJndXowaXJhbTBhdXQzOWd3eG5paHhmd29uODBhcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/gHkn7pRimgEJzZRbll/giphy.gif"
            alt="homegif"
          />
        </div>

        <div className="z-10">
          <h1 className={`text-6xl font-bold mb-2 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 ease-in-out`}>
            Samaksh Khandelwal
          </h1>
          <h2 className="text-3xl font-semibold text-center">{text}</h2>
        </div>

        <div className="fixed bottom-24 left-24 right-24 flex justify-between z-20">
          <Link
            href="#projects"
            className="group rounded-lg px-5 py-4 transition-all ease-in-out duration-300 transform hover:scale-110 border border-transparent shadow-md hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50"
          >
            <h2 className="mb-3 text-2xl font-semibold group-hover:text-blue-500 transition-colors duration-300">
              Projects
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                →
              </span>
            </h2>
          </Link>

          <Link
            href="/cv"
            className="group rounded-lg px-5 py-4 transition-all ease-in-out duration-300 transform hover:scale-110 border border-transparent shadow-md hover:border-green-500 hover:shadow-lg hover:shadow-green-500/50"
          >
            <h2 className="mb-3 text-2xl font-semibold group-hover:text-green-500 transition-colors duration-300">
              Resume
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                →
              </span>
            </h2>
          </Link>
        </div>
      </section>

      <section id="about" className="min-h-screen bg- flex items-center justify-center p-24">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold mb-8">Some quick introductions!!!</h2>
          <p className="text-lg">
            Thanks for visiting my profile. I am a rising junior at McGill University majoring in Computer Science. I like to play games, tennis, yada yada lorem ipsum tetra . woah
          </p>
        </div>
      </section>

      <section id="projects" className="min-h-screen bg- p-24">
        <h2 className="text-4xl font-bold mb-16 text-center">Projects</h2>
        <div>
          <Project 
            title="McGill Calorie Tracker"
            imageSrc="/0.png"
            videoSrc="/video0.mp4"
            description="Meal recommender system based on calorie required from different cafs of McGIll."
            githubLink="https://github.com/brownsugarmilkT/Cafeteria-Manager/tree/master"
          />
          <Project 
            title="Stock Price Predictor Tool"
            imageSrc="/0.png"
            videoSrc="/video0.mp4"
            description="stockr.ai is a machine learning based stock predictor for S&P 500 stocks (as long as the stock has been public for atleast the last 9 years). stockr.ai can approximate the close price for the next 30 days of any given stock."
            githubLink="https://github.com/brownsugarmilkT/MAIS202-Winter-2024"
          />
          {/* Add more Project components as needed */}
        </div>
      </section>
    </main>
  );
}