import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Song, SongDocument } from './schemas/song.schema';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';

@Injectable()
export class SongsService {
  constructor(@InjectModel(Song.name) private songModel: Model<SongDocument>) { }

  create(createSongDto: CreateSongDto) {
    return this.songModel.create(createSongDto);
  }

  findAll() {
    return this.songModel.find().sort({ createdAt: -1 }).exec();
  }

  async update(id: string, updateSongDto: UpdateSongDto) {
    const updated = await this.songModel
      .findByIdAndUpdate(id, updateSongDto, { new: true })
      .exec();

    if (!updated) {
      throw new NotFoundException('Song not found');
    }

    return updated;
  }

  async remove(id: string) {
    const deleted = await this.songModel.findByIdAndDelete(id).exec();

    if (!deleted) {
      throw new NotFoundException('Song not found');
    }

    return { message: 'Song deleted successfully' };
  }
}