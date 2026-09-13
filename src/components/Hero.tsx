import Banner from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero bg-white py-12 lg:py-16">
      <div className="hero-content mx-auto w-full max-w-7xl flex-col gap-10 px-4 md:px-8 lg:flex-row lg:justify-between">
        {/* Heading, description, and buttons */}
        <div className="w-full text-center lg:max-w-2xl lg:text-left">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 lg:text-5xl">
            Build Your Ideal
            <br />
            <span className="bg-linear-to-r from-orange-500 via-pink-600 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-slate-600 lg:mx-0">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="#technologies"
              className="btn rounded-md border-0 bg-linear-to-r from-orange-500 to-pink-500 text-white shadow-none"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="btn btn-outline rounded-md border-slate-200 px-8 text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero illustration */}
        <img
          src={Banner}
          alt="Colorful layers representing a development stack"
          className="w-64 shrink-0 object-contain sm:w-80 lg:w-96"
        />
      </div>
    </section>
  );
}

export default Hero;
