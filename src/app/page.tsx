// Generated from Figma SDS — node 76:7421
// Template: Home - BridgePay Promotion - NEW (1440px light mode)

import Image from "next/image";

// ─── Types ──────────────────────────────────────────────────────────────────

type StatusVariant = "pending" | "submitted" | "completed";

// ─── Data ───────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: "Home",     href: "#", active: true  },
  { label: "Payees",   href: "#", active: false },
  { label: "Payments", href: "#", active: false },
  { label: "EarlyPay", href: "#", active: false },
  { label: "Branches", href: "#", active: false },
];

const STAT_CARDS = [
  { label: "Ready to pay",    value: "267", bg: "bg-success-50", textColor: "text-gray-600",   valueColor: "text-gray-900",   iconBg: "bg-success-100" },
  { label: "Action needed",   value: "6",   bg: "bg-error-50",   textColor: "text-error-600",  valueColor: "text-error-600",  iconBg: "bg-error-100"   },
  { label: "Pending approval",value: "8",   bg: "bg-gray-100",   textColor: "text-gray-600",   valueColor: "text-gray-900",   iconBg: "bg-gray-200"    },
];

const PAYMENTS = [
  { ref: "Oct salaries",    date: "29 Oct 2025", amount: "18,610.00", status: "pending"   as StatusVariant },
  { ref: "October bonus",   date: "11 Oct 2025", amount: "15,560.00", status: "submitted" as StatusVariant },
  { ref: "Sept salaries",   date: "11 Sept 2025",amount: "17,670.00", status: "completed" as StatusVariant },
  { ref: "August salaries", date: "11 Aug 2025", amount: "14,210.00", status: "completed" as StatusVariant },
  { ref: "July salaries",   date: "11 Jul 2025", amount: "12,990.00", status: "completed" as StatusVariant },
];

const STATUS_STYLES: Record<StatusVariant, { bg: string; text: string; label: string }> = {
  pending:   { bg: "bg-brand-50",   text: "text-brand-600",   label: "Pending Approval" },
  submitted: { bg: "bg-success-100",text: "text-success-600", label: "Submitted"        },
  completed: { bg: "bg-gray-200",   text: "text-gray-600",    label: "Completed"        },
};

// ─── Sub-components ─────────────────────────────────────────────────────────

