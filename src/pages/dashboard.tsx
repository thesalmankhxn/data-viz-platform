// import { FontDemo } from "@/components/font-demo";

import ButtonWithIcon from "@/components/button-with-icon";
import ChartVisualization from "@/components/dashboard/ChartVisualization";
import { PlusSm, Zap } from "@/components/Icons";
import KPICard from "@/components/dashboard/KPICard";
import ScenarioResults from "@/components/dashboard/scenario-results";
import { Button } from "@/components/ui/button";
import { VariableSelectButton } from "@/components/dashboard/variable-select-button";
import { kpiData } from "@/lib/constants";
import { Plus, RefreshCw, Upload } from "lucide-react";
import { useAppContext } from "@/providers/app-provider";

const Dashboard = () => {
  const { toggleVariablePanel } = useAppContext();

  return (
    <div className="flex-1 sm:p-6 p-5 space-y-8 overflow-y-auto md:border-l border-t border-[#525252] md:rounded-tl-md bg-bg_primary flex flex-col">
      <div className="flex-1 p-6 overflow-auto">
        {/*  Dashboard Header */}
        <div className="flex items-center justify-between mb-14">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8">
              <Zap />
            </div>
            <h1 className="text-3xl font-bold text-white">Charging Station</h1>
          </div>
          <div className="flex items-center space-x-2">
            <VariableSelectButton icon={<RefreshCw className="h-4 w-4" />} />
            <VariableSelectButton
              onClick={toggleVariablePanel}
              text="Variables"
              icon={<Plus className="h-4 w-4" />}
            />
            <VariableSelectButton icon={<Upload className="h-4 w-4" />} />
          </div>
        </div>

        {/* Best Scenario Results */}
        <ScenarioResults />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 flex-1 sm:space-y-0 space-y-5 h-full">
          {/* Chart Section */}
          <div className="md:col-span-3 space-y-4 h-full flex flex-col">
            <h3 className="text-2xl leading-5 font-semibold text-white font-robert">
              Graphs
            </h3>
            <div className="flex-1 w-full">
              <ChartVisualization />
            </div>
          </div>

          {/* KPI Section */}
          <div className="space-y-4 xl:col-span-2 flex flex-col min-w-full">
            <div className="flex items-center justify-between relative mb-4">
              <h3 className="text-2xl leading-5 font-semibold text-white font-robert">
                Key Performance Indicators
              </h3>
              <ButtonWithIcon
                iconRight={<Plus />}
                className=" text-sm sm:flex hidden bg-transparent py-1 absolute right-0 px-3"
              >
                Variables
              </ButtonWithIcon>
              <Button className=" text-sm sm:hidden block bg-transparent  absolute right-0 w-fit p-[5px]">
                <PlusSm />
              </Button>
            </div>

            {/* Mobile horizontal scroll */}
            <div className="sm:hidden overflow-x-auto">
              <div className="flex gap-4 px-1">
                {kpiData.map((kpi, index) => (
                  <div key={index} className="w-[260px] flex-shrink-0">
                    <KPICard
                      title={kpi.title}
                      value={kpi.value}
                      description={kpi.description}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Grid layout for sm and above */}
            <div className="gap-4 sm:grid hidden sm:grid-cols-2 grid-cols-1">
              {kpiData.map((kpi, index) => (
                <KPICard
                  key={index}
                  title={kpi.title}
                  value={kpi.value}
                  description={kpi.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
