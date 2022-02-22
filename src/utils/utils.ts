export type ChangeHandler = (event: {
  target: any;
  type?: any;
}) => Promise<void | boolean>;

export type NumericChangeHandler = (
  valueAsString: string,
  valueAsNumber: number
) => Promise<void | boolean>;

export type StringOrNumber = string | number

export const handleNumericChange: NumericChangeHandler = async (_, value) => {
  console.log("HAndle Numeric Change");
};

export const handleInputChange: ChangeHandler = async (e) => {
  console.log("Handle Normal Change");
};

export const register =
  <T extends Object>(changeHandler: T) =>
  (name: string) => {
    return {
      name,
      id: name,
      onChange: changeHandler,
    };
  };

export const registerNormal = register(handleInputChange);

export const registerNumeric = register(handleNumericChange);
