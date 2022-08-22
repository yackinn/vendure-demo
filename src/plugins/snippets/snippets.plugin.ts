import { PluginCommonModule, VendurePlugin } from '@vendure/core';
import { DocumentNode }                      from 'graphql';
import gql                                   from 'graphql-tag';
import { join }                              from 'path';
import { generateSchema, getGqlSchema }      from './gql-schema-generator';
import { Language }                          from './server/models/language.entity';
import { SnippetSet }                        from './server/models/snippet-set.entity';
import { Snippet }                           from './server/models/snippet.entity';
import { SnippetResolver }                   from './server/webservice/resolvers/snippet.resolver';
import { snippetUiExtension }                from './ui/ui-extensions';

generateSchema([
    SnippetResolver,
    Language
  ],
  { orphanedTypes: [Language] }
);

const customSchema: DocumentNode | (() => DocumentNode | undefined) = gql`
    ${getGqlSchema(join(__dirname, 'server/webservice/gql/schema.graphql'))}
`;

@VendurePlugin({
  imports: [
    PluginCommonModule,
  ],
  controllers: [],
  entities: [Snippet, Language, SnippetSet],
  adminApiExtensions: {
    schema: customSchema,
    resolvers: []
  },
  shopApiExtensions: {
    schema: customSchema,
    resolvers: []
  },
  configuration: config => {
    config.customFields.Channel.push({
      name: 'availableLanguages',
      type: 'relation',
      entity: Language,
      list: true,
      nullable: true,
      graphQLType: 'Language'
    });
    return config;
  },
})
export class SnippetsPlugin {
  static uiExtensions = snippetUiExtension;
}
