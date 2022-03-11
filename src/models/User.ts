import { Schema, model } from 'mongoose';
import { IUser } from '@interfaces/IUser';

const UserSchema = new Schema<IUser>({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const User = model<IUser>('User', UserSchema);

export { User };
