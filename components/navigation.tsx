// components/navigation.tsx

export default function Navigation() {
  return (
    <header className="absolute top-0 left-0 w-full z-30 pointer-events-none">
      <div className="flex items-center justify-between px-6 pt-10 md:px-16 md:pt-12 pointer-events-auto">
        
        {/* Logo */}
        <div className="font-serif text-[17px] md:text-[20px] tracking-[0.04em] font-normal text-[#F4EFE9]">
          The Lazy Barn
        </div>

        {/* Menu */}
        <button
          className="text-[14px] md:text-[16px] tracking-[0.12em] font-normal text-[#F4EFE9] hover:text-[#F4EFE9]/80 transition-opacity duration-200"
        >
          MENU
        </button>

      </div>
    </header>
  );
}
