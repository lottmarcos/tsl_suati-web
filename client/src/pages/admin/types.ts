export interface SprintFormValues {
  task: string;
  deadline: string;
  members: Array<object>;
}
export interface MacrosFormValues {
  type: number;
  name: string;
}

export interface IMember {
  id: number;
  job: number;
  system: number;
  subsystem: number;
}
