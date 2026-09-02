import { getModuleLabel } from "@/lib/activities-utils";
import { Activity } from "@/types/activity";

interface ActivityCardProps {
  activity: Activity;
  onOpen: (activity: Activity) => void;
}

export function ActivityCard({ activity, onOpen }: ActivityCardProps) {
  return (
    <article
      className="activity-card"
      aria-label={`Actividad: ${activity.title}`}
    >
      <div className="activity-top">
        <span className="module-badge">{getModuleLabel(activity.module)}</span>
        <span className="duration">{activity.duration || "50 min"}</span>
      </div>
      <h3>{activity.title}</h3>
      <p className="description">{activity.description}</p>
      {activity.skills.length > 0 && (
        <div className="tags">
          {activity.skills.map((skill) => (
            <span className="tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      )}
      <button
        type="button"
        className="open-activity"
        onClick={() => onOpen(activity)}
        aria-label={`Abrir actividad ${activity.title}`}
      >
        Ver actividad
      </button>
    </article>
  );
}
