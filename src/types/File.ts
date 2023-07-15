export interface File {
  '.tag': string;
  id: string;
  name: string;
  path_lower: string;
  client_modified?: Date;
  thumbnail?: string;
}
