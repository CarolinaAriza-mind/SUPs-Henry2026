export type ActivityModule = 1 | 2 | 3 | 4 | 5;

export interface Activity {
  id: string;
  module: ActivityModule;
  title: string;
  duration: string;
  skills: string[];
  frontBack: string;
  description: string;
  objective: string;
  materials: string;
  steps: string[];
  debrief: string[];
  transfer: string;
}

export type ModuleFilter = "all" | ActivityModule;