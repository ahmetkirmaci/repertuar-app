import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';
import { Song, SongSchema } from './schemas/song.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Song.name, schema: SongSchema }
    ]),
  ],
  providers: [SongsService],
  controllers: [SongsController],
})
export class SongsModule { }
