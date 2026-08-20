import ProgramSection from "./ProgramSection";
import { kepemudaanData, baitulTarbiyahData } from "../data/programData";

export default function ProgramPage() {
  return (
    <div className="bg-surau-cream text-slate-900 min-h-screen scroll-smooth">
      <ProgramSection id="kepemudaan" data={kepemudaanData} />
      <ProgramSection id="baitul-tarbiyah" data={baitulTarbiyahData} bordered />
    </div>
  );
}
