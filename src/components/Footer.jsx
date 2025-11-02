export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-slate-200/60 bg-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <h4 className="text-slate-900 font-semibold">FluxPay</h4>
            <p className="mt-2 text-sm text-slate-600">
              The minimalist, modern finance platform for global companies.
            </p>
          </div>
          <div className="text-sm text-slate-600">
            <p>
              Contact: <a className="underline decoration-slate-300 hover:text-slate-900" href="mailto:hello@fluxpay.app">hello@fluxpay.app</a>
            </p>
            <p className="mt-1">Mon–Fri, 9am–6pm UTC</p>
          </div>
          <div className="md:text-right text-sm text-slate-500">
            <p>© {new Date().getFullYear()} FluxPay, Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
