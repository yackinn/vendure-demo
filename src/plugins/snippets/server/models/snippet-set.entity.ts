import { DeepPartial }        from '@vendure/common/lib/shared-types';
import { VendureEntity }      from '@vendure/core';
import { Entity, ManyToMany } from 'typeorm';
import { Snippet }            from './snippet.entity';

@Entity()
export class SnippetSet extends VendureEntity {
  constructor(input?: DeepPartial<SnippetSet>) {
    super(input);
  }

  // @ManyToMany(() => Language, language => language.snippetSet)
  // language: Language;

  @ManyToMany(() => Snippet, snippet => snippet.snippetSets)
  snippets: Snippet[];
}
