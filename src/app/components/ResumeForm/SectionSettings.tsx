"use client";

import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import { 
  selectSettings, 
  changeShowForm, 
  changeFormHeading,
  changeShowBulletPoints,
  type ShowForm 
} from "lib/redux/settingsSlice";
import { Eye, EyeOff, Edit3 } from "lucide-react";
import { cn } from "@/lib/utils";

export const SectionSettings = () => {
  const settings = useAppSelector(selectSettings);
  const dispatch = useAppDispatch();

  const sections: { id: ShowForm; label: string }[] = [
    { id: "workExperiences", label: "Work Experience" },
    { id: "educations", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "custom", label: "Custom Section" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        {sections.map((section) => {
          const isVisible = settings.formToShow[section.id];
          const heading = settings.formToHeading[section.id];

          return (
            <div 
              key={section.id}
              className={cn(
                "flex flex-col gap-3 p-4 rounded-xl border transition-all",
                isVisible ? "bg-card border-primary/20 shadow-sm" : "bg-muted/30 opacity-60"
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "p-2 rounded-lg",
                    isVisible ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                  )}>
                    {isVisible ? <Eye size={18} /> : <EyeOff size={18} />}
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">{section.label}</h3>
                    <p className="text-xs text-muted-foreground">
                      {isVisible ? "Visible on resume" : "Hidden from resume"}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(changeShowForm({ field: section.id, value: !isVisible }))}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-xs font-semibold transition-colors",
                    isVisible 
                      ? "bg-muted hover:bg-red-50 hover:text-red-600" 
                      : "bg-primary text-primary-foreground hover:opacity-90"
                  )}
                >
                  {isVisible ? "Disable" : "Enable"}
                </button>
              </div>

              {isVisible && (
                <div className="space-y-4 mt-2 pt-2 border-t border-dashed">
                  <div className="flex items-center gap-2">
                    <Edit3 size={14} className="text-muted-foreground" />
                    <input
                      type="text"
                      value={heading}
                      onChange={(e) => dispatch(changeFormHeading({ field: section.id, value: e.target.value }))}
                      className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-medium p-0"
                      placeholder="Section Heading (e.g. WORK EXPERIENCE)"
                    />
                  </div>
                  
                  {/* Bullet point toggle for all sections now */}
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={settings.showBulletPoints[section.id]}
                      onChange={(e) => dispatch(changeShowBulletPoints({ 
                        field: section.id, 
                        value: e.target.checked 
                      }))}
                      className="rounded border-gray-300 text-primary focus:ring-primary size-4"
                    />
                    <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                      Use bullet points for this section
                    </span>
                  </label>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
