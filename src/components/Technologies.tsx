import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

const badgeColors: Record<string, string> = {
  Popular: "border-sky-100 bg-sky-50 text-sky-600",
  Versatile: "border-emerald-100 bg-emerald-50 text-emerald-600",
  Fast: "border-orange-100 bg-orange-50 text-orange-600",
  "Full Stack": "border-violet-100 bg-violet-50 text-violet-600",
  Standard: "border-emerald-100 bg-emerald-50 text-emerald-600",
  "Top SQL": "border-blue-100 bg-blue-50 text-blue-600",
  Cache: "border-red-100 bg-red-50 text-red-500",
  Ubiquitous: "border-amber-100 bg-amber-50 text-amber-600",
  Essential: "border-sky-100 bg-sky-50 text-sky-600",
  Robust: "border-sky-100 bg-sky-50 text-sky-600",
  Modern: "border-cyan-100 bg-cyan-50 text-cyan-600",
  Containers: "border-sky-100 bg-sky-50 text-sky-600",
};

function Technologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadTechnologies() {
      try {
        const response = await fetch("/technologies.json", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        const data: Technology[] = await response.json();

        if (!controller.signal.aborted) {
          setTechnologies(data);
        }
      } catch {
        if (!controller.signal.aborted) {
          setError("Could not load technologies. Please refresh to try again.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadTechnologies();

    return () => controller.abort();
  }, []);

  function addToStack(technology: Technology) {
    if (selectedStack.some((item) => item.id === technology.id)) {
      toast.warn(`${technology.name} is already in your stack!`);
      return;
    }

    setSelectedStack((current) =>
      current.some((item) => item.id === technology.id)
        ? current
        : [...current, technology],
    );
    toast.success(`${technology.name} added to your stack!`);
  }

  function removeFromStack(id: string) {
    const technology = selectedStack.find((item) => item.id === id);
    if (!technology) return;

    setSelectedStack((current) => current.filter((item) => item.id !== id));
    toast.info(`${technology.name} removed from your stack`);
  }

  function clearStack() {
    if (selectedStack.length === 0) return;

    setSelectedStack([]);
    toast.info("Stack cleared");
  }
  return (
    <section id="technologies" className="bg-white py-12">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="light"
        limit={3}
      />
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Section heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Explore the <span className="text-pink-500">Technologies</span>
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Explore technologies and choose the tools for your ideal stack.
          </p>
        </div>

        {loading ? (
          <div
            role="status"
            className="flex items-center justify-center gap-3 py-16 text-slate-500"
          >
            <span className="loading loading-spinner loading-md text-pink-500" />
            Loading technologies...
          </div>
        ) : error ? (
          <p role="alert" className="rounded-xl bg-red-50 p-5 text-red-600">
            {error}
          </p>
        ) : (
          <div className="grid items-start gap-6 lg:grid-cols-4">
            {/* Technology cards */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
              {technologies.map((technology) => {
                const isAdded = selectedStack.some(
                  (item) => item.id === technology.id,
                );

                return (
                  <article
                    key={technology.id}
                    className={`card relative h-full rounded-2xl border bg-white transition-all duration-300 hover:z-10 hover:shadow-lg motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.02] motion-reduce:transition-none ${
                      isAdded
                        ? "border-pink-500 shadow-md"
                        : "border-slate-100 shadow-sm hover:border-pink-300"
                    }`}
                  >
                    <div className="card-body gap-0 p-5">
                      {/* Icon and badge */}
                      <div className="mb-5 flex items-center justify-between gap-2">
                        <img
                          src={technology.icon}
                          alt={`${technology.name} logo`}
                          className="h-7 w-7 object-contain"
                        />

                        <span
                          className={`badge h-auto rounded-full border px-2 py-1 text-[10px] font-medium ${
                            badgeColors[technology.badge] ??
                            "border-slate-200 bg-slate-50 text-slate-600"
                          }`}
                        >
                          {technology.badge}
                        </span>
                      </div>

                      <h3 className="text-base font-semibold text-slate-900">
                        {technology.name}
                      </h3>

                      <p className="mt-2 grow text-xs leading-relaxed text-slate-500">
                        {technology.description}
                      </p>

                      {/* Technology details */}
                      <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-slate-50 pt-3 text-[10px]">
                        <span className="rounded bg-slate-100 px-2 py-1 text-slate-600">
                          {technology.category}
                        </span>

                        <span className="text-slate-500">
                          {technology.difficulty}
                        </span>

                        <span
                          className="flex items-center gap-1 text-slate-700"
                          aria-label={`Rating: ${technology.rating} out of 5`}
                        >
                          <span aria-hidden="true" className="text-amber-400">
                            ★
                          </span>
                          {technology.rating.toFixed(1)}
                        </span>
                      </div>

                      <button
                        type="button"
                        disabled={isAdded}
                        onClick={() => addToStack(technology)}
                        className="btn btn-sm mt-3 w-full rounded-md border-0 bg-[#0b0f1b] text-xs font-semibold text-white shadow-none hover:bg-slate-800 disabled:bg-pink-50 disabled:text-pink-600 disabled:opacity-100"
                      >
                        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Stack sidebar */}
            <aside className="card rounded-2xl border border-slate-100 bg-white shadow-sm">
              <div className="card-body gap-0 p-5">
                <h3 className="text-base font-semibold text-slate-900">
                  Your Stack
                </h3>

                <p aria-live="polite" className="mt-1 text-xs text-slate-400">
                  {selectedStack.length === 0
                    ? "No technologies selected yet."
                    : `${selectedStack.length} ${
                        selectedStack.length === 1
                          ? "technology"
                          : "technologies"
                      } selected`}
                </p>

                {selectedStack.length === 0 ? (
                  <div className="mt-4 rounded-xl border border-dashed border-slate-200 px-3 py-6 text-center text-xs text-slate-400">
                    Your stack is empty.
                  </div>
                ) : (
                  <>
                    <ul className="mt-4 space-y-3">
                      {selectedStack.map((technology) => (
                        <li
                          key={technology.id}
                          className="flex items-center gap-3 rounded-lg border border-slate-100 p-3"
                        >
                          <img
                            src={technology.icon}
                            alt=""
                            className="h-7 w-7 shrink-0 object-contain"
                          />

                          <div className="min-w-0 flex-1">
                            <p className="truncate text-xs font-semibold text-slate-800">
                              {technology.name}
                            </p>
                            <p className="mt-1 text-[10px] text-slate-400">
                              {technology.category}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeFromStack(technology.id)}
                            aria-label={`Remove ${technology.name} from stack`}
                            className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full text-slate-400 hover:bg-red-50 hover:text-red-500"
                          >
                            ×
                          </button>
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      onClick={clearStack}
                      className="btn btn-sm mt-4 w-full rounded-md border-red-100 bg-red-50 text-xs text-red-500 shadow-none hover:bg-red-100"
                    >
                      Remove All
                    </button>
                  </>
                )}
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}

export default Technologies;
