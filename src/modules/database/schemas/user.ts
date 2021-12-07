import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IUser } from '../interfaces/user';

type IUserMongo = Pick<IUser, 'email' | 'name' | 'password'>;

export type UserDocument = UserMongo & Document;

@Schema({
  collection: 'users',
  toObject: {
    transform: (_, ret): void => {
      delete ret._id;
      delete ret.__v;
    }
  }
})
export class UserMongo implements IUserMongo {
  @Prop({
    lowercase: true,
    required: true,
    unique: true,
    index: true,
    immutable: true,
    type: String
  })
  public email!: string;

  @Prop({ uppercase: true, required: true, trim: true, type: String })
  public name!: string;

  @Prop({ required: true, select: false, type: String })
  public password!: string;
}

const schema = SchemaFactory.createForClass(UserMongo);

schema.pre<UserMongo>('save', function () {
  console.log(this);
});

export const UserSchema = schema;

export const UserModel: ModelDefinition = {
  name: UserMongo.name,
  schema: UserSchema
};
