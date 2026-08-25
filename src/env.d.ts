/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly DATA_SOURCE?: 'file' | 'api';
  readonly DATA_API_BASE_URL?: string;
}
