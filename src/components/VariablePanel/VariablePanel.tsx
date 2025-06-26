import { useAppContext } from "@/providers/app-provider";
import { useEffect, useState } from "react";
import {
  AIStars,
  AIStarsSm,
  Check,
  Info,
  Chevrron,
  Cross,
  PlusSm,
  Rerun,
  Search,
} from "@/components/Icons";
import ButtonWithIcon from "@/components/button-with-icon";
import type { Variable } from "@/lib/constants";
import { VARIABLE_CATEGORIES } from "@/lib/constants";

export const VariablePanel: React.FC = () => {
  const {
    isVariablePanelOpen,
    toggleVariablePanel,
    variables,
    selectedVariable,
  } = useAppContext();

  const categorizedVariables = VARIABLE_CATEGORIES.map((category) => ({
    category,
    variables: variables.filter((v: Variable) => v.category === category),
  }));

  const descriptionToShow = selectedVariable?.description || null;

  return (
    <>
      <div
        className={`fixed w-full inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isVariablePanelOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleVariablePanel}
      />

      <div
        className={`fixed md:w-1/2 w-full overflow-auto top-0 right-0 bg-[#0E0D0D] border-l border-border-primary z-50 transform transition-transform duration-300 ease-out p-6 flex flex-col h-full space-y-6 ${
          isVariablePanelOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl text-white">Edit Variables</h2>
          <button onClick={toggleVariablePanel} className="p-2 rounded-lg">
            <Cross />
          </button>
        </div>

        <div className="flex items-center gap-2 w-full">
          <div className="flex items-center space-x-4 flex-1 bg-bg-primary p-2 border-[0.67px] border-[#5A5A5A] rounded-sm h-[38px]">
            <Search />
            <input
              type="text"
              placeholder="Search variables"
              className="rounded-sm text-sm w-full placeholder:text-white bg-transparent focus:outline-none"
            />
          </div>
          <ButtonWithIcon className="px-4" iconLeft={<AIStars />}>
            Autofill
          </ButtonWithIcon>
          <button className="text-text-primary gradient-border-button flex items-center gap-2 border-[1px] px-4 py-1.5 rounded-sm  border-text-primary bg-[#23291E]  rerun active:scale-95">
            <Rerun /> Rerun
          </button>
        </div>

        <div className="space-y-10 bg-[#161618] border border-border-primary h-fit rounded-md">
          <div
            className={`space-y-6 pt-6 ${descriptionToShow ? "pb-0" : "pb-6"}`}
          >
            {categorizedVariables.map(({ category, variables }) => (
              <div className="px-6" key={category}>
                <h3 className="!text-[15px] font-light text-[#D5D5D5] mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {variables.map((variable: Variable) => (
                    <VariableTag key={variable.id} variable={variable} />
                  ))}
                </div>
              </div>
            ))}

            <div
              className={`transition-all duration-300 ease-in-out transform
              ${
                descriptionToShow
                  ? "opacity-100 translate-y-0 pointer-events-auto p-5 space-y-3"
                  : "opacity-0 translate-y-2 pointer-events-none h-0"
              }
              bg-bg-primary-light   border-t border-border-primary rounded-b-md
            `}
            >
              <div className="flex items-center gap-3">
                <h1 className="text-white">{selectedVariable?.name}</h1>
                <Info />
              </div>
              <p className="text-sm text-text-light">{descriptionToShow}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <VariableSection title="Primary Variables" />
          <VariableSection title="Secondary Variables" />
        </div>
      </div>
    </>
  );
};

const VariableTag: React.FC<{ variable: Variable }> = ({ variable }) => {
  const { updateVariable, setSelectedVariable } = useAppContext();
  const [showDescription, setShowDescription] = useState(false);
  const [hoverTimer, setHoverTimer] = useState<NodeJS.Timeout | null>(null);
  const [hideTimer, setHideTimer] = useState<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    updateVariable(variable.id, { selected: !variable.selected });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (hideTimer) {
      clearTimeout(hideTimer);
      setHideTimer(null);
    }
    if (variable.description && !showDescription) {
      const timer = setTimeout(() => {
        setShowDescription(true);
        setSelectedVariable(variable);
      }, 1000);
      setHoverTimer(timer);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (hoverTimer) {
      clearTimeout(hoverTimer);
      setHoverTimer(null);
    }
    if (showDescription) {
      const timer = setTimeout(() => {
        setShowDescription(false);
        setSelectedVariable(null);
      }, 2000);
      setHideTimer(timer);
    }
  };

  useEffect(() => {
    return () => {
      if (hoverTimer) clearTimeout(hoverTimer);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, [hoverTimer, hideTimer]);

  const getButtonClasses = () => {
    const base =
      "px-6 py-2 rounded-full h-[33px] text-xs font-light border flex items-center gap-3 relative transition-all duration-200";
    if (variable.selected) {
      let selectedClass =
        "bg-[#23291E] border-b border-[#C9FF3B] text-[#C9FF3B]";
      if (isHovered) {
        selectedClass += " shadow-[-1px_6px_16px_0px_rgba(59,255,114,0.23)]";
      }
      return `${base} ${selectedClass}`;
    }
    return `${base} bg-[#23291E] border-[#D5D5D5] text-[#D5D5D5] hover:text-white`;
  };

  return (
    <button
      className={getButtonClasses()}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {variable.name}
      <AIStarsSm />
      {variable.selected ? <Check /> : <PlusSm />}
    </button>
  );
};

const VariableSection: React.FC<{ title: string }> = ({ title }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-border_primary rounded-md bg-[#0E0D0D] text-[var(--variable-accent)]">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between py-2 px-5 text-left"
      >
        <span className="text-md font-normal">{title}</span>
        <span className="rotate-180 border border-[var(--variable-accent)] rounded-[20px] py-0.5 px-2">
          <Chevrron />
        </span>
      </button>
    </div>
  );
};
