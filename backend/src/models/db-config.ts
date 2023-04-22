import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type DbConfigDocument = HydratedDocument<DbConfig>;

@Schema()
export class DbConfig extends Document {
	@Prop()
	is_seeded: boolean;
}

export const DbConfigSchema = SchemaFactory.createForClass(DbConfig);