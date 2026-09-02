import type { ActivityModule } from "@/types/activity";

export const MODULE_TITLES: Record<ActivityModule, string> = {
  1: "Comunidad, confianza y participación",
  2: "Comunicación, coordinación y feedback",
  3: "Escucha, decisiones, ética y pensamiento crítico",
  4: "Colaboración, empatía y dinámica de equipos",
  5: "Especialidad, demo, feedback y comunicación profesional",
};

export const getModuleLabel = (module: ActivityModule) => `Módulo ${module}`;

export const getModuleFullTitle = (module: ActivityModule) =>
  MODULE_TITLES[module];