function NavBar() {
  return (
    <nav className="w-full h-[74px] bg-gray-50 border-b border-gray-200 flex items-center px-10">
      <div className="flex items-center gap-10 w-full max-w-[1440px] mx-auto">
        {/* Logo */}
        <Image
          src="/assets/logo-horizontal-en.svg"
          alt="DoPay"
          width={112}
          height={30}
          priority
          className="shrink-0"
        />

        {/* Nav items */}
        <div className="flex items-center gap-1 flex-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={[
                "px-4 py-2 rounded-lg text-[14px] font-medium font-body transition-colors",
                item.active
                  ? "bg-brand-600 text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
              ].join(" ")}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right side: company + user */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-2">
            {/* Notification dot */}
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-[#f22000] absolute -top-0.5 -right-0.5" />
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#535862" strokeWidth="2">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 pl-3 border-l border-gray-200">
            <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 text-xs font-semibold">
              JH
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-gray-900 leading-none">ACME Company</span>
              <span className="text-xs text-gray-500 leading-none mt-0.5">Headquarters</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function PageHeader() {
  return (
    <header className="w-full bg-gray-50 border-b border-gray-200 px-10">
      <div className="max-w-[1440px] mx-auto py-5 flex items-center justify-between">
        <h1 className="font-display font-semibold text-[24px] leading-[1.33] text-gray-900">
          Hello Jumana
        </h1>
        {/* Tabs */}
        <div className="flex items-center gap-1 border-b border-transparent">
          {["Overview", "Learn"].map((tab, i) => (
            <button
              key={tab}
              className={[
                "px-4 py-2 text-[14px] font-medium font-body rounded-t-lg transition-colors",
                i === 0
                  ? "text-brand-600 border-b-2 border-brand-600"
                  : "text-gray-600 hover:text-gray-900",
              ].join(" ")}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

function PromoBanner() {
  return (
    <div
      className="w-full rounded-[20px] flex items-center gap-4 p-6"
      style={{ background: "linear-gradient(90deg, #6e37cc 0%, #3f2985 100%)" }}
    >
      {/* Company icon */}
      <div
        className="w-24 h-24 rounded-xl shrink-0 bg-brand-800 overflow-hidden"
        style={{ boxShadow: "0px 0px 20px 0px rgba(255,255,255,0.2)" }}
      >
        <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
          AC
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-3 flex-1">
        <p className="font-display font-semibold text-[24px] leading-[1.33] text-white">
          Your company is now eligible for EarlyPay
        </p>
        <p className="font-body text-[16px] text-white/80 leading-[1.5]">
          It only takes a couple of minutes to activate and you will then have
          complete control over who has the ability to access their earned wages early.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-2 shrink-0">
        <button className="h-10 px-4 rounded-xl border border-white text-white text-[14px] font-medium font-body hover:bg-white/10 transition-colors">
          Activate now
        </button>
        <button className="h-10 px-4 rounded-xl text-white text-[14px] font-medium font-body hover:bg-white/10 transition-colors">
          Learn more
        </button>
      </div>
    </div>
  );
}

function PayeesSection() {
  return (
    <section className="flex flex-col gap-4">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <h2 className="font-display font-semibold text-[24px] leading-[1.33] text-gray-900">
          Payees
        </h2>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 h-10 px-4 rounded-xl text-[14px] font-medium font-body text-brand-600 hover:bg-brand-50 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            Add payee
          </button>
          <button className="flex items-center gap-1.5 h-10 px-4 rounded-xl text-[14px] font-medium font-body text-brand-600 hover:bg-brand-50 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
            Bulk onboard
          </button>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-5">
        {STAT_CARDS.map((card) => (
          <div
            key={card.label}
            className={`${card.bg} rounded-[24px] p-4 flex items-center gap-3`}
          >
            <div className={`w-12 h-12 rounded-[28px] ${card.iconBg} flex items-center justify-center shrink-0`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={card.valueColor}>
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className={`text-[12px] font-medium font-body ${card.textColor}`}>{card.label}</span>
              <span className={`text-[20px] font-bold font-body ${card.valueColor}`}>{card.value}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function PaymentsSection() {
  return (
    <section className="flex flex-col gap-4">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <h2 className="font-display font-semibold text-[24px] leading-[1.33] text-gray-900">
          Payments
        </h2>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 h-10 px-4 rounded-xl text-[14px] font-medium font-body text-brand-600 hover:bg-brand-50 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            New payment
          </button>
          <button className="flex items-center gap-1.5 h-10 px-4 rounded-xl text-[14px] font-medium font-body text-brand-600 hover:bg-brand-50 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
            Payment file upload
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="w-full rounded-[24px] bg-white border border-gray-200 overflow-hidden">
        {/* Table header */}
        <div className="grid grid-cols-[1fr_180px_180px_180px_48px] bg-gray-50 border-b border-gray-200">
          {["PAYMENT REF", "DATE", "TOTAL (EGP)", "STATUS", ""].map((col) => (
            <div key={col} className="px-4 py-3 text-[12px] font-medium font-body text-gray-600 uppercase tracking-wide">
              {col}
            </div>
          ))}
        </div>

        {/* Table rows */}
        {PAYMENTS.map((row, i) => {
          const s = STATUS_STYLES[row.status];
          return (
            <div key={i}>
              <div className="grid grid-cols-[1fr_180px_180px_180px_48px] items-center hover:bg-gray-50 transition-colors">
                <div className="px-4 py-4 text-[14px] font-body text-gray-700">
                  {row.ref}
                </div>
                <div className="px-4 py-4 text-[14px] font-body text-gray-700">
                  {row.date}
                </div>
                <div className="px-4 py-4 text-[14px] font-semibold font-body text-gray-900">
                  {row.amount}
                </div>
                <div className="px-4 py-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-[12px] font-medium font-body ${s.bg} ${s.text}`}>
                    {s.label}
                  </span>
                </div>
                <div className="px-2 py-4 flex items-center justify-center">
                  <button className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>
                    </svg>
                  </button>
                </div>
              </div>
              {i < PAYMENTS.length - 1 && (
                <div className="h-px bg-gray-100 mx-4" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-body">
      <NavBar />
      <PageHeader />

      {/* Body */}
      <main className="w-full max-w-[1440px] mx-auto px-[192px] pt-6 pb-12 flex flex-col gap-12">
        <PromoBanner />
        <PayeesSection />
        <PaymentsSection />
      </main>
    </div>
  );
}
