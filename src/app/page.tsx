"use client";
// Generated from Figma SDS — node 76:7421
// Template: Home - BridgePay Promotion - NEW (1440px light mode)

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "@/components/ThemeProvider";

// ─── Types ──────────────────────────────────────────────────────────────────
type StatusVariant = "pending" | "submitted" | "completed";

// ─── Data ───────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { label: "Home",     href: "#", active: true,  icon: "/assets/icon-home.svg"     },
  { label: "Payees",   href: "#", active: false, icon: "/assets/icon-payees.svg"   },
  { label: "Payments", href: "#", active: false, icon: "/assets/icon-payments.svg" },
  { label: "EarlyPay", href: "#", active: false, icon: "/assets/icon-earlypay.svg" },
  { label: "Branches", href: "#", active: false, icon: "/assets/icon-branches.svg" },
];

const PAYMENTS = [
  { ref: "Oct salaries",    date: "29 Oct 2025", amount: "18,610.00", status: "pending"   as StatusVariant },
  { ref: "October bonus",   date: "11 Oct 2025", amount: "15,560.00", status: "submitted" as StatusVariant },
  { ref: "Sept salaries",   date: "11 Sept 2025",amount: "17,670.00", status: "completed" as StatusVariant },
  { ref: "August salaries", date: "11 Aug 2025", amount: "14,210.00", status: "completed" as StatusVariant },
  { ref: "July salaries",   date: "11 Jul 2025", amount: "12,990.00", status: "completed" as StatusVariant },
];

const STATUS_STYLES: Record<StatusVariant, { bg: string; text: string; label: string }> = {
  pending:   { bg: "bg-brand-50",    text: "text-brand-600",   label: "Pending Approval" },
  submitted: { bg: "bg-success-100", text: "text-success-600", label: "Submitted"        },
  completed: { bg: "bg-gray-200",    text: "text-gray-600",    label: "Completed"        },
};

const CHART_BARS = [40, 55, 35, 70, 45, 60, 80, 50, 65, 42, 58, 72];
const CHART_MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

// ─── Nav Icons (real Figma SVGs) ─────────────────────────────────────────────
const NavIcon = ({ src, active, color }: { src: string; active?: boolean; color?: string }) => (
  <span
    className="shrink-0 inline-block"
    style={{
      width: 16,
      height: 16,
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskSize: "contain",
      maskSize: "contain",
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      // active → #FFFFFF | inactive → #535862 | override via color prop
      backgroundColor: color ?? (active ? "#FFFFFF" : "#535862"),
    }}
  />
);
// ─── Remaining inline icons ──────────────────────────────────────────────────
const WalletIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6E37CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
    <path d="M16 3L4 7"/><circle cx="17" cy="13" r="1"/>
  </svg>
);
const BellIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#535862" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
);
const EyeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);
const BulbIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/>
    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>
  </svg>
);
const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);
const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);
const UserPlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6E37CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <line x1="19" y1="8" x2="19" y2="14"/>
    <line x1="22" y1="11" x2="16" y2="11"/>
  </svg>
);
const GroupIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6E37CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const UploadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
  </svg>
);
const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);
const DotsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#535862" strokeWidth="2" strokeLinecap="round">
    <circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>
  </svg>
);

// ─── Placeholder Dropdown (replace when Figma node is ready) ─────────────────

function NavDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const items = [
    { label: "Profile settings", icon: "👤" },
    { label: "Company settings", icon: "🏢" },
    { label: "Notifications",    icon: "🔔" },
    { label: "Help & support",   icon: "💬" },
  ];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        className={[
          "w-8 h-8 flex items-center justify-center rounded-[8px] transition-colors",
          open
            ? "bg-gray-200 dark:bg-gray-700"
            : "hover:bg-gray-100 dark:hover:bg-gray-800",
        ].join(" ")}
      >
        <NavIcon src="/assets/icon-more.svg" color={open ? "#181D27" : "#535862"} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-[220px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-[12px] shadow-lg py-1 z-50">

          {/* Static menu items */}
          {items.map((item) => (
            <button
              key={item.label}
              onClick={() => setOpen(false)}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-[13px] font-body text-left text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <span className="text-base leading-none">{item.icon}</span>
              {item.label}
            </button>
          ))}

          {/* Divider */}
          <div className="my-1 border-t border-gray-100 dark:border-gray-700" />

          {/* Theme toggle */}
          <button
            onClick={() => { toggle(); setOpen(false); }}
            className="w-full flex items-center justify-between gap-3 px-4 py-2.5 text-[13px] font-body text-left text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-base leading-none">{isDark ? "☀️" : "🌙"}</span>
              <span>{isDark ? "Light mode" : "Dark mode"}</span>
            </div>
            {/* Toggle pill */}
            <div className={[
              "w-9 h-5 rounded-full relative transition-colors duration-200",
              isDark ? "bg-brand-600" : "bg-gray-300",
            ].join(" ")}>
              <span className={[
                "absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200",
                isDark ? "translate-x-4" : "translate-x-0.5",
              ].join(" ")} />
            </div>
          </button>

          {/* Divider */}
          <div className="my-1 border-t border-gray-100 dark:border-gray-700" />

          {/* Sign out */}
          <button
            onClick={() => setOpen(false)}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-[13px] font-body text-left text-error-600 hover:bg-error-50 dark:hover:bg-error-950 transition-colors"
          >
            <span className="text-base leading-none">🚪</span>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Components ─────────────────────────────────────────────────────────────

function NavBar() {
  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      {/* Top strip — "Hi, Hatem" + company */}
      <div className="max-w-[1440px] mx-auto px-8 flex items-center justify-between py-1">
        <span className="text-[12px] text-gray-500 dark:text-gray-400 font-body">Hi, Hatem</span>
        <div className="flex items-center gap-2 text-[12px] font-body">
          <span className="text-gray-500 dark:text-gray-400">ACME Company</span>
          <span className="w-1 h-1 rounded-full bg-gray-400 inline-block" />
          <span className="font-semibold text-gray-900 dark:text-gray-100">Headquarters</span>
        </div>
      </div>

      {/* Main nav — padding: 4px 32px, inner gap: 68px (Figma: layout_U9JV1V / layout_KTLZEY) */}
      <div className="max-w-[1440px] mx-auto px-8 py-1">
        <div className="flex items-center gap-[68px] py-1">
          {/* Logo — 90×32px (Figma: layout_13UR6V) */}
          <Image src="/assets/logo-primary.svg" alt="dopay" width={90} height={32} className="shrink-0" />

          {/* Nav items — gap: 12px (Figma: layout_0C8FX0) */}
          <div className="flex items-center gap-3 flex-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={[
                  // Figma: padding 4px 8px | gap 4px | radius 8px | font Inter 14px
                  "flex items-center gap-[4px] px-[8px] py-[4px] rounded-[8px] text-[14px] leading-[1.4286] font-body transition-colors whitespace-nowrap",
                  item.active
                    ? "bg-[#6E37CC] text-white font-medium"      // fill #6E37CC, text #FFFFFF, weight 500
                    : "text-[#535862] font-normal hover:bg-gray-100", // text #535862, weight 400
                ].join(" ")}
              >
                <NavIcon src={item.icon} active={item.active} />
                {item.label}
              </a>
            ))}
          </div>

          {/* Right controls — bell + divider + more (Figma: menu.Container, layout_FT5WZJ) */}
          <div className="flex items-center gap-2 px-2">
            {/* Bell with notification dot */}
            <div className="relative w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 cursor-pointer">
              <NavIcon src="/assets/icon-bell.svg" />
              {/* notification dot — absolute, 6×6px (Figma: layout_0YDGEA) */}
              <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-red-600" />
            </div>
            {/* Divider — 1×12px (Figma: layout_ZAZOH1, fill_FUJU50 #D5D7DA) */}
            <div className="w-px h-3 bg-gray-300" />
            {/* More horiz — placeholder dropdown until Figma node is ready */}
            <NavDropdown />
          </div>
        </div>
      </div>
    </div>
  );
}

