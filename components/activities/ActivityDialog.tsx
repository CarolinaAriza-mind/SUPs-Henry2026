"use client";

import { getModuleFullTitle, getModuleLabel } from "@/lib/activities-utils";
import { Activity } from "@/types/activity";
import { useEffect, useRef } from "react";

interface ActivityDialogProps {
  activity: Activity | null;
  onClose: () => void;
}

export function ActivityDialog({ activity, onClose }: ActivityDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (activity && !dialog.open) dialog.showModal();
    if (!activity && dialog.open) dialog.close();
  }, [activity]);

  useEffect(() => {
    document.body.classList.toggle("dialog-open", Boolean(activity));
    return () => document.body.classList.remove("dialog-open");
  }, [activity]);

  return (
    <dialog
      ref={dialogRef}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {activity && (
        <>
          <div className="dialog-header">
            <div>
              <p className="eyebrow">{getModuleLabel(activity.module)}</p>
              <h2>{activity.title}</h2>
            </div>
            <button
              type="button"
              className="close"
              aria-label="Cerrar"
              onClick={onClose}
            >
              ×
            </button>
          </div>

          <div id="dialog-content">
            <div className="detail-grid">
              <div className="detail-box">
                <span className="detail-label">Duración</span>
                <strong>{activity.duration || "50 min"}</strong>
              </div>
              <div className="detail-box">
                <span className="detail-label">Formato</span>
                <strong>{activity.frontBack || "Front + Back"}</strong>
              </div>
              <div className="detail-box">
                <span className="detail-label">Módulo</span>
                <strong>{getModuleFullTitle(activity.module)}</strong>
              </div>
              {activity.skills.length > 0 && (
                <div className="detail-box">
                  <span className="detail-label">Habilidades</span>
                  <div className="tags">
                    {activity.skills.map((skill) => (
                      <span className="tag" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <DetailSection title="Objetivo">
              <p>{activity.objective}</p>
            </DetailSection>
            <DetailSection title="Materiales">
              <p>{activity.materials}</p>
            </DetailSection>
            <DetailSection title="Pasos">
              <ul>
                {activity.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </DetailSection>
            <DetailSection title="Debrief">
              <div className="prompt">
                <ul>
                  {activity.debrief.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </DetailSection>
            <DetailSection title="Transferencia a tecnología">
              <div className="prompt">
                <p>{activity.transfer}</p>
              </div>
            </DetailSection>
          </div>
        </>
      )}
    </dialog>
  );
}

function DetailSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="detail-section">
      <h4>{title}</h4>
      {children}
    </section>
  );
}
