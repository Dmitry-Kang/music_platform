import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import { Track, TrackDocument } from "./schemas/track.schema";
import { Comment, CommentDocument } from "./schemas/comment.schema";
import { Model } from "mongoose";
import { CreateTrackDto } from "./dto/create-track.dto";

@Injectable({

    
})

export class TrackService {

    constructor(@InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
                @InjectModel(Track.name) private trackModel: Model<TrackDocument>) {}

    async create(dto: CreateTrackDto): Promise<Track> {
        const track = await this.trackModel.create({...dto, listens: 0,})
        return track;
    }

    async getAll() {

    }

    async getOne() {

    }

    async deleteOne() {
        
    }
}