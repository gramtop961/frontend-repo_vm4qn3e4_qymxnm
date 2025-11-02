import { CreditCard, Shield, TrendingUp, Zap } from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "3D Virtual & Physical Cards",
    desc: "Issue glass-morphic cards in seconds. Control limits, freeze instantly, and track spend in real-time.",
  },
  {
    icon: Shield,
    title: "Bank‑grade Security",
    desc: "End‑to‑end encryption, device fingerprinting, and anomaly detection keep your money safe.",
  },
  {
    icon: TrendingUp,
    title: "Live Analytics",
    desc: "Monitor cashflow, interchange, and FX exposure with granular insights and exports.",
  },
  {
    icon: Zap,
    title: "Instant Payouts",
    desc: "Move funds globally in seconds with transparent fees and fair FX.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Built for modern fintech teams
          </h2>
          <p className="mt-3 text-slate-600">
            Everything you need to launch, scale, and manage payments with confidence.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500/90 to-indigo-500/90 text-white shadow">
                <Icon size={18} />
              </div>
              <h3 className="text-slate-900 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div id="security" className="mt-16 rounded-2xl bg-gradient-to-tr from-indigo-50 to-sky-50 border border-slate-200/70 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900">Compliance without compromise</h3>
              <p className="mt-3 text-slate-600">
                We are PCI DSS compliant with continuous monitoring, tokenized PAN storage, and role-based access controls.
              </p>
              <ul className="mt-4 list-disc pl-5 text-sm text-slate-700 space-y-1">
                <li>ISO 27001 aligned processes</li>
                <li>Real-time fraud scoring</li>
                <li>Granular audit logs</li>
              </ul>
            </div>
            <div className="h-48 rounded-xl bg-white/60 border border-slate-200/70 shadow flex items-center justify-center">
              <Shield className="text-indigo-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
