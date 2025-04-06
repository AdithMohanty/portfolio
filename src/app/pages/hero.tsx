import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="w-full px-10 border-b border-platinum">

        <div className="max-w-7xl mx-auto h-dvh flex flex-col-reverse items-center justify-evenly justify-items-stretch md:flex-row md:justify-between py-30">
            
            {/* name and caption*/}
            <div className="flex flex-col gap-7 text-center md:text-left px-10">
                <h1 className="text-white text-7xl font-bold">Adith Mohanty</h1>
                <p className="text-xl max-w-xl">
                    studying <a className="underline decoration font-bold text-pretty">data science and mathematics</a> @ <a className="underline decoration font-bold">uc berkeley</a>. 
                    interested in machine learning, software engineering, and high frequency trading!
                </p>
                <div className="flex gap-7 justify-center md:justify-start">
                    <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=adithm@berkeley.edu" className="bg-tropical-indigo rounded-md h-10 items-center px-3 py-2">get in contact</Link>
                    <Link href="/AdithMohantyResumeWebsite.pdf" className="bg-tropical-indigo rounded-md h-10 items-center px-3 py-2">view resume</Link>
                </div>
            </div>
            

            {/* headshot */}
            <div className="flex shrink-0">
                <Image src="/headshot.png" alt="adith" className="rounded-full border-2 border-white"width={300} height={300}/>
            </div> 

            
        </div>

    </section>
  );
};