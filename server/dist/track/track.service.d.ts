import { Track } from "./schemas/track.schema";
import { Model, Types } from "mongoose";
import { Comment } from "./schemas/comment.schema";
import { CreateTrackDto } from "./dto/create-track.dto";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { FileService } from "src/file/file.service";
export declare class TrackService {
    private trackModel;
    private commentModel;
    private fileService;
    constructor(trackModel: Model<Track>, commentModel: Model<Comment>, fileService: FileService);
    create(dto: CreateTrackDto, picture: Express.Multer.File, audio: Express.Multer.File): Promise<Track>;
    getAll(count?: number, offset?: number): Promise<Track[]>;
    getOne(id: Types.ObjectId): Promise<Track>;
    delete(id: Types.ObjectId): Promise<Types.ObjectId>;
    addComment(dto: CreateCommentDto): Promise<Comment>;
    listen(id: Types.ObjectId): Promise<void>;
    search(query: string): Promise<Track[]>;
}
