import { NestFactory }                                      from '@nestjs/core';
import { GraphQLSchemaBuilderModule, GraphQLSchemaFactory } from '@nestjs/graphql';
import { BuildSchemaOptions }                               from '@nestjs/graphql/dist/interfaces';
import { readFileSync, writeFileSync }                      from 'fs';
import { printSchema, }                                     from 'graphql/utilities';
import { join }                                             from 'path';

export async function generateSchema(
  resolvers: Function[],
  options: BuildSchemaOptions = {},
  scalarClasses: Function[]   = [],
) {
  console.log('run generator');
  const app = await NestFactory.create(GraphQLSchemaBuilderModule);
  await app.init();

  const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
  const schema           = await gqlSchemaFactory.create(
    resolvers,
    scalarClasses,
    options
  );

  const stringifiedSchema = printSchema(schema).replace('type Query', 'extend type Query');
  console.log(stringifiedSchema);

  writeFileSync(
    join(__dirname, 'server/webservice/gql/schema.graphql'),
    stringifiedSchema
  );
  return stringifiedSchema;
}

export function getGqlSchema(path) {
  return readFileSync(path).toString();
}
