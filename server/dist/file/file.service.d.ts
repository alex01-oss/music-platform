export declare enum FileType {
    AUDIO = "audio",
    IMAGE = "image"
}
export declare class FileService {
    createFile(type: FileType, file: Express.Multer.File): string;
    removeFile(fileName: string): void;
}
