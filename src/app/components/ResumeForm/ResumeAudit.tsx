"use client";

import { useAppSelector } from "lib/redux/hooks";
import { selectResume } from "lib/redux/resumeSlice";
import { CheckCircle2, AlertCircle, XCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export const ResumeAudit = () => {
  const resume = useAppSelector(selectResume);
  
  const audits = [
    {
      label: "Contact Information",
      check: () => !!(resume.profile.name && resume.profile.email && resume.profile.phone),
      desc: "Ensure your name, email, and phone are present.",
      impact: "Critical"
    },
    {
      label: "Work Experience",
      check: () => resume.workExperiences.length > 0 && resume.workExperiences[0].company !== "",
      desc: "At least one professional role should be listed.",
      impact: "High"
    },
    {
      label: "Detailed Descriptions",
      check: () => resume.workExperiences.every(w => w.descriptions.length >= 3),
      desc: "Roles with 3+ bullet points perform better in ATS.",
      impact: "Medium"
    },
    {
      label: "Skills Section",
      check: () => resume.skills.featuredSkills.some(s => s.skill !== ""),
      desc: "Featured skills help recruiters find you faster.",
      impact: "Medium"
    },
    {
      label: "Profile Summary",
      check: () => resume.profile.summary.length > 100,
      desc: "A strong summary (100+ chars) sets the tone.",
      impact: "Low"
    }
  ];

  const score = Math.round((audits.filter(a => a.check()).length / audits.length) * 100);

  return (
    <div className="space-y-8">
      <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 text-center space-y-4">
        <div className="inline-flex items-center justify-center size-24 rounded-full border-4 border-primary/20 bg-background text-3xl font-bold text-primary">
          {score}%
        </div>
        <div>
          <h2 className="text-xl font-semibold">Resume Health Score</h2>
          <p className="text-sm text-muted-foreground">Based on industry standard ATS best practices.</p>
        </div>
      </div>

      <div className="grid gap-4">
        {audits.map((audit, idx) => {
          const pass = audit.check();
          return (
            <div 
              key={idx}
              className={cn(
                "flex items-start gap-4 p-4 rounded-2xl border transition-all",
                pass ? "bg-emerald-50/50 border-emerald-100" : "bg-orange-50/50 border-orange-100 shadow-sm"
              )}
            >
              <div className={cn(
                "mt-1 p-1 rounded-full",
                pass ? "bg-emerald-500 text-white" : "bg-orange-500 text-white"
              )}>
                {pass ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm">{audit.label}</h3>
                  <span className={cn(
                    "text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full",
                    pass ? "bg-emerald-100 text-emerald-700" : "bg-orange-100 text-orange-700"
                  )}>
                    {audit.impact}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{audit.desc}</p>
                {!pass && (
                  <div className="mt-3 flex items-center gap-2 text-[10px] font-medium text-orange-800">
                    <Info size={12} />
                    <span>Fix this to improve your ranking</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
