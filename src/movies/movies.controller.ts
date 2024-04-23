import { Controller, Get, Param } from '@nestjs/common';

@Controller('movies') // entry point
export class MoviesController {

    @Get()
    getAll() {
        return 'This will return all movies';
    }

    @Get('/:id')
    getOne(@Param('id') movieId: string){
        return `This will return one movie with the id: ${movieId}`;
    } 

}
// spec은 테스트파일인데 지우고 진행 중