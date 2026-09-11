import Logo from '../assets/Logo.png'

function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Footer columns */}
        <div className="grid grid-cols-2 gap-8 py-12 lg:grid-cols-5">
          {/* Brand name*/}
          <div className="col-span-2 lg:col-span-2">
            <a href="/" className="inline-flex items-center gap-2">
              <img
                src={Logo}
                alt="Dev Stack logo"
                className="h-7 w-auto"
              />

              <span className="text-lg font-semibold text-slate-900">
                Dev<span className="text-pink-600">Stack</span>
              </span>
            </a>

            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-5 flex gap-5 text-sm text-slate-700">
              <a
                href="https://github.com/"
                className="hover:text-pink-600"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/"
                className="hover:text-pink-600"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/"
                className="hover:text-pink-600"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <nav aria-label="Product links">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-900">
              Product
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li>
                <a href="#home" className="hover:text-pink-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-pink-600">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-pink-600">
                  Projects
                </a>
              </li>
            </ul>
          </nav>

          {/* Company name */}
          <nav aria-label="Company links">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-900">
              Company
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li>
                <a href="#about" className="hover:text-pink-600">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-pink-600">
                  Contact
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-pink-600">
                  Careers
                </a>
              </li>
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal links">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-900">
              Legal
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li>
                <a href="#privacy" className="hover:text-pink-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-pink-600">
                  Terms of Service
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-100 py-6 text-xs text-slate-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-pink-600">
              Privacy
            </a>
            <a href="#terms" className="hover:text-pink-600">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer