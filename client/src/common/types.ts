export type FormikFieldProps = {
  type?: string;
  name: string;
  placeholder: string;
};
export type FormikSelectProps = {
  name: string;
  placeholder: string;
  options: Array<IOptions>;
};

export interface IOptions {
  name: string;
  id: number;
}
