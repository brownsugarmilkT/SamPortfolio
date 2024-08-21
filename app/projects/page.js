

"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react"


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
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="inline-block">
           <h3 className="text-2xl font-bold mb-4 hover:text-blue-500 transition-colors duration-300 cursor-pointer ">
          {title}
        </h3>
            
        </a>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
}

export default function Projects() {
  const [titleVisible, setTitleVisible] = useState(false);
  const [motivationVisible, setMotivationVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const projectRefs = useRef([]);


  useEffect(() => {
    setTitleVisible(true);
    setTimeout(() => setMotivationVisible(true), 1000);
    setTimeout(() => setProjectsVisible(true), 2000);


/// DOESNT WORK YET

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);


  return (

    <main className="min-h-screen relative">
        <div className="fixed inset-0 z-0">
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-30 transition-opacity duration-1000 ease-in-out hover:opacity-30"
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGY4ZjRvMWVjZmNoeGVtYXVldHRiNzZxb2I1YnJva2l4OXJuaWg0MiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lkceXNDw4Agryfrwz8/giphy.gif"
          />
        </div>

        
        <div className="relative z-10 min-h-screen p-24 pt-40  ">
        <h1 className={`text-6xl font-bold mb-8 text-center transition-opacity duration-1000 ${titleVisible ? 'opacity-100' : 'opacity-0'} pulse `}>
          MY PROJECTS
        </h1>
        <p className={`text-lg mb-16 text-center transition-opacity duration-1000 ${motivationVisible ? 'opacity-100' : 'opacity-0'}`}>
          Here I showcase some projects I am currently making, and some which are completed. While they are not anywhere close to being perfect, I am quite proud of them. Feel free to see them work by hovering on thir image and to try them out, CLICK!
          
        </p>

        <Link href="/" className="mb-8 inline-block text-blue-500 hover:underline">
        ← Back to Home
      </Link>
     


      <div className={`space y-24 transition-opacity duration-1000 ${projectsVisible ? 'opacity-100' : 'opacity-0'} `}>
       
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

          <a href="https://github.com/brownsugarmilkT/ChromeExtensionScreenTimeLike" target="_blank" rel="noopener noreferrer" className="w-full md:w-1/3 relative overflow-hidden rounded-lg shadow-md">
            <Project 
              title="Distraction Blocker Chrome Extension"
              imageSrc="/0.png"
              videoSrc="/video0.mp4"
              description=" Made a simple chrome extension to blacklist websites and start a timer when I study. Puts an overlay over the blaclisted website when tried to access during the timer."
          />
          </a>

          <a href="https://github.com/brownsugarmilkT" target="_blank" rel="noopener noreferrer" className="w-full md:w-1/3 relative overflow-hidden rounded-lg shadow-md">
            <Project 
              title="8 Bit CPU LOGISIM"
              imageSrc="/0.png"
              videoSrc="/video0.mp4"
              description="Designed an 8 bit MIPS pipeline CPU on logisim. Unfortunately I can not share the design as it was a school project but it was super cool so I added it here.  "
          />
          </a>



          {/* leaving space to add more projects */}

        
     </div>
      </div>
      
    </main>
  );
}