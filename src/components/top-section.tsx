import { useSidebar } from "@/components/ui/sidebar";
import { Hamburger } from "@/components/Icons";
import { useState } from "react";

const tabs = ["Charging Stations", "Fleet Sizing", "Parking"];

export function TopSection() {
  const { isMobile, state, toggleSidebar } = useSidebar();
  const [activeIndex, setActiveIndex] = useState(0);

  const getSidebarWidth = () => {
    if (isMobile) {
      return "0px";
    }

    if (state === "collapsed") {
      return "var(--sidebar-width-icon)";
    }

    return "var(--sidebar-width)";
  };

  return (
    <header
      className="sticky h-[86px] top-0 right-0 z-5 flex items-center gap-2 justify-between py-1 px-3 bg-sidebar shrink-0"
      style={{
        left: getSidebarWidth(),
        width: `calc(100vw - ${getSidebarWidth()}`,
      }}
    >
      <div className="flex items-center sm:gap-2 gap-0 py-1">
        <button className="sm:hidden mr-2" onClick={toggleSidebar}>
          <Hamburger />
        </button>
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => setActiveIndex(index)}
            className={`relative z-10 py-2 leading-5 transition-colors duration-200 text-sm sm:text-base active:scale-95 px-5 h-[38px] whitespace-nowrap  ${
              activeIndex === index
                ? "text-white bg-[#242424] border-[0.67px] border-[#5A5A5A] rounded-sm"
                : "text-white/60 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="shrink-0 flex items-center gap-2 *:shrink-0"></div>
    </header>
  );
}
