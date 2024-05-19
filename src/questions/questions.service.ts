import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Question } from "../schemas/question.schema";
import { Model } from "mongoose";

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Question.name) private questionModel: Model<Question>,
  ) {}
  async create(createQuestionDto: CreateQuestionDto) {
    const createdQuestion = new this.questionModel(createQuestionDto);
    return await createdQuestion.save();
  }

  async findAll() {
    return await this.questionModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} question`;
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
