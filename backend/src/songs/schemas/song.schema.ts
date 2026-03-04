import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SongDocument = HydratedDocument<Song>;

@Schema({ timestamps: true })
export class Song {
    @Prop({ required: true, trim: true })
    title: string;

    @Prop({ required: true, trim: true })
    artist: string;

    @Prop({ trim: true })
    key?: string;

    @Prop()
    bpm?: number;

    @Prop({ type: [String], default: [] })
    tags: string[];

    @Prop({ trim: true })
    notes?: string;
}

export const SongSchema = SchemaFactory.createForClass(Song);