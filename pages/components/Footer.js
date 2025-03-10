export default function Footer() {
  return (
    <div className="py-6 bg-blue-300">
      <div className="flex justify-around items-center">
        <div className="text-lg font-semibold">Ali</div>
        <ul className="flex gap-2">
          <li>+4564564546</li>
          <li>infogmail.com</li>
          <li>logo</li>
        </ul>
      </div>
      <hr className="border-gray-400 my-4" />
      <div>
        {" "}
        <ul className="flex justify-center gap-4 px-3 py-4">
          <li>Home</li>
          <li>Tech Stack</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
