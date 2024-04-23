import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies') // entry point
export class MoviesController {

    @Get()
    getAll() {
        return 'This will return all movies';
    }

    // search를 아래의 getone함수에서 id로 인식하게 하지 않기 위해서 위로 올려줌 
    @Get('search')
    search(@Query('year') searchingYear: string){
        return `we are searching for a movie made after: ${searchingYear}`;
    }

    @Get('/:id')
    getOne(@Param('id') movieId: string) {
        return `This will return one movie with the id: ${movieId}`;
    }

    @Post()
    create(@Body() movieData) {
        // console.log(movieData);
        return movieData;
    }

    @Delete('/:id')
    remove(@Param('id') movieId: string) {
        return `this will delete a movie with the id: ${movieId}`;
    }

    // 리소스의 일부분만 업데이트할 경우 patch 전체를 업데이트할 경우 put
    @Patch('/:id')
    patch(@Param('id') movieId: string, @Body() updateData) {
        return {
            updateData: movieId,
            ...updateData
        };
    }

    // url에 /가 필요없을 수 있음
    // 결과값을 보면 This will return one movie with the id: search라고 나오는데 search를 위 함수처럼 id라고 인식 중
    // @Get('search')
    // search(){
    //     return `we are searching for a movie with a title: `;
    // }


}
// spec은 테스트파일인데 지우고 진행 중