export interface JobTitle {
  title: string;
  startMonth: number;
  startYear: number;
  endMonth: number | null;
  endYear: number | null;
}

export default interface Job {
  company: string;
  titles: JobTitle[];
  summary: string;
}
