export type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
};

export type InputProps = {
  label: string;
  type: string;
  id: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  placeholder: string;
  className: string;
};

export type Filters = {
  category: string;
  price: number;
};
