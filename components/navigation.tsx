"use client"

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-semibold tracking-wide">
          The Lazy Barn
        </span>

        <div className="hidden md:flex gap-8 text-sm text-neutral-600">
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}
