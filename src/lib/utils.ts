import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility to format IEEE or APA citations
export function formatCitation(type: "IEEE" | "APA", citationData: {
  authors: string;
  title: string;
  journal: string;
  year: number;
  volume?: string;
  number?: string;
  pages?: string;
  doi?: string;
  url?: string;
}) {
  const { authors, title, journal, year, volume, number, pages, doi, url } = citationData;
  
  if (type === "IEEE") {
    let citation = `${authors}, "${title}," *${journal}*, `;
    if (volume) citation += `vol. ${volume}, `;
    if (number) citation += `no. ${number}, `;
    if (pages) citation += `pp. ${pages}, `;
    citation += `${year}.`;
    if (doi) citation += ` DOI: ${doi}`;
    return citation;
  } else {
    // APA Style
    let citation = `${authors}. (${year}). ${title}. *${journal}*`;
    if (volume || number || pages) {
      citation += `, `;
      if (volume) citation += `${volume}`;
      if (number) citation += `(${number})`;
      if (pages) citation += `, ${pages}`;
    }
    citation += `.`;
    if (doi) citation += ` https://doi.org/${doi}`;
    else if (url) citation += ` Retrieved from ${url}`;
    return citation;
  }
}
