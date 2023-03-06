export interface SprintFormValues {
  task: string;
  deadline: string;
  members: Array<object>;
}
export interface MacrosFormValues {
  type: number;
  name: string;
}

export interface MembersFormValues {
  member: number;
  job: number;
  system: number;
  subsystem: number;
}
