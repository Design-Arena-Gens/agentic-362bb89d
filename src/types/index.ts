export type JobType = "audiobook" | "podcast";
export type JobStatus = "queued" | "processing" | "completed" | "failed" | "canceled";

export interface Voice {
  voice_id: string;
  language: string;
  region: string;
  gender: "male" | "female" | "neutral";
  personality: string;
  sample_path?: string;
}

export interface JobRow {
  id: string;
  user_id: string;
  type: JobType;
  input_file: string;
  status: JobStatus;
  pages: number | null;
  book_name: string | null;
  created_at: string;
  started_at: string | null;
  finished_at: string | null;
  outputs: Record<string, unknown> | null;
  error_message: string | null;
}

export interface ChunkRow {
  id: string;
  job_id: string;
  number: number;
  start_page: number | null;
  end_page: number | null;
  status: JobStatus;
  attempts: number;
  provider_used: string | null;
  file_path: string | null;
}
