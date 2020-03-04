export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Person = {
  __typename?: "Person";
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  actor?: Maybe<Scalars["String"]>;
  classicLine?: Maybe<Scalars["String"]>;
  related?: Maybe<Array<Maybe<Relation>>>;
};

export type Query = {
  __typename?: "Query";
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  director?: Maybe<Scalars["String"]>;
  rate?: Maybe<Scalars["Float"]>;
  cast?: Maybe<Scalars["String"]>;
  allPeople?: Maybe<Array<Maybe<Person>>>;
  person?: Maybe<Person>;
};

export type QueryPersonArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type Relation = {
  __typename?: "Relation";
  id?: Maybe<Scalars["ID"]>;
  relation?: Maybe<Scalars["String"]>;
  person?: Maybe<Person>;
};
