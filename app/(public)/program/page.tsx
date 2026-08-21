import ProgramSection from "./ProgramSection";
import { programData } from "../data/programData";

export default function ProgramPage() {
  return (
    <div className="bg-surau-cream text-slate-900 min-h-screen scroll-smooth">
      {programData.map((baitul, index) => (
        <ProgramSection key={baitul.id} id={baitul.id} data={baitul} bordered={index > 0} />
      ))}
    </div>
  );
}
