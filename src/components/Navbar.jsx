import { Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-500 text-white shadow-md">
            <Rocket size={18} />
          </div>
          <span className="text-slate-900 font-semibold tracking-tight">FluxPay</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#security" className="hover:text-slate-900 transition-colors">Security</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-9 items-center rounded-lg px-3 text-sm font-medium text-slate-700 hover:text-slate-900">
            Sign in
          </button>
          <button className="inline-flex h-9 items-center rounded-lg bg-slate-900 px-4 text-sm font-medium text-white shadow hover:bg-slate-800">
            Get started
          </button>
        </div>
      </div>
    </header>
  );
}
