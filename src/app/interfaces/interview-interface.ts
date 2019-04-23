import { UserProfileInterface } from './user-profile-interface';

export interface InterviewInterface {
    interviewer: UserProfileInterface | string;
    date: Date;
    student?: UserProfileInterface | string;
}
