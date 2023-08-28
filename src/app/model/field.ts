import { FieldType } from './field-type';

interface Field {
  id: string;
  label: string;
  placeholder: string;
  disabled: boolean;
  type: FieldType;
  required: boolean;
}
