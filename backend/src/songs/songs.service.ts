import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Song, SongDocument } from './schemas/song.schema';
import { CreateSongDto } from './dto/create-song.dto';

@Injectable()
export class SongsService {
  constructor(@InjectModel(Song.name) private songModel: Model<SongDocument>) {}

  create(createSongDto: CreateSongDto) {
    return this.songModel.create(createSongDto);
  }

  findAll() {
    return this.songModel.find().sort({ createdAt: -1 }).exec();
  }
}