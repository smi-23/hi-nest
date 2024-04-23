import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies') // entry point
export class MoviesController {

    @Get()
    getAll() {
        return 'This will return all movies';
    }

    @Get('/:id')
    getOne(@Param('id') movieId: string) {
        return `This will return one movie with the id: ${movieId}`;
    }

    @Post()
    create() {
        return 'This will create a movie';
    }

    @Delete('/:id')
    remove(@Param('id') movieId: string) {
        return `this will delete a movie with the id: ${movieId}`;
    }

    // 리소스의 일부분만 업데이트할 경우 patch 전체를 업데이트할 경우 put
    @Patch('/:id')
    patch(@Param('id') movieId: string){
        return `This will patch a movie with the id: ${movieId}`;
    }

}
// spec은 테스트파일인데 지우고 진행 중