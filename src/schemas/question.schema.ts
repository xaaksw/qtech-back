import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QuestionDoc = HydratedDocument<Question>;

@Schema()
export class Question {
  @Prop()
  body: string;

  @Prop()
  companies: string[];

  @Prop()
  positions: string[];
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
