import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type AlbumDocument = HydratedDocument<Album>;

@Schema()
export class Album {
  @Prop()
  name: string;

  @Prop()
  artist: string;

  @Prop()
  album: string;

  @Prop()
  listens: string;

  @Prop()
  picture: string;

  @Prop()
  audio: string;
}

export const AlbumSchema = SchemaFactory.createForClass(Album);