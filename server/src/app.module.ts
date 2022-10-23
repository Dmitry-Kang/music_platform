import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://root:1q2w3e4r@cluster0.4jzy1nb.mongodb.net/?retryWrites=true&w=majority'),
        TrackModule
    ]
})

export class AppModule {}