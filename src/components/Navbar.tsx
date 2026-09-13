import Logo from '../assets/Logo.png'

function Navbar() {
  const links = (
    <>
      <li><a href="#home" className="text-pink-600">Home</a></li>
      <li><a href="#technologies">Technologies</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </>
  )

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="relative mx-auto flex h-18 max-w-7xl items-center justify-between px-2 md:px-8">
        {/* Mobile menu */}
        <div className="dropdown lg:hidden">
          <button
            type="button"
            tabIndex={0}
            aria-label="Open menu"
            className="btn btn-ghost px-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <ul
            tabIndex={-1}
            className="menu dropdown-content z-50 mt-3 w-52 rounded-xl bg-white p-2 text-slate-700 shadow-lg"
          >
            {links}
          </ul>
        </div>

        {/* Centered on mobile; on the left on desktop */}
        <a
          href="/"
          className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 lg:static lg:translate-x-0"
        >
          <img
            src={Logo}
            alt="Dev Stack logo"
            className="h-8 w-auto"
          />

          <span className="whitespace-nowrap text-xl font-bold text-slate-900 lg:text-xl">
            Dev<span className="text-pink-600">Stack</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="menu menu-horizontal hidden text-sm text-slate-600 lg:flex">
          {links}
        </ul>

        {/* Account buttons */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            className="cursor-pointer whitespace-nowrap text-xs text-slate-700 hover:text-pink-600 sm:text-sm"
          >
            Sign In
          </button>

          <button
            type="button"
            className="cursor-pointer whitespace-nowrap rounded-full bg-pink-600 px-3 py-2 text-xs font-semibold text-white hover:bg-pink-700 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar