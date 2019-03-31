import {ProgramInterface} from './program-interface';
import {FileInterface} from './file-interface';

export interface UserProfileDetailsInterface {
  telephone: string;
  email: string;
  program: ProgramInterface;
  country: string;
  skype: string;
  documents: DocumentsInterface;
}

interface DocumentsInterface {
  cv: FileInterface;
  motivationLetter: FileInterface;
  others: FileInterface[];
}
