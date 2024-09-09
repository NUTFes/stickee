import { gql } from "@urql/core";
import { IntrospectionQuery } from "graphql";
import * as Urql from "urql";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  bigint: { input: any; output: any };
  bytea: { input: any; output: any };
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type BigintComparisonExp = {
  _eq?: InputMaybe<Scalars["bigint"]["input"]>;
  _gt?: InputMaybe<Scalars["bigint"]["input"]>;
  _gte?: InputMaybe<Scalars["bigint"]["input"]>;
  _in?: InputMaybe<Array<Scalars["bigint"]["input"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["bigint"]["input"]>;
  _lte?: InputMaybe<Scalars["bigint"]["input"]>;
  _neq?: InputMaybe<Scalars["bigint"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["bigint"]["input"]>>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
};

/** columns and relationships of "bureau" */
export type Bureau = {
  __typename?: "Bureau";
  groupId?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  /** An object relationship */
  keycloak_group?: Maybe<KeycloakGroup>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** aggregated selection of "bureau" */
export type BureauAggregate = {
  __typename?: "BureauAggregate";
  aggregate?: Maybe<BureauAggregateFields>;
  nodes: Array<Bureau>;
};

export type BureauAggregateBoolExp = {
  count?: InputMaybe<BureauAggregateBoolExpCount>;
};

/** aggregate fields of "bureau" */
export type BureauAggregateFields = {
  __typename?: "BureauAggregateFields";
  avg?: Maybe<BureauAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<BureauMaxFields>;
  min?: Maybe<BureauMinFields>;
  stddev?: Maybe<BureauStddevFields>;
  stddevPop?: Maybe<BureauStddevPopFields>;
  stddevSamp?: Maybe<BureauStddevSampFields>;
  sum?: Maybe<BureauSumFields>;
  varPop?: Maybe<BureauVarPopFields>;
  varSamp?: Maybe<BureauVarSampFields>;
  variance?: Maybe<BureauVarianceFields>;
};

/** aggregate fields of "bureau" */
export type BureauAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<BureauSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "bureau" */
export type BureauAggregateOrderBy = {
  avg?: InputMaybe<BureauAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<BureauMaxOrderBy>;
  min?: InputMaybe<BureauMinOrderBy>;
  stddev?: InputMaybe<BureauStddevOrderBy>;
  stddevPop?: InputMaybe<BureauStddevPopOrderBy>;
  stddevSamp?: InputMaybe<BureauStddevSampOrderBy>;
  sum?: InputMaybe<BureauSumOrderBy>;
  varPop?: InputMaybe<BureauVarPopOrderBy>;
  varSamp?: InputMaybe<BureauVarSampOrderBy>;
  variance?: InputMaybe<BureauVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "bureau" */
export type BureauArrRelInsertInput = {
  data: Array<BureauInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<BureauOnConflict>;
};

/** aggregate avg on columns */
export type BureauAvgFields = {
  __typename?: "BureauAvgFields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "bureau" */
export type BureauAvgOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "bureau". All fields are combined with a logical 'AND'. */
export type BureauBoolExp = {
  _and?: InputMaybe<Array<BureauBoolExp>>;
  _not?: InputMaybe<BureauBoolExp>;
  _or?: InputMaybe<Array<BureauBoolExp>>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  keycloak_group?: InputMaybe<KeycloakGroupBoolExp>;
  name?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "bureau" */
export enum BureauConstraint {
  /** unique or primary key constraint on columns "id" */
  BureauPkey = "bureau_pkey",
}

/** input type for incrementing numeric columns in table "bureau" */
export type BureauIncInput = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "bureau" */
export type BureauInsertInput = {
  groupId?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  keycloak_group?: InputMaybe<KeycloakGroupObjRelInsertInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type BureauMaxFields = {
  __typename?: "BureauMaxFields";
  groupId?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "bureau" */
export type BureauMaxOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type BureauMinFields = {
  __typename?: "BureauMinFields";
  groupId?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "bureau" */
export type BureauMinOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "bureau" */
export type BureauMutationResponse = {
  __typename?: "BureauMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Bureau>;
};

/** on_conflict condition type for table "bureau" */
export type BureauOnConflict = {
  constraint: BureauConstraint;
  updateColumns?: Array<BureauUpdateColumn>;
  where?: InputMaybe<BureauBoolExp>;
};

/** Ordering options when selecting data from "bureau". */
export type BureauOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  keycloak_group?: InputMaybe<KeycloakGroupOrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: bureau */
export type BureauPkColumnsInput = {
  id: Scalars["Int"]["input"];
};

/** select columns of table "bureau" */
export enum BureauSelectColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** input type for updating data in table "bureau" */
export type BureauSetInput = {
  groupId?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type BureauStddevFields = {
  __typename?: "BureauStddevFields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "bureau" */
export type BureauStddevOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type BureauStddevPopFields = {
  __typename?: "BureauStddevPopFields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevPop() on columns of table "bureau" */
export type BureauStddevPopOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type BureauStddevSampFields = {
  __typename?: "BureauStddevSampFields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevSamp() on columns of table "bureau" */
export type BureauStddevSampOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "bureau" */
export type BureauStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: BureauStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type BureauStreamCursorValueInput = {
  groupId?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type BureauSumFields = {
  __typename?: "BureauSumFields";
  id?: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "bureau" */
export type BureauSumOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** update columns of table "bureau" */
export enum BureauUpdateColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

export type BureauUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<BureauIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<BureauSetInput>;
  /** filter the rows which have to be updated */
  where: BureauBoolExp;
};

/** aggregate varPop on columns */
export type BureauVarPopFields = {
  __typename?: "BureauVarPopFields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varPop() on columns of table "bureau" */
export type BureauVarPopOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type BureauVarSampFields = {
  __typename?: "BureauVarSampFields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varSamp() on columns of table "bureau" */
export type BureauVarSampOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type BureauVarianceFields = {
  __typename?: "BureauVarianceFields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "bureau" */
export type BureauVarianceOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type ByteaComparisonExp = {
  _eq?: InputMaybe<Scalars["bytea"]["input"]>;
  _gt?: InputMaybe<Scalars["bytea"]["input"]>;
  _gte?: InputMaybe<Scalars["bytea"]["input"]>;
  _in?: InputMaybe<Array<Scalars["bytea"]["input"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["bytea"]["input"]>;
  _lte?: InputMaybe<Scalars["bytea"]["input"]>;
  _neq?: InputMaybe<Scalars["bytea"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["bytea"]["input"]>>;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

/** columns and relationships of "department" */
export type Department = {
  __typename?: "Department";
  groupId?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  /** An object relationship */
  keycloak_group?: Maybe<KeycloakGroup>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** aggregated selection of "department" */
export type DepartmentAggregate = {
  __typename?: "DepartmentAggregate";
  aggregate?: Maybe<DepartmentAggregateFields>;
  nodes: Array<Department>;
};

export type DepartmentAggregateBoolExp = {
  count?: InputMaybe<DepartmentAggregateBoolExpCount>;
};

/** aggregate fields of "department" */
export type DepartmentAggregateFields = {
  __typename?: "DepartmentAggregateFields";
  avg?: Maybe<DepartmentAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<DepartmentMaxFields>;
  min?: Maybe<DepartmentMinFields>;
  stddev?: Maybe<DepartmentStddevFields>;
  stddevPop?: Maybe<DepartmentStddevPopFields>;
  stddevSamp?: Maybe<DepartmentStddevSampFields>;
  sum?: Maybe<DepartmentSumFields>;
  varPop?: Maybe<DepartmentVarPopFields>;
  varSamp?: Maybe<DepartmentVarSampFields>;
  variance?: Maybe<DepartmentVarianceFields>;
};

/** aggregate fields of "department" */
export type DepartmentAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<DepartmentSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "department" */
export type DepartmentAggregateOrderBy = {
  avg?: InputMaybe<DepartmentAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<DepartmentMaxOrderBy>;
  min?: InputMaybe<DepartmentMinOrderBy>;
  stddev?: InputMaybe<DepartmentStddevOrderBy>;
  stddevPop?: InputMaybe<DepartmentStddevPopOrderBy>;
  stddevSamp?: InputMaybe<DepartmentStddevSampOrderBy>;
  sum?: InputMaybe<DepartmentSumOrderBy>;
  varPop?: InputMaybe<DepartmentVarPopOrderBy>;
  varSamp?: InputMaybe<DepartmentVarSampOrderBy>;
  variance?: InputMaybe<DepartmentVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "department" */
export type DepartmentArrRelInsertInput = {
  data: Array<DepartmentInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<DepartmentOnConflict>;
};

/** aggregate avg on columns */
export type DepartmentAvgFields = {
  __typename?: "DepartmentAvgFields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "department" */
export type DepartmentAvgOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "department". All fields are combined with a logical 'AND'. */
export type DepartmentBoolExp = {
  _and?: InputMaybe<Array<DepartmentBoolExp>>;
  _not?: InputMaybe<DepartmentBoolExp>;
  _or?: InputMaybe<Array<DepartmentBoolExp>>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  keycloak_group?: InputMaybe<KeycloakGroupBoolExp>;
  name?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "department" */
export enum DepartmentConstraint {
  /** unique or primary key constraint on columns "id" */
  DepartmentPkey = "department_pkey",
}

/** input type for incrementing numeric columns in table "department" */
export type DepartmentIncInput = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "department" */
export type DepartmentInsertInput = {
  groupId?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  keycloak_group?: InputMaybe<KeycloakGroupObjRelInsertInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type DepartmentMaxFields = {
  __typename?: "DepartmentMaxFields";
  groupId?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "department" */
export type DepartmentMaxOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type DepartmentMinFields = {
  __typename?: "DepartmentMinFields";
  groupId?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "department" */
export type DepartmentMinOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "department" */
export type DepartmentMutationResponse = {
  __typename?: "DepartmentMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Department>;
};

/** on_conflict condition type for table "department" */
export type DepartmentOnConflict = {
  constraint: DepartmentConstraint;
  updateColumns?: Array<DepartmentUpdateColumn>;
  where?: InputMaybe<DepartmentBoolExp>;
};

/** Ordering options when selecting data from "department". */
export type DepartmentOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  keycloak_group?: InputMaybe<KeycloakGroupOrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: department */
export type DepartmentPkColumnsInput = {
  id: Scalars["Int"]["input"];
};

/** select columns of table "department" */
export enum DepartmentSelectColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** input type for updating data in table "department" */
export type DepartmentSetInput = {
  groupId?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type DepartmentStddevFields = {
  __typename?: "DepartmentStddevFields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "department" */
export type DepartmentStddevOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type DepartmentStddevPopFields = {
  __typename?: "DepartmentStddevPopFields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevPop() on columns of table "department" */
export type DepartmentStddevPopOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type DepartmentStddevSampFields = {
  __typename?: "DepartmentStddevSampFields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevSamp() on columns of table "department" */
export type DepartmentStddevSampOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "department" */
export type DepartmentStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: DepartmentStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type DepartmentStreamCursorValueInput = {
  groupId?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type DepartmentSumFields = {
  __typename?: "DepartmentSumFields";
  id?: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "department" */
export type DepartmentSumOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** update columns of table "department" */
export enum DepartmentUpdateColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

export type DepartmentUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<DepartmentIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DepartmentSetInput>;
  /** filter the rows which have to be updated */
  where: DepartmentBoolExp;
};

/** aggregate varPop on columns */
export type DepartmentVarPopFields = {
  __typename?: "DepartmentVarPopFields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varPop() on columns of table "department" */
export type DepartmentVarPopOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type DepartmentVarSampFields = {
  __typename?: "DepartmentVarSampFields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varSamp() on columns of table "department" */
export type DepartmentVarSampOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type DepartmentVarianceFields = {
  __typename?: "DepartmentVarianceFields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "department" */
export type DepartmentVarianceOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** columns and relationships of "grade" */
export type Grade = {
  __typename?: "Grade";
  groupId?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  /** An object relationship */
  keycloak_group?: Maybe<KeycloakGroup>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** aggregated selection of "grade" */
export type GradeAggregate = {
  __typename?: "GradeAggregate";
  aggregate?: Maybe<GradeAggregateFields>;
  nodes: Array<Grade>;
};

export type GradeAggregateBoolExp = {
  count?: InputMaybe<GradeAggregateBoolExpCount>;
};

/** aggregate fields of "grade" */
export type GradeAggregateFields = {
  __typename?: "GradeAggregateFields";
  avg?: Maybe<GradeAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<GradeMaxFields>;
  min?: Maybe<GradeMinFields>;
  stddev?: Maybe<GradeStddevFields>;
  stddevPop?: Maybe<GradeStddevPopFields>;
  stddevSamp?: Maybe<GradeStddevSampFields>;
  sum?: Maybe<GradeSumFields>;
  varPop?: Maybe<GradeVarPopFields>;
  varSamp?: Maybe<GradeVarSampFields>;
  variance?: Maybe<GradeVarianceFields>;
};

/** aggregate fields of "grade" */
export type GradeAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<GradeSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "grade" */
export type GradeAggregateOrderBy = {
  avg?: InputMaybe<GradeAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<GradeMaxOrderBy>;
  min?: InputMaybe<GradeMinOrderBy>;
  stddev?: InputMaybe<GradeStddevOrderBy>;
  stddevPop?: InputMaybe<GradeStddevPopOrderBy>;
  stddevSamp?: InputMaybe<GradeStddevSampOrderBy>;
  sum?: InputMaybe<GradeSumOrderBy>;
  varPop?: InputMaybe<GradeVarPopOrderBy>;
  varSamp?: InputMaybe<GradeVarSampOrderBy>;
  variance?: InputMaybe<GradeVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "grade" */
export type GradeArrRelInsertInput = {
  data: Array<GradeInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<GradeOnConflict>;
};

/** aggregate avg on columns */
export type GradeAvgFields = {
  __typename?: "GradeAvgFields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "grade" */
export type GradeAvgOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "grade". All fields are combined with a logical 'AND'. */
export type GradeBoolExp = {
  _and?: InputMaybe<Array<GradeBoolExp>>;
  _not?: InputMaybe<GradeBoolExp>;
  _or?: InputMaybe<Array<GradeBoolExp>>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  keycloak_group?: InputMaybe<KeycloakGroupBoolExp>;
  name?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "grade" */
export enum GradeConstraint {
  /** unique or primary key constraint on columns "id" */
  GradePkey = "grade_pkey",
}

/** input type for incrementing numeric columns in table "grade" */
export type GradeIncInput = {
  id?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "grade" */
export type GradeInsertInput = {
  groupId?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  keycloak_group?: InputMaybe<KeycloakGroupObjRelInsertInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type GradeMaxFields = {
  __typename?: "GradeMaxFields";
  groupId?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "grade" */
export type GradeMaxOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type GradeMinFields = {
  __typename?: "GradeMinFields";
  groupId?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "grade" */
export type GradeMinOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "grade" */
export type GradeMutationResponse = {
  __typename?: "GradeMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Grade>;
};

/** on_conflict condition type for table "grade" */
export type GradeOnConflict = {
  constraint: GradeConstraint;
  updateColumns?: Array<GradeUpdateColumn>;
  where?: InputMaybe<GradeBoolExp>;
};

/** Ordering options when selecting data from "grade". */
export type GradeOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  keycloak_group?: InputMaybe<KeycloakGroupOrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: grade */
export type GradePkColumnsInput = {
  id: Scalars["Int"]["input"];
};

/** select columns of table "grade" */
export enum GradeSelectColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** input type for updating data in table "grade" */
export type GradeSetInput = {
  groupId?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type GradeStddevFields = {
  __typename?: "GradeStddevFields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "grade" */
export type GradeStddevOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type GradeStddevPopFields = {
  __typename?: "GradeStddevPopFields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevPop() on columns of table "grade" */
export type GradeStddevPopOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type GradeStddevSampFields = {
  __typename?: "GradeStddevSampFields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddevSamp() on columns of table "grade" */
export type GradeStddevSampOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "grade" */
export type GradeStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: GradeStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type GradeStreamCursorValueInput = {
  groupId?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type GradeSumFields = {
  __typename?: "GradeSumFields";
  id?: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "grade" */
export type GradeSumOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** update columns of table "grade" */
export enum GradeUpdateColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

export type GradeUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<GradeIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GradeSetInput>;
  /** filter the rows which have to be updated */
  where: GradeBoolExp;
};

/** aggregate varPop on columns */
export type GradeVarPopFields = {
  __typename?: "GradeVarPopFields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varPop() on columns of table "grade" */
export type GradeVarPopOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type GradeVarSampFields = {
  __typename?: "GradeVarSampFields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by varSamp() on columns of table "grade" */
export type GradeVarSampOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type GradeVarianceFields = {
  __typename?: "GradeVarianceFields";
  id?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "grade" */
export type GradeVarianceOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** columns and relationships of "group_attribute" */
export type GroupAttribute = {
  __typename?: "GroupAttribute";
  groupId: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  /** An object relationship */
  keycloak_group: KeycloakGroup;
  name: Scalars["String"]["output"];
  value?: Maybe<Scalars["String"]["output"]>;
};

/** aggregated selection of "group_attribute" */
export type GroupAttributeAggregate = {
  __typename?: "GroupAttributeAggregate";
  aggregate?: Maybe<GroupAttributeAggregateFields>;
  nodes: Array<GroupAttribute>;
};

export type GroupAttributeAggregateBoolExp = {
  count?: InputMaybe<GroupAttributeAggregateBoolExpCount>;
};

/** aggregate fields of "group_attribute" */
export type GroupAttributeAggregateFields = {
  __typename?: "GroupAttributeAggregateFields";
  count: Scalars["Int"]["output"];
  max?: Maybe<GroupAttributeMaxFields>;
  min?: Maybe<GroupAttributeMinFields>;
};

/** aggregate fields of "group_attribute" */
export type GroupAttributeAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<GroupAttributeSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "group_attribute" */
export type GroupAttributeAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<GroupAttributeMaxOrderBy>;
  min?: InputMaybe<GroupAttributeMinOrderBy>;
};

/** input type for inserting array relation for remote table "group_attribute" */
export type GroupAttributeArrRelInsertInput = {
  data: Array<GroupAttributeInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<GroupAttributeOnConflict>;
};

/** Boolean expression to filter rows from the table "group_attribute". All fields are combined with a logical 'AND'. */
export type GroupAttributeBoolExp = {
  _and?: InputMaybe<Array<GroupAttributeBoolExp>>;
  _not?: InputMaybe<GroupAttributeBoolExp>;
  _or?: InputMaybe<Array<GroupAttributeBoolExp>>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  keycloak_group?: InputMaybe<KeycloakGroupBoolExp>;
  name?: InputMaybe<StringComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "group_attribute" */
export enum GroupAttributeConstraint {
  /** unique or primary key constraint on columns "id" */
  ConstraintGroupAttributePk = "constraint_group_attribute_pk",
}

/** input type for inserting data into table "group_attribute" */
export type GroupAttributeInsertInput = {
  groupId?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  keycloak_group?: InputMaybe<KeycloakGroupObjRelInsertInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  value?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type GroupAttributeMaxFields = {
  __typename?: "GroupAttributeMaxFields";
  groupId?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "group_attribute" */
export type GroupAttributeMaxOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type GroupAttributeMinFields = {
  __typename?: "GroupAttributeMinFields";
  groupId?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "group_attribute" */
export type GroupAttributeMinOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "group_attribute" */
export type GroupAttributeMutationResponse = {
  __typename?: "GroupAttributeMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<GroupAttribute>;
};

/** on_conflict condition type for table "group_attribute" */
export type GroupAttributeOnConflict = {
  constraint: GroupAttributeConstraint;
  updateColumns?: Array<GroupAttributeUpdateColumn>;
  where?: InputMaybe<GroupAttributeBoolExp>;
};

/** Ordering options when selecting data from "group_attribute". */
export type GroupAttributeOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  keycloak_group?: InputMaybe<KeycloakGroupOrderBy>;
  name?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: group_attribute */
export type GroupAttributePkColumnsInput = {
  id: Scalars["String"]["input"];
};

/** select columns of table "group_attribute" */
export enum GroupAttributeSelectColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Value = "value",
}

/** input type for updating data in table "group_attribute" */
export type GroupAttributeSetInput = {
  groupId?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  value?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "group_attribute" */
export type GroupAttributeStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: GroupAttributeStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type GroupAttributeStreamCursorValueInput = {
  groupId?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  value?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "group_attribute" */
export enum GroupAttributeUpdateColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Value = "value",
}

export type GroupAttributeUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GroupAttributeSetInput>;
  /** filter the rows which have to be updated */
  where: GroupAttributeBoolExp;
};

/** columns and relationships of "group_role_mapping" */
export type GroupRoleMapping = {
  __typename?: "GroupRoleMapping";
  groupId: Scalars["String"]["output"];
  /** An object relationship */
  keycloak_group: KeycloakGroup;
  roleId: Scalars["String"]["output"];
};

/** aggregated selection of "group_role_mapping" */
export type GroupRoleMappingAggregate = {
  __typename?: "GroupRoleMappingAggregate";
  aggregate?: Maybe<GroupRoleMappingAggregateFields>;
  nodes: Array<GroupRoleMapping>;
};

export type GroupRoleMappingAggregateBoolExp = {
  count?: InputMaybe<GroupRoleMappingAggregateBoolExpCount>;
};

/** aggregate fields of "group_role_mapping" */
export type GroupRoleMappingAggregateFields = {
  __typename?: "GroupRoleMappingAggregateFields";
  count: Scalars["Int"]["output"];
  max?: Maybe<GroupRoleMappingMaxFields>;
  min?: Maybe<GroupRoleMappingMinFields>;
};

/** aggregate fields of "group_role_mapping" */
export type GroupRoleMappingAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<GroupRoleMappingSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "group_role_mapping" */
export type GroupRoleMappingAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<GroupRoleMappingMaxOrderBy>;
  min?: InputMaybe<GroupRoleMappingMinOrderBy>;
};

/** input type for inserting array relation for remote table "group_role_mapping" */
export type GroupRoleMappingArrRelInsertInput = {
  data: Array<GroupRoleMappingInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<GroupRoleMappingOnConflict>;
};

/** Boolean expression to filter rows from the table "group_role_mapping". All fields are combined with a logical 'AND'. */
export type GroupRoleMappingBoolExp = {
  _and?: InputMaybe<Array<GroupRoleMappingBoolExp>>;
  _not?: InputMaybe<GroupRoleMappingBoolExp>;
  _or?: InputMaybe<Array<GroupRoleMappingBoolExp>>;
  groupId?: InputMaybe<StringComparisonExp>;
  keycloak_group?: InputMaybe<KeycloakGroupBoolExp>;
  roleId?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "group_role_mapping" */
export enum GroupRoleMappingConstraint {
  /** unique or primary key constraint on columns "role_id", "group_id" */
  ConstraintGroupRole = "constraint_group_role",
}

/** input type for inserting data into table "group_role_mapping" */
export type GroupRoleMappingInsertInput = {
  groupId?: InputMaybe<Scalars["String"]["input"]>;
  keycloak_group?: InputMaybe<KeycloakGroupObjRelInsertInput>;
  roleId?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type GroupRoleMappingMaxFields = {
  __typename?: "GroupRoleMappingMaxFields";
  groupId?: Maybe<Scalars["String"]["output"]>;
  roleId?: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "group_role_mapping" */
export type GroupRoleMappingMaxOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  roleId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type GroupRoleMappingMinFields = {
  __typename?: "GroupRoleMappingMinFields";
  groupId?: Maybe<Scalars["String"]["output"]>;
  roleId?: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "group_role_mapping" */
export type GroupRoleMappingMinOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  roleId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "group_role_mapping" */
export type GroupRoleMappingMutationResponse = {
  __typename?: "GroupRoleMappingMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<GroupRoleMapping>;
};

/** on_conflict condition type for table "group_role_mapping" */
export type GroupRoleMappingOnConflict = {
  constraint: GroupRoleMappingConstraint;
  updateColumns?: Array<GroupRoleMappingUpdateColumn>;
  where?: InputMaybe<GroupRoleMappingBoolExp>;
};

/** Ordering options when selecting data from "group_role_mapping". */
export type GroupRoleMappingOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  keycloak_group?: InputMaybe<KeycloakGroupOrderBy>;
  roleId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: group_role_mapping */
export type GroupRoleMappingPkColumnsInput = {
  groupId: Scalars["String"]["input"];
  roleId: Scalars["String"]["input"];
};

/** select columns of table "group_role_mapping" */
export enum GroupRoleMappingSelectColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  RoleId = "roleId",
}

/** input type for updating data in table "group_role_mapping" */
export type GroupRoleMappingSetInput = {
  groupId?: InputMaybe<Scalars["String"]["input"]>;
  roleId?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "group_role_mapping" */
export type GroupRoleMappingStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: GroupRoleMappingStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type GroupRoleMappingStreamCursorValueInput = {
  groupId?: InputMaybe<Scalars["String"]["input"]>;
  roleId?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "group_role_mapping" */
export enum GroupRoleMappingUpdateColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  RoleId = "roleId",
}

export type GroupRoleMappingUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GroupRoleMappingSetInput>;
  /** filter the rows which have to be updated */
  where: GroupRoleMappingBoolExp;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars["Int"]["input"]>;
  _gt?: InputMaybe<Scalars["Int"]["input"]>;
  _gte?: InputMaybe<Scalars["Int"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Int"]["input"]>;
  _lte?: InputMaybe<Scalars["Int"]["input"]>;
  _neq?: InputMaybe<Scalars["Int"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

/** columns and relationships of "keycloak_group" */
export type KeycloakGroup = {
  __typename?: "KeycloakGroup";
  /** An array relationship */
  bureaus: Array<Bureau>;
  /** An aggregate relationship */
  bureausAggregate: BureauAggregate;
  /** An array relationship */
  departments: Array<Department>;
  /** An aggregate relationship */
  departmentsAggregate: DepartmentAggregate;
  /** An array relationship */
  grades: Array<Grade>;
  /** An aggregate relationship */
  gradesAggregate: GradeAggregate;
  /** An aggregate relationship */
  groupAttributesAggregate: GroupAttributeAggregate;
  /** An aggregate relationship */
  groupRoleMappingsAggregate: GroupRoleMappingAggregate;
  /** An array relationship */
  group_attributes: Array<GroupAttribute>;
  /** An array relationship */
  group_role_mappings: Array<GroupRoleMapping>;
  id: Scalars["String"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  parentGroup: Scalars["String"]["output"];
  realmId?: Maybe<Scalars["String"]["output"]>;
  /** An aggregate relationship */
  userGroupMembershipsAggregate: UserGroupMembershipAggregate;
  /** An array relationship */
  user_group_memberships: Array<UserGroupMembership>;
};

/** columns and relationships of "keycloak_group" */
export type KeycloakGroupBureausArgs = {
  distinctOn?: InputMaybe<Array<BureauSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<BureauOrderBy>>;
  where?: InputMaybe<BureauBoolExp>;
};

/** columns and relationships of "keycloak_group" */
export type KeycloakGroupBureausAggregateArgs = {
  distinctOn?: InputMaybe<Array<BureauSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<BureauOrderBy>>;
  where?: InputMaybe<BureauBoolExp>;
};

/** columns and relationships of "keycloak_group" */
export type KeycloakGroupDepartmentsArgs = {
  distinctOn?: InputMaybe<Array<DepartmentSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<DepartmentOrderBy>>;
  where?: InputMaybe<DepartmentBoolExp>;
};

/** columns and relationships of "keycloak_group" */
export type KeycloakGroupDepartmentsAggregateArgs = {
  distinctOn?: InputMaybe<Array<DepartmentSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<DepartmentOrderBy>>;
  where?: InputMaybe<DepartmentBoolExp>;
};

/** columns and relationships of "keycloak_group" */
export type KeycloakGroupGradesArgs = {
  distinctOn?: InputMaybe<Array<GradeSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<GradeOrderBy>>;
  where?: InputMaybe<GradeBoolExp>;
};

/** columns and relationships of "keycloak_group" */
export type KeycloakGroupGradesAggregateArgs = {
  distinctOn?: InputMaybe<Array<GradeSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<GradeOrderBy>>;
  where?: InputMaybe<GradeBoolExp>;
};

/** columns and relationships of "keycloak_group" */
export type KeycloakGroupGroupAttributesAggregateArgs = {
  distinctOn?: InputMaybe<Array<GroupAttributeSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<GroupAttributeOrderBy>>;
  where?: InputMaybe<GroupAttributeBoolExp>;
};

/** columns and relationships of "keycloak_group" */
export type KeycloakGroupGroupRoleMappingsAggregateArgs = {
  distinctOn?: InputMaybe<Array<GroupRoleMappingSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<GroupRoleMappingOrderBy>>;
  where?: InputMaybe<GroupRoleMappingBoolExp>;
};

/** columns and relationships of "keycloak_group" */
export type KeycloakGroupGroup_AttributesArgs = {
  distinctOn?: InputMaybe<Array<GroupAttributeSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<GroupAttributeOrderBy>>;
  where?: InputMaybe<GroupAttributeBoolExp>;
};

/** columns and relationships of "keycloak_group" */
export type KeycloakGroupGroup_Role_MappingsArgs = {
  distinctOn?: InputMaybe<Array<GroupRoleMappingSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<GroupRoleMappingOrderBy>>;
  where?: InputMaybe<GroupRoleMappingBoolExp>;
};

/** columns and relationships of "keycloak_group" */
export type KeycloakGroupUserGroupMembershipsAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserGroupMembershipSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserGroupMembershipOrderBy>>;
  where?: InputMaybe<UserGroupMembershipBoolExp>;
};

/** columns and relationships of "keycloak_group" */
export type KeycloakGroupUser_Group_MembershipsArgs = {
  distinctOn?: InputMaybe<Array<UserGroupMembershipSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserGroupMembershipOrderBy>>;
  where?: InputMaybe<UserGroupMembershipBoolExp>;
};

/** aggregated selection of "keycloak_group" */
export type KeycloakGroupAggregate = {
  __typename?: "KeycloakGroupAggregate";
  aggregate?: Maybe<KeycloakGroupAggregateFields>;
  nodes: Array<KeycloakGroup>;
};

/** aggregate fields of "keycloak_group" */
export type KeycloakGroupAggregateFields = {
  __typename?: "KeycloakGroupAggregateFields";
  count: Scalars["Int"]["output"];
  max?: Maybe<KeycloakGroupMaxFields>;
  min?: Maybe<KeycloakGroupMinFields>;
};

/** aggregate fields of "keycloak_group" */
export type KeycloakGroupAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<KeycloakGroupSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "keycloak_group". All fields are combined with a logical 'AND'. */
export type KeycloakGroupBoolExp = {
  _and?: InputMaybe<Array<KeycloakGroupBoolExp>>;
  _not?: InputMaybe<KeycloakGroupBoolExp>;
  _or?: InputMaybe<Array<KeycloakGroupBoolExp>>;
  bureaus?: InputMaybe<BureauBoolExp>;
  bureausAggregate?: InputMaybe<BureauAggregateBoolExp>;
  departments?: InputMaybe<DepartmentBoolExp>;
  departmentsAggregate?: InputMaybe<DepartmentAggregateBoolExp>;
  grades?: InputMaybe<GradeBoolExp>;
  gradesAggregate?: InputMaybe<GradeAggregateBoolExp>;
  group_attributes?: InputMaybe<GroupAttributeBoolExp>;
  group_attributesAggregate?: InputMaybe<GroupAttributeAggregateBoolExp>;
  group_role_mappings?: InputMaybe<GroupRoleMappingBoolExp>;
  group_role_mappingsAggregate?: InputMaybe<GroupRoleMappingAggregateBoolExp>;
  id?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  parentGroup?: InputMaybe<StringComparisonExp>;
  realmId?: InputMaybe<StringComparisonExp>;
  user_group_memberships?: InputMaybe<UserGroupMembershipBoolExp>;
  user_group_membershipsAggregate?: InputMaybe<UserGroupMembershipAggregateBoolExp>;
};

/** unique or primary key constraints on table "keycloak_group" */
export enum KeycloakGroupConstraint {
  /** unique or primary key constraint on columns "id" */
  ConstraintGroup = "constraint_group",
  /** unique or primary key constraint on columns "parent_group", "realm_id", "name" */
  SiblingNames = "sibling_names",
}

/** input type for inserting data into table "keycloak_group" */
export type KeycloakGroupInsertInput = {
  bureaus?: InputMaybe<BureauArrRelInsertInput>;
  departments?: InputMaybe<DepartmentArrRelInsertInput>;
  grades?: InputMaybe<GradeArrRelInsertInput>;
  group_attributes?: InputMaybe<GroupAttributeArrRelInsertInput>;
  group_role_mappings?: InputMaybe<GroupRoleMappingArrRelInsertInput>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  parentGroup?: InputMaybe<Scalars["String"]["input"]>;
  realmId?: InputMaybe<Scalars["String"]["input"]>;
  user_group_memberships?: InputMaybe<UserGroupMembershipArrRelInsertInput>;
};

/** aggregate max on columns */
export type KeycloakGroupMaxFields = {
  __typename?: "KeycloakGroupMaxFields";
  id?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  parentGroup?: Maybe<Scalars["String"]["output"]>;
  realmId?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type KeycloakGroupMinFields = {
  __typename?: "KeycloakGroupMinFields";
  id?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  parentGroup?: Maybe<Scalars["String"]["output"]>;
  realmId?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "keycloak_group" */
export type KeycloakGroupMutationResponse = {
  __typename?: "KeycloakGroupMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<KeycloakGroup>;
};

/** input type for inserting object relation for remote table "keycloak_group" */
export type KeycloakGroupObjRelInsertInput = {
  data: KeycloakGroupInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<KeycloakGroupOnConflict>;
};

/** on_conflict condition type for table "keycloak_group" */
export type KeycloakGroupOnConflict = {
  constraint: KeycloakGroupConstraint;
  updateColumns?: Array<KeycloakGroupUpdateColumn>;
  where?: InputMaybe<KeycloakGroupBoolExp>;
};

/** Ordering options when selecting data from "keycloak_group". */
export type KeycloakGroupOrderBy = {
  bureausAggregate?: InputMaybe<BureauAggregateOrderBy>;
  departmentsAggregate?: InputMaybe<DepartmentAggregateOrderBy>;
  gradesAggregate?: InputMaybe<GradeAggregateOrderBy>;
  group_attributesAggregate?: InputMaybe<GroupAttributeAggregateOrderBy>;
  group_role_mappingsAggregate?: InputMaybe<GroupRoleMappingAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  parentGroup?: InputMaybe<OrderBy>;
  realmId?: InputMaybe<OrderBy>;
  user_group_membershipsAggregate?: InputMaybe<UserGroupMembershipAggregateOrderBy>;
};

/** primary key columns input for table: keycloak_group */
export type KeycloakGroupPkColumnsInput = {
  id: Scalars["String"]["input"];
};

/** select columns of table "keycloak_group" */
export enum KeycloakGroupSelectColumn {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  ParentGroup = "parentGroup",
  /** column name */
  RealmId = "realmId",
}

/** input type for updating data in table "keycloak_group" */
export type KeycloakGroupSetInput = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  parentGroup?: InputMaybe<Scalars["String"]["input"]>;
  realmId?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "keycloak_group" */
export type KeycloakGroupStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: KeycloakGroupStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type KeycloakGroupStreamCursorValueInput = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  parentGroup?: InputMaybe<Scalars["String"]["input"]>;
  realmId?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "keycloak_group" */
export enum KeycloakGroupUpdateColumn {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  ParentGroup = "parentGroup",
  /** column name */
  RealmId = "realmId",
}

export type KeycloakGroupUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<KeycloakGroupSetInput>;
  /** filter the rows which have to be updated */
  where: KeycloakGroupBoolExp;
};

/** columns and relationships of "keycloak_role" */
export type KeycloakRole = {
  __typename?: "KeycloakRole";
  client?: Maybe<Scalars["String"]["output"]>;
  clientRealmConstraint?: Maybe<Scalars["String"]["output"]>;
  clientRole: Scalars["Boolean"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  realm?: Maybe<Scalars["String"]["output"]>;
  realmId?: Maybe<Scalars["String"]["output"]>;
  /** An aggregate relationship */
  roleAttributesAggregate: RoleAttributeAggregate;
  /** An array relationship */
  role_attributes: Array<RoleAttribute>;
};

/** columns and relationships of "keycloak_role" */
export type KeycloakRoleRoleAttributesAggregateArgs = {
  distinctOn?: InputMaybe<Array<RoleAttributeSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<RoleAttributeOrderBy>>;
  where?: InputMaybe<RoleAttributeBoolExp>;
};

/** columns and relationships of "keycloak_role" */
export type KeycloakRoleRole_AttributesArgs = {
  distinctOn?: InputMaybe<Array<RoleAttributeSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<RoleAttributeOrderBy>>;
  where?: InputMaybe<RoleAttributeBoolExp>;
};

/** aggregated selection of "keycloak_role" */
export type KeycloakRoleAggregate = {
  __typename?: "KeycloakRoleAggregate";
  aggregate?: Maybe<KeycloakRoleAggregateFields>;
  nodes: Array<KeycloakRole>;
};

/** aggregate fields of "keycloak_role" */
export type KeycloakRoleAggregateFields = {
  __typename?: "KeycloakRoleAggregateFields";
  count: Scalars["Int"]["output"];
  max?: Maybe<KeycloakRoleMaxFields>;
  min?: Maybe<KeycloakRoleMinFields>;
};

/** aggregate fields of "keycloak_role" */
export type KeycloakRoleAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<KeycloakRoleSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "keycloak_role". All fields are combined with a logical 'AND'. */
export type KeycloakRoleBoolExp = {
  _and?: InputMaybe<Array<KeycloakRoleBoolExp>>;
  _not?: InputMaybe<KeycloakRoleBoolExp>;
  _or?: InputMaybe<Array<KeycloakRoleBoolExp>>;
  client?: InputMaybe<StringComparisonExp>;
  clientRealmConstraint?: InputMaybe<StringComparisonExp>;
  clientRole?: InputMaybe<BooleanComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  realm?: InputMaybe<StringComparisonExp>;
  realmId?: InputMaybe<StringComparisonExp>;
  role_attributes?: InputMaybe<RoleAttributeBoolExp>;
  role_attributesAggregate?: InputMaybe<RoleAttributeAggregateBoolExp>;
};

/** unique or primary key constraints on table "keycloak_role" */
export enum KeycloakRoleConstraint {
  /** unique or primary key constraint on columns "client_realm_constraint", "name" */
  UkJ3Rwuvd56Ontgsuhogm184Ww2_2 = "UK_J3RWUVD56ONTGSUHOGM184WW2_2",
  /** unique or primary key constraint on columns "id" */
  ConstraintA = "constraint_a",
}

/** input type for inserting data into table "keycloak_role" */
export type KeycloakRoleInsertInput = {
  client?: InputMaybe<Scalars["String"]["input"]>;
  clientRealmConstraint?: InputMaybe<Scalars["String"]["input"]>;
  clientRole?: InputMaybe<Scalars["Boolean"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  realm?: InputMaybe<Scalars["String"]["input"]>;
  realmId?: InputMaybe<Scalars["String"]["input"]>;
  role_attributes?: InputMaybe<RoleAttributeArrRelInsertInput>;
};

/** aggregate max on columns */
export type KeycloakRoleMaxFields = {
  __typename?: "KeycloakRoleMaxFields";
  client?: Maybe<Scalars["String"]["output"]>;
  clientRealmConstraint?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  realm?: Maybe<Scalars["String"]["output"]>;
  realmId?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type KeycloakRoleMinFields = {
  __typename?: "KeycloakRoleMinFields";
  client?: Maybe<Scalars["String"]["output"]>;
  clientRealmConstraint?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  realm?: Maybe<Scalars["String"]["output"]>;
  realmId?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "keycloak_role" */
export type KeycloakRoleMutationResponse = {
  __typename?: "KeycloakRoleMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<KeycloakRole>;
};

/** input type for inserting object relation for remote table "keycloak_role" */
export type KeycloakRoleObjRelInsertInput = {
  data: KeycloakRoleInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<KeycloakRoleOnConflict>;
};

/** on_conflict condition type for table "keycloak_role" */
export type KeycloakRoleOnConflict = {
  constraint: KeycloakRoleConstraint;
  updateColumns?: Array<KeycloakRoleUpdateColumn>;
  where?: InputMaybe<KeycloakRoleBoolExp>;
};

/** Ordering options when selecting data from "keycloak_role". */
export type KeycloakRoleOrderBy = {
  client?: InputMaybe<OrderBy>;
  clientRealmConstraint?: InputMaybe<OrderBy>;
  clientRole?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  realm?: InputMaybe<OrderBy>;
  realmId?: InputMaybe<OrderBy>;
  role_attributesAggregate?: InputMaybe<RoleAttributeAggregateOrderBy>;
};

/** primary key columns input for table: keycloak_role */
export type KeycloakRolePkColumnsInput = {
  id: Scalars["String"]["input"];
};

/** select columns of table "keycloak_role" */
export enum KeycloakRoleSelectColumn {
  /** column name */
  Client = "client",
  /** column name */
  ClientRealmConstraint = "clientRealmConstraint",
  /** column name */
  ClientRole = "clientRole",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Realm = "realm",
  /** column name */
  RealmId = "realmId",
}

/** input type for updating data in table "keycloak_role" */
export type KeycloakRoleSetInput = {
  client?: InputMaybe<Scalars["String"]["input"]>;
  clientRealmConstraint?: InputMaybe<Scalars["String"]["input"]>;
  clientRole?: InputMaybe<Scalars["Boolean"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  realm?: InputMaybe<Scalars["String"]["input"]>;
  realmId?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "keycloak_role" */
export type KeycloakRoleStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: KeycloakRoleStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type KeycloakRoleStreamCursorValueInput = {
  client?: InputMaybe<Scalars["String"]["input"]>;
  clientRealmConstraint?: InputMaybe<Scalars["String"]["input"]>;
  clientRole?: InputMaybe<Scalars["Boolean"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  realm?: InputMaybe<Scalars["String"]["input"]>;
  realmId?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "keycloak_role" */
export enum KeycloakRoleUpdateColumn {
  /** column name */
  Client = "client",
  /** column name */
  ClientRealmConstraint = "clientRealmConstraint",
  /** column name */
  ClientRole = "clientRole",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Realm = "realm",
  /** column name */
  RealmId = "realmId",
}

export type KeycloakRoleUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<KeycloakRoleSetInput>;
  /** filter the rows which have to be updated */
  where: KeycloakRoleBoolExp;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = "ASC",
  /** in ascending order, nulls first */
  AscNullsFirst = "ASC_NULLS_FIRST",
  /** in ascending order, nulls last */
  AscNullsLast = "ASC_NULLS_LAST",
  /** in descending order, nulls first */
  Desc = "DESC",
  /** in descending order, nulls first */
  DescNullsFirst = "DESC_NULLS_FIRST",
  /** in descending order, nulls last */
  DescNullsLast = "DESC_NULLS_LAST",
}

/** columns and relationships of "role_attribute" */
export type RoleAttribute = {
  __typename?: "RoleAttribute";
  id: Scalars["String"]["output"];
  /** An object relationship */
  keycloak_role: KeycloakRole;
  name: Scalars["String"]["output"];
  roleId: Scalars["String"]["output"];
  value?: Maybe<Scalars["String"]["output"]>;
};

/** aggregated selection of "role_attribute" */
export type RoleAttributeAggregate = {
  __typename?: "RoleAttributeAggregate";
  aggregate?: Maybe<RoleAttributeAggregateFields>;
  nodes: Array<RoleAttribute>;
};

export type RoleAttributeAggregateBoolExp = {
  count?: InputMaybe<RoleAttributeAggregateBoolExpCount>;
};

/** aggregate fields of "role_attribute" */
export type RoleAttributeAggregateFields = {
  __typename?: "RoleAttributeAggregateFields";
  count: Scalars["Int"]["output"];
  max?: Maybe<RoleAttributeMaxFields>;
  min?: Maybe<RoleAttributeMinFields>;
};

/** aggregate fields of "role_attribute" */
export type RoleAttributeAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RoleAttributeSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "role_attribute" */
export type RoleAttributeAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<RoleAttributeMaxOrderBy>;
  min?: InputMaybe<RoleAttributeMinOrderBy>;
};

/** input type for inserting array relation for remote table "role_attribute" */
export type RoleAttributeArrRelInsertInput = {
  data: Array<RoleAttributeInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<RoleAttributeOnConflict>;
};

/** Boolean expression to filter rows from the table "role_attribute". All fields are combined with a logical 'AND'. */
export type RoleAttributeBoolExp = {
  _and?: InputMaybe<Array<RoleAttributeBoolExp>>;
  _not?: InputMaybe<RoleAttributeBoolExp>;
  _or?: InputMaybe<Array<RoleAttributeBoolExp>>;
  id?: InputMaybe<StringComparisonExp>;
  keycloak_role?: InputMaybe<KeycloakRoleBoolExp>;
  name?: InputMaybe<StringComparisonExp>;
  roleId?: InputMaybe<StringComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "role_attribute" */
export enum RoleAttributeConstraint {
  /** unique or primary key constraint on columns "id" */
  ConstraintRoleAttributePk = "constraint_role_attribute_pk",
}

/** input type for inserting data into table "role_attribute" */
export type RoleAttributeInsertInput = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  keycloak_role?: InputMaybe<KeycloakRoleObjRelInsertInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  roleId?: InputMaybe<Scalars["String"]["input"]>;
  value?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type RoleAttributeMaxFields = {
  __typename?: "RoleAttributeMaxFields";
  id?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  roleId?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "role_attribute" */
export type RoleAttributeMaxOrderBy = {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  roleId?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type RoleAttributeMinFields = {
  __typename?: "RoleAttributeMinFields";
  id?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  roleId?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "role_attribute" */
export type RoleAttributeMinOrderBy = {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  roleId?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "role_attribute" */
export type RoleAttributeMutationResponse = {
  __typename?: "RoleAttributeMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<RoleAttribute>;
};

/** on_conflict condition type for table "role_attribute" */
export type RoleAttributeOnConflict = {
  constraint: RoleAttributeConstraint;
  updateColumns?: Array<RoleAttributeUpdateColumn>;
  where?: InputMaybe<RoleAttributeBoolExp>;
};

/** Ordering options when selecting data from "role_attribute". */
export type RoleAttributeOrderBy = {
  id?: InputMaybe<OrderBy>;
  keycloak_role?: InputMaybe<KeycloakRoleOrderBy>;
  name?: InputMaybe<OrderBy>;
  roleId?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: role_attribute */
export type RoleAttributePkColumnsInput = {
  id: Scalars["String"]["input"];
};

/** select columns of table "role_attribute" */
export enum RoleAttributeSelectColumn {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  RoleId = "roleId",
  /** column name */
  Value = "value",
}

/** input type for updating data in table "role_attribute" */
export type RoleAttributeSetInput = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  roleId?: InputMaybe<Scalars["String"]["input"]>;
  value?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "role_attribute" */
export type RoleAttributeStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: RoleAttributeStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type RoleAttributeStreamCursorValueInput = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  roleId?: InputMaybe<Scalars["String"]["input"]>;
  value?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "role_attribute" */
export enum RoleAttributeUpdateColumn {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  RoleId = "roleId",
  /** column name */
  Value = "value",
}

export type RoleAttributeUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RoleAttributeSetInput>;
  /** filter the rows which have to be updated */
  where: RoleAttributeBoolExp;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars["String"]["input"]>;
  _gt?: InputMaybe<Scalars["String"]["input"]>;
  _gte?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]["input"]>;
  _in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]["input"]>;
  _isNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]["input"]>;
  _lt?: InputMaybe<Scalars["String"]["input"]>;
  _lte?: InputMaybe<Scalars["String"]["input"]>;
  _neq?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]["input"]>;
};

/** columns and relationships of "user_attribute" */
export type UserAttribute = {
  __typename?: "UserAttribute";
  id: Scalars["String"]["output"];
  longValue?: Maybe<Scalars["String"]["output"]>;
  longValueHash?: Maybe<Scalars["bytea"]["output"]>;
  longValueHashLowerCase?: Maybe<Scalars["bytea"]["output"]>;
  name: Scalars["String"]["output"];
  userId: Scalars["String"]["output"];
  /** An object relationship */
  user_entity: UserEntity;
  value?: Maybe<Scalars["String"]["output"]>;
};

/** aggregated selection of "user_attribute" */
export type UserAttributeAggregate = {
  __typename?: "UserAttributeAggregate";
  aggregate?: Maybe<UserAttributeAggregateFields>;
  nodes: Array<UserAttribute>;
};

export type UserAttributeAggregateBoolExp = {
  count?: InputMaybe<UserAttributeAggregateBoolExpCount>;
};

/** aggregate fields of "user_attribute" */
export type UserAttributeAggregateFields = {
  __typename?: "UserAttributeAggregateFields";
  count: Scalars["Int"]["output"];
  max?: Maybe<UserAttributeMaxFields>;
  min?: Maybe<UserAttributeMinFields>;
};

/** aggregate fields of "user_attribute" */
export type UserAttributeAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserAttributeSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "user_attribute" */
export type UserAttributeAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<UserAttributeMaxOrderBy>;
  min?: InputMaybe<UserAttributeMinOrderBy>;
};

/** input type for inserting array relation for remote table "user_attribute" */
export type UserAttributeArrRelInsertInput = {
  data: Array<UserAttributeInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<UserAttributeOnConflict>;
};

/** Boolean expression to filter rows from the table "user_attribute". All fields are combined with a logical 'AND'. */
export type UserAttributeBoolExp = {
  _and?: InputMaybe<Array<UserAttributeBoolExp>>;
  _not?: InputMaybe<UserAttributeBoolExp>;
  _or?: InputMaybe<Array<UserAttributeBoolExp>>;
  id?: InputMaybe<StringComparisonExp>;
  longValue?: InputMaybe<StringComparisonExp>;
  longValueHash?: InputMaybe<ByteaComparisonExp>;
  longValueHashLowerCase?: InputMaybe<ByteaComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  userId?: InputMaybe<StringComparisonExp>;
  user_entity?: InputMaybe<UserEntityBoolExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "user_attribute" */
export enum UserAttributeConstraint {
  /** unique or primary key constraint on columns "id" */
  ConstraintUserAttributePk = "constraint_user_attribute_pk",
}

/** input type for inserting data into table "user_attribute" */
export type UserAttributeInsertInput = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  longValue?: InputMaybe<Scalars["String"]["input"]>;
  longValueHash?: InputMaybe<Scalars["bytea"]["input"]>;
  longValueHashLowerCase?: InputMaybe<Scalars["bytea"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
  user_entity?: InputMaybe<UserEntityObjRelInsertInput>;
  value?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type UserAttributeMaxFields = {
  __typename?: "UserAttributeMaxFields";
  id?: Maybe<Scalars["String"]["output"]>;
  longValue?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "user_attribute" */
export type UserAttributeMaxOrderBy = {
  id?: InputMaybe<OrderBy>;
  longValue?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type UserAttributeMinFields = {
  __typename?: "UserAttributeMinFields";
  id?: Maybe<Scalars["String"]["output"]>;
  longValue?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "user_attribute" */
export type UserAttributeMinOrderBy = {
  id?: InputMaybe<OrderBy>;
  longValue?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "user_attribute" */
export type UserAttributeMutationResponse = {
  __typename?: "UserAttributeMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<UserAttribute>;
};

/** on_conflict condition type for table "user_attribute" */
export type UserAttributeOnConflict = {
  constraint: UserAttributeConstraint;
  updateColumns?: Array<UserAttributeUpdateColumn>;
  where?: InputMaybe<UserAttributeBoolExp>;
};

/** Ordering options when selecting data from "user_attribute". */
export type UserAttributeOrderBy = {
  id?: InputMaybe<OrderBy>;
  longValue?: InputMaybe<OrderBy>;
  longValueHash?: InputMaybe<OrderBy>;
  longValueHashLowerCase?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
  user_entity?: InputMaybe<UserEntityOrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user_attribute */
export type UserAttributePkColumnsInput = {
  id: Scalars["String"]["input"];
};

/** select columns of table "user_attribute" */
export enum UserAttributeSelectColumn {
  /** column name */
  Id = "id",
  /** column name */
  LongValue = "longValue",
  /** column name */
  LongValueHash = "longValueHash",
  /** column name */
  LongValueHashLowerCase = "longValueHashLowerCase",
  /** column name */
  Name = "name",
  /** column name */
  UserId = "userId",
  /** column name */
  Value = "value",
}

/** input type for updating data in table "user_attribute" */
export type UserAttributeSetInput = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  longValue?: InputMaybe<Scalars["String"]["input"]>;
  longValueHash?: InputMaybe<Scalars["bytea"]["input"]>;
  longValueHashLowerCase?: InputMaybe<Scalars["bytea"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
  value?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "user_attribute" */
export type UserAttributeStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: UserAttributeStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserAttributeStreamCursorValueInput = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  longValue?: InputMaybe<Scalars["String"]["input"]>;
  longValueHash?: InputMaybe<Scalars["bytea"]["input"]>;
  longValueHashLowerCase?: InputMaybe<Scalars["bytea"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
  value?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "user_attribute" */
export enum UserAttributeUpdateColumn {
  /** column name */
  Id = "id",
  /** column name */
  LongValue = "longValue",
  /** column name */
  LongValueHash = "longValueHash",
  /** column name */
  LongValueHashLowerCase = "longValueHashLowerCase",
  /** column name */
  Name = "name",
  /** column name */
  UserId = "userId",
  /** column name */
  Value = "value",
}

export type UserAttributeUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserAttributeSetInput>;
  /** filter the rows which have to be updated */
  where: UserAttributeBoolExp;
};

/** columns and relationships of "user_entity" */
export type UserEntity = {
  __typename?: "UserEntity";
  createdTimestamp?: Maybe<Scalars["bigint"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  emailConstraint?: Maybe<Scalars["String"]["output"]>;
  emailVerified: Scalars["Boolean"]["output"];
  enabled: Scalars["Boolean"]["output"];
  federationLink?: Maybe<Scalars["String"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  lastName?: Maybe<Scalars["String"]["output"]>;
  notBefore: Scalars["Int"]["output"];
  realmId?: Maybe<Scalars["String"]["output"]>;
  serviceAccountClientLink?: Maybe<Scalars["String"]["output"]>;
  /** An aggregate relationship */
  userAttributesAggregate: UserAttributeAggregate;
  /** An aggregate relationship */
  userGroupMembershipsAggregate: UserGroupMembershipAggregate;
  /** An aggregate relationship */
  userRoleMappingsAggregate: UserRoleMappingAggregate;
  /** An array relationship */
  user_attributes: Array<UserAttribute>;
  /** An array relationship */
  user_group_memberships: Array<UserGroupMembership>;
  /** An array relationship */
  user_role_mappings: Array<UserRoleMapping>;
  username?: Maybe<Scalars["String"]["output"]>;
};

/** columns and relationships of "user_entity" */
export type UserEntityUserAttributesAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserAttributeSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserAttributeOrderBy>>;
  where?: InputMaybe<UserAttributeBoolExp>;
};

/** columns and relationships of "user_entity" */
export type UserEntityUserGroupMembershipsAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserGroupMembershipSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserGroupMembershipOrderBy>>;
  where?: InputMaybe<UserGroupMembershipBoolExp>;
};

/** columns and relationships of "user_entity" */
export type UserEntityUserRoleMappingsAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserRoleMappingSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserRoleMappingOrderBy>>;
  where?: InputMaybe<UserRoleMappingBoolExp>;
};

/** columns and relationships of "user_entity" */
export type UserEntityUser_AttributesArgs = {
  distinctOn?: InputMaybe<Array<UserAttributeSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserAttributeOrderBy>>;
  where?: InputMaybe<UserAttributeBoolExp>;
};

/** columns and relationships of "user_entity" */
export type UserEntityUser_Group_MembershipsArgs = {
  distinctOn?: InputMaybe<Array<UserGroupMembershipSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserGroupMembershipOrderBy>>;
  where?: InputMaybe<UserGroupMembershipBoolExp>;
};

/** columns and relationships of "user_entity" */
export type UserEntityUser_Role_MappingsArgs = {
  distinctOn?: InputMaybe<Array<UserRoleMappingSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserRoleMappingOrderBy>>;
  where?: InputMaybe<UserRoleMappingBoolExp>;
};

/** aggregated selection of "user_entity" */
export type UserEntityAggregate = {
  __typename?: "UserEntityAggregate";
  aggregate?: Maybe<UserEntityAggregateFields>;
  nodes: Array<UserEntity>;
};

/** aggregate fields of "user_entity" */
export type UserEntityAggregateFields = {
  __typename?: "UserEntityAggregateFields";
  avg?: Maybe<UserEntityAvgFields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<UserEntityMaxFields>;
  min?: Maybe<UserEntityMinFields>;
  stddev?: Maybe<UserEntityStddevFields>;
  stddevPop?: Maybe<UserEntityStddevPopFields>;
  stddevSamp?: Maybe<UserEntityStddevSampFields>;
  sum?: Maybe<UserEntitySumFields>;
  varPop?: Maybe<UserEntityVarPopFields>;
  varSamp?: Maybe<UserEntityVarSampFields>;
  variance?: Maybe<UserEntityVarianceFields>;
};

/** aggregate fields of "user_entity" */
export type UserEntityAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserEntitySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type UserEntityAvgFields = {
  __typename?: "UserEntityAvgFields";
  createdTimestamp?: Maybe<Scalars["Float"]["output"]>;
  notBefore?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "user_entity". All fields are combined with a logical 'AND'. */
export type UserEntityBoolExp = {
  _and?: InputMaybe<Array<UserEntityBoolExp>>;
  _not?: InputMaybe<UserEntityBoolExp>;
  _or?: InputMaybe<Array<UserEntityBoolExp>>;
  createdTimestamp?: InputMaybe<BigintComparisonExp>;
  email?: InputMaybe<StringComparisonExp>;
  emailConstraint?: InputMaybe<StringComparisonExp>;
  emailVerified?: InputMaybe<BooleanComparisonExp>;
  enabled?: InputMaybe<BooleanComparisonExp>;
  federationLink?: InputMaybe<StringComparisonExp>;
  firstName?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  lastName?: InputMaybe<StringComparisonExp>;
  notBefore?: InputMaybe<IntComparisonExp>;
  realmId?: InputMaybe<StringComparisonExp>;
  serviceAccountClientLink?: InputMaybe<StringComparisonExp>;
  user_attributes?: InputMaybe<UserAttributeBoolExp>;
  user_attributesAggregate?: InputMaybe<UserAttributeAggregateBoolExp>;
  user_group_memberships?: InputMaybe<UserGroupMembershipBoolExp>;
  user_group_membershipsAggregate?: InputMaybe<UserGroupMembershipAggregateBoolExp>;
  user_role_mappings?: InputMaybe<UserRoleMappingBoolExp>;
  user_role_mappingsAggregate?: InputMaybe<UserRoleMappingAggregateBoolExp>;
  username?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "user_entity" */
export enum UserEntityConstraint {
  /** unique or primary key constraint on columns "id" */
  ConstraintFb = "constraint_fb",
  /** unique or primary key constraint on columns "realm_id", "email_constraint" */
  UkDykn684sl8up1crfei6eckhd7 = "uk_dykn684sl8up1crfei6eckhd7",
  /** unique or primary key constraint on columns "realm_id", "username" */
  UkRu8tt6t700s9v50bu18ws5ha6 = "uk_ru8tt6t700s9v50bu18ws5ha6",
}

/** input type for incrementing numeric columns in table "user_entity" */
export type UserEntityIncInput = {
  createdTimestamp?: InputMaybe<Scalars["bigint"]["input"]>;
  notBefore?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "user_entity" */
export type UserEntityInsertInput = {
  createdTimestamp?: InputMaybe<Scalars["bigint"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  emailConstraint?: InputMaybe<Scalars["String"]["input"]>;
  emailVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  enabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  federationLink?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  notBefore?: InputMaybe<Scalars["Int"]["input"]>;
  realmId?: InputMaybe<Scalars["String"]["input"]>;
  serviceAccountClientLink?: InputMaybe<Scalars["String"]["input"]>;
  user_attributes?: InputMaybe<UserAttributeArrRelInsertInput>;
  user_group_memberships?: InputMaybe<UserGroupMembershipArrRelInsertInput>;
  user_role_mappings?: InputMaybe<UserRoleMappingArrRelInsertInput>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type UserEntityMaxFields = {
  __typename?: "UserEntityMaxFields";
  createdTimestamp?: Maybe<Scalars["bigint"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  emailConstraint?: Maybe<Scalars["String"]["output"]>;
  federationLink?: Maybe<Scalars["String"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
  notBefore?: Maybe<Scalars["Int"]["output"]>;
  realmId?: Maybe<Scalars["String"]["output"]>;
  serviceAccountClientLink?: Maybe<Scalars["String"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type UserEntityMinFields = {
  __typename?: "UserEntityMinFields";
  createdTimestamp?: Maybe<Scalars["bigint"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  emailConstraint?: Maybe<Scalars["String"]["output"]>;
  federationLink?: Maybe<Scalars["String"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
  notBefore?: Maybe<Scalars["Int"]["output"]>;
  realmId?: Maybe<Scalars["String"]["output"]>;
  serviceAccountClientLink?: Maybe<Scalars["String"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "user_entity" */
export type UserEntityMutationResponse = {
  __typename?: "UserEntityMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<UserEntity>;
};

/** input type for inserting object relation for remote table "user_entity" */
export type UserEntityObjRelInsertInput = {
  data: UserEntityInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<UserEntityOnConflict>;
};

/** on_conflict condition type for table "user_entity" */
export type UserEntityOnConflict = {
  constraint: UserEntityConstraint;
  updateColumns?: Array<UserEntityUpdateColumn>;
  where?: InputMaybe<UserEntityBoolExp>;
};

/** Ordering options when selecting data from "user_entity". */
export type UserEntityOrderBy = {
  createdTimestamp?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  emailConstraint?: InputMaybe<OrderBy>;
  emailVerified?: InputMaybe<OrderBy>;
  enabled?: InputMaybe<OrderBy>;
  federationLink?: InputMaybe<OrderBy>;
  firstName?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  lastName?: InputMaybe<OrderBy>;
  notBefore?: InputMaybe<OrderBy>;
  realmId?: InputMaybe<OrderBy>;
  serviceAccountClientLink?: InputMaybe<OrderBy>;
  user_attributesAggregate?: InputMaybe<UserAttributeAggregateOrderBy>;
  user_group_membershipsAggregate?: InputMaybe<UserGroupMembershipAggregateOrderBy>;
  user_role_mappingsAggregate?: InputMaybe<UserRoleMappingAggregateOrderBy>;
  username?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user_entity */
export type UserEntityPkColumnsInput = {
  id: Scalars["String"]["input"];
};

/** select columns of table "user_entity" */
export enum UserEntitySelectColumn {
  /** column name */
  CreatedTimestamp = "createdTimestamp",
  /** column name */
  Email = "email",
  /** column name */
  EmailConstraint = "emailConstraint",
  /** column name */
  EmailVerified = "emailVerified",
  /** column name */
  Enabled = "enabled",
  /** column name */
  FederationLink = "federationLink",
  /** column name */
  FirstName = "firstName",
  /** column name */
  Id = "id",
  /** column name */
  LastName = "lastName",
  /** column name */
  NotBefore = "notBefore",
  /** column name */
  RealmId = "realmId",
  /** column name */
  ServiceAccountClientLink = "serviceAccountClientLink",
  /** column name */
  Username = "username",
}

/** input type for updating data in table "user_entity" */
export type UserEntitySetInput = {
  createdTimestamp?: InputMaybe<Scalars["bigint"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  emailConstraint?: InputMaybe<Scalars["String"]["input"]>;
  emailVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  enabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  federationLink?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  notBefore?: InputMaybe<Scalars["Int"]["input"]>;
  realmId?: InputMaybe<Scalars["String"]["input"]>;
  serviceAccountClientLink?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type UserEntityStddevFields = {
  __typename?: "UserEntityStddevFields";
  createdTimestamp?: Maybe<Scalars["Float"]["output"]>;
  notBefore?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddevPop on columns */
export type UserEntityStddevPopFields = {
  __typename?: "UserEntityStddevPopFields";
  createdTimestamp?: Maybe<Scalars["Float"]["output"]>;
  notBefore?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddevSamp on columns */
export type UserEntityStddevSampFields = {
  __typename?: "UserEntityStddevSampFields";
  createdTimestamp?: Maybe<Scalars["Float"]["output"]>;
  notBefore?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "user_entity" */
export type UserEntityStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: UserEntityStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserEntityStreamCursorValueInput = {
  createdTimestamp?: InputMaybe<Scalars["bigint"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  emailConstraint?: InputMaybe<Scalars["String"]["input"]>;
  emailVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  enabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  federationLink?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  notBefore?: InputMaybe<Scalars["Int"]["input"]>;
  realmId?: InputMaybe<Scalars["String"]["input"]>;
  serviceAccountClientLink?: InputMaybe<Scalars["String"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type UserEntitySumFields = {
  __typename?: "UserEntitySumFields";
  createdTimestamp?: Maybe<Scalars["bigint"]["output"]>;
  notBefore?: Maybe<Scalars["Int"]["output"]>;
};

/** update columns of table "user_entity" */
export enum UserEntityUpdateColumn {
  /** column name */
  CreatedTimestamp = "createdTimestamp",
  /** column name */
  Email = "email",
  /** column name */
  EmailConstraint = "emailConstraint",
  /** column name */
  EmailVerified = "emailVerified",
  /** column name */
  Enabled = "enabled",
  /** column name */
  FederationLink = "federationLink",
  /** column name */
  FirstName = "firstName",
  /** column name */
  Id = "id",
  /** column name */
  LastName = "lastName",
  /** column name */
  NotBefore = "notBefore",
  /** column name */
  RealmId = "realmId",
  /** column name */
  ServiceAccountClientLink = "serviceAccountClientLink",
  /** column name */
  Username = "username",
}

export type UserEntityUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<UserEntityIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserEntitySetInput>;
  /** filter the rows which have to be updated */
  where: UserEntityBoolExp;
};

/** aggregate varPop on columns */
export type UserEntityVarPopFields = {
  __typename?: "UserEntityVarPopFields";
  createdTimestamp?: Maybe<Scalars["Float"]["output"]>;
  notBefore?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate varSamp on columns */
export type UserEntityVarSampFields = {
  __typename?: "UserEntityVarSampFields";
  createdTimestamp?: Maybe<Scalars["Float"]["output"]>;
  notBefore?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type UserEntityVarianceFields = {
  __typename?: "UserEntityVarianceFields";
  createdTimestamp?: Maybe<Scalars["Float"]["output"]>;
  notBefore?: Maybe<Scalars["Float"]["output"]>;
};

/** columns and relationships of "user_group_membership" */
export type UserGroupMembership = {
  __typename?: "UserGroupMembership";
  groupId: Scalars["String"]["output"];
  /** An object relationship */
  keycloak_group: KeycloakGroup;
  userId: Scalars["String"]["output"];
  /** An object relationship */
  user_entity: UserEntity;
};

/** aggregated selection of "user_group_membership" */
export type UserGroupMembershipAggregate = {
  __typename?: "UserGroupMembershipAggregate";
  aggregate?: Maybe<UserGroupMembershipAggregateFields>;
  nodes: Array<UserGroupMembership>;
};

export type UserGroupMembershipAggregateBoolExp = {
  count?: InputMaybe<UserGroupMembershipAggregateBoolExpCount>;
};

/** aggregate fields of "user_group_membership" */
export type UserGroupMembershipAggregateFields = {
  __typename?: "UserGroupMembershipAggregateFields";
  count: Scalars["Int"]["output"];
  max?: Maybe<UserGroupMembershipMaxFields>;
  min?: Maybe<UserGroupMembershipMinFields>;
};

/** aggregate fields of "user_group_membership" */
export type UserGroupMembershipAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserGroupMembershipSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "user_group_membership" */
export type UserGroupMembershipAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<UserGroupMembershipMaxOrderBy>;
  min?: InputMaybe<UserGroupMembershipMinOrderBy>;
};

/** input type for inserting array relation for remote table "user_group_membership" */
export type UserGroupMembershipArrRelInsertInput = {
  data: Array<UserGroupMembershipInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<UserGroupMembershipOnConflict>;
};

/** Boolean expression to filter rows from the table "user_group_membership". All fields are combined with a logical 'AND'. */
export type UserGroupMembershipBoolExp = {
  _and?: InputMaybe<Array<UserGroupMembershipBoolExp>>;
  _not?: InputMaybe<UserGroupMembershipBoolExp>;
  _or?: InputMaybe<Array<UserGroupMembershipBoolExp>>;
  groupId?: InputMaybe<StringComparisonExp>;
  keycloak_group?: InputMaybe<KeycloakGroupBoolExp>;
  userId?: InputMaybe<StringComparisonExp>;
  user_entity?: InputMaybe<UserEntityBoolExp>;
};

/** unique or primary key constraints on table "user_group_membership" */
export enum UserGroupMembershipConstraint {
  /** unique or primary key constraint on columns "user_id", "group_id" */
  ConstraintUserGroup = "constraint_user_group",
}

/** input type for inserting data into table "user_group_membership" */
export type UserGroupMembershipInsertInput = {
  groupId?: InputMaybe<Scalars["String"]["input"]>;
  keycloak_group?: InputMaybe<KeycloakGroupObjRelInsertInput>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
  user_entity?: InputMaybe<UserEntityObjRelInsertInput>;
};

/** aggregate max on columns */
export type UserGroupMembershipMaxFields = {
  __typename?: "UserGroupMembershipMaxFields";
  groupId?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "user_group_membership" */
export type UserGroupMembershipMaxOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type UserGroupMembershipMinFields = {
  __typename?: "UserGroupMembershipMinFields";
  groupId?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "user_group_membership" */
export type UserGroupMembershipMinOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "user_group_membership" */
export type UserGroupMembershipMutationResponse = {
  __typename?: "UserGroupMembershipMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<UserGroupMembership>;
};

/** on_conflict condition type for table "user_group_membership" */
export type UserGroupMembershipOnConflict = {
  constraint: UserGroupMembershipConstraint;
  updateColumns?: Array<UserGroupMembershipUpdateColumn>;
  where?: InputMaybe<UserGroupMembershipBoolExp>;
};

/** Ordering options when selecting data from "user_group_membership". */
export type UserGroupMembershipOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  keycloak_group?: InputMaybe<KeycloakGroupOrderBy>;
  userId?: InputMaybe<OrderBy>;
  user_entity?: InputMaybe<UserEntityOrderBy>;
};

/** primary key columns input for table: user_group_membership */
export type UserGroupMembershipPkColumnsInput = {
  groupId: Scalars["String"]["input"];
  userId: Scalars["String"]["input"];
};

/** select columns of table "user_group_membership" */
export enum UserGroupMembershipSelectColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "user_group_membership" */
export type UserGroupMembershipSetInput = {
  groupId?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "user_group_membership" */
export type UserGroupMembershipStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: UserGroupMembershipStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserGroupMembershipStreamCursorValueInput = {
  groupId?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "user_group_membership" */
export enum UserGroupMembershipUpdateColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  UserId = "userId",
}

export type UserGroupMembershipUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserGroupMembershipSetInput>;
  /** filter the rows which have to be updated */
  where: UserGroupMembershipBoolExp;
};

/** columns and relationships of "user_role_mapping" */
export type UserRoleMapping = {
  __typename?: "UserRoleMapping";
  roleId: Scalars["String"]["output"];
  userId: Scalars["String"]["output"];
  /** An object relationship */
  user_entity: UserEntity;
};

/** aggregated selection of "user_role_mapping" */
export type UserRoleMappingAggregate = {
  __typename?: "UserRoleMappingAggregate";
  aggregate?: Maybe<UserRoleMappingAggregateFields>;
  nodes: Array<UserRoleMapping>;
};

export type UserRoleMappingAggregateBoolExp = {
  count?: InputMaybe<UserRoleMappingAggregateBoolExpCount>;
};

/** aggregate fields of "user_role_mapping" */
export type UserRoleMappingAggregateFields = {
  __typename?: "UserRoleMappingAggregateFields";
  count: Scalars["Int"]["output"];
  max?: Maybe<UserRoleMappingMaxFields>;
  min?: Maybe<UserRoleMappingMinFields>;
};

/** aggregate fields of "user_role_mapping" */
export type UserRoleMappingAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserRoleMappingSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "user_role_mapping" */
export type UserRoleMappingAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<UserRoleMappingMaxOrderBy>;
  min?: InputMaybe<UserRoleMappingMinOrderBy>;
};

/** input type for inserting array relation for remote table "user_role_mapping" */
export type UserRoleMappingArrRelInsertInput = {
  data: Array<UserRoleMappingInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<UserRoleMappingOnConflict>;
};

/** Boolean expression to filter rows from the table "user_role_mapping". All fields are combined with a logical 'AND'. */
export type UserRoleMappingBoolExp = {
  _and?: InputMaybe<Array<UserRoleMappingBoolExp>>;
  _not?: InputMaybe<UserRoleMappingBoolExp>;
  _or?: InputMaybe<Array<UserRoleMappingBoolExp>>;
  roleId?: InputMaybe<StringComparisonExp>;
  userId?: InputMaybe<StringComparisonExp>;
  user_entity?: InputMaybe<UserEntityBoolExp>;
};

/** unique or primary key constraints on table "user_role_mapping" */
export enum UserRoleMappingConstraint {
  /** unique or primary key constraint on columns "role_id", "user_id" */
  ConstraintC = "constraint_c",
}

/** input type for inserting data into table "user_role_mapping" */
export type UserRoleMappingInsertInput = {
  roleId?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
  user_entity?: InputMaybe<UserEntityObjRelInsertInput>;
};

/** aggregate max on columns */
export type UserRoleMappingMaxFields = {
  __typename?: "UserRoleMappingMaxFields";
  roleId?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "user_role_mapping" */
export type UserRoleMappingMaxOrderBy = {
  roleId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type UserRoleMappingMinFields = {
  __typename?: "UserRoleMappingMinFields";
  roleId?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "user_role_mapping" */
export type UserRoleMappingMinOrderBy = {
  roleId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "user_role_mapping" */
export type UserRoleMappingMutationResponse = {
  __typename?: "UserRoleMappingMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<UserRoleMapping>;
};

/** on_conflict condition type for table "user_role_mapping" */
export type UserRoleMappingOnConflict = {
  constraint: UserRoleMappingConstraint;
  updateColumns?: Array<UserRoleMappingUpdateColumn>;
  where?: InputMaybe<UserRoleMappingBoolExp>;
};

/** Ordering options when selecting data from "user_role_mapping". */
export type UserRoleMappingOrderBy = {
  roleId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
  user_entity?: InputMaybe<UserEntityOrderBy>;
};

/** primary key columns input for table: user_role_mapping */
export type UserRoleMappingPkColumnsInput = {
  roleId: Scalars["String"]["input"];
  userId: Scalars["String"]["input"];
};

/** select columns of table "user_role_mapping" */
export enum UserRoleMappingSelectColumn {
  /** column name */
  RoleId = "roleId",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "user_role_mapping" */
export type UserRoleMappingSetInput = {
  roleId?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "user_role_mapping" */
export type UserRoleMappingStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: UserRoleMappingStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserRoleMappingStreamCursorValueInput = {
  roleId?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "user_role_mapping" */
export enum UserRoleMappingUpdateColumn {
  /** column name */
  RoleId = "roleId",
  /** column name */
  UserId = "userId",
}

export type UserRoleMappingUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserRoleMappingSetInput>;
  /** filter the rows which have to be updated */
  where: UserRoleMappingBoolExp;
};

export type BureauAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<BureauSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<BureauBoolExp>;
  predicate: IntComparisonExp;
};

export type DepartmentAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<DepartmentSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<DepartmentBoolExp>;
  predicate: IntComparisonExp;
};

export type GradeAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<GradeSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<GradeBoolExp>;
  predicate: IntComparisonExp;
};

export type GroupAttributeAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<GroupAttributeSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<GroupAttributeBoolExp>;
  predicate: IntComparisonExp;
};

export type GroupRoleMappingAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<GroupRoleMappingSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<GroupRoleMappingBoolExp>;
  predicate: IntComparisonExp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "bureau" */
  deleteBureau?: Maybe<BureauMutationResponse>;
  /** delete single row from the table: "bureau" */
  deleteBureauByPk?: Maybe<Bureau>;
  /** delete data from the table: "department" */
  deleteDepartment?: Maybe<DepartmentMutationResponse>;
  /** delete single row from the table: "department" */
  deleteDepartmentByPk?: Maybe<Department>;
  /** delete data from the table: "grade" */
  deleteGrade?: Maybe<GradeMutationResponse>;
  /** delete single row from the table: "grade" */
  deleteGradeByPk?: Maybe<Grade>;
  /** delete data from the table: "group_attribute" */
  deleteGroupAttribute?: Maybe<GroupAttributeMutationResponse>;
  /** delete single row from the table: "group_attribute" */
  deleteGroupAttributeByPk?: Maybe<GroupAttribute>;
  /** delete data from the table: "group_role_mapping" */
  deleteGroupRoleMapping?: Maybe<GroupRoleMappingMutationResponse>;
  /** delete single row from the table: "group_role_mapping" */
  deleteGroupRoleMappingByPk?: Maybe<GroupRoleMapping>;
  /** delete data from the table: "keycloak_group" */
  deleteKeycloakGroup?: Maybe<KeycloakGroupMutationResponse>;
  /** delete single row from the table: "keycloak_group" */
  deleteKeycloakGroupByPk?: Maybe<KeycloakGroup>;
  /** delete data from the table: "keycloak_role" */
  deleteKeycloakRole?: Maybe<KeycloakRoleMutationResponse>;
  /** delete single row from the table: "keycloak_role" */
  deleteKeycloakRoleByPk?: Maybe<KeycloakRole>;
  /** delete data from the table: "role_attribute" */
  deleteRoleAttribute?: Maybe<RoleAttributeMutationResponse>;
  /** delete single row from the table: "role_attribute" */
  deleteRoleAttributeByPk?: Maybe<RoleAttribute>;
  /** delete data from the table: "user_attribute" */
  deleteUserAttribute?: Maybe<UserAttributeMutationResponse>;
  /** delete single row from the table: "user_attribute" */
  deleteUserAttributeByPk?: Maybe<UserAttribute>;
  /** delete data from the table: "user_entity" */
  deleteUserEntity?: Maybe<UserEntityMutationResponse>;
  /** delete single row from the table: "user_entity" */
  deleteUserEntityByPk?: Maybe<UserEntity>;
  /** delete data from the table: "user_group_membership" */
  deleteUserGroupMembership?: Maybe<UserGroupMembershipMutationResponse>;
  /** delete single row from the table: "user_group_membership" */
  deleteUserGroupMembershipByPk?: Maybe<UserGroupMembership>;
  /** delete data from the table: "user_role_mapping" */
  deleteUserRoleMapping?: Maybe<UserRoleMappingMutationResponse>;
  /** delete single row from the table: "user_role_mapping" */
  deleteUserRoleMappingByPk?: Maybe<UserRoleMapping>;
  /** insert data into the table: "bureau" */
  insertBureau?: Maybe<BureauMutationResponse>;
  /** insert a single row into the table: "bureau" */
  insertBureauOne?: Maybe<Bureau>;
  /** insert data into the table: "department" */
  insertDepartment?: Maybe<DepartmentMutationResponse>;
  /** insert a single row into the table: "department" */
  insertDepartmentOne?: Maybe<Department>;
  /** insert data into the table: "grade" */
  insertGrade?: Maybe<GradeMutationResponse>;
  /** insert a single row into the table: "grade" */
  insertGradeOne?: Maybe<Grade>;
  /** insert data into the table: "group_attribute" */
  insertGroupAttribute?: Maybe<GroupAttributeMutationResponse>;
  /** insert a single row into the table: "group_attribute" */
  insertGroupAttributeOne?: Maybe<GroupAttribute>;
  /** insert data into the table: "group_role_mapping" */
  insertGroupRoleMapping?: Maybe<GroupRoleMappingMutationResponse>;
  /** insert a single row into the table: "group_role_mapping" */
  insertGroupRoleMappingOne?: Maybe<GroupRoleMapping>;
  /** insert data into the table: "keycloak_group" */
  insertKeycloakGroup?: Maybe<KeycloakGroupMutationResponse>;
  /** insert a single row into the table: "keycloak_group" */
  insertKeycloakGroupOne?: Maybe<KeycloakGroup>;
  /** insert data into the table: "keycloak_role" */
  insertKeycloakRole?: Maybe<KeycloakRoleMutationResponse>;
  /** insert a single row into the table: "keycloak_role" */
  insertKeycloakRoleOne?: Maybe<KeycloakRole>;
  /** insert data into the table: "role_attribute" */
  insertRoleAttribute?: Maybe<RoleAttributeMutationResponse>;
  /** insert a single row into the table: "role_attribute" */
  insertRoleAttributeOne?: Maybe<RoleAttribute>;
  /** insert data into the table: "user_attribute" */
  insertUserAttribute?: Maybe<UserAttributeMutationResponse>;
  /** insert a single row into the table: "user_attribute" */
  insertUserAttributeOne?: Maybe<UserAttribute>;
  /** insert data into the table: "user_entity" */
  insertUserEntity?: Maybe<UserEntityMutationResponse>;
  /** insert a single row into the table: "user_entity" */
  insertUserEntityOne?: Maybe<UserEntity>;
  /** insert data into the table: "user_group_membership" */
  insertUserGroupMembership?: Maybe<UserGroupMembershipMutationResponse>;
  /** insert a single row into the table: "user_group_membership" */
  insertUserGroupMembershipOne?: Maybe<UserGroupMembership>;
  /** insert data into the table: "user_role_mapping" */
  insertUserRoleMapping?: Maybe<UserRoleMappingMutationResponse>;
  /** insert a single row into the table: "user_role_mapping" */
  insertUserRoleMappingOne?: Maybe<UserRoleMapping>;
  /** update data of the table: "bureau" */
  updateBureau?: Maybe<BureauMutationResponse>;
  /** update single row of the table: "bureau" */
  updateBureauByPk?: Maybe<Bureau>;
  /** update multiples rows of table: "bureau" */
  updateBureauMany?: Maybe<Array<Maybe<BureauMutationResponse>>>;
  /** update data of the table: "department" */
  updateDepartment?: Maybe<DepartmentMutationResponse>;
  /** update single row of the table: "department" */
  updateDepartmentByPk?: Maybe<Department>;
  /** update multiples rows of table: "department" */
  updateDepartmentMany?: Maybe<Array<Maybe<DepartmentMutationResponse>>>;
  /** update data of the table: "grade" */
  updateGrade?: Maybe<GradeMutationResponse>;
  /** update single row of the table: "grade" */
  updateGradeByPk?: Maybe<Grade>;
  /** update multiples rows of table: "grade" */
  updateGradeMany?: Maybe<Array<Maybe<GradeMutationResponse>>>;
  /** update data of the table: "group_attribute" */
  updateGroupAttribute?: Maybe<GroupAttributeMutationResponse>;
  /** update single row of the table: "group_attribute" */
  updateGroupAttributeByPk?: Maybe<GroupAttribute>;
  /** update multiples rows of table: "group_attribute" */
  updateGroupAttributeMany?: Maybe<
    Array<Maybe<GroupAttributeMutationResponse>>
  >;
  /** update data of the table: "group_role_mapping" */
  updateGroupRoleMapping?: Maybe<GroupRoleMappingMutationResponse>;
  /** update single row of the table: "group_role_mapping" */
  updateGroupRoleMappingByPk?: Maybe<GroupRoleMapping>;
  /** update multiples rows of table: "group_role_mapping" */
  updateGroupRoleMappingMany?: Maybe<
    Array<Maybe<GroupRoleMappingMutationResponse>>
  >;
  /** update data of the table: "keycloak_group" */
  updateKeycloakGroup?: Maybe<KeycloakGroupMutationResponse>;
  /** update single row of the table: "keycloak_group" */
  updateKeycloakGroupByPk?: Maybe<KeycloakGroup>;
  /** update multiples rows of table: "keycloak_group" */
  updateKeycloakGroupMany?: Maybe<Array<Maybe<KeycloakGroupMutationResponse>>>;
  /** update data of the table: "keycloak_role" */
  updateKeycloakRole?: Maybe<KeycloakRoleMutationResponse>;
  /** update single row of the table: "keycloak_role" */
  updateKeycloakRoleByPk?: Maybe<KeycloakRole>;
  /** update multiples rows of table: "keycloak_role" */
  updateKeycloakRoleMany?: Maybe<Array<Maybe<KeycloakRoleMutationResponse>>>;
  /** update data of the table: "role_attribute" */
  updateRoleAttribute?: Maybe<RoleAttributeMutationResponse>;
  /** update single row of the table: "role_attribute" */
  updateRoleAttributeByPk?: Maybe<RoleAttribute>;
  /** update multiples rows of table: "role_attribute" */
  updateRoleAttributeMany?: Maybe<Array<Maybe<RoleAttributeMutationResponse>>>;
  /** update data of the table: "user_attribute" */
  updateUserAttribute?: Maybe<UserAttributeMutationResponse>;
  /** update single row of the table: "user_attribute" */
  updateUserAttributeByPk?: Maybe<UserAttribute>;
  /** update multiples rows of table: "user_attribute" */
  updateUserAttributeMany?: Maybe<Array<Maybe<UserAttributeMutationResponse>>>;
  /** update data of the table: "user_entity" */
  updateUserEntity?: Maybe<UserEntityMutationResponse>;
  /** update single row of the table: "user_entity" */
  updateUserEntityByPk?: Maybe<UserEntity>;
  /** update multiples rows of table: "user_entity" */
  updateUserEntityMany?: Maybe<Array<Maybe<UserEntityMutationResponse>>>;
  /** update data of the table: "user_group_membership" */
  updateUserGroupMembership?: Maybe<UserGroupMembershipMutationResponse>;
  /** update single row of the table: "user_group_membership" */
  updateUserGroupMembershipByPk?: Maybe<UserGroupMembership>;
  /** update multiples rows of table: "user_group_membership" */
  updateUserGroupMembershipMany?: Maybe<
    Array<Maybe<UserGroupMembershipMutationResponse>>
  >;
  /** update data of the table: "user_role_mapping" */
  updateUserRoleMapping?: Maybe<UserRoleMappingMutationResponse>;
  /** update single row of the table: "user_role_mapping" */
  updateUserRoleMappingByPk?: Maybe<UserRoleMapping>;
  /** update multiples rows of table: "user_role_mapping" */
  updateUserRoleMappingMany?: Maybe<
    Array<Maybe<UserRoleMappingMutationResponse>>
  >;
};

/** mutation root */
export type Mutation_RootDeleteBureauArgs = {
  where: BureauBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteBureauByPkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteDepartmentArgs = {
  where: DepartmentBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteDepartmentByPkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteGradeArgs = {
  where: GradeBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteGradeByPkArgs = {
  id: Scalars["Int"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteGroupAttributeArgs = {
  where: GroupAttributeBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteGroupAttributeByPkArgs = {
  id: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteGroupRoleMappingArgs = {
  where: GroupRoleMappingBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteGroupRoleMappingByPkArgs = {
  groupId: Scalars["String"]["input"];
  roleId: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteKeycloakGroupArgs = {
  where: KeycloakGroupBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteKeycloakGroupByPkArgs = {
  id: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteKeycloakRoleArgs = {
  where: KeycloakRoleBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteKeycloakRoleByPkArgs = {
  id: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteRoleAttributeArgs = {
  where: RoleAttributeBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteRoleAttributeByPkArgs = {
  id: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteUserAttributeArgs = {
  where: UserAttributeBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteUserAttributeByPkArgs = {
  id: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteUserEntityArgs = {
  where: UserEntityBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteUserEntityByPkArgs = {
  id: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteUserGroupMembershipArgs = {
  where: UserGroupMembershipBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteUserGroupMembershipByPkArgs = {
  groupId: Scalars["String"]["input"];
  userId: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteUserRoleMappingArgs = {
  where: UserRoleMappingBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteUserRoleMappingByPkArgs = {
  roleId: Scalars["String"]["input"];
  userId: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootInsertBureauArgs = {
  objects: Array<BureauInsertInput>;
  onConflict?: InputMaybe<BureauOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertBureauOneArgs = {
  object: BureauInsertInput;
  onConflict?: InputMaybe<BureauOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertDepartmentArgs = {
  objects: Array<DepartmentInsertInput>;
  onConflict?: InputMaybe<DepartmentOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertDepartmentOneArgs = {
  object: DepartmentInsertInput;
  onConflict?: InputMaybe<DepartmentOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertGradeArgs = {
  objects: Array<GradeInsertInput>;
  onConflict?: InputMaybe<GradeOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertGradeOneArgs = {
  object: GradeInsertInput;
  onConflict?: InputMaybe<GradeOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertGroupAttributeArgs = {
  objects: Array<GroupAttributeInsertInput>;
  onConflict?: InputMaybe<GroupAttributeOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertGroupAttributeOneArgs = {
  object: GroupAttributeInsertInput;
  onConflict?: InputMaybe<GroupAttributeOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertGroupRoleMappingArgs = {
  objects: Array<GroupRoleMappingInsertInput>;
  onConflict?: InputMaybe<GroupRoleMappingOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertGroupRoleMappingOneArgs = {
  object: GroupRoleMappingInsertInput;
  onConflict?: InputMaybe<GroupRoleMappingOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertKeycloakGroupArgs = {
  objects: Array<KeycloakGroupInsertInput>;
  onConflict?: InputMaybe<KeycloakGroupOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertKeycloakGroupOneArgs = {
  object: KeycloakGroupInsertInput;
  onConflict?: InputMaybe<KeycloakGroupOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertKeycloakRoleArgs = {
  objects: Array<KeycloakRoleInsertInput>;
  onConflict?: InputMaybe<KeycloakRoleOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertKeycloakRoleOneArgs = {
  object: KeycloakRoleInsertInput;
  onConflict?: InputMaybe<KeycloakRoleOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertRoleAttributeArgs = {
  objects: Array<RoleAttributeInsertInput>;
  onConflict?: InputMaybe<RoleAttributeOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertRoleAttributeOneArgs = {
  object: RoleAttributeInsertInput;
  onConflict?: InputMaybe<RoleAttributeOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertUserAttributeArgs = {
  objects: Array<UserAttributeInsertInput>;
  onConflict?: InputMaybe<UserAttributeOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertUserAttributeOneArgs = {
  object: UserAttributeInsertInput;
  onConflict?: InputMaybe<UserAttributeOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertUserEntityArgs = {
  objects: Array<UserEntityInsertInput>;
  onConflict?: InputMaybe<UserEntityOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertUserEntityOneArgs = {
  object: UserEntityInsertInput;
  onConflict?: InputMaybe<UserEntityOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertUserGroupMembershipArgs = {
  objects: Array<UserGroupMembershipInsertInput>;
  onConflict?: InputMaybe<UserGroupMembershipOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertUserGroupMembershipOneArgs = {
  object: UserGroupMembershipInsertInput;
  onConflict?: InputMaybe<UserGroupMembershipOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertUserRoleMappingArgs = {
  objects: Array<UserRoleMappingInsertInput>;
  onConflict?: InputMaybe<UserRoleMappingOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertUserRoleMappingOneArgs = {
  object: UserRoleMappingInsertInput;
  onConflict?: InputMaybe<UserRoleMappingOnConflict>;
};

/** mutation root */
export type Mutation_RootUpdateBureauArgs = {
  _inc?: InputMaybe<BureauIncInput>;
  _set?: InputMaybe<BureauSetInput>;
  where: BureauBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateBureauByPkArgs = {
  _inc?: InputMaybe<BureauIncInput>;
  _set?: InputMaybe<BureauSetInput>;
  pkColumns: BureauPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateBureauManyArgs = {
  updates: Array<BureauUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateDepartmentArgs = {
  _inc?: InputMaybe<DepartmentIncInput>;
  _set?: InputMaybe<DepartmentSetInput>;
  where: DepartmentBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateDepartmentByPkArgs = {
  _inc?: InputMaybe<DepartmentIncInput>;
  _set?: InputMaybe<DepartmentSetInput>;
  pkColumns: DepartmentPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateDepartmentManyArgs = {
  updates: Array<DepartmentUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateGradeArgs = {
  _inc?: InputMaybe<GradeIncInput>;
  _set?: InputMaybe<GradeSetInput>;
  where: GradeBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateGradeByPkArgs = {
  _inc?: InputMaybe<GradeIncInput>;
  _set?: InputMaybe<GradeSetInput>;
  pkColumns: GradePkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateGradeManyArgs = {
  updates: Array<GradeUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateGroupAttributeArgs = {
  _set?: InputMaybe<GroupAttributeSetInput>;
  where: GroupAttributeBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateGroupAttributeByPkArgs = {
  _set?: InputMaybe<GroupAttributeSetInput>;
  pkColumns: GroupAttributePkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateGroupAttributeManyArgs = {
  updates: Array<GroupAttributeUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateGroupRoleMappingArgs = {
  _set?: InputMaybe<GroupRoleMappingSetInput>;
  where: GroupRoleMappingBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateGroupRoleMappingByPkArgs = {
  _set?: InputMaybe<GroupRoleMappingSetInput>;
  pkColumns: GroupRoleMappingPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateGroupRoleMappingManyArgs = {
  updates: Array<GroupRoleMappingUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateKeycloakGroupArgs = {
  _set?: InputMaybe<KeycloakGroupSetInput>;
  where: KeycloakGroupBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateKeycloakGroupByPkArgs = {
  _set?: InputMaybe<KeycloakGroupSetInput>;
  pkColumns: KeycloakGroupPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateKeycloakGroupManyArgs = {
  updates: Array<KeycloakGroupUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateKeycloakRoleArgs = {
  _set?: InputMaybe<KeycloakRoleSetInput>;
  where: KeycloakRoleBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateKeycloakRoleByPkArgs = {
  _set?: InputMaybe<KeycloakRoleSetInput>;
  pkColumns: KeycloakRolePkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateKeycloakRoleManyArgs = {
  updates: Array<KeycloakRoleUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateRoleAttributeArgs = {
  _set?: InputMaybe<RoleAttributeSetInput>;
  where: RoleAttributeBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateRoleAttributeByPkArgs = {
  _set?: InputMaybe<RoleAttributeSetInput>;
  pkColumns: RoleAttributePkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateRoleAttributeManyArgs = {
  updates: Array<RoleAttributeUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateUserAttributeArgs = {
  _set?: InputMaybe<UserAttributeSetInput>;
  where: UserAttributeBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateUserAttributeByPkArgs = {
  _set?: InputMaybe<UserAttributeSetInput>;
  pkColumns: UserAttributePkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateUserAttributeManyArgs = {
  updates: Array<UserAttributeUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateUserEntityArgs = {
  _inc?: InputMaybe<UserEntityIncInput>;
  _set?: InputMaybe<UserEntitySetInput>;
  where: UserEntityBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateUserEntityByPkArgs = {
  _inc?: InputMaybe<UserEntityIncInput>;
  _set?: InputMaybe<UserEntitySetInput>;
  pkColumns: UserEntityPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateUserEntityManyArgs = {
  updates: Array<UserEntityUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateUserGroupMembershipArgs = {
  _set?: InputMaybe<UserGroupMembershipSetInput>;
  where: UserGroupMembershipBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateUserGroupMembershipByPkArgs = {
  _set?: InputMaybe<UserGroupMembershipSetInput>;
  pkColumns: UserGroupMembershipPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateUserGroupMembershipManyArgs = {
  updates: Array<UserGroupMembershipUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateUserRoleMappingArgs = {
  _set?: InputMaybe<UserRoleMappingSetInput>;
  where: UserRoleMappingBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateUserRoleMappingByPkArgs = {
  _set?: InputMaybe<UserRoleMappingSetInput>;
  pkColumns: UserRoleMappingPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateUserRoleMappingManyArgs = {
  updates: Array<UserRoleMappingUpdates>;
};

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "bureau" */
  bureau: Array<Bureau>;
  /** fetch aggregated fields from the table: "bureau" */
  bureauAggregate: BureauAggregate;
  /** fetch data from the table: "bureau" using primary key columns */
  bureauByPk?: Maybe<Bureau>;
  /** fetch data from the table: "department" */
  department: Array<Department>;
  /** fetch aggregated fields from the table: "department" */
  departmentAggregate: DepartmentAggregate;
  /** fetch data from the table: "department" using primary key columns */
  departmentByPk?: Maybe<Department>;
  /** fetch data from the table: "grade" */
  grade: Array<Grade>;
  /** fetch aggregated fields from the table: "grade" */
  gradeAggregate: GradeAggregate;
  /** fetch data from the table: "grade" using primary key columns */
  gradeByPk?: Maybe<Grade>;
  /** fetch data from the table: "group_attribute" */
  groupAttribute: Array<GroupAttribute>;
  /** fetch aggregated fields from the table: "group_attribute" */
  groupAttributeAggregate: GroupAttributeAggregate;
  /** fetch data from the table: "group_attribute" using primary key columns */
  groupAttributeByPk?: Maybe<GroupAttribute>;
  /** fetch data from the table: "group_role_mapping" */
  groupRoleMapping: Array<GroupRoleMapping>;
  /** fetch aggregated fields from the table: "group_role_mapping" */
  groupRoleMappingAggregate: GroupRoleMappingAggregate;
  /** fetch data from the table: "group_role_mapping" using primary key columns */
  groupRoleMappingByPk?: Maybe<GroupRoleMapping>;
  /** fetch data from the table: "keycloak_group" */
  keycloakGroup: Array<KeycloakGroup>;
  /** fetch aggregated fields from the table: "keycloak_group" */
  keycloakGroupAggregate: KeycloakGroupAggregate;
  /** fetch data from the table: "keycloak_group" using primary key columns */
  keycloakGroupByPk?: Maybe<KeycloakGroup>;
  /** fetch data from the table: "keycloak_role" */
  keycloakRole: Array<KeycloakRole>;
  /** fetch aggregated fields from the table: "keycloak_role" */
  keycloakRoleAggregate: KeycloakRoleAggregate;
  /** fetch data from the table: "keycloak_role" using primary key columns */
  keycloakRoleByPk?: Maybe<KeycloakRole>;
  /** fetch data from the table: "role_attribute" */
  roleAttribute: Array<RoleAttribute>;
  /** fetch aggregated fields from the table: "role_attribute" */
  roleAttributeAggregate: RoleAttributeAggregate;
  /** fetch data from the table: "role_attribute" using primary key columns */
  roleAttributeByPk?: Maybe<RoleAttribute>;
  /** fetch data from the table: "user_attribute" */
  userAttribute: Array<UserAttribute>;
  /** fetch aggregated fields from the table: "user_attribute" */
  userAttributeAggregate: UserAttributeAggregate;
  /** fetch data from the table: "user_attribute" using primary key columns */
  userAttributeByPk?: Maybe<UserAttribute>;
  /** fetch data from the table: "user_entity" */
  userEntity: Array<UserEntity>;
  /** fetch aggregated fields from the table: "user_entity" */
  userEntityAggregate: UserEntityAggregate;
  /** fetch data from the table: "user_entity" using primary key columns */
  userEntityByPk?: Maybe<UserEntity>;
  /** fetch data from the table: "user_group_membership" */
  userGroupMembership: Array<UserGroupMembership>;
  /** fetch aggregated fields from the table: "user_group_membership" */
  userGroupMembershipAggregate: UserGroupMembershipAggregate;
  /** fetch data from the table: "user_group_membership" using primary key columns */
  userGroupMembershipByPk?: Maybe<UserGroupMembership>;
  /** fetch data from the table: "user_role_mapping" */
  userRoleMapping: Array<UserRoleMapping>;
  /** fetch aggregated fields from the table: "user_role_mapping" */
  userRoleMappingAggregate: UserRoleMappingAggregate;
  /** fetch data from the table: "user_role_mapping" using primary key columns */
  userRoleMappingByPk?: Maybe<UserRoleMapping>;
};

export type Query_RootBureauArgs = {
  distinctOn?: InputMaybe<Array<BureauSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<BureauOrderBy>>;
  where?: InputMaybe<BureauBoolExp>;
};

export type Query_RootBureauAggregateArgs = {
  distinctOn?: InputMaybe<Array<BureauSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<BureauOrderBy>>;
  where?: InputMaybe<BureauBoolExp>;
};

export type Query_RootBureauByPkArgs = {
  id: Scalars["Int"]["input"];
};

export type Query_RootDepartmentArgs = {
  distinctOn?: InputMaybe<Array<DepartmentSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<DepartmentOrderBy>>;
  where?: InputMaybe<DepartmentBoolExp>;
};

export type Query_RootDepartmentAggregateArgs = {
  distinctOn?: InputMaybe<Array<DepartmentSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<DepartmentOrderBy>>;
  where?: InputMaybe<DepartmentBoolExp>;
};

export type Query_RootDepartmentByPkArgs = {
  id: Scalars["Int"]["input"];
};

export type Query_RootGradeArgs = {
  distinctOn?: InputMaybe<Array<GradeSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<GradeOrderBy>>;
  where?: InputMaybe<GradeBoolExp>;
};

export type Query_RootGradeAggregateArgs = {
  distinctOn?: InputMaybe<Array<GradeSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<GradeOrderBy>>;
  where?: InputMaybe<GradeBoolExp>;
};

export type Query_RootGradeByPkArgs = {
  id: Scalars["Int"]["input"];
};

export type Query_RootGroupAttributeArgs = {
  distinctOn?: InputMaybe<Array<GroupAttributeSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<GroupAttributeOrderBy>>;
  where?: InputMaybe<GroupAttributeBoolExp>;
};

export type Query_RootGroupAttributeAggregateArgs = {
  distinctOn?: InputMaybe<Array<GroupAttributeSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<GroupAttributeOrderBy>>;
  where?: InputMaybe<GroupAttributeBoolExp>;
};

export type Query_RootGroupAttributeByPkArgs = {
  id: Scalars["String"]["input"];
};

export type Query_RootGroupRoleMappingArgs = {
  distinctOn?: InputMaybe<Array<GroupRoleMappingSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<GroupRoleMappingOrderBy>>;
  where?: InputMaybe<GroupRoleMappingBoolExp>;
};

export type Query_RootGroupRoleMappingAggregateArgs = {
  distinctOn?: InputMaybe<Array<GroupRoleMappingSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<GroupRoleMappingOrderBy>>;
  where?: InputMaybe<GroupRoleMappingBoolExp>;
};

export type Query_RootGroupRoleMappingByPkArgs = {
  groupId: Scalars["String"]["input"];
  roleId: Scalars["String"]["input"];
};

export type Query_RootKeycloakGroupArgs = {
  distinctOn?: InputMaybe<Array<KeycloakGroupSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<KeycloakGroupOrderBy>>;
  where?: InputMaybe<KeycloakGroupBoolExp>;
};

export type Query_RootKeycloakGroupAggregateArgs = {
  distinctOn?: InputMaybe<Array<KeycloakGroupSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<KeycloakGroupOrderBy>>;
  where?: InputMaybe<KeycloakGroupBoolExp>;
};

export type Query_RootKeycloakGroupByPkArgs = {
  id: Scalars["String"]["input"];
};

export type Query_RootKeycloakRoleArgs = {
  distinctOn?: InputMaybe<Array<KeycloakRoleSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<KeycloakRoleOrderBy>>;
  where?: InputMaybe<KeycloakRoleBoolExp>;
};

export type Query_RootKeycloakRoleAggregateArgs = {
  distinctOn?: InputMaybe<Array<KeycloakRoleSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<KeycloakRoleOrderBy>>;
  where?: InputMaybe<KeycloakRoleBoolExp>;
};

export type Query_RootKeycloakRoleByPkArgs = {
  id: Scalars["String"]["input"];
};

export type Query_RootRoleAttributeArgs = {
  distinctOn?: InputMaybe<Array<RoleAttributeSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<RoleAttributeOrderBy>>;
  where?: InputMaybe<RoleAttributeBoolExp>;
};

export type Query_RootRoleAttributeAggregateArgs = {
  distinctOn?: InputMaybe<Array<RoleAttributeSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<RoleAttributeOrderBy>>;
  where?: InputMaybe<RoleAttributeBoolExp>;
};

export type Query_RootRoleAttributeByPkArgs = {
  id: Scalars["String"]["input"];
};

export type Query_RootUserAttributeArgs = {
  distinctOn?: InputMaybe<Array<UserAttributeSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserAttributeOrderBy>>;
  where?: InputMaybe<UserAttributeBoolExp>;
};

export type Query_RootUserAttributeAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserAttributeSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserAttributeOrderBy>>;
  where?: InputMaybe<UserAttributeBoolExp>;
};

export type Query_RootUserAttributeByPkArgs = {
  id: Scalars["String"]["input"];
};

export type Query_RootUserEntityArgs = {
  distinctOn?: InputMaybe<Array<UserEntitySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserEntityOrderBy>>;
  where?: InputMaybe<UserEntityBoolExp>;
};

export type Query_RootUserEntityAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserEntitySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserEntityOrderBy>>;
  where?: InputMaybe<UserEntityBoolExp>;
};

export type Query_RootUserEntityByPkArgs = {
  id: Scalars["String"]["input"];
};

export type Query_RootUserGroupMembershipArgs = {
  distinctOn?: InputMaybe<Array<UserGroupMembershipSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserGroupMembershipOrderBy>>;
  where?: InputMaybe<UserGroupMembershipBoolExp>;
};

export type Query_RootUserGroupMembershipAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserGroupMembershipSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserGroupMembershipOrderBy>>;
  where?: InputMaybe<UserGroupMembershipBoolExp>;
};

export type Query_RootUserGroupMembershipByPkArgs = {
  groupId: Scalars["String"]["input"];
  userId: Scalars["String"]["input"];
};

export type Query_RootUserRoleMappingArgs = {
  distinctOn?: InputMaybe<Array<UserRoleMappingSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserRoleMappingOrderBy>>;
  where?: InputMaybe<UserRoleMappingBoolExp>;
};

export type Query_RootUserRoleMappingAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserRoleMappingSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserRoleMappingOrderBy>>;
  where?: InputMaybe<UserRoleMappingBoolExp>;
};

export type Query_RootUserRoleMappingByPkArgs = {
  roleId: Scalars["String"]["input"];
  userId: Scalars["String"]["input"];
};

export type RoleAttributeAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<RoleAttributeSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<RoleAttributeBoolExp>;
  predicate: IntComparisonExp;
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "bureau" */
  bureau: Array<Bureau>;
  /** fetch aggregated fields from the table: "bureau" */
  bureauAggregate: BureauAggregate;
  /** fetch data from the table: "bureau" using primary key columns */
  bureauByPk?: Maybe<Bureau>;
  /** fetch data from the table in a streaming manner: "bureau" */
  bureauStream: Array<Bureau>;
  /** fetch data from the table: "department" */
  department: Array<Department>;
  /** fetch aggregated fields from the table: "department" */
  departmentAggregate: DepartmentAggregate;
  /** fetch data from the table: "department" using primary key columns */
  departmentByPk?: Maybe<Department>;
  /** fetch data from the table in a streaming manner: "department" */
  departmentStream: Array<Department>;
  /** fetch data from the table: "grade" */
  grade: Array<Grade>;
  /** fetch aggregated fields from the table: "grade" */
  gradeAggregate: GradeAggregate;
  /** fetch data from the table: "grade" using primary key columns */
  gradeByPk?: Maybe<Grade>;
  /** fetch data from the table in a streaming manner: "grade" */
  gradeStream: Array<Grade>;
  /** fetch data from the table: "group_attribute" */
  groupAttribute: Array<GroupAttribute>;
  /** fetch aggregated fields from the table: "group_attribute" */
  groupAttributeAggregate: GroupAttributeAggregate;
  /** fetch data from the table: "group_attribute" using primary key columns */
  groupAttributeByPk?: Maybe<GroupAttribute>;
  /** fetch data from the table in a streaming manner: "group_attribute" */
  groupAttributeStream: Array<GroupAttribute>;
  /** fetch data from the table: "group_role_mapping" */
  groupRoleMapping: Array<GroupRoleMapping>;
  /** fetch aggregated fields from the table: "group_role_mapping" */
  groupRoleMappingAggregate: GroupRoleMappingAggregate;
  /** fetch data from the table: "group_role_mapping" using primary key columns */
  groupRoleMappingByPk?: Maybe<GroupRoleMapping>;
  /** fetch data from the table in a streaming manner: "group_role_mapping" */
  groupRoleMappingStream: Array<GroupRoleMapping>;
  /** fetch data from the table: "keycloak_group" */
  keycloakGroup: Array<KeycloakGroup>;
  /** fetch aggregated fields from the table: "keycloak_group" */
  keycloakGroupAggregate: KeycloakGroupAggregate;
  /** fetch data from the table: "keycloak_group" using primary key columns */
  keycloakGroupByPk?: Maybe<KeycloakGroup>;
  /** fetch data from the table in a streaming manner: "keycloak_group" */
  keycloakGroupStream: Array<KeycloakGroup>;
  /** fetch data from the table: "keycloak_role" */
  keycloakRole: Array<KeycloakRole>;
  /** fetch aggregated fields from the table: "keycloak_role" */
  keycloakRoleAggregate: KeycloakRoleAggregate;
  /** fetch data from the table: "keycloak_role" using primary key columns */
  keycloakRoleByPk?: Maybe<KeycloakRole>;
  /** fetch data from the table in a streaming manner: "keycloak_role" */
  keycloakRoleStream: Array<KeycloakRole>;
  /** fetch data from the table: "role_attribute" */
  roleAttribute: Array<RoleAttribute>;
  /** fetch aggregated fields from the table: "role_attribute" */
  roleAttributeAggregate: RoleAttributeAggregate;
  /** fetch data from the table: "role_attribute" using primary key columns */
  roleAttributeByPk?: Maybe<RoleAttribute>;
  /** fetch data from the table in a streaming manner: "role_attribute" */
  roleAttributeStream: Array<RoleAttribute>;
  /** fetch data from the table: "user_attribute" */
  userAttribute: Array<UserAttribute>;
  /** fetch aggregated fields from the table: "user_attribute" */
  userAttributeAggregate: UserAttributeAggregate;
  /** fetch data from the table: "user_attribute" using primary key columns */
  userAttributeByPk?: Maybe<UserAttribute>;
  /** fetch data from the table in a streaming manner: "user_attribute" */
  userAttributeStream: Array<UserAttribute>;
  /** fetch data from the table: "user_entity" */
  userEntity: Array<UserEntity>;
  /** fetch aggregated fields from the table: "user_entity" */
  userEntityAggregate: UserEntityAggregate;
  /** fetch data from the table: "user_entity" using primary key columns */
  userEntityByPk?: Maybe<UserEntity>;
  /** fetch data from the table in a streaming manner: "user_entity" */
  userEntityStream: Array<UserEntity>;
  /** fetch data from the table: "user_group_membership" */
  userGroupMembership: Array<UserGroupMembership>;
  /** fetch aggregated fields from the table: "user_group_membership" */
  userGroupMembershipAggregate: UserGroupMembershipAggregate;
  /** fetch data from the table: "user_group_membership" using primary key columns */
  userGroupMembershipByPk?: Maybe<UserGroupMembership>;
  /** fetch data from the table in a streaming manner: "user_group_membership" */
  userGroupMembershipStream: Array<UserGroupMembership>;
  /** fetch data from the table: "user_role_mapping" */
  userRoleMapping: Array<UserRoleMapping>;
  /** fetch aggregated fields from the table: "user_role_mapping" */
  userRoleMappingAggregate: UserRoleMappingAggregate;
  /** fetch data from the table: "user_role_mapping" using primary key columns */
  userRoleMappingByPk?: Maybe<UserRoleMapping>;
  /** fetch data from the table in a streaming manner: "user_role_mapping" */
  userRoleMappingStream: Array<UserRoleMapping>;
};

export type Subscription_RootBureauArgs = {
  distinctOn?: InputMaybe<Array<BureauSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<BureauOrderBy>>;
  where?: InputMaybe<BureauBoolExp>;
};

export type Subscription_RootBureauAggregateArgs = {
  distinctOn?: InputMaybe<Array<BureauSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<BureauOrderBy>>;
  where?: InputMaybe<BureauBoolExp>;
};

export type Subscription_RootBureauByPkArgs = {
  id: Scalars["Int"]["input"];
};

export type Subscription_RootBureauStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<BureauStreamCursorInput>>;
  where?: InputMaybe<BureauBoolExp>;
};

export type Subscription_RootDepartmentArgs = {
  distinctOn?: InputMaybe<Array<DepartmentSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<DepartmentOrderBy>>;
  where?: InputMaybe<DepartmentBoolExp>;
};

export type Subscription_RootDepartmentAggregateArgs = {
  distinctOn?: InputMaybe<Array<DepartmentSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<DepartmentOrderBy>>;
  where?: InputMaybe<DepartmentBoolExp>;
};

export type Subscription_RootDepartmentByPkArgs = {
  id: Scalars["Int"]["input"];
};

export type Subscription_RootDepartmentStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<DepartmentStreamCursorInput>>;
  where?: InputMaybe<DepartmentBoolExp>;
};

export type Subscription_RootGradeArgs = {
  distinctOn?: InputMaybe<Array<GradeSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<GradeOrderBy>>;
  where?: InputMaybe<GradeBoolExp>;
};

export type Subscription_RootGradeAggregateArgs = {
  distinctOn?: InputMaybe<Array<GradeSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<GradeOrderBy>>;
  where?: InputMaybe<GradeBoolExp>;
};

export type Subscription_RootGradeByPkArgs = {
  id: Scalars["Int"]["input"];
};

export type Subscription_RootGradeStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<GradeStreamCursorInput>>;
  where?: InputMaybe<GradeBoolExp>;
};

export type Subscription_RootGroupAttributeArgs = {
  distinctOn?: InputMaybe<Array<GroupAttributeSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<GroupAttributeOrderBy>>;
  where?: InputMaybe<GroupAttributeBoolExp>;
};

export type Subscription_RootGroupAttributeAggregateArgs = {
  distinctOn?: InputMaybe<Array<GroupAttributeSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<GroupAttributeOrderBy>>;
  where?: InputMaybe<GroupAttributeBoolExp>;
};

export type Subscription_RootGroupAttributeByPkArgs = {
  id: Scalars["String"]["input"];
};

export type Subscription_RootGroupAttributeStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<GroupAttributeStreamCursorInput>>;
  where?: InputMaybe<GroupAttributeBoolExp>;
};

export type Subscription_RootGroupRoleMappingArgs = {
  distinctOn?: InputMaybe<Array<GroupRoleMappingSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<GroupRoleMappingOrderBy>>;
  where?: InputMaybe<GroupRoleMappingBoolExp>;
};

export type Subscription_RootGroupRoleMappingAggregateArgs = {
  distinctOn?: InputMaybe<Array<GroupRoleMappingSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<GroupRoleMappingOrderBy>>;
  where?: InputMaybe<GroupRoleMappingBoolExp>;
};

export type Subscription_RootGroupRoleMappingByPkArgs = {
  groupId: Scalars["String"]["input"];
  roleId: Scalars["String"]["input"];
};

export type Subscription_RootGroupRoleMappingStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<GroupRoleMappingStreamCursorInput>>;
  where?: InputMaybe<GroupRoleMappingBoolExp>;
};

export type Subscription_RootKeycloakGroupArgs = {
  distinctOn?: InputMaybe<Array<KeycloakGroupSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<KeycloakGroupOrderBy>>;
  where?: InputMaybe<KeycloakGroupBoolExp>;
};

export type Subscription_RootKeycloakGroupAggregateArgs = {
  distinctOn?: InputMaybe<Array<KeycloakGroupSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<KeycloakGroupOrderBy>>;
  where?: InputMaybe<KeycloakGroupBoolExp>;
};

export type Subscription_RootKeycloakGroupByPkArgs = {
  id: Scalars["String"]["input"];
};

export type Subscription_RootKeycloakGroupStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<KeycloakGroupStreamCursorInput>>;
  where?: InputMaybe<KeycloakGroupBoolExp>;
};

export type Subscription_RootKeycloakRoleArgs = {
  distinctOn?: InputMaybe<Array<KeycloakRoleSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<KeycloakRoleOrderBy>>;
  where?: InputMaybe<KeycloakRoleBoolExp>;
};

export type Subscription_RootKeycloakRoleAggregateArgs = {
  distinctOn?: InputMaybe<Array<KeycloakRoleSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<KeycloakRoleOrderBy>>;
  where?: InputMaybe<KeycloakRoleBoolExp>;
};

export type Subscription_RootKeycloakRoleByPkArgs = {
  id: Scalars["String"]["input"];
};

export type Subscription_RootKeycloakRoleStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<KeycloakRoleStreamCursorInput>>;
  where?: InputMaybe<KeycloakRoleBoolExp>;
};

export type Subscription_RootRoleAttributeArgs = {
  distinctOn?: InputMaybe<Array<RoleAttributeSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<RoleAttributeOrderBy>>;
  where?: InputMaybe<RoleAttributeBoolExp>;
};

export type Subscription_RootRoleAttributeAggregateArgs = {
  distinctOn?: InputMaybe<Array<RoleAttributeSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<RoleAttributeOrderBy>>;
  where?: InputMaybe<RoleAttributeBoolExp>;
};

export type Subscription_RootRoleAttributeByPkArgs = {
  id: Scalars["String"]["input"];
};

export type Subscription_RootRoleAttributeStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<RoleAttributeStreamCursorInput>>;
  where?: InputMaybe<RoleAttributeBoolExp>;
};

export type Subscription_RootUserAttributeArgs = {
  distinctOn?: InputMaybe<Array<UserAttributeSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserAttributeOrderBy>>;
  where?: InputMaybe<UserAttributeBoolExp>;
};

export type Subscription_RootUserAttributeAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserAttributeSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserAttributeOrderBy>>;
  where?: InputMaybe<UserAttributeBoolExp>;
};

export type Subscription_RootUserAttributeByPkArgs = {
  id: Scalars["String"]["input"];
};

export type Subscription_RootUserAttributeStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<UserAttributeStreamCursorInput>>;
  where?: InputMaybe<UserAttributeBoolExp>;
};

export type Subscription_RootUserEntityArgs = {
  distinctOn?: InputMaybe<Array<UserEntitySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserEntityOrderBy>>;
  where?: InputMaybe<UserEntityBoolExp>;
};

export type Subscription_RootUserEntityAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserEntitySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserEntityOrderBy>>;
  where?: InputMaybe<UserEntityBoolExp>;
};

export type Subscription_RootUserEntityByPkArgs = {
  id: Scalars["String"]["input"];
};

export type Subscription_RootUserEntityStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<UserEntityStreamCursorInput>>;
  where?: InputMaybe<UserEntityBoolExp>;
};

export type Subscription_RootUserGroupMembershipArgs = {
  distinctOn?: InputMaybe<Array<UserGroupMembershipSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserGroupMembershipOrderBy>>;
  where?: InputMaybe<UserGroupMembershipBoolExp>;
};

export type Subscription_RootUserGroupMembershipAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserGroupMembershipSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserGroupMembershipOrderBy>>;
  where?: InputMaybe<UserGroupMembershipBoolExp>;
};

export type Subscription_RootUserGroupMembershipByPkArgs = {
  groupId: Scalars["String"]["input"];
  userId: Scalars["String"]["input"];
};

export type Subscription_RootUserGroupMembershipStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<UserGroupMembershipStreamCursorInput>>;
  where?: InputMaybe<UserGroupMembershipBoolExp>;
};

export type Subscription_RootUserRoleMappingArgs = {
  distinctOn?: InputMaybe<Array<UserRoleMappingSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserRoleMappingOrderBy>>;
  where?: InputMaybe<UserRoleMappingBoolExp>;
};

export type Subscription_RootUserRoleMappingAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserRoleMappingSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Array<UserRoleMappingOrderBy>>;
  where?: InputMaybe<UserRoleMappingBoolExp>;
};

export type Subscription_RootUserRoleMappingByPkArgs = {
  roleId: Scalars["String"]["input"];
  userId: Scalars["String"]["input"];
};

export type Subscription_RootUserRoleMappingStreamArgs = {
  batchSize: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<UserRoleMappingStreamCursorInput>>;
  where?: InputMaybe<UserRoleMappingBoolExp>;
};

export type UserAttributeAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<UserAttributeSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<UserAttributeBoolExp>;
  predicate: IntComparisonExp;
};

export type UserGroupMembershipAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<UserGroupMembershipSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<UserGroupMembershipBoolExp>;
  predicate: IntComparisonExp;
};

export type UserRoleMappingAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<UserRoleMappingSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<UserRoleMappingBoolExp>;
  predicate: IntComparisonExp;
};

export type GetOneUserNameQueryVariables = Exact<{
  userId: Scalars["String"]["input"];
}>;

export type GetOneUserNameQuery = {
  __typename?: "query_root";
  userEntityByPk?: {
    __typename?: "UserEntity";
    firstName?: string | null;
    lastName?: string | null;
  } | null;
};
export default {
  __schema: {
    queryType: {
      name: "query_root",
    },
    mutationType: {
      name: "mutation_root",
    },
    subscriptionType: {
      name: "subscription_root",
    },
    types: [
      {
        kind: "OBJECT",
        name: "Bureau",
        fields: [
          {
            name: "groupId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "keycloak_group",
            type: {
              kind: "OBJECT",
              name: "KeycloakGroup",
              ofType: null,
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "BureauAggregate",
        fields: [
          {
            name: "aggregate",
            type: {
              kind: "OBJECT",
              name: "BureauAggregateFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Bureau",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "BureauAggregateFields",
        fields: [
          {
            name: "avg",
            type: {
              kind: "OBJECT",
              name: "BureauAvgFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "count",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [
              {
                name: "columns",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "distinct",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "max",
            type: {
              kind: "OBJECT",
              name: "BureauMaxFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "min",
            type: {
              kind: "OBJECT",
              name: "BureauMinFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "stddev",
            type: {
              kind: "OBJECT",
              name: "BureauStddevFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "stddevPop",
            type: {
              kind: "OBJECT",
              name: "BureauStddevPopFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "stddevSamp",
            type: {
              kind: "OBJECT",
              name: "BureauStddevSampFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "sum",
            type: {
              kind: "OBJECT",
              name: "BureauSumFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "varPop",
            type: {
              kind: "OBJECT",
              name: "BureauVarPopFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "varSamp",
            type: {
              kind: "OBJECT",
              name: "BureauVarSampFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "variance",
            type: {
              kind: "OBJECT",
              name: "BureauVarianceFields",
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "BureauAvgFields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "BureauMaxFields",
        fields: [
          {
            name: "groupId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "BureauMinFields",
        fields: [
          {
            name: "groupId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "BureauMutationResponse",
        fields: [
          {
            name: "affectedRows",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "returning",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Bureau",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "BureauStddevFields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "BureauStddevPopFields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "BureauStddevSampFields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "BureauSumFields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "BureauVarPopFields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "BureauVarSampFields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "BureauVarianceFields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "Department",
        fields: [
          {
            name: "groupId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "keycloak_group",
            type: {
              kind: "OBJECT",
              name: "KeycloakGroup",
              ofType: null,
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "DepartmentAggregate",
        fields: [
          {
            name: "aggregate",
            type: {
              kind: "OBJECT",
              name: "DepartmentAggregateFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Department",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "DepartmentAggregateFields",
        fields: [
          {
            name: "avg",
            type: {
              kind: "OBJECT",
              name: "DepartmentAvgFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "count",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [
              {
                name: "columns",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "distinct",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "max",
            type: {
              kind: "OBJECT",
              name: "DepartmentMaxFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "min",
            type: {
              kind: "OBJECT",
              name: "DepartmentMinFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "stddev",
            type: {
              kind: "OBJECT",
              name: "DepartmentStddevFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "stddevPop",
            type: {
              kind: "OBJECT",
              name: "DepartmentStddevPopFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "stddevSamp",
            type: {
              kind: "OBJECT",
              name: "DepartmentStddevSampFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "sum",
            type: {
              kind: "OBJECT",
              name: "DepartmentSumFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "varPop",
            type: {
              kind: "OBJECT",
              name: "DepartmentVarPopFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "varSamp",
            type: {
              kind: "OBJECT",
              name: "DepartmentVarSampFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "variance",
            type: {
              kind: "OBJECT",
              name: "DepartmentVarianceFields",
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "DepartmentAvgFields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "DepartmentMaxFields",
        fields: [
          {
            name: "groupId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "DepartmentMinFields",
        fields: [
          {
            name: "groupId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "DepartmentMutationResponse",
        fields: [
          {
            name: "affectedRows",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "returning",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Department",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "DepartmentStddevFields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "DepartmentStddevPopFields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "DepartmentStddevSampFields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "DepartmentSumFields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "DepartmentVarPopFields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "DepartmentVarSampFields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "DepartmentVarianceFields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "Grade",
        fields: [
          {
            name: "groupId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "keycloak_group",
            type: {
              kind: "OBJECT",
              name: "KeycloakGroup",
              ofType: null,
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "GradeAggregate",
        fields: [
          {
            name: "aggregate",
            type: {
              kind: "OBJECT",
              name: "GradeAggregateFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Grade",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "GradeAggregateFields",
        fields: [
          {
            name: "avg",
            type: {
              kind: "OBJECT",
              name: "GradeAvgFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "count",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [
              {
                name: "columns",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "distinct",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "max",
            type: {
              kind: "OBJECT",
              name: "GradeMaxFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "min",
            type: {
              kind: "OBJECT",
              name: "GradeMinFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "stddev",
            type: {
              kind: "OBJECT",
              name: "GradeStddevFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "stddevPop",
            type: {
              kind: "OBJECT",
              name: "GradeStddevPopFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "stddevSamp",
            type: {
              kind: "OBJECT",
              name: "GradeStddevSampFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "sum",
            type: {
              kind: "OBJECT",
              name: "GradeSumFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "varPop",
            type: {
              kind: "OBJECT",
              name: "GradeVarPopFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "varSamp",
            type: {
              kind: "OBJECT",
              name: "GradeVarSampFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "variance",
            type: {
              kind: "OBJECT",
              name: "GradeVarianceFields",
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "GradeAvgFields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "GradeMaxFields",
        fields: [
          {
            name: "groupId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "GradeMinFields",
        fields: [
          {
            name: "groupId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "GradeMutationResponse",
        fields: [
          {
            name: "affectedRows",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "returning",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Grade",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "GradeStddevFields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "GradeStddevPopFields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "GradeStddevSampFields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "GradeSumFields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "GradeVarPopFields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "GradeVarSampFields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "GradeVarianceFields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "GroupAttribute",
        fields: [
          {
            name: "groupId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "keycloak_group",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "KeycloakGroup",
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "value",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "GroupAttributeAggregate",
        fields: [
          {
            name: "aggregate",
            type: {
              kind: "OBJECT",
              name: "GroupAttributeAggregateFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "GroupAttribute",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "GroupAttributeAggregateFields",
        fields: [
          {
            name: "count",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [
              {
                name: "columns",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "distinct",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "max",
            type: {
              kind: "OBJECT",
              name: "GroupAttributeMaxFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "min",
            type: {
              kind: "OBJECT",
              name: "GroupAttributeMinFields",
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "GroupAttributeMaxFields",
        fields: [
          {
            name: "groupId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "value",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "GroupAttributeMinFields",
        fields: [
          {
            name: "groupId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "value",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "GroupAttributeMutationResponse",
        fields: [
          {
            name: "affectedRows",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "returning",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "GroupAttribute",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "GroupRoleMapping",
        fields: [
          {
            name: "groupId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "keycloak_group",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "KeycloakGroup",
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: "roleId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "GroupRoleMappingAggregate",
        fields: [
          {
            name: "aggregate",
            type: {
              kind: "OBJECT",
              name: "GroupRoleMappingAggregateFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "GroupRoleMapping",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "GroupRoleMappingAggregateFields",
        fields: [
          {
            name: "count",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [
              {
                name: "columns",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "distinct",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "max",
            type: {
              kind: "OBJECT",
              name: "GroupRoleMappingMaxFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "min",
            type: {
              kind: "OBJECT",
              name: "GroupRoleMappingMinFields",
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "GroupRoleMappingMaxFields",
        fields: [
          {
            name: "groupId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "roleId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "GroupRoleMappingMinFields",
        fields: [
          {
            name: "groupId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "roleId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "GroupRoleMappingMutationResponse",
        fields: [
          {
            name: "affectedRows",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "returning",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "GroupRoleMapping",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "KeycloakGroup",
        fields: [
          {
            name: "bureaus",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Bureau",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "bureausAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "BureauAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "departments",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Department",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "departmentsAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "DepartmentAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "grades",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Grade",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "gradesAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "GradeAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "groupAttributesAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "GroupAttributeAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "groupRoleMappingsAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "GroupRoleMappingAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "group_attributes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "GroupAttribute",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "group_role_mappings",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "GroupRoleMapping",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "parentGroup",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "realmId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "userGroupMembershipsAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "UserGroupMembershipAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "user_group_memberships",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "UserGroupMembership",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "KeycloakGroupAggregate",
        fields: [
          {
            name: "aggregate",
            type: {
              kind: "OBJECT",
              name: "KeycloakGroupAggregateFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "KeycloakGroup",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "KeycloakGroupAggregateFields",
        fields: [
          {
            name: "count",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [
              {
                name: "columns",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "distinct",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "max",
            type: {
              kind: "OBJECT",
              name: "KeycloakGroupMaxFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "min",
            type: {
              kind: "OBJECT",
              name: "KeycloakGroupMinFields",
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "KeycloakGroupMaxFields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "parentGroup",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "realmId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "KeycloakGroupMinFields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "parentGroup",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "realmId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "KeycloakGroupMutationResponse",
        fields: [
          {
            name: "affectedRows",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "returning",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "KeycloakGroup",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "KeycloakRole",
        fields: [
          {
            name: "client",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "clientRealmConstraint",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "clientRole",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "description",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "realm",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "realmId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "roleAttributesAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "RoleAttributeAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "role_attributes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "RoleAttribute",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "KeycloakRoleAggregate",
        fields: [
          {
            name: "aggregate",
            type: {
              kind: "OBJECT",
              name: "KeycloakRoleAggregateFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "KeycloakRole",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "KeycloakRoleAggregateFields",
        fields: [
          {
            name: "count",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [
              {
                name: "columns",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "distinct",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "max",
            type: {
              kind: "OBJECT",
              name: "KeycloakRoleMaxFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "min",
            type: {
              kind: "OBJECT",
              name: "KeycloakRoleMinFields",
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "KeycloakRoleMaxFields",
        fields: [
          {
            name: "client",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "clientRealmConstraint",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "description",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "realm",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "realmId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "KeycloakRoleMinFields",
        fields: [
          {
            name: "client",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "clientRealmConstraint",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "description",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "realm",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "realmId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "KeycloakRoleMutationResponse",
        fields: [
          {
            name: "affectedRows",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "returning",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "KeycloakRole",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "RoleAttribute",
        fields: [
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "keycloak_role",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "KeycloakRole",
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "roleId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "value",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "RoleAttributeAggregate",
        fields: [
          {
            name: "aggregate",
            type: {
              kind: "OBJECT",
              name: "RoleAttributeAggregateFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "RoleAttribute",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "RoleAttributeAggregateFields",
        fields: [
          {
            name: "count",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [
              {
                name: "columns",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "distinct",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "max",
            type: {
              kind: "OBJECT",
              name: "RoleAttributeMaxFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "min",
            type: {
              kind: "OBJECT",
              name: "RoleAttributeMinFields",
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "RoleAttributeMaxFields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "roleId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "value",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "RoleAttributeMinFields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "roleId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "value",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "RoleAttributeMutationResponse",
        fields: [
          {
            name: "affectedRows",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "returning",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "RoleAttribute",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserAttribute",
        fields: [
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "longValue",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "longValueHash",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "longValueHashLowerCase",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "userId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "user_entity",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "UserEntity",
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: "value",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserAttributeAggregate",
        fields: [
          {
            name: "aggregate",
            type: {
              kind: "OBJECT",
              name: "UserAttributeAggregateFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "UserAttribute",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserAttributeAggregateFields",
        fields: [
          {
            name: "count",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [
              {
                name: "columns",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "distinct",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "max",
            type: {
              kind: "OBJECT",
              name: "UserAttributeMaxFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "min",
            type: {
              kind: "OBJECT",
              name: "UserAttributeMinFields",
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserAttributeMaxFields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "longValue",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "userId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "value",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserAttributeMinFields",
        fields: [
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "longValue",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "userId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "value",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserAttributeMutationResponse",
        fields: [
          {
            name: "affectedRows",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "returning",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "UserAttribute",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserEntity",
        fields: [
          {
            name: "createdTimestamp",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "email",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "emailConstraint",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "emailVerified",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "enabled",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "federationLink",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "firstName",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "lastName",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "notBefore",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "realmId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "serviceAccountClientLink",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "userAttributesAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "UserAttributeAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "userGroupMembershipsAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "UserGroupMembershipAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "userRoleMappingsAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "UserRoleMappingAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "user_attributes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "UserAttribute",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "user_group_memberships",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "UserGroupMembership",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "user_role_mappings",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "UserRoleMapping",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "username",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserEntityAggregate",
        fields: [
          {
            name: "aggregate",
            type: {
              kind: "OBJECT",
              name: "UserEntityAggregateFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "UserEntity",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserEntityAggregateFields",
        fields: [
          {
            name: "avg",
            type: {
              kind: "OBJECT",
              name: "UserEntityAvgFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "count",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [
              {
                name: "columns",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "distinct",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "max",
            type: {
              kind: "OBJECT",
              name: "UserEntityMaxFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "min",
            type: {
              kind: "OBJECT",
              name: "UserEntityMinFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "stddev",
            type: {
              kind: "OBJECT",
              name: "UserEntityStddevFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "stddevPop",
            type: {
              kind: "OBJECT",
              name: "UserEntityStddevPopFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "stddevSamp",
            type: {
              kind: "OBJECT",
              name: "UserEntityStddevSampFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "sum",
            type: {
              kind: "OBJECT",
              name: "UserEntitySumFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "varPop",
            type: {
              kind: "OBJECT",
              name: "UserEntityVarPopFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "varSamp",
            type: {
              kind: "OBJECT",
              name: "UserEntityVarSampFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "variance",
            type: {
              kind: "OBJECT",
              name: "UserEntityVarianceFields",
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserEntityAvgFields",
        fields: [
          {
            name: "createdTimestamp",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "notBefore",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserEntityMaxFields",
        fields: [
          {
            name: "createdTimestamp",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "email",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "emailConstraint",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "federationLink",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "firstName",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "lastName",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "notBefore",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "realmId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "serviceAccountClientLink",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "username",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserEntityMinFields",
        fields: [
          {
            name: "createdTimestamp",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "email",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "emailConstraint",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "federationLink",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "firstName",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "lastName",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "notBefore",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "realmId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "serviceAccountClientLink",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "username",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserEntityMutationResponse",
        fields: [
          {
            name: "affectedRows",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "returning",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "UserEntity",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserEntityStddevFields",
        fields: [
          {
            name: "createdTimestamp",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "notBefore",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserEntityStddevPopFields",
        fields: [
          {
            name: "createdTimestamp",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "notBefore",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserEntityStddevSampFields",
        fields: [
          {
            name: "createdTimestamp",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "notBefore",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserEntitySumFields",
        fields: [
          {
            name: "createdTimestamp",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "notBefore",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserEntityVarPopFields",
        fields: [
          {
            name: "createdTimestamp",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "notBefore",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserEntityVarSampFields",
        fields: [
          {
            name: "createdTimestamp",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "notBefore",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserEntityVarianceFields",
        fields: [
          {
            name: "createdTimestamp",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "notBefore",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserGroupMembership",
        fields: [
          {
            name: "groupId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "keycloak_group",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "KeycloakGroup",
                ofType: null,
              },
            },
            args: [],
          },
          {
            name: "userId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "user_entity",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "UserEntity",
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserGroupMembershipAggregate",
        fields: [
          {
            name: "aggregate",
            type: {
              kind: "OBJECT",
              name: "UserGroupMembershipAggregateFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "UserGroupMembership",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserGroupMembershipAggregateFields",
        fields: [
          {
            name: "count",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [
              {
                name: "columns",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "distinct",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "max",
            type: {
              kind: "OBJECT",
              name: "UserGroupMembershipMaxFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "min",
            type: {
              kind: "OBJECT",
              name: "UserGroupMembershipMinFields",
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserGroupMembershipMaxFields",
        fields: [
          {
            name: "groupId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "userId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserGroupMembershipMinFields",
        fields: [
          {
            name: "groupId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "userId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserGroupMembershipMutationResponse",
        fields: [
          {
            name: "affectedRows",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "returning",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "UserGroupMembership",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserRoleMapping",
        fields: [
          {
            name: "roleId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "userId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "user_entity",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "UserEntity",
                ofType: null,
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserRoleMappingAggregate",
        fields: [
          {
            name: "aggregate",
            type: {
              kind: "OBJECT",
              name: "UserRoleMappingAggregateFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "UserRoleMapping",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserRoleMappingAggregateFields",
        fields: [
          {
            name: "count",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [
              {
                name: "columns",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "distinct",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "max",
            type: {
              kind: "OBJECT",
              name: "UserRoleMappingMaxFields",
              ofType: null,
            },
            args: [],
          },
          {
            name: "min",
            type: {
              kind: "OBJECT",
              name: "UserRoleMappingMinFields",
              ofType: null,
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserRoleMappingMaxFields",
        fields: [
          {
            name: "roleId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "userId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserRoleMappingMinFields",
        fields: [
          {
            name: "roleId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
          {
            name: "userId",
            type: {
              kind: "SCALAR",
              name: "Any",
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "UserRoleMappingMutationResponse",
        fields: [
          {
            name: "affectedRows",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any",
              },
            },
            args: [],
          },
          {
            name: "returning",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "UserRoleMapping",
                    ofType: null,
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "mutation_root",
        fields: [
          {
            name: "deleteBureau",
            type: {
              kind: "OBJECT",
              name: "BureauMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "deleteBureauByPk",
            type: {
              kind: "OBJECT",
              name: "Bureau",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "deleteDepartment",
            type: {
              kind: "OBJECT",
              name: "DepartmentMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "deleteDepartmentByPk",
            type: {
              kind: "OBJECT",
              name: "Department",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "deleteGrade",
            type: {
              kind: "OBJECT",
              name: "GradeMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "deleteGradeByPk",
            type: {
              kind: "OBJECT",
              name: "Grade",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "deleteGroupAttribute",
            type: {
              kind: "OBJECT",
              name: "GroupAttributeMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "deleteGroupAttributeByPk",
            type: {
              kind: "OBJECT",
              name: "GroupAttribute",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "deleteGroupRoleMapping",
            type: {
              kind: "OBJECT",
              name: "GroupRoleMappingMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "deleteGroupRoleMappingByPk",
            type: {
              kind: "OBJECT",
              name: "GroupRoleMapping",
              ofType: null,
            },
            args: [
              {
                name: "groupId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "roleId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "deleteKeycloakGroup",
            type: {
              kind: "OBJECT",
              name: "KeycloakGroupMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "deleteKeycloakGroupByPk",
            type: {
              kind: "OBJECT",
              name: "KeycloakGroup",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "deleteKeycloakRole",
            type: {
              kind: "OBJECT",
              name: "KeycloakRoleMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "deleteKeycloakRoleByPk",
            type: {
              kind: "OBJECT",
              name: "KeycloakRole",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "deleteRoleAttribute",
            type: {
              kind: "OBJECT",
              name: "RoleAttributeMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "deleteRoleAttributeByPk",
            type: {
              kind: "OBJECT",
              name: "RoleAttribute",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "deleteUserAttribute",
            type: {
              kind: "OBJECT",
              name: "UserAttributeMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "deleteUserAttributeByPk",
            type: {
              kind: "OBJECT",
              name: "UserAttribute",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "deleteUserEntity",
            type: {
              kind: "OBJECT",
              name: "UserEntityMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "deleteUserEntityByPk",
            type: {
              kind: "OBJECT",
              name: "UserEntity",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "deleteUserGroupMembership",
            type: {
              kind: "OBJECT",
              name: "UserGroupMembershipMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "deleteUserGroupMembershipByPk",
            type: {
              kind: "OBJECT",
              name: "UserGroupMembership",
              ofType: null,
            },
            args: [
              {
                name: "groupId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "userId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "deleteUserRoleMapping",
            type: {
              kind: "OBJECT",
              name: "UserRoleMappingMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "deleteUserRoleMappingByPk",
            type: {
              kind: "OBJECT",
              name: "UserRoleMapping",
              ofType: null,
            },
            args: [
              {
                name: "roleId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "userId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "insertBureau",
            type: {
              kind: "OBJECT",
              name: "BureauMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "objects",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
              {
                name: "onConflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insertBureauOne",
            type: {
              kind: "OBJECT",
              name: "Bureau",
              ofType: null,
            },
            args: [
              {
                name: "object",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "onConflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insertDepartment",
            type: {
              kind: "OBJECT",
              name: "DepartmentMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "objects",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
              {
                name: "onConflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insertDepartmentOne",
            type: {
              kind: "OBJECT",
              name: "Department",
              ofType: null,
            },
            args: [
              {
                name: "object",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "onConflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insertGrade",
            type: {
              kind: "OBJECT",
              name: "GradeMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "objects",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
              {
                name: "onConflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insertGradeOne",
            type: {
              kind: "OBJECT",
              name: "Grade",
              ofType: null,
            },
            args: [
              {
                name: "object",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "onConflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insertGroupAttribute",
            type: {
              kind: "OBJECT",
              name: "GroupAttributeMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "objects",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
              {
                name: "onConflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insertGroupAttributeOne",
            type: {
              kind: "OBJECT",
              name: "GroupAttribute",
              ofType: null,
            },
            args: [
              {
                name: "object",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "onConflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insertGroupRoleMapping",
            type: {
              kind: "OBJECT",
              name: "GroupRoleMappingMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "objects",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
              {
                name: "onConflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insertGroupRoleMappingOne",
            type: {
              kind: "OBJECT",
              name: "GroupRoleMapping",
              ofType: null,
            },
            args: [
              {
                name: "object",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "onConflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insertKeycloakGroup",
            type: {
              kind: "OBJECT",
              name: "KeycloakGroupMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "objects",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
              {
                name: "onConflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insertKeycloakGroupOne",
            type: {
              kind: "OBJECT",
              name: "KeycloakGroup",
              ofType: null,
            },
            args: [
              {
                name: "object",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "onConflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insertKeycloakRole",
            type: {
              kind: "OBJECT",
              name: "KeycloakRoleMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "objects",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
              {
                name: "onConflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insertKeycloakRoleOne",
            type: {
              kind: "OBJECT",
              name: "KeycloakRole",
              ofType: null,
            },
            args: [
              {
                name: "object",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "onConflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insertRoleAttribute",
            type: {
              kind: "OBJECT",
              name: "RoleAttributeMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "objects",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
              {
                name: "onConflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insertRoleAttributeOne",
            type: {
              kind: "OBJECT",
              name: "RoleAttribute",
              ofType: null,
            },
            args: [
              {
                name: "object",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "onConflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insertUserAttribute",
            type: {
              kind: "OBJECT",
              name: "UserAttributeMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "objects",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
              {
                name: "onConflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insertUserAttributeOne",
            type: {
              kind: "OBJECT",
              name: "UserAttribute",
              ofType: null,
            },
            args: [
              {
                name: "object",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "onConflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insertUserEntity",
            type: {
              kind: "OBJECT",
              name: "UserEntityMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "objects",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
              {
                name: "onConflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insertUserEntityOne",
            type: {
              kind: "OBJECT",
              name: "UserEntity",
              ofType: null,
            },
            args: [
              {
                name: "object",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "onConflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insertUserGroupMembership",
            type: {
              kind: "OBJECT",
              name: "UserGroupMembershipMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "objects",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
              {
                name: "onConflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insertUserGroupMembershipOne",
            type: {
              kind: "OBJECT",
              name: "UserGroupMembership",
              ofType: null,
            },
            args: [
              {
                name: "object",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "onConflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insertUserRoleMapping",
            type: {
              kind: "OBJECT",
              name: "UserRoleMappingMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "objects",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
              {
                name: "onConflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "insertUserRoleMappingOne",
            type: {
              kind: "OBJECT",
              name: "UserRoleMapping",
              ofType: null,
            },
            args: [
              {
                name: "object",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "onConflict",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "updateBureau",
            type: {
              kind: "OBJECT",
              name: "BureauMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "_inc",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "updateBureauByPk",
            type: {
              kind: "OBJECT",
              name: "Bureau",
              ofType: null,
            },
            args: [
              {
                name: "_inc",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "pkColumns",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "updateBureauMany",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "BureauMutationResponse",
                ofType: null,
              },
            },
            args: [
              {
                name: "updates",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: "updateDepartment",
            type: {
              kind: "OBJECT",
              name: "DepartmentMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "_inc",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "updateDepartmentByPk",
            type: {
              kind: "OBJECT",
              name: "Department",
              ofType: null,
            },
            args: [
              {
                name: "_inc",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "pkColumns",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "updateDepartmentMany",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "DepartmentMutationResponse",
                ofType: null,
              },
            },
            args: [
              {
                name: "updates",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: "updateGrade",
            type: {
              kind: "OBJECT",
              name: "GradeMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "_inc",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "updateGradeByPk",
            type: {
              kind: "OBJECT",
              name: "Grade",
              ofType: null,
            },
            args: [
              {
                name: "_inc",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "pkColumns",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "updateGradeMany",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "GradeMutationResponse",
                ofType: null,
              },
            },
            args: [
              {
                name: "updates",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: "updateGroupAttribute",
            type: {
              kind: "OBJECT",
              name: "GroupAttributeMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "updateGroupAttributeByPk",
            type: {
              kind: "OBJECT",
              name: "GroupAttribute",
              ofType: null,
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "pkColumns",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "updateGroupAttributeMany",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "GroupAttributeMutationResponse",
                ofType: null,
              },
            },
            args: [
              {
                name: "updates",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: "updateGroupRoleMapping",
            type: {
              kind: "OBJECT",
              name: "GroupRoleMappingMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "updateGroupRoleMappingByPk",
            type: {
              kind: "OBJECT",
              name: "GroupRoleMapping",
              ofType: null,
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "pkColumns",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "updateGroupRoleMappingMany",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "GroupRoleMappingMutationResponse",
                ofType: null,
              },
            },
            args: [
              {
                name: "updates",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: "updateKeycloakGroup",
            type: {
              kind: "OBJECT",
              name: "KeycloakGroupMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "updateKeycloakGroupByPk",
            type: {
              kind: "OBJECT",
              name: "KeycloakGroup",
              ofType: null,
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "pkColumns",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "updateKeycloakGroupMany",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "KeycloakGroupMutationResponse",
                ofType: null,
              },
            },
            args: [
              {
                name: "updates",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: "updateKeycloakRole",
            type: {
              kind: "OBJECT",
              name: "KeycloakRoleMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "updateKeycloakRoleByPk",
            type: {
              kind: "OBJECT",
              name: "KeycloakRole",
              ofType: null,
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "pkColumns",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "updateKeycloakRoleMany",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "KeycloakRoleMutationResponse",
                ofType: null,
              },
            },
            args: [
              {
                name: "updates",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: "updateRoleAttribute",
            type: {
              kind: "OBJECT",
              name: "RoleAttributeMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "updateRoleAttributeByPk",
            type: {
              kind: "OBJECT",
              name: "RoleAttribute",
              ofType: null,
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "pkColumns",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "updateRoleAttributeMany",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "RoleAttributeMutationResponse",
                ofType: null,
              },
            },
            args: [
              {
                name: "updates",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: "updateUserAttribute",
            type: {
              kind: "OBJECT",
              name: "UserAttributeMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "updateUserAttributeByPk",
            type: {
              kind: "OBJECT",
              name: "UserAttribute",
              ofType: null,
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "pkColumns",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "updateUserAttributeMany",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "UserAttributeMutationResponse",
                ofType: null,
              },
            },
            args: [
              {
                name: "updates",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: "updateUserEntity",
            type: {
              kind: "OBJECT",
              name: "UserEntityMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "_inc",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "updateUserEntityByPk",
            type: {
              kind: "OBJECT",
              name: "UserEntity",
              ofType: null,
            },
            args: [
              {
                name: "_inc",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "pkColumns",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "updateUserEntityMany",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "UserEntityMutationResponse",
                ofType: null,
              },
            },
            args: [
              {
                name: "updates",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: "updateUserGroupMembership",
            type: {
              kind: "OBJECT",
              name: "UserGroupMembershipMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "updateUserGroupMembershipByPk",
            type: {
              kind: "OBJECT",
              name: "UserGroupMembership",
              ofType: null,
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "pkColumns",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "updateUserGroupMembershipMany",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "UserGroupMembershipMutationResponse",
                ofType: null,
              },
            },
            args: [
              {
                name: "updates",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
            ],
          },
          {
            name: "updateUserRoleMapping",
            type: {
              kind: "OBJECT",
              name: "UserRoleMappingMutationResponse",
              ofType: null,
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "updateUserRoleMappingByPk",
            type: {
              kind: "OBJECT",
              name: "UserRoleMapping",
              ofType: null,
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "pkColumns",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "updateUserRoleMappingMany",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "UserRoleMappingMutationResponse",
                ofType: null,
              },
            },
            args: [
              {
                name: "updates",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any",
                      },
                    },
                  },
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "query_root",
        fields: [
          {
            name: "bureau",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Bureau",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "bureauAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "BureauAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "bureauByPk",
            type: {
              kind: "OBJECT",
              name: "Bureau",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "department",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Department",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "departmentAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "DepartmentAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "departmentByPk",
            type: {
              kind: "OBJECT",
              name: "Department",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "grade",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Grade",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "gradeAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "GradeAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "gradeByPk",
            type: {
              kind: "OBJECT",
              name: "Grade",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "groupAttribute",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "GroupAttribute",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "groupAttributeAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "GroupAttributeAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "groupAttributeByPk",
            type: {
              kind: "OBJECT",
              name: "GroupAttribute",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "groupRoleMapping",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "GroupRoleMapping",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "groupRoleMappingAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "GroupRoleMappingAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "groupRoleMappingByPk",
            type: {
              kind: "OBJECT",
              name: "GroupRoleMapping",
              ofType: null,
            },
            args: [
              {
                name: "groupId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "roleId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "keycloakGroup",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "KeycloakGroup",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "keycloakGroupAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "KeycloakGroupAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "keycloakGroupByPk",
            type: {
              kind: "OBJECT",
              name: "KeycloakGroup",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "keycloakRole",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "KeycloakRole",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "keycloakRoleAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "KeycloakRoleAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "keycloakRoleByPk",
            type: {
              kind: "OBJECT",
              name: "KeycloakRole",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "roleAttribute",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "RoleAttribute",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "roleAttributeAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "RoleAttributeAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "roleAttributeByPk",
            type: {
              kind: "OBJECT",
              name: "RoleAttribute",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "userAttribute",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "UserAttribute",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "userAttributeAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "UserAttributeAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "userAttributeByPk",
            type: {
              kind: "OBJECT",
              name: "UserAttribute",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "userEntity",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "UserEntity",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "userEntityAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "UserEntityAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "userEntityByPk",
            type: {
              kind: "OBJECT",
              name: "UserEntity",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "userGroupMembership",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "UserGroupMembership",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "userGroupMembershipAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "UserGroupMembershipAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "userGroupMembershipByPk",
            type: {
              kind: "OBJECT",
              name: "UserGroupMembership",
              ofType: null,
            },
            args: [
              {
                name: "groupId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "userId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "userRoleMapping",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "UserRoleMapping",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "userRoleMappingAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "UserRoleMappingAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "userRoleMappingByPk",
            type: {
              kind: "OBJECT",
              name: "UserRoleMapping",
              ofType: null,
            },
            args: [
              {
                name: "roleId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "userId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: "OBJECT",
        name: "subscription_root",
        fields: [
          {
            name: "bureau",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Bureau",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "bureauAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "BureauAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "bureauByPk",
            type: {
              kind: "OBJECT",
              name: "Bureau",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "bureauStream",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Bureau",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "batchSize",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "cursor",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "department",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Department",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "departmentAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "DepartmentAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "departmentByPk",
            type: {
              kind: "OBJECT",
              name: "Department",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "departmentStream",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Department",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "batchSize",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "cursor",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "grade",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Grade",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "gradeAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "GradeAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "gradeByPk",
            type: {
              kind: "OBJECT",
              name: "Grade",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "gradeStream",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "Grade",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "batchSize",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "cursor",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "groupAttribute",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "GroupAttribute",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "groupAttributeAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "GroupAttributeAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "groupAttributeByPk",
            type: {
              kind: "OBJECT",
              name: "GroupAttribute",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "groupAttributeStream",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "GroupAttribute",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "batchSize",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "cursor",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "groupRoleMapping",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "GroupRoleMapping",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "groupRoleMappingAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "GroupRoleMappingAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "groupRoleMappingByPk",
            type: {
              kind: "OBJECT",
              name: "GroupRoleMapping",
              ofType: null,
            },
            args: [
              {
                name: "groupId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "roleId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "groupRoleMappingStream",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "GroupRoleMapping",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "batchSize",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "cursor",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "keycloakGroup",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "KeycloakGroup",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "keycloakGroupAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "KeycloakGroupAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "keycloakGroupByPk",
            type: {
              kind: "OBJECT",
              name: "KeycloakGroup",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "keycloakGroupStream",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "KeycloakGroup",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "batchSize",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "cursor",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "keycloakRole",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "KeycloakRole",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "keycloakRoleAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "KeycloakRoleAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "keycloakRoleByPk",
            type: {
              kind: "OBJECT",
              name: "KeycloakRole",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "keycloakRoleStream",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "KeycloakRole",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "batchSize",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "cursor",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "roleAttribute",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "RoleAttribute",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "roleAttributeAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "RoleAttributeAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "roleAttributeByPk",
            type: {
              kind: "OBJECT",
              name: "RoleAttribute",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "roleAttributeStream",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "RoleAttribute",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "batchSize",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "cursor",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "userAttribute",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "UserAttribute",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "userAttributeAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "UserAttributeAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "userAttributeByPk",
            type: {
              kind: "OBJECT",
              name: "UserAttribute",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "userAttributeStream",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "UserAttribute",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "batchSize",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "cursor",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "userEntity",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "UserEntity",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "userEntityAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "UserEntityAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "userEntityByPk",
            type: {
              kind: "OBJECT",
              name: "UserEntity",
              ofType: null,
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "userEntityStream",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "UserEntity",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "batchSize",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "cursor",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "userGroupMembership",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "UserGroupMembership",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "userGroupMembershipAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "UserGroupMembershipAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "userGroupMembershipByPk",
            type: {
              kind: "OBJECT",
              name: "UserGroupMembership",
              ofType: null,
            },
            args: [
              {
                name: "groupId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "userId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "userGroupMembershipStream",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "UserGroupMembership",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "batchSize",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "cursor",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "userRoleMapping",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "UserRoleMapping",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "userRoleMappingAggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "UserRoleMappingAggregate",
                ofType: null,
              },
            },
            args: [
              {
                name: "distinctOn",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
              {
                name: "orderBy",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
          {
            name: "userRoleMappingByPk",
            type: {
              kind: "OBJECT",
              name: "UserRoleMapping",
              ofType: null,
            },
            args: [
              {
                name: "roleId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "userId",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
            ],
          },
          {
            name: "userRoleMappingStream",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "UserRoleMapping",
                    ofType: null,
                  },
                },
              },
            },
            args: [
              {
                name: "batchSize",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any",
                  },
                },
              },
              {
                name: "cursor",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any",
                    },
                  },
                },
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any",
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: "SCALAR",
        name: "Any",
      },
    ],
    directives: [],
  },
} as unknown as IntrospectionQuery;

export const GetOneUserNameDocument = gql`
  query GetOneUserName($userId: String!) {
    userEntityByPk(id: $userId) {
      firstName
      lastName
    }
  }
`;

export function useGetOneUserNameQuery(
  options: Omit<Urql.UseQueryArgs<GetOneUserNameQueryVariables>, "query">
) {
  return Urql.useQuery<GetOneUserNameQuery, GetOneUserNameQueryVariables>({
    query: GetOneUserNameDocument,
    ...options,
  });
}
