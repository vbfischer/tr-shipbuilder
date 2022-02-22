import React from "react";

import { ChangeHandler, NumericChangeHandler, StringOrNumber } from "../utils";

export interface RegisterProps {
  name: string;
  id?: string;
}
export const useFormState = () => {
  const [formState, updateFormState] = React.useState<
    Record<string, string | number | StringOrNumber[]>
  >({});

  const registerNumericInput = (props: RegisterProps) => {
    const { name, id = name } = props;

    const handleNumericChange: NumericChangeHandler = async (_, value) => {
      updateFormState((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    return {
      name,
      id,
      onChange: handleNumericChange,
    };
  };

  const registerInput = (props: RegisterProps) => {
    const { name, id = name } = props;

    const handleInputChange: ChangeHandler = async (e) => {
      updateFormState((prev) => ({
        ...prev,
        [name]: e.target.value,
      }));
    };

    return {
      name,
      id,
      onChange: handleInputChange,
    };
  };

  const registerStringOrNumberInput = (props: RegisterProps) => {
    const { name, id = name } = props;

    const handleChange = (value: StringOrNumber[]) => {
      updateFormState((prev) => ({
        ...prev,
        [name]: value
      }));
    }

    return {
      name,
      id,
      onChange: handleChange
    }
  }

  return {
    data: formState,
    registerInput,
    registerNumericInput,
    registerStringOrNumberInput
  };
};
