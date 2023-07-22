// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Enrollment, Parents, Students, Term, Classes, Activities, Evaluation, Rewards, Breaks, PottyLog, ClassesEnrollment, ClassesStudents } = initSchema(schema);

export {
  Enrollment,
  Parents,
  Students,
  Term,
  Classes,
  Activities,
  Evaluation,
  Rewards,
  Breaks,
  PottyLog,
  ClassesEnrollment,
  ClassesStudents
};