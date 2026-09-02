import { ActivityModule } from "@/types/activity";

export const MODULE_FILTERS: Array<"all" | ActivityModule> = [
  "all",
  1,
  2,
  3,
  4,
  5,
];

export const SKILL_FILTERS = [
  "Escucha activa",
  "Comunicación efectiva",
  "Trabajo en equipo",
  "Empatía",
  "Comunidad",
  "Presentación",
] as const;
