import {
  Search,
  Bell,
  LayoutDashboard,
  Wallet,
  Boxes,
  ShoppingCart,
  Users,
  Bot,
  Settings,
  TrendingUp,
  TrendingDown,
  CircleAlert,
  LineChart,
  Truck,
  FileBarChart,
  Building2,
  Headset,
} from "lucide-react";
import Logo from "@/components/Logo";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Finance", icon: Wallet, active: false },
  { label: "Sales CRM", icon: Headset, active: false },
  { label: "Inventory", icon: Boxes, active: false },
  { label: "Procurement", icon: ShoppingCart, active: false },
  { label: "Supply Chain", icon: Truck, active: false },
  { label: "HR & Payroll", icon: Users, active: false },
  { label: "Manufacturing", icon: Building2, active: false },
  { label: "AI Automations", icon: Bot, active: false },
  { label: "Analytics", icon: LineChart, active: false },
  { label: "Reports", icon: FileBarChart, active: false },
];

const kpis = [
  { label: "Revenue (MTD)", value: "$428.6k", delta: "+12.4%", up: true },
  { label: "Open Orders", value: "1,284", delta: "+8.1%", up: true },
  { label: "Inventory Value", value: "$2.1M", delta: "-2.3%", up: false },
  { label: "Pending Approvals", value: "37", delta: "AI queued", up: true, warn: true },
];

const orders = [
  { id: "PO-10482", vendor: "Northline Supplies", module: "Procurement", amount: "$12,480", status: "Approved" },
  { id: "INV-2291", vendor: "Acme Parts Co.", module: "Finance", amount: "$4,220", status: "AI Matched" },
  { id: "SO-7781", vendor: "Bright Retail Ltd", module: "Sales", amount: "$18,950", status: "Fulfilled" },
  { id: "PO-10491", vendor: "Omega Logistics", module: "Procurement", amount: "$7,640", status: "Review" },
];

const chartBars = [38, 52, 44, 68, 55, 72, 61, 80, 74, 88, 70, 92];

