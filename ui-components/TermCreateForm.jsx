/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Term } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function TermCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const { tokens } = useTheme();
  const initialValues = {
    winter: false,
    summer: false,
    fall: false,
    year: "",
    termId: "",
  };
  const [winter, setWinter] = React.useState(initialValues.winter);
  const [summer, setSummer] = React.useState(initialValues.summer);
  const [fall, setFall] = React.useState(initialValues.fall);
  const [year, setYear] = React.useState(initialValues.year);
  const [termId, setTermId] = React.useState(initialValues.termId);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setWinter(initialValues.winter);
    setSummer(initialValues.summer);
    setFall(initialValues.fall);
    setYear(initialValues.year);
    setTermId(initialValues.termId);
    setErrors({});
  };
  const validations = {
    winter: [],
    summer: [],
    fall: [],
    year: [{ type: "Required" }],
    termId: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap={tokens.space.xl.value}
      columnGap={tokens.space.xl.value}
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          winter,
          summer,
          fall,
          year,
          termId,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Term(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "TermCreateForm")}
      {...rest}
    >
      <SwitchField
        label="Winter"
        defaultChecked={false}
        isDisabled={false}
        isChecked={winter}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              winter: value,
              summer,
              fall,
              year,
              termId,
            };
            const result = onChange(modelFields);
            value = result?.winter ?? value;
          }
          if (errors.winter?.hasError) {
            runValidationTasks("winter", value);
          }
          setWinter(value);
        }}
        onBlur={() => runValidationTasks("winter", winter)}
        errorMessage={errors.winter?.errorMessage}
        hasError={errors.winter?.hasError}
        {...getOverrideProps(overrides, "winter")}
      ></SwitchField>
      <SwitchField
        label="Summer"
        defaultChecked={false}
        isDisabled={false}
        isChecked={summer}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              winter,
              summer: value,
              fall,
              year,
              termId,
            };
            const result = onChange(modelFields);
            value = result?.summer ?? value;
          }
          if (errors.summer?.hasError) {
            runValidationTasks("summer", value);
          }
          setSummer(value);
        }}
        onBlur={() => runValidationTasks("summer", summer)}
        errorMessage={errors.summer?.errorMessage}
        hasError={errors.summer?.hasError}
        {...getOverrideProps(overrides, "summer")}
      ></SwitchField>
      <SwitchField
        label="Fall"
        defaultChecked={false}
        isDisabled={false}
        isChecked={fall}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              winter,
              summer,
              fall: value,
              year,
              termId,
            };
            const result = onChange(modelFields);
            value = result?.fall ?? value;
          }
          if (errors.fall?.hasError) {
            runValidationTasks("fall", value);
          }
          setFall(value);
        }}
        onBlur={() => runValidationTasks("fall", fall)}
        errorMessage={errors.fall?.errorMessage}
        hasError={errors.fall?.hasError}
        {...getOverrideProps(overrides, "fall")}
      ></SwitchField>
      <TextField
        label="Year"
        isRequired={true}
        isReadOnly={false}
        value={year}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              winter,
              summer,
              fall,
              year: value,
              termId,
            };
            const result = onChange(modelFields);
            value = result?.year ?? value;
          }
          if (errors.year?.hasError) {
            runValidationTasks("year", value);
          }
          setYear(value);
        }}
        onBlur={() => runValidationTasks("year", year)}
        errorMessage={errors.year?.errorMessage}
        hasError={errors.year?.hasError}
        {...getOverrideProps(overrides, "year")}
      ></TextField>
      <TextField
        label="Term id"
        isRequired={true}
        isReadOnly={false}
        value={termId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              winter,
              summer,
              fall,
              year,
              termId: value,
            };
            const result = onChange(modelFields);
            value = result?.termId ?? value;
          }
          if (errors.termId?.hasError) {
            runValidationTasks("termId", value);
          }
          setTermId(value);
        }}
        onBlur={() => runValidationTasks("termId", termId)}
        errorMessage={errors.termId?.errorMessage}
        hasError={errors.termId?.hasError}
        {...getOverrideProps(overrides, "termId")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap={tokens.space.xl.value}
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
