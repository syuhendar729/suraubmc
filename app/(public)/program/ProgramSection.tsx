// File: src/app/program/ProgramSection.tsx
// Section yang dipakai berulang di halaman /program untuk tiap kategori (Kepemudaan, Baitul Tarbiyah, dst.)

import ProgramIcon from "./ProgramIcon";

type ProgramDetail = {
  iconName: string;
  text: string;
};

type ProgramItem = {
  id: string;
  badge: string;
  title: string;
  description: string;
  iconName: string;
  imagePosition: "left" | "right";
  details: ProgramDetail[];
  buttonText: string;
};

type ProgramSectionData = {
  header: {
    badge: string;
    title: string;
    description: string;
  };
  programs: ProgramItem[];
};

export default function ProgramSection({
  id,
  data,
  bordered = false,
}: {
  id: string;
  data: ProgramSectionData;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-20 px-4 md:px-12 lg:px-20 ${bordered ? "border-t border-gray-200" : ""}`}
    >
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-block bg-surau-blue/10 text-surau-blue font-bold text-xs px-4 py-1.5 rounded-full mb-6">
          {data.header.badge}
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
          {data.header.title}
        </h1>
        <p className="text-gray-500 text-base md:text-lg leading-relaxed">
          {data.header.description}
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {data.programs.map((program) => (
          <div
            key={program.id}
            className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12 items-center"
          >
            <div
              className={`w-full md:w-1/2 aspect-[4/3] rounded-[1.5rem] bg-gradient-to-br from-surau-blue to-teal-500 flex items-center justify-center shadow-lg ${
                program.imagePosition === "right" ? "md:order-2" : ""
              }`}
            >
              <ProgramIcon name={program.iconName} className="w-16 h-16 text-white" />
            </div>

            <div className={`w-full md:w-1/2 ${program.imagePosition === "right" ? "md:order-1" : ""}`}>
              <span className="inline-block bg-surau-blue/10 text-surau-blue font-bold text-xs px-4 py-1.5 rounded-full mb-4">
                {program.badge}
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                {program.title}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                {program.description}
              </p>

              <div className="flex flex-col gap-3 mb-8">
                {program.details.map((detail, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <ProgramIcon name={detail.iconName} className="w-5 h-5 text-surau-blue shrink-0" />
                    <span className="text-sm text-gray-600">{detail.text}</span>
                  </div>
                ))}
              </div>

              <button className="bg-surau-new-yellow hover:bg-yellow-400 text-surau-blue font-bold px-8 py-3 rounded-full transition-transform hover:-translate-y-1 shadow-md">
                {program.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
