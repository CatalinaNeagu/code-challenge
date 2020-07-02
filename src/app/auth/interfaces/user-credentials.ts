import { User } from 'src/app/contacts/interfaces/user';

export type UserCredentials = Pick<User, 'email' | 'password'>;
