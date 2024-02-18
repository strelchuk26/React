export interface ICategoryEdit {
    name: string;
    image: File|undefined;
    description: string;
}

export interface IUploadedFile {
    originFileObj: File
}