function PageHeader() {
  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-[1440px] mx-auto px-8 pt-6 pb-0">
        {/* 3-col row */}
        <div className="flex items-center gap-6">
          {/* Left: greeting */}
          <div className="flex-1">
            <h1 className="font-display font-bold text-[32px] leading-tight text-gray-900 dark:text-white">
              Hello Jumana
            </h1>
          </div>

          {/* Center: BridgePay credit card */}
          <div
            className="flex items-center gap-4 px-5 py-3 rounded-[16px] cursor-pointer hover:opacity-95 transition-opacity"
            style={{ background: "linear-gradient(135deg, #6e37cc 0%, #3f2985 100%)", minWidth: 300 }}
          >
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <path d="M2 8h20M2 12h20M2 16h8"/>
                <rect x="2" y="4" width="20" height="16" rx="2"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-white/80 text-[11px] font-body">Apply for BridgePay credit</span>
              <div className="flex items-baseline gap-1">
                <span className="text-white text-[13px] font-body">up to </span>
                <span className="text-white font-bold text-[18px] font-body">1,000,000.00</span>
                <span className="text-white/80 text-[11px] font-body">EGP</span>
              </div>
            </div>
            <div className="ml-auto w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <ArrowRightIcon />
            </div>
          </div>

          {/* Right: Business account */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
              <WalletIcon />
            </div>
            <div className="flex flex-col">
              <span className="text-[12px] text-gray-500 font-body">Business account</span>
              <div className="flex items-baseline gap-1">
                <span className="font-bold text-[20px] text-gray-900 font-body leading-none">103,000.00</span>
                <span className="text-[12px] text-gray-500 font-body">EGP</span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#F79009] flex items-center justify-center ml-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
                <rect x="15" y="15" width="3" height="3"/><rect x="18" y="18" width="3" height="3"/>
                <rect x="15" y="18" width="3" height="3"/><rect x="18" y="15" width="3" height="3"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 mt-4">
          <button className="flex items-center gap-1.5 px-3 pb-3 text-[14px] font-medium font-body text-brand-600 border-b-2 border-brand-600 transition-colors">
            <EyeIcon /> Overview
          </button>
          <button className="flex items-center gap-1.5 px-3 pb-3 text-[14px] font-medium font-body text-gray-500 border-b-2 border-transparent hover:text-gray-700 transition-colors">
            <BulbIcon /> Learn
          </button>
        </div>
      </div>
    </div>
  );
}


function PromoBanner() {
  return (
    <div
      className="w-full rounded-[20px] flex items-center gap-4 p-6 overflow-hidden"
      style={{ background: "linear-gradient(90deg, #6E37CC 0%, #3F2985 100%)" }}
    >
      {/* 96×96px promo image */}
      <div className="w-24 h-24 shrink-0">
        <Image src="/assets/promo-earlypay.png" alt="EarlyPay" width={96} height={96} className="w-full h-full object-contain drop-shadow-lg" />
      </div>

      {/* Title + Body */}
      <div className="flex flex-col gap-3 flex-1 min-w-0">
        <p className="font-display font-semibold text-[24px] leading-[32px] text-white">
          Your company is now eligible for EarlyPay
        </p>
        <p className="font-body font-normal text-[16px] leading-[24px] text-white">
          It only takes a couple of minutes to activate and you will then have complete control
          over who has the ability to access their earned wages early.
        </p>
      </div>

      {/* Buttons — Learn more (text, no border) + Activate now (outlined, white border) */}
      <div className="flex items-center gap-2 shrink-0">
        <button className="p-3 rounded-[12px] text-[14px] font-medium font-body text-white hover:bg-white/10 transition-colors whitespace-nowrap">
          Learn more
        </button>
        <button className="p-3 rounded-[12px] border border-white text-[14px] font-medium font-body text-white hover:bg-white/10 transition-colors whitespace-nowrap">
          Activate now
        </button>
      </div>
    </div>
  );
}

