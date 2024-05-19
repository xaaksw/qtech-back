import { Injectable } from '@nestjs/common';
import { Question } from './schemas/question.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {

  constructor(@InjectModel(Question.name) private questionModel: Model<Question>) {}

  async getQuestions(): Promise<Question[]> {
    return await this.questionModel.find().exec();
  }

  async createQuestion(questionRequestDto: Question): Promise<Question> {
    const createdQuestion = new this.questionModel(questionRequestDto);
    return await createdQuestion.save();
  }
}
