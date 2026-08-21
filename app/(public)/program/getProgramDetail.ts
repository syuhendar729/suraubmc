// File: src/app/program/getProgramDetail.ts
// Baca konten detail program dari file markdown di /content/program/<baitulId>/<programId>.md
// biar copywriting halaman detail gampang diubah tanpa sentuh kode.

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const CONTENT_DIR = path.join(process.cwd(), "content", "program");

export type ProgramDetailFrontmatter = {
  title: string;
  badge?: string;
  baitulTitle?: string;
  iconName?: string;
  buttonText?: string;
  buttonLink?: string;
};

export function getProgramDetail(baitulId: string, programId: string) {
  const filePath = path.join(CONTENT_DIR, baitulId, `${programId}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const contentHtml = marked.parse(content, { async: false }) as string;

  return {
    frontmatter: data as ProgramDetailFrontmatter,
    contentHtml,
  };
}
