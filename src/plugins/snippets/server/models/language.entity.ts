import { Field, ObjectType } from '@nestjs/graphql';
import { DeepPartial }       from '@vendure/common/lib/shared-types';
import { VendureEntity }     from '@vendure/core';
import { Column, Entity }    from 'typeorm';

@ObjectType()
@Entity()
export class Language extends VendureEntity {
  constructor(input?: DeepPartial<Language>) {
    super(input);
  }

  // @Field(type => LanguageCode)
  // @Column({
  //   type: 'enum',
  //   enum: LanguageCode
  // })
  @Field()
  @Column()
  locale: string;

  // @ManyToMany(() => SnippetSet, snippetSet => snippetSet.language)
  @Field()
  @Column()
  snippetSet: string;

}
