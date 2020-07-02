
export interface UserModel {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    password: string;
    id: number;
}
export type UserCredentialsModel = Pick<UserModel, 'email' | 'password'>;
