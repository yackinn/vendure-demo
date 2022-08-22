import { ParseIntPipe }              from '@nestjs/common';
import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { InjectRepository }          from '@nestjs/typeorm';
import { UserInputError }            from 'apollo-server-express';
import { Repository }                from 'typeorm';
import { Language }                  from '../../models/language.entity';

@Resolver()
export class SnippetResolver {

  constructor(
    @InjectRepository(Language) private readonly languageRepository: Repository<Language>
  ) {}

  @Query(() => Language, { name: 'languages' })
  async findLanguage(
    @Args('id', { type: () => ID }, ParseIntPipe) id: number,
  ): Promise<Language> {
    const entity = await this.languageRepository.findOne(id);
    if (!entity) {
      throw new UserInputError(`Coffee #${id} not found.`);
    }

    return entity;
  }
}
