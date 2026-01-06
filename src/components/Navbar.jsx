import Link from "next/link";


export default function Navbar() {

    
  return (
    <header className="w-full shadow-sm bg-white">
      <nav className="max-w-5xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Travel Agency</h1>

        <ul className="flex gap-6">
          <li>
            <Link  href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/about">À propos</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
