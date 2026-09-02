import { Activity } from "@/types/activity";
import { ActivityCard } from "./ActivityCard";

interface ActivityGridProps {
  activities: Activity[];
  onOpen: (activity: Activity) => void;
}

export function ActivityGrid({ activities, onOpen }: ActivityGridProps) {
  if (!activities.length) {
    return (
      <div className="empty">
        <h3>No encontramos actividades</h3>
        <p>No hay actividades que coincidan con los filtros seleccionados.</p>
      </div>
    );
  }

  return (
    <div className="activity-grid">
      {activities.map((activity) => (
        <ActivityCard key={activity.id} activity={activity} onOpen={onOpen} />
      ))}
    </div>
  );
}
