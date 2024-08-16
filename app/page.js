import Image from "next/image";

export default function Home() {
  return (
    <main className="border border-gray-300 sm:border-none flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="flex items-center justify-center h-screen">
    <h1 className="text-6xl font-bold">
            Samaksh Khandelwal
        </h1>
      </div>




      <div className="relative flex place-items-center z-10">
        <h1 className={`mb-14 text-6xl font-bold`}>
            ASPIRING MONEY MAKER  y
           </h1>
    </div>


    

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
  
        <a
          href="/projects"
          className="group rounded-lg px-5 py-4 transition-all ease-in-out duration-300 transform hover:scale-105 border border-transparent shadow-md hover:border-gray-300 hover:bg-gray-100 hover:shadow-lg hover:dark:border-neutral-700 hover:dark:bg-neutral-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Projects
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            YUH YUH YUH 
          </p>
        </a>

       

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Resume
            <div className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              
            </div>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            One Page ting
          </p>
        </a>
      </div>


       <div className="z-10 mb-14 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/brownsugarmilkT?tab=stars"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Image
              src="/githubb.png"
              alt="Github"
              className="dark:invert"
              width={45}
              height={24}
              priority
            />
          </a>
        </div>

        
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://linkedin.com/in/samaksh-khandelwal"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Image
              src="/linkedin.png"
              alt="Linkedin"
              className="dark:invert"
              width={45}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
    </main>
  );
}
