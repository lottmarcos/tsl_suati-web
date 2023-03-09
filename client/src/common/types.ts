export type FormikFieldProps = {
  type?: string;
  name: string;
  placeholder: string;
};
export type FormikSelectProps = {
  name: string;
  placeholder: string;
  options: Array<IOptions>;
  isDisabled?: boolean;
  isPlaceholderActive?: boolean;
  id: string;
  onSelect?: () => void;
};

export interface IOptions {
  name: string;
  id: number;
}
