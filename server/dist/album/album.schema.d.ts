import mongoose, { HydratedDocument } from 'mongoose';
export type AlbumDocument = HydratedDocument<Album>;
export declare class Album {
    name: string;
    artist: string;
    album: string;
    listens: string;
    picture: string;
    audio: string;
}
export declare const AlbumSchema: mongoose.Schema<Album, mongoose.Model<Album, any, any, any, mongoose.Document<unknown, any, Album> & Album & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Album, mongoose.Document<unknown, {}, mongoose.FlatRecord<Album>> & mongoose.FlatRecord<Album> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
