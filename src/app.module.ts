import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TrackModule } from "./track/track.madule";


@Module({
    imports: [
        TrackModule,
        MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.9i2bf.mongodb.net/next-music?retryWrites=true&w=majority')]
})
export class AppModule { }