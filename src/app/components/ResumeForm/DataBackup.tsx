"use client";

import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import { selectResume, setResume } from "lib/redux/resumeSlice";
import { selectSettings, setSettings } from "lib/redux/settingsSlice";
import { Download, Upload, Trash2, Save, FileJson } from "lucide-react";

export const DataBackup = () => {
  const resume = useAppSelector(selectResume);
  const settings = useAppSelector(selectSettings);
  const dispatch = useAppDispatch();

  const handleExport = () => {
    const data = { resume, settings, version: "1.0", updatedAt: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `resume-backup-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    alert("Resume data exported successfully!");
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string);
        if (data.resume && data.settings) {
          dispatch(setResume(data.resume));
          dispatch(setSettings(data.settings));
          alert("Resume data imported successfully!");
        } else {
          alert("Invalid resume backup file.");
        }
      } catch (err) {
        alert("Failed to parse the backup file.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="space-y-8">
      <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 space-y-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-2xl text-primary">
            <FileJson size={24} />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Data Portability</h2>
            <p className="text-sm text-muted-foreground">Save your progress offline or move it between devices.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
          <button
            onClick={handleExport}
            className="flex flex-col items-center justify-center p-6 bg-background rounded-2xl border hover:border-primary/50 transition-all group"
          >
            <Download className="mb-2 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="font-semibold text-sm">Download Backup</span>
            <span className="text-xs text-muted-foreground">Save as .json file</span>
          </button>

          <label className="flex flex-col items-center justify-center p-6 bg-background rounded-2xl border hover:border-primary/50 transition-all group cursor-pointer">
            <input type="file" className="hidden" accept=".json" onChange={handleImport} />
            <Upload className="mb-2 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="font-semibold text-sm">Restore from File</span>
            <span className="text-xs text-muted-foreground">Load a .json backup</span>
          </label>
        </div>
      </div>

      <div className="p-6 border border-red-100 bg-red-50/30 rounded-2xl space-y-4">
        <div className="flex items-center gap-2 text-red-600">
          <Trash2 size={18} />
          <h3 className="font-semibold text-sm">Danger Zone</h3>
        </div>
        <p className="text-xs text-red-600/70">Wiping data will reset your resume to the default template. This cannot be undone unless you have a backup.</p>
        <button
          onClick={() => {
            if (confirm("Are you sure you want to clear all resume data?")) {
              localStorage.clear();
              window.location.reload();
            }
          }}
          className="px-4 py-2 bg-red-600 text-white rounded-lg text-xs font-semibold hover:bg-red-700 transition-colors"
        >
          Clear All Data
        </button>
      </div>
    </div>
  );
};
