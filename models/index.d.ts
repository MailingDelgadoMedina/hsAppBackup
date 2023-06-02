import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerEnrollment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Enrollment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ClassesEnrollment?: Classes | null;
  readonly TermEnrollment?: Term | null;
  readonly ActivitiesEnrollment?: (Activities | null)[] | null;
  readonly studentsID: string;
  readonly enrollmentCode?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly enrollmentClassesEnrollmentId?: string | null;
  readonly enrollmentTermEnrollmentId?: string | null;
}

type LazyEnrollment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Enrollment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ClassesEnrollment: AsyncItem<Classes | undefined>;
  readonly TermEnrollment: AsyncItem<Term | undefined>;
  readonly ActivitiesEnrollment: AsyncCollection<Activities>;
  readonly studentsID: string;
  readonly enrollmentCode?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly enrollmentClassesEnrollmentId?: string | null;
  readonly enrollmentTermEnrollmentId?: string | null;
}

export declare type Enrollment = LazyLoading extends LazyLoadingDisabled ? EagerEnrollment : LazyEnrollment

export declare const Enrollment: (new (init: ModelInit<Enrollment>) => Enrollment) & {
  copyOf(source: Enrollment, mutator: (draft: MutableModel<Enrollment>) => MutableModel<Enrollment> | void): Enrollment;
}

type EagerParents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Parents, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly parentName?: string | null;
  readonly parentLastName?: string | null;
  readonly email?: string | null;
  readonly imageProfile?: string | null;
  readonly ParentStudents?: (Students | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyParents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Parents, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly parentName?: string | null;
  readonly parentLastName?: string | null;
  readonly email?: string | null;
  readonly imageProfile?: string | null;
  readonly ParentStudents: AsyncCollection<Students>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Parents = LazyLoading extends LazyLoadingDisabled ? EagerParents : LazyParents

export declare const Parents: (new (init: ModelInit<Parents>) => Parents) & {
  copyOf(source: Parents, mutator: (draft: MutableModel<Parents>) => MutableModel<Parents> | void): Parents;
}

type EagerStudents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Students, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly stuName?: string | null;
  readonly stuLastName?: string | null;
  readonly email?: string | null;
  readonly age?: number | null;
  readonly imageProfileStu?: string | null;
  readonly parentsID: string;
  readonly StudentEnrollments?: (Enrollment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStudents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Students, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly stuName?: string | null;
  readonly stuLastName?: string | null;
  readonly email?: string | null;
  readonly age?: number | null;
  readonly imageProfileStu?: string | null;
  readonly parentsID: string;
  readonly StudentEnrollments: AsyncCollection<Enrollment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Students = LazyLoading extends LazyLoadingDisabled ? EagerStudents : LazyStudents

export declare const Students: (new (init: ModelInit<Students>) => Students) & {
  copyOf(source: Students, mutator: (draft: MutableModel<Students>) => MutableModel<Students> | void): Students;
}

type EagerTerm = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Term, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly winter?: boolean | null;
  readonly summer?: boolean | null;
  readonly fall?: boolean | null;
  readonly year: string;
  readonly termId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTerm = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Term, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly winter?: boolean | null;
  readonly summer?: boolean | null;
  readonly fall?: boolean | null;
  readonly year: string;
  readonly termId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Term = LazyLoading extends LazyLoadingDisabled ? EagerTerm : LazyTerm

export declare const Term: (new (init: ModelInit<Term>) => Term) & {
  copyOf(source: Term, mutator: (draft: MutableModel<Term>) => MutableModel<Term> | void): Term;
}

type EagerClasses = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Classes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly className?: string | null;
  readonly classLevel?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClasses = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Classes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly className?: string | null;
  readonly classLevel?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Classes = LazyLoading extends LazyLoadingDisabled ? EagerClasses : LazyClasses

export declare const Classes: (new (init: ModelInit<Classes>) => Classes) & {
  copyOf(source: Classes, mutator: (draft: MutableModel<Classes>) => MutableModel<Classes> | void): Classes;
}

type EagerActivities = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Activities, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly actName?: string | null;
  readonly actType?: string | null;
  readonly actDate?: string | null;
  readonly actStart?: string | null;
  readonly actEnd?: string | null;
  readonly actDescription?: string | null;
  readonly actDocument?: string | null;
  readonly enrollmentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyActivities = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Activities, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly actName?: string | null;
  readonly actType?: string | null;
  readonly actDate?: string | null;
  readonly actStart?: string | null;
  readonly actEnd?: string | null;
  readonly actDescription?: string | null;
  readonly actDocument?: string | null;
  readonly enrollmentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Activities = LazyLoading extends LazyLoadingDisabled ? EagerActivities : LazyActivities

export declare const Activities: (new (init: ModelInit<Activities>) => Activities) & {
  copyOf(source: Activities, mutator: (draft: MutableModel<Activities>) => MutableModel<Activities> | void): Activities;
}

type EagerEvaluation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Evaluation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly behavior?: number | null;
  readonly followalong?: number | null;
  readonly organization?: number | null;
  readonly participation?: number | null;
  readonly problemSolving?: number | null;
  readonly rulesRutines?: number | null;
  readonly timeManagement?: number | null;
  readonly transition?: number | null;
  readonly evaluationValue?: number | null;
  readonly evaluationScore?: number | null;
  readonly progress?: number | null;
  readonly Activities?: Activities | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly evaluationActivitiesId?: string | null;
}

type LazyEvaluation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Evaluation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly behavior?: number | null;
  readonly followalong?: number | null;
  readonly organization?: number | null;
  readonly participation?: number | null;
  readonly problemSolving?: number | null;
  readonly rulesRutines?: number | null;
  readonly timeManagement?: number | null;
  readonly transition?: number | null;
  readonly evaluationValue?: number | null;
  readonly evaluationScore?: number | null;
  readonly progress?: number | null;
  readonly Activities: AsyncItem<Activities | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly evaluationActivitiesId?: string | null;
}

