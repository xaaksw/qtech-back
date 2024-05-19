import { Controller } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}

  // @Get()
  // @HttpCode(200)
  // async getQuestions(): Promise<Question[]> {
  //   return await this.appService.getQuestions();
  // }
  //
  // @Post()
  // @HttpCode(201)
  // async createQuestion(
  //   @Body() createQuestionRequestDto: CreateQuestionRequestDto,
  // ): Promise<Question> {
  //   return await this.appService.createQuestion(createQuestionRequestDto);
  // }
}
