import { Helmet } from "react-helmet-async";
import { MonthOrderAmountCard } from "./monthOrderAmountCard";
import { MonthRevenueCard } from "./monthRevenueCard";
import { DayOrderAmountCard } from "./dayOrderAmountCard";
import { MonthCanceledOrderAmount } from "./monthCanceledOrderAmount";
import { RevenueChart } from "./revenueChart";
import { PopularProductsChart } from "./popularProductsChart";

export function Dashboard() {
  return (
    <div>
      <Helmet title="Dashboard | Pizza Shop" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight"> Dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrderAmountCard />
          <DayOrderAmountCard />
          <MonthCanceledOrderAmount />
        </div>
        <div className="grid grid-cols-6 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </div>
  );
}
