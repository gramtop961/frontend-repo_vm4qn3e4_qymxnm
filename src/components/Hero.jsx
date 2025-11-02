import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-600 shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            New: Instant FX with 0.15% fees
          </div>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
            The modern way to move money globally
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            FluxPay brings glass-morphic elegance to your finances. Issue cards, automate payouts, and get real-time analytics — all in one secure platform.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#features" className="inline-flex h-11 items-center justify-center rounded-lg bg-slate-900 px-6 text-sm font-medium text-white shadow hover:bg-slate-800">
              Explore features
            </a>
            <button className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-300 bg-white px-6 text-sm font-medium text-slate-900 hover:bg-slate-50">
              Book a demo
            </button>
          </div>
          <p className="mt-4 text-xs text-slate-500">Trusted by 1,200+ startups and enterprises</p>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[560px]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10 bg-white/40">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: "100%", height: "100%" }} />
          </div>
          <div className="pointer-events-none absolute -inset-[20%] blur-3xl">
            <div className="h-full w-full bg-[radial-gradient(40%_40%_at_70%_30%,rgba(56,189,248,0.20),transparent),radial-gradient(30%_30%_at_20%_70%,rgba(99,102,241,0.25),transparent)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
