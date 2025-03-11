import Link from "next/link";
import Admin from "../admin";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-around px-5 py-4 w-full text-lg bg-blue-100">
      <div>Ali</div>
      <ul className="flex gap-4 rounded-lg border border-gray-200 px-3 py-4">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <li>Tech Stack</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <Link href="/admin">Admin</Link>
    </nav>
  );
}
