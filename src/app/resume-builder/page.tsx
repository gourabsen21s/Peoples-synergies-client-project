"use client";
import { Provider } from "react-redux";
import { store } from "lib/redux/store";
import { ResumeBuilderDashboard } from "components/ResumeBuilderDashboard";
import { Background } from "@/components/background";

export default function Create() {
  return (
    <Provider store={store}>
      <Background>
        <section className="max-w-[1800px] mx-auto px-4 pt-40 pb-20 min-h-[900px] h-[calc(100vh-40px)]">
          <div className="mb-8 text-center space-y-2">
            <h1 className="text-4xl tracking-tight sm:text-5xl font-bold">
              Professional Resume Builder
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Craft a stunning, ATS-friendly resume securely integrated into the Peoples Synergies UI.
            </p>
          </div>
          <main className="relative h-full w-full overflow-hidden bg-background border shadow-2xl rounded-[2rem]">
            <ResumeBuilderDashboard />
          </main>
        </section>
      </Background>
    </Provider>
  );
}
