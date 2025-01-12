import { Types, HydratedDocument } from 'mongoose';
export type TrackDocument = HydratedDocument<Track>;
export declare class Track {
    name: string;
    artist: string;
    text: string;
    listens: number;
    picture: string;
    audio: string;
    comments: Types.ObjectId[];
}
export declare const TrackSchema: import("mongoose").Schema<Track, import("mongoose").Model<Track, any, any, any, import("mongoose").Document<unknown, any, Track> & Track & {
    _id: Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Track, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Track>> & import("mongoose").FlatRecord<Track> & {
    _id: Types.ObjectId;
} & {
    __v?: number;
}>;
