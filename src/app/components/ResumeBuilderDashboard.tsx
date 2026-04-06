"use client";

import { useState } from "react";
import { 
  useSetInitialStore, 
  useSaveStateToLocalStorageOnChange 
} from "lib/redux/hooks";
import { ProfileForm } from "components/ResumeForm/ProfileForm";
import { WorkExperiencesForm } from "components/ResumeForm/WorkExperiencesForm";
import { EducationsForm } from "components/ResumeForm/EducationsForm";
import { ProjectsForm } from "components/ResumeForm/ProjectsForm";
import { SkillsForm } from "components/ResumeForm/SkillsForm";
import { ThemeForm } from "components/ResumeForm/ThemeForm/index";
import { CustomForm } from "components/ResumeForm/CustomForm";
import { SectionSettings } from "components/ResumeForm/SectionSettings";
import { ResumeAudit } from "components/ResumeForm/ResumeAudit";
import { DataBackup } from "components/ResumeForm/DataBackup";
import { ResumeDropzone } from "components/ResumeDropzone";
import { Resume } from "components/Resume";
import { cn } from "@/lib/utils";
import { 
  ChevronRight, 
  FileText, 
  User, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Palette, 
  Share2, 
  UploadCloud, 
  LayoutGrid, 
  PlusCircle, 
  Activity, 
  Database 
} from "lucide-react";

const STEPS = [
  { 
    id: "import", 
    label: "Import", 
    icon: UploadCloud, 
    component: ({ onComplete }: { onComplete: () => void }) => (
      <div className="p-8">
        <ResumeDropzone onFileUrlChange={(url) => console.log(url)} onImportComplete={onComplete} />
      </div>
    ) 
  },
  { id: "profile", label: "Basics", icon: User, component: ProfileForm },
  { id: "sections", label: "Sections", icon: LayoutGrid, component: SectionSettings },
  { id: "work", label: "Experience", icon: Briefcase, component: WorkExperiencesForm },
  { id: "education", label: "Education", icon: GraduationCap, component: EducationsForm },
  { id: "skills", label: "Skills", icon: Code, component: SkillsForm },
  { id: "projects", label: "Projects", icon: Palette, component: ProjectsForm },
  { id: "custom", label: "Custom", icon: PlusCircle, component: CustomForm },
  { id: "theme", label: "Design", icon: Palette, component: ThemeForm },
  { id: "audit", label: "ATS Audit", icon: Activity, component: ResumeAudit },
  { id: "backup", label: "Backup", icon: Database, component: DataBackup },
];

export const ResumeBuilderDashboard = () => {
  useSetInitialStore();
  useSaveStateToLocalStorageOnChange();
  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  const CurrentComponent = STEPS[currentStepIdx].component;

  return (
    <div className="flex h-full w-full bg-background">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r bg-muted/30 flex flex-col p-4 gap-2">
        <div className="mb-6 px-2">
          <h2 className="font-display font-semibold text-xl">Builder</h2>
        </div>
        <nav className="flex-1 space-y-1">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isActive = currentStepIdx === idx;
            return (
              <button
                key={step.id}
                onClick={() => setCurrentStepIdx(idx)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all group",
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-md" 
                    : "text-muted-foreground hover:bg-muted"
                )}
              >
                <Icon className={cn("size-5", isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground")} />
                {step.label}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Form Container */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 scrollbar-hide">
          <div className="max-w-4xl mx-auto space-y-8 pb-20">
            <header className="mb-8 border-b pb-4">
              <h1 className="text-2xl font-semibold tracking-tight">{STEPS[currentStepIdx].label} Information</h1>
              <p className="text-muted-foreground text-sm mt-1">Fill in your details to update the resume live.</p>
            </header>
            {currentStepIdx === 0 ? (
              <CurrentComponent onComplete={() => setCurrentStepIdx(1)} />
            ) : (
              // @ts-ignore
              <CurrentComponent />
            )}
            
            <div className="flex justify-between items-center pt-8 border-t">
              <button
                disabled={currentStepIdx === 0}
                onClick={() => setCurrentStepIdx(prev => prev - 1)}
                className="px-6 py-2 rounded-full border hover:bg-muted disabled:opacity-50 transition-colors"
              >
                Previous
              </button>
              <button
                disabled={currentStepIdx === STEPS.length - 1}
                onClick={() => setCurrentStepIdx(prev => prev + 1)}
                className="px-6 py-2 rounded-full bg-primary text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
              >
                Next Step
              </button>
            </div>
          </div>
        </div>

        {/* Live Preview Area */}
        <div className="w-1/2 hidden md:block border-l bg-card/50 overflow-y-auto scrollbar-hide">
          <div className="sticky top-0 p-4 bg-card/80 backdrop-blur-sm border-b z-10 flex justify-between items-center">
            <span className="text-xs font-mono font-medium tracking-widest text-muted-foreground uppercase">Real-time Preview</span>
            <div className="flex gap-2">
               {/* Export/Download Button will be here */}
            </div>
          </div>
          <div className="p-4 flex justify-center">
            <div className="scale-100 origin-top shadow-2xl">
              <Resume />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
