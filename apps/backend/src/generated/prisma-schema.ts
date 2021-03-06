// Code generated by Prisma (prisma@1.34.2). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateWord {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createWord(data: WordCreateInput!): Word!
  updateWord(data: WordUpdateInput!, where: WordWhereUniqueInput!): Word
  updateManyWords(data: WordUpdateManyMutationInput!, where: WordWhereInput): BatchPayload!
  upsertWord(where: WordWhereUniqueInput!, create: WordCreateInput!, update: WordUpdateInput!): Word!
  deleteWord(where: WordWhereUniqueInput!): Word
  deleteManyWords(where: WordWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  word(where: WordWhereUniqueInput!): Word
  words(where: WordWhereInput, orderBy: WordOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Word]!
  wordsConnection(where: WordWhereInput, orderBy: WordOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WordConnection!
  node(id: ID!): Node
}

type Subscription {
  word(where: WordSubscriptionWhereInput): WordSubscriptionPayload
}

type Word {
  id: ID!
  translation: String!
  writing: String!
  synonims(where: WordWhereInput, orderBy: WordOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Word!]
}

type WordConnection {
  pageInfo: PageInfo!
  edges: [WordEdge]!
  aggregate: AggregateWord!
}

input WordCreateInput {
  id: ID
  translation: String!
  writing: String!
  synonims: WordCreateManyInput
}

input WordCreateManyInput {
  create: [WordCreateInput!]
  connect: [WordWhereUniqueInput!]
}

type WordEdge {
  node: Word!
  cursor: String!
}

enum WordOrderByInput {
  id_ASC
  id_DESC
  translation_ASC
  translation_DESC
  writing_ASC
  writing_DESC
}

type WordPreviousValues {
  id: ID!
  translation: String!
  writing: String!
}

input WordScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  translation: String
  translation_not: String
  translation_in: [String!]
  translation_not_in: [String!]
  translation_lt: String
  translation_lte: String
  translation_gt: String
  translation_gte: String
  translation_contains: String
  translation_not_contains: String
  translation_starts_with: String
  translation_not_starts_with: String
  translation_ends_with: String
  translation_not_ends_with: String
  writing: String
  writing_not: String
  writing_in: [String!]
  writing_not_in: [String!]
  writing_lt: String
  writing_lte: String
  writing_gt: String
  writing_gte: String
  writing_contains: String
  writing_not_contains: String
  writing_starts_with: String
  writing_not_starts_with: String
  writing_ends_with: String
  writing_not_ends_with: String
  AND: [WordScalarWhereInput!]
  OR: [WordScalarWhereInput!]
  NOT: [WordScalarWhereInput!]
}

type WordSubscriptionPayload {
  mutation: MutationType!
  node: Word
  updatedFields: [String!]
  previousValues: WordPreviousValues
}

input WordSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: WordWhereInput
  AND: [WordSubscriptionWhereInput!]
  OR: [WordSubscriptionWhereInput!]
  NOT: [WordSubscriptionWhereInput!]
}

input WordUpdateDataInput {
  translation: String
  writing: String
  synonims: WordUpdateManyInput
}

input WordUpdateInput {
  translation: String
  writing: String
  synonims: WordUpdateManyInput
}

input WordUpdateManyDataInput {
  translation: String
  writing: String
}

input WordUpdateManyInput {
  create: [WordCreateInput!]
  update: [WordUpdateWithWhereUniqueNestedInput!]
  upsert: [WordUpsertWithWhereUniqueNestedInput!]
  delete: [WordWhereUniqueInput!]
  connect: [WordWhereUniqueInput!]
  set: [WordWhereUniqueInput!]
  disconnect: [WordWhereUniqueInput!]
  deleteMany: [WordScalarWhereInput!]
  updateMany: [WordUpdateManyWithWhereNestedInput!]
}

input WordUpdateManyMutationInput {
  translation: String
  writing: String
}

input WordUpdateManyWithWhereNestedInput {
  where: WordScalarWhereInput!
  data: WordUpdateManyDataInput!
}

input WordUpdateWithWhereUniqueNestedInput {
  where: WordWhereUniqueInput!
  data: WordUpdateDataInput!
}

input WordUpsertWithWhereUniqueNestedInput {
  where: WordWhereUniqueInput!
  update: WordUpdateDataInput!
  create: WordCreateInput!
}

input WordWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  translation: String
  translation_not: String
  translation_in: [String!]
  translation_not_in: [String!]
  translation_lt: String
  translation_lte: String
  translation_gt: String
  translation_gte: String
  translation_contains: String
  translation_not_contains: String
  translation_starts_with: String
  translation_not_starts_with: String
  translation_ends_with: String
  translation_not_ends_with: String
  writing: String
  writing_not: String
  writing_in: [String!]
  writing_not_in: [String!]
  writing_lt: String
  writing_lte: String
  writing_gt: String
  writing_gte: String
  writing_contains: String
  writing_not_contains: String
  writing_starts_with: String
  writing_not_starts_with: String
  writing_ends_with: String
  writing_not_ends_with: String
  synonims_every: WordWhereInput
  synonims_some: WordWhereInput
  synonims_none: WordWhereInput
  AND: [WordWhereInput!]
  OR: [WordWhereInput!]
  NOT: [WordWhereInput!]
}

input WordWhereUniqueInput {
  id: ID
}
`