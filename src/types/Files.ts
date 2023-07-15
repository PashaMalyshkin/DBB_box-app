import { files } from 'dropbox';

import FileMetadataReference = files.FileMetadataReference;
import FolderMetadataReference = files.FolderMetadataReference;
import DeletedMetadataReference = files.DeletedMetadataReference;

export type Files = (FileMetadataReference | FolderMetadataReference | DeletedMetadataReference)[];
