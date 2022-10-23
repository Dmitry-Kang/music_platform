import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TrackModule } from "./track/track.module";
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [
        TrackModule,
        MongooseModule.forRoot('mongodb+srv://root:1q2w3e4r@cluster0.4jzy1nb.mongodb.net/?retryWrites=true&w=majority')
    ]
})

export class AppModule {}