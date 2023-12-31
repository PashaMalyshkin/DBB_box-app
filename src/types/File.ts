export interface File {
  '.tag': string;
  id: string;
  name: string;
  path_lower: string;
  path_display: string;
  client_modified?: Date;
  thumbnail?: string;
}
