"use client";

import { useState } from "react";
import { activities } from "@/data/activities";

import { ActivityDialog } from "./ActivityDialog";
import { ActivityFilters } from "./ActivityFilters";
import { ActivityGrid } from "./ActivityGrid";
import { useActivityFilters } from "@/hooks/useActivityFilters";
import { Activity } from "@/types/activity";

export function ActivitiesSection() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    null,
  );
  const {
    moduleFilter,
    skillFilter,
    filteredActivities,
    setModuleFilter,
    toggleSkill,
  } = useActivityFilters(activities);

  return (
    <section id="actividades" className="section activities-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">BANCO DE ACTIVIDADES</p>
          <h2>Elegí por módulo, habilidad o modalidad</h2>
        </div>

        <ActivityFilters
          moduleFilter={moduleFilter}
          skillFilter={skillFilter}
          onModuleChange={setModuleFilter}
          onSkillChange={toggleSkill}
        />

        <p className="sr-only" aria-live="polite" aria-atomic="true">
          {filteredActivities.length === 0
            ? "No se encontraron actividades."
            : filteredActivities.length === 1
              ? "Se encontró 1 actividad."
              : `Se encontraron ${filteredActivities.length} actividades.`}
        </p>

        <ActivityGrid
          activities={filteredActivities}
          onOpen={setSelectedActivity}
        />
      </div>

      <ActivityDialog
        activity={selectedActivity}
        onClose={() => setSelectedActivity(null)}
      />
    </section>
  );
}
