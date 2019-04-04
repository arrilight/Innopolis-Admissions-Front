import { UserProfileInterface } from './user-profile-interface';

export interface InterviewInterface {
    interviewer: UserProfileInterface;
    datetime: Date;
    student?: UserProfileInterface;
}