function PayeesSection() {
  const cards = [
    {
      label: "Ready to pay",
      value: "267",
      bg: "bg-success-50",
      iconBg: "bg-success-100",
      iconColor: "#079455",
      labelColor: "#535862",
      valueColor: "#079455",
      icon: (
        /* lot-of-cash / money bag — ready to pay */
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#079455" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a4 4 0 0 1 4 4v1H8V6a4 4 0 0 1 4-4z"/>
          <path d="M5 7h14l-1.5 9.5A2 2 0 0 1 15.52 18H8.48a2 2 0 0 1-1.98-1.5L5 7z"/>
          <path d="M9.5 12.5h5"/><path d="M12 10.5v4"/>
        </svg>
      ),
    },
    {
      label: "Action needed",
      value: "6",
      bg: "bg-error-50",
      iconBg: "bg-error-100",
      iconColor: "#D92D20",
      labelColor: "#D92D20",
      valueColor: "#D92D20",
      icon: (
        /* white-flag / alert */
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D92D20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
          <line x1="4" y1="22" x2="4" y2="15"/>
        </svg>
      ),
    },
    {
      label: "Pending approval",
      value: "8",
      bg: "bg-gray-100",
      iconBg: "bg-gray-200",
      iconColor: "#535862",
      labelColor: "#535862",
      valueColor: "#181D27",
      icon: (
        /* hourglass — pending */
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#535862" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 22h14M5 2h14M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>
        </svg>
      ),
    },
  ];
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="font-display font-semibold text-[24px] text-gray-900">Payees</h2>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 h-9 px-3 rounded-xl text-[14px] font-medium font-body text-brand-600 hover:bg-brand-50 transition-colors">
            <UserPlusIcon /> Add payee
          </button>
          <button className="flex items-center gap-1 h-9 px-3 rounded-xl text-[14px] font-medium font-body text-brand-600 hover:bg-brand-50 transition-colors">
            <GroupIcon /> Bulk onboard
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {cards.map((c) => (
          <div key={c.label} className={`${c.bg} dark:bg-gray-800 rounded-[16px] p-4 flex items-center gap-3`}>
            <div className={`w-12 h-12 rounded-[28px] ${c.iconBg} flex items-center justify-center shrink-0`}>
              {c.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-[12px] font-medium font-body leading-[1.5]" style={{ color: c.labelColor, opacity: 0.8 }}>{c.label}</span>
              <span className="text-[20px] font-bold font-body leading-[1.5]" style={{ color: c.valueColor }}>{c.value}</span>
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
      <div className="flex items-center justify-between">
        <h2 className="font-display font-semibold text-[22px] text-gray-900">Payments</h2>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 h-9 px-3 rounded-xl text-[13px] font-medium font-body text-brand-600 hover:bg-brand-50 transition-colors">
            <PlusIcon /> New payment
          </button>
          <button className="flex items-center gap-1.5 h-9 px-3 rounded-xl text-[13px] font-medium font-body text-brand-600 hover:bg-brand-50 transition-colors">
            <UploadIcon /> Payment file upload
          </button>
        </div>
      </div>

      {/* Table + Chart side by side */}
      <div className="flex gap-4">
        {/* Table */}
        <div className="flex-1 rounded-[20px] border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="grid grid-cols-[1fr_140px_140px_160px_44px] bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            {["PAYMENT REF", "DATE", "TOTAL (EGP)", "STATUS", ""].map((col) => (
              <div key={col} className="px-4 py-3 text-[11px] font-semibold font-body text-gray-500 uppercase tracking-wider">
                {col}
              </div>
            ))}
          </div>
          {PAYMENTS.map((row, i) => {
            const s = STATUS_STYLES[row.status];
            return (
              <div key={i}>
                <div className="grid grid-cols-[1fr_140px_140px_160px_44px] items-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <div className="px-4 py-3.5 text-[13px] font-body text-gray-700">{row.ref}</div>
                  <div className="px-4 py-3.5 text-[13px] font-body text-gray-600">{row.date}</div>
                  <div className="px-4 py-3.5 text-[13px] font-semibold font-body text-gray-900">{row.amount}</div>
                  <div className="px-4 py-3.5">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium font-body ${s.bg} ${s.text}`}>
                      {s.label}
                    </span>
                  </div>
                  <div className="py-3.5 flex items-center justify-center">
                    <button className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-100 transition-colors">
                      <DotsIcon />
                    </button>
                  </div>
                </div>
                {i < PAYMENTS.length - 1 && <div className="h-px bg-gray-100 mx-4" />}
              </div>
            );
          })}
          <div className="px-4 py-3 border-t border-gray-100 flex justify-end">
            <button className="text-[13px] font-medium font-body text-brand-600 hover:underline">View all</button>
          </div>
        </div>

        {/* Chart panel */}
        <div className="w-[280px] shrink-0 rounded-[20px] border border-gray-200 dark:border-gray-700 dark:bg-gray-900 p-5 flex flex-col gap-4">
          <div>
            <p className="text-[12px] text-gray-500 dark:text-gray-400 font-body">Average payments (YTD)</p>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-[24px] font-bold text-gray-900 dark:text-white font-body leading-none">3,000.00</span>
              <span className="text-[12px] text-gray-500 font-body">EGP</span>
            </div>
          </div>
          {/* Bar chart */}
          <div className="flex items-end gap-1 h-[100px]">
            {CHART_BARS.map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-sm"
                  style={{ height: `${h}%`, backgroundColor: i === 9 ? "#6e37cc" : "#e9eaeb" }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            {["Jan","Apr","Jul","Oct"].map(m => (
              <span key={m} className="text-[10px] text-gray-400 font-body">{m}</span>
            ))}
          </div>
          <button className="flex items-center justify-center gap-1.5 h-9 px-3 rounded-xl border border-gray-200 text-[12px] font-medium font-body text-gray-600 hover:bg-gray-50 transition-colors w-full">
            <DownloadIcon /> Download statement
          </button>
        </div>
      </div>
    </section>
  );
}

function MoreFromDopay() {
  return (
    <section className="flex flex-col gap-4 pb-8">
      <div>
        <p className="text-[12px] font-medium text-gray-400 uppercase tracking-wider font-body">More from dopay</p>
        <h2 className="font-display font-semibold text-[20px] text-gray-900 mt-1">We can support you beyond payroll</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {/* EarlyPay card */}
        <div className="rounded-[20px] border border-gray-200 dark:border-gray-700 dark:bg-gray-900 p-5 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950 flex items-center justify-center">
              <NavIcon src="/assets/icon-earlypay.svg" color="#6E37CC" />
            </div>
            <span className="font-semibold text-[15px] text-gray-900 dark:text-white font-body">EarlyPay</span>
          </div>
          <p className="text-[13px] text-gray-500 dark:text-gray-400 font-body leading-relaxed">
            Managing Early Pay for your employees can be challenging, so don't make your team wait for the single thing they already earned.
          </p>
          <div className="flex items-center gap-2 mt-auto">
            <button className="h-8 px-4 rounded-lg bg-brand-600 text-white text-[12px] font-medium font-body hover:bg-brand-700 transition-colors">
              Activate now
            </button>
            <button className="h-8 px-3 text-[12px] font-medium font-body text-brand-600 hover:underline">
              Learn more
            </button>
          </div>
        </div>
        {/* BridgePay card */}
        <div className="rounded-[20px] border border-gray-200 dark:border-gray-700 dark:bg-gray-900 p-5 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950 flex items-center justify-center">
              <NavIcon src="/assets/icon-payments.svg" color="#6E37CC" />
            </div>
            <span className="font-semibold text-[15px] text-gray-900 dark:text-white font-body">BridgePay</span>
          </div>
          <p className="text-[13px] text-gray-500 dark:text-gray-400 font-body leading-relaxed">
            Want to make dopay payments on time? Then a short term revolving credit line with BridgePay might be the answer.
          </p>
          <div className="flex items-center gap-2 mt-auto">
            <button className="h-8 px-4 rounded-lg bg-brand-600 text-white text-[12px] font-medium font-body hover:bg-brand-700 transition-colors">
              Get started
            </button>
            <button className="h-8 px-3 text-[12px] font-medium font-body text-brand-600 hover:underline">
              How it works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-body transition-colors duration-200">
      <NavBar />
      <PageHeader />
      <main className="w-full max-w-[1440px] mx-auto px-8 pt-6 flex flex-col gap-8">
        <PromoBanner />
        <PayeesSection />
        <PaymentsSection />
        <MoreFromDopay />
      </main>
    </div>
  );
}
