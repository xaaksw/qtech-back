import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Question, QuestionSchema } from './schemas/question.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://xaaksww:a94048875@xs.8ifpyhf.mongodb.net/qtech',
    ),
    MongooseModule.forFeature([
      { name: Question.name, schema: QuestionSchema },
    ]),
    QuestionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
