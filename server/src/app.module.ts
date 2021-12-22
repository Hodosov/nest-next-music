import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from "path";
import { FileModule } from "./file/file.module";
import { TrackModule } from "./track/track.madule";


@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.9i2bf.mongodb.net/next-music?retryWrites=true&w=majority'),
        ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static'), }),
        TrackModule,
        FileModule,
    ]
})
export class AppModule { }