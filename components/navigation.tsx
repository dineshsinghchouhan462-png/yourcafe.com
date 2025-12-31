export default function Navigation() {
  return (
    <nav className="px-6 py-4 flex justify-between items-center bg-white shadow">
      <h1 className="text-xl font-serif">The Lazy Barn</h1>
      <div className="space-x-4 text-sm">
        <a href="#menu">Menu</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