export default function HeroMockup() {
  return (
    <div className="mt-12.5 w-full">
      <div className="w-full max-w-[960px] mx-auto border-4 md:border-8 border-orange-300 rounded-2xl md:rounded-t-2xl md:rounded-b-none md:border-b-0 bg-white text-left shadow-2xl overflow-hidden">
        {/* Window chrome */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 mr-1" aria-hidden="true">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <Logo className="w-6 h-6" variant="orange" />
            <span className="text-sm font-semibold tracking-tight text-slate-900">Zkqy ERP</span>
            <span className="hidden sm:inline text-[10px] px-2 py-0.5 rounded bg-orange-50 text-[#ff4500] border border-orange-100 font-medium">
              Production
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative hidden sm:block">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                readOnly
                tabIndex={-1}
                placeholder="Search SKU, PO, customer..."
                className="pl-8 pr-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-800 placeholder-slate-400 outline-none w-44"
              />
            </div>
            <div className="relative p-1.5 rounded-lg border border-slate-200 bg-white">
              <Bell className="w-3.5 h-3.5 text-slate-500" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#ff4500] text-[8px] text-white flex items-center justify-center font-semibold">
                3
              </span>
            </div>
            <div className="flex items-center gap-1.5 pl-1">
              <div className="w-6 h-6 rounded-full bg-[#ff4500] text-white text-[10px] font-semibold flex items-center justify-center">
                ZK
              </div>
              <span className="hidden md:inline text-[11px] font-medium text-slate-700">Admin</span>
            </div>
          </div>
        </div>

        <div className="flex min-h-[340px] md:min-h-[390px]">
          {/* ERP sidebar */}
          <aside className="hidden sm:flex w-[148px] md:w-[168px] shrink-0 flex-col border-r border-slate-100 bg-slate-50/60 py-3 px-2 gap-0.5 overflow-hidden">
            <div className="flex-1 space-y-0.5 overflow-hidden">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[11px] font-medium ${
                      item.active
                        ? "bg-[#ff4500] text-white shadow-sm"
                        : "text-slate-600 hover:bg-white"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[11px] font-medium text-slate-500 border-t border-slate-200 mt-1 pt-2">
              <Settings className="w-3.5 h-3.5" />
              Settings
            </div>
          </aside>

          {/* Main ERP canvas */}
          <div className="flex-1 min-w-0 p-3 sm:p-4 space-y-3 bg-white">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Overview</p>
              <h2 className="text-base sm:text-lg font-semibold text-zinc-900 tracking-tight">
                Operations Dashboard
              </h2>
            </div>

            {/* KPI strip */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
              {kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 px-3 py-2.5"
                >
                  <p className="text-[10px] text-slate-500 font-medium truncate">{kpi.label}</p>
                  <div className="mt-1 flex items-end justify-between gap-1">
                    <span className="text-sm font-semibold text-zinc-900 tracking-tight">{kpi.value}</span>
                    <span
                      className={`inline-flex items-center gap-0.5 text-[10px] font-medium ${
                        kpi.warn
                          ? "text-amber-600"
                          : kpi.up
                            ? "text-emerald-600"
                            : "text-rose-600"
                      }`}
                    >
                      {kpi.warn ? (
                        <CircleAlert className="w-3 h-3" />
                      ) : kpi.up ? (
                        <TrendingUp className="w-3 h-3" />
                      ) : (
                        <TrendingDown className="w-3 h-3" />
                      )}
                      {kpi.delta}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-2.5">
              {/* Transactions table */}
              <div className="rounded-xl border border-slate-200 overflow-hidden">
                <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 bg-slate-50/80">
                  <h3 className="text-[11px] font-semibold text-zinc-800">Recent Transactions</h3>
                  <span className="text-[10px] text-[#ff4500] font-medium">View ledger</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left min-w-[360px]">
                    <thead>
                      <tr className="text-[10px] text-slate-400 border-b border-slate-100">
                        <th className="px-3 py-1.5 font-medium">ID</th>
                        <th className="px-3 py-1.5 font-medium">Party</th>
                        <th className="px-3 py-1.5 font-medium hidden sm:table-cell">Module</th>
                        <th className="px-3 py-1.5 font-medium">Amount</th>
                        <th className="px-3 py-1.5 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((row) => (
                        <tr key={row.id} className="border-b border-slate-50 last:border-0 text-[11px]">
                          <td className="px-3 py-2 font-medium text-zinc-800 whitespace-nowrap">{row.id}</td>
                          <td className="px-3 py-2 text-zinc-600 truncate max-w-[110px]">{row.vendor}</td>
                          <td className="px-3 py-2 text-zinc-500 hidden sm:table-cell">{row.module}</td>
                          <td className="px-3 py-2 font-medium text-zinc-800 whitespace-nowrap">{row.amount}</td>
                          <td className="px-3 py-2">
                            <StatusPill status={row.status} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Right column: chart + AI job */}
              <div className="space-y-2.5">
                <div className="rounded-xl border border-slate-200 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-[11px] font-semibold text-zinc-800">Cashflow (12w)</h3>
                    <span className="text-[10px] text-emerald-600 font-medium">+18.2%</span>
                  </div>
                  <div className="flex items-end gap-1 h-16">
                    {chartBars.map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-orange-100"
                        style={{
                          height: `${h}%`,
                          backgroundColor: i === chartBars.length - 1 ? "#ff4500" : undefined,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 p-3 bg-gradient-to-b from-white to-[#FFF0EB]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 rounded-md bg-[#ff4500] text-white flex items-center justify-center">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h3 className="text-[11px] font-semibold text-zinc-800">AI Invoice Agent</h3>
                      <p className="text-[10px] text-slate-500">Running · 24 docs in queue</p>
                    </div>
                  </div>
                  <div className="mt-2 h-1.5 rounded-full bg-orange-100 overflow-hidden">
                    <div className="h-full w-[72%] rounded-full bg-[#ff4500]" />
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[10px]">
                    <span className="text-slate-500">Matched 86 invoices today</span>
                    <span className="text-[#ff4500] font-medium">72%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusPill({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Approved: "bg-emerald-50 text-emerald-700 border-emerald-100",
    "AI Matched": "bg-orange-50 text-[#ff4500] border-orange-100",
    Fulfilled: "bg-sky-50 text-sky-700 border-sky-100",
    Review: "bg-rose-50 text-rose-700 border-rose-100",
  };

  return (
    <span
      className={`inline-flex px-1.5 py-0.5 rounded border text-[9px] font-semibold whitespace-nowrap ${
        styles[status] ?? "bg-slate-50 text-slate-600 border-slate-100"
      }`}
    >
      {status}
    </span>
  );
}
