import { Types, HydratedDocument } from 'mongoose';
export type CommentDocument = HydratedDocument<Comment>;
export declare class Comment {
    username: string;
    text: string;
    track: Types.ObjectId;
}
export declare const CommentSchema: import("mongoose").Schema<Comment, import("mongoose").Model<Comment, any, any, any, import("mongoose").Document<unknown, any, Comment> & Comment & {
    _id: Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Comment, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Comment>> & import("mongoose").FlatRecord<Comment> & {
    _id: Types.ObjectId;
} & {
    __v?: number;
}>;
