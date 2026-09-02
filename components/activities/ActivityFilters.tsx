import { MODULE_FILTERS, SKILL_FILTERS } from "@/data/activity-filters";
import type { ModuleFilter } from "@/types/activity";

interface ActivityFiltersProps {
  moduleFilter: ModuleFilter;
  skillFilter: string | null;
  onModuleChange: (module: ModuleFilter) => void;
  onSkillChange: (skill: string) => void;
}

export function ActivityFilters({
  moduleFilter,
  skillFilter,
  onModuleChange,
  onSkillChange,
}: ActivityFiltersProps) {
  return (
    <>
      <div className="filters" role="group" aria-label="Filtros por módulo">
        {MODULE_FILTERS.map((module) => {
          const active = moduleFilter === module;
          return (
            <button
              type="button"
              key={module}
              className={`filter${active ? " active" : ""}`}
              aria-pressed={active}
              onClick={() => onModuleChange(module)}
            >
              {module === "all" ? "Todas" : `Módulo ${module}`}
            </button>
          );
        })}
      </div>

      <div
        className="filters secondary-filters"
        role="group"
        aria-label="Filtros por habilidad"
      >
        {SKILL_FILTERS.map((skill) => {
          const active = skillFilter?.toLowerCase() === skill.toLowerCase();
          return (
            <button
              type="button"
              key={skill}
              className={`filter small${active ? " active" : ""}`}
              aria-pressed={active}
              onClick={() => onSkillChange(skill)}
            >
              {skill}
            </button>
          );
        })}
      </div>
    </>
  );
}