export declare type Evaluation = LazyLoading extends LazyLoadingDisabled ? EagerEvaluation : LazyEvaluation

export declare const Evaluation: (new (init: ModelInit<Evaluation>) => Evaluation) & {
  copyOf(source: Evaluation, mutator: (draft: MutableModel<Evaluation>) => MutableModel<Evaluation> | void): Evaluation;
}

type EagerRewards = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Rewards, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly goodBehavior?: boolean | null;
  readonly completedActivities?: boolean | null;
  readonly desctiptionRewardGiven?: string | null;
  readonly rewardDate?: string | null;
  readonly rewardTime?: string | null;
  readonly Evaluation?: Evaluation | null;
  readonly PottyLog?: PottyLog | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly rewardsEvaluationId?: string | null;
  readonly rewardsPottyLogId?: string | null;
}

type LazyRewards = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Rewards, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly goodBehavior?: boolean | null;
  readonly completedActivities?: boolean | null;
  readonly desctiptionRewardGiven?: string | null;
  readonly rewardDate?: string | null;
  readonly rewardTime?: string | null;
  readonly Evaluation: AsyncItem<Evaluation | undefined>;
  readonly PottyLog: AsyncItem<PottyLog | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly rewardsEvaluationId?: string | null;
  readonly rewardsPottyLogId?: string | null;
}

export declare type Rewards = LazyLoading extends LazyLoadingDisabled ? EagerRewards : LazyRewards

export declare const Rewards: (new (init: ModelInit<Rewards>) => Rewards) & {
  copyOf(source: Rewards, mutator: (draft: MutableModel<Rewards>) => MutableModel<Rewards> | void): Rewards;
}

type EagerBreaks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Breaks, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly breaksStart?: string | null;
  readonly breaksEnd?: string | null;
  readonly breaksBehavior?: string | null;
  readonly breaksDescription?: string | null;
  readonly breaksDate?: string | null;
  readonly ActivitiesBreak?: Activities | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly breaksActivitiesBreakId?: string | null;
}

type LazyBreaks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Breaks, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly breaksStart?: string | null;
  readonly breaksEnd?: string | null;
  readonly breaksBehavior?: string | null;
  readonly breaksDescription?: string | null;
  readonly breaksDate?: string | null;
  readonly ActivitiesBreak: AsyncItem<Activities | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly breaksActivitiesBreakId?: string | null;
}

export declare type Breaks = LazyLoading extends LazyLoadingDisabled ? EagerBreaks : LazyBreaks

export declare const Breaks: (new (init: ModelInit<Breaks>) => Breaks) & {
  copyOf(source: Breaks, mutator: (draft: MutableModel<Breaks>) => MutableModel<Breaks> | void): Breaks;
}

type EagerPottyLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PottyLog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pottyDate?: string | null;
  readonly pottyTime?: string | null;
  readonly urine?: boolean | null;
  readonly bowel?: boolean | null;
  readonly underwareAccident?: boolean | null;
  readonly toilet?: boolean | null;
  readonly selfInitiated?: boolean | null;
  readonly prompted?: boolean | null;
  readonly exactTime?: string | null;
  readonly PottyStudents?: Students | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly pottyLogPottyStudentsId?: string | null;
}

type LazyPottyLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PottyLog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pottyDate?: string | null;
  readonly pottyTime?: string | null;
  readonly urine?: boolean | null;
  readonly bowel?: boolean | null;
  readonly underwareAccident?: boolean | null;
  readonly toilet?: boolean | null;
  readonly selfInitiated?: boolean | null;
  readonly prompted?: boolean | null;
  readonly exactTime?: string | null;
  readonly PottyStudents: AsyncItem<Students | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly pottyLogPottyStudentsId?: string | null;
}

export declare type PottyLog = LazyLoading extends LazyLoadingDisabled ? EagerPottyLog : LazyPottyLog

export declare const PottyLog: (new (init: ModelInit<PottyLog>) => PottyLog) & {
  copyOf(source: PottyLog, mutator: (draft: MutableModel<PottyLog>) => MutableModel<PottyLog> | void): PottyLog;
}