import { TrackService } from "./track.service";
import { CreateTrackDto } from "./dto/create-track.dto";
import { Types } from "mongoose";
import { CreateCommentDto } from "./dto/create-comment.dto";
export declare class TrackController {
    private trackService;
    constructor(trackService: TrackService);
    create(files: {
        picture?: Express.Multer.File[];
        audio?: Express.Multer.File[];
    }, dto: CreateTrackDto): Promise<import("./schemas/track.schema").Track>;
    getAll(count: number, offset: number): Promise<import("./schemas/track.schema").Track[]>;
    search(query: string): Promise<import("./schemas/track.schema").Track[]>;
    getOne(id: Types.ObjectId): Promise<import("./schemas/track.schema").Track>;
    delete(id: Types.ObjectId): Promise<Types.ObjectId>;
    addComment(dto: CreateCommentDto): Promise<import("./schemas/comment.schema").Comment>;
    listen(id: Types.ObjectId): Promise<void>;
}
