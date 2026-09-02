"use client";

import { useMemo, useState } from "react";
import type { Activity, ModuleFilter } from "@/types/activity";

export function useActivityFilters(activities: Activity[]) {
  const [moduleFilter, setModuleFilter] = useState<ModuleFilter>("all");
  const [skillFilter, setSkillFilter] = useState<string | null>(null);

  const filteredActivities = useMemo(() => {
    return activities.filter((activity) => {
      const matchesModule =
        moduleFilter === "all" || activity.module === moduleFilter;

      const matchesSkill =
        !skillFilter ||
        activity.skills.some(
          (skill) => skill.toLowerCase() === skillFilter.toLowerCase(),
        );

      return matchesModule && matchesSkill;
    });
  }, [activities, moduleFilter, skillFilter]);

  const toggleSkill = (skill: string) => {
    setSkillFilter((current) =>
      current?.toLowerCase() === skill.toLowerCase() ? null : skill,
    );
  };

  return {
    moduleFilter,
    skillFilter,
    filteredActivities,
    setModuleFilter,
    toggleSkill,
  };
}
