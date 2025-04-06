import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaInstagram} from "react-icons/fa";

export function Header() {
  const links = "text-platinum hover:text-tekehelet hover:scale-110 transition-all ease-in-out";

  return (
    <header className="fixed top-0 left-0 w-full border-b border-platinum bg-black/50 bg-transparent-50 px-10 py-3 z-20">

        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between">

            {/* nav bar and pfp */}
            <div className="flex items-center gap-8">
                <Link href="#hero" className="hover:scale-120 transition-all duration-300 ease-in-out hover:rotate-z-360">
                    <Image src="/adith.png" alt="adith" className="rounded-full"width={45} height={45}/>
                </Link>
                

                <nav className="flex gap-5 sr-only sm:not-sr-only">
                    <Link href="#about" className={links} prefetch={false}>
                        about
                    </Link>
                    <Link href="#experience" className={links} prefetch={false}>
                        experience
                    </Link>
                    <Link href="#projects" className={links} prefetch={false}>
                        projects
                    </Link>
                    <Link href="#blog" className={links} prefetch={false}>
                        blog
                    </Link>
                </nav>
            </div>

            {/* socials */}
            <div className="flex gap-8">

                <Link href="https://github.com/AdithMohanty" className={links} prefetch={false}>
                    <FaGithub size={20} />
                </Link>
                <Link href="https://www.linkedin.com/in/adithmohanty/" className={links}  prefetch={false}>
                    <FaLinkedinIn size={20} />
                </Link>
                <Link href="https://www.instagram.com/adithjm/" className={links}  prefetch={false}>
                    <FaInstagram size={20} />
                </Link>

            </div>

        </div>

    </header>
  )
};