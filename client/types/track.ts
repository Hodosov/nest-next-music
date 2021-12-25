export interface IComment {
    _id: string;
    username: string,
    text: string
}

export interface ITrack {
    _id: string;
    name: string;
    artist: string;
    text: string;
    listens: number;
    pictre: string;
    audio: string;
    comment?: IComment[]
}