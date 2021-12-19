import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CommentkDocument = Comment & Document;

@Schema()
export class Comment {
    @Prop()
    username: string;

    @Prop()
    text: string;
}

export const CommentkSchema = SchemaFactory.createForClass(Comment);