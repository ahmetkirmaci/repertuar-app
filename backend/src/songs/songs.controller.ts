import { Body, Controller, Get, Post } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song.dto';

@Controller('songs')
export class SongsController {
    constructor(private readonly songsService: SongsService) { }

    @Post()
    create(@Body() createSongDto: CreateSongDto) {
        return this.songsService.create(createSongDto);
    }

    @Get()
    findAll() {
        return this.songsService.findAll();
    }
}