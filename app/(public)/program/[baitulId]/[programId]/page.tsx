import Link from "next/link";
import { notFound } from "next/navigation";
import { getProgramDetail } from "../../getProgramDetail";
import ProgramIcon from "../../ProgramIcon";

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ baitulId: string; programId: string }>;
}) {
  const { baitulId, programId } = await params;
  const detail = getProgramDetail(baitulId, programId);

  if (!detail) {
    notFound();
  }

  const { frontmatter, contentHtml } = detail;

  return (
    <div className="bg-surau-cream text-slate-900 min-h-screen py-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto">
        <Link
          href={`/program#${baitulId}`}
          className="text-surau-blue font-semibold text-sm inline-flex items-center gap-1 mb-8 hover:underline"
        >
          ← Kembali ke {frontmatter.baitulTitle || "Program"}
        </Link>

        {frontmatter.iconName && (
          <div className="bg-surau-blue w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md">
            <ProgramIcon name={frontmatter.iconName} className="w-8 h-8 text-white" />
          </div>
        )}

        {frontmatter.badge && (
          <span className="inline-block bg-surau-blue/10 text-surau-blue font-bold text-xs px-4 py-1.5 rounded-full mb-4">
            {frontmatter.badge}
          </span>
        )}

        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8">
          {frontmatter.title}
        </h1>

        <div
          className="text-gray-700 leading-relaxed [&_p]:mb-4 [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-8 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_li]:mb-1 [&_strong]:text-slate-900 [&_strong]:font-semibold [&_img]:w-full [&_img]:aspect-video [&_img]:object-cover [&_img]:rounded-2xl [&_img]:shadow-md [&_img]:mb-6"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {frontmatter.buttonText && (
          <a
            href={frontmatter.buttonLink || "#"}
            className="inline-block mt-6 bg-surau-new-yellow hover:bg-yellow-400 text-surau-blue font-bold px-8 py-3 rounded-full shadow-md transition-transform hover:-translate-y-1"
          >
            {frontmatter.buttonText}
          </a>
        )}
      </div>
    </div>
  );
}
