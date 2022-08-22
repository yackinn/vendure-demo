import { DeepPartial }                from '@vendure/common/lib/shared-types';
import { VendureEntity }              from '@vendure/core';
import { Column, Entity, ManyToMany } from 'typeorm';
import { SnippetSet }                 from './snippet-set.entity';

@Entity()
export class Snippet extends VendureEntity {
  constructor(input?: DeepPartial<Snippet>) {
    super(input);
  }

  @Column()
  key: string;

  @Column()
  value: string;

  @ManyToMany(() => SnippetSet, snippetSet => snippetSet.snippets)
  snippetSets: SnippetSet[];
}
