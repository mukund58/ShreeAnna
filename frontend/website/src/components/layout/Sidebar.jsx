import { useState } from "react";
import { useLocation } from "react-router-dom";

import {
  LayoutDashboard,
  Users,
  Package,
  ClipboardCheck,
  FileText,
  Truck,
  Warehouse,
  Factory,
  ShoppingCart,
  Wallet,
  BarChart3,
  Settings,
  HelpCircle,
  FileCheck,
  ChevronDown,
  CircleDollarSign,
  Building2,
  UsersRound,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-card">
      <div className="flex h-full flex-col">

        {/* Logo */}
        <div className="flex h-16 items-center border-b px-6">
          <div>
            <h1 className="text-xl font-bold">
              ShreeAnna
            </h1>

            <p className="text-xs text-muted-foreground">
              FPO Portal
            </p>
          </div>
        </div>


        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">

          {/* Dashboard */}
          <NavItem
            to="/dashboard"
            icon={LayoutDashboard}
            label="Dashboard"
          />


          {/* Operations */}
          <NavSection title="Operations">

            <NavItem
              to="/farmers"
              icon={Users}
              label="Farmers"
            />
            <NavItem
              to="/farm-verification"
              icon={FileCheck}
              label="Farm Verification"
              badgeCount={2}
            />

            <NavItem
              to="/procurement/lots"
              icon={Package}
              label="Procurement Lots"
            />


            <NavItem
              to="/agreements"
              icon={FileText}
              label="Agreements"
            />

        </NavSection>

        <NavSection title="Logistics & Inventory">

            <NavItem
              to="/dispatches"
              icon={Truck}
              label="Dispatch & Logistics"
            />

            <InventoryDropdown />

          </NavSection>


          {/* Business */}
          <NavSection title="Business">

            <NavItem
              to="/marketplace"
              icon={ShoppingCart}
              label="Marketplace"
            />

            <NavItem
              to="/orders"
              icon={ClipboardCheck}
              label="Orders"
            />
            <NavItem
              to="/settlements"
              icon={CircleDollarSign}
              label="Settlements & Payments"
            />

            <NavItem
              to="/finance"
              icon={Wallet}
              label="Finance"
            />

            <NavItem
              to="/reports"
              icon={BarChart3}
              label="Reports & Analytics"
            />

          </NavSection>
          <NavSection title="Buyers Management">
            <NavItem
              to="/buyers"
              icon={Building2}
              label="Buyers"
            />
          </NavSection>
          <NavSection title="FPO Management">
            <NavItem
              to="/fpo"
              icon={UsersRound}
              label="FPO Members"
            />
          </NavSection>

        </nav>


        {/* Bottom navigation */}
        <div className="border-t p-4">

          <NavItem
            to="/settings"
            icon={Settings}
            label="Settings"
          />

          <NavItem
            to="/support"
            icon={HelpCircle}
            label="Support"
          />

        </div>

      </div>
    </aside>
  );
}


function NavSection({ title, children }) {
  return (
    <div className="mt-6">
      <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </p>

      <div className="space-y-1">
        {children}
      </div>
    </div>
  );
}


function InventoryDropdown() {
  const location = useLocation();
  const [open, setOpen] = useState(
    location.pathname === "/inventory" ||
      location.pathname.startsWith("/inventory/"),
  );

  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50/60">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
      >
        <Warehouse className="h-4 w-4 shrink-0" />

        <span className="flex-1">Warehouse & Inventory</span>

        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="space-y-1 border-t border-slate-200 px-2 pb-2 pt-2">
          <NavItem to="/inventory" icon={Warehouse} label="Inventory" end />
          <NavItem
            to="/inventory/movements"
            icon={Factory}
            label="Stock Movements"
          />
          <NavItem
            to="/warehouses"
            icon={Warehouse}
            label="Warehouses"
           end />
          <NavItem
            to="/warehouses/lots"
            icon={Package}
            label="Lot Allocation"
          />
        </div>
      )}
    </div>
  );
}

function NavItem({ to, icon: Icon, label, badgeCount, end = false }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `
        flex items-center gap-3 rounded-lg px-3 py-2.5
        text-sm font-medium transition-colors
        ${isActive
          ? "bg-slate-900 text-white shadow-xs"
          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        }
        `
      }
    >
      <Icon className="h-4 w-4 shrink-0" />

      <span className="flex-1">{label}</span>

      {badgeCount !== undefined && badgeCount !== null && (
        <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-500 px-1.5 text-[11px] font-bold text-white shadow-xs">
          {badgeCount}
        </span>
      )}
    </NavLink>
  );
}

export default Sidebar;