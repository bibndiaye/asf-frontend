import { Tracabilite } from "./tracabilite";

export interface CustomResponse {
    timeStamp: Date;
    statusCode: number;
    status: string;
    reason: string;
    message: string;
    developerMessage: string;
    data: { tracabilites?: Tracabilite[], tracabilite?: Tracabilite };
}