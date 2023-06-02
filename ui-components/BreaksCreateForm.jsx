/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Breaks } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function BreaksCreateForm(props) {
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
  const initialValues = {
    breaksStart: "",
    breaksEnd: "",
    breaksBehavior: "",
    breaksDescription: "",
    breaksDate: "",
  };
  const [breaksStart, setBreaksStart] = React.useState(
    initialValues.breaksStart
  );
  const [breaksEnd, setBreaksEnd] = React.useState(initialValues.breaksEnd);
  const [breaksBehavior, setBreaksBehavior] = React.useState(
    initialValues.breaksBehavior
  );
  const [breaksDescription, setBreaksDescription] = React.useState(
    initialValues.breaksDescription
  );
  const [breaksDate, setBreaksDate] = React.useState(initialValues.breaksDate);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setBreaksStart(initialValues.breaksStart);
    setBreaksEnd(initialValues.breaksEnd);
    setBreaksBehavior(initialValues.breaksBehavior);
    setBreaksDescription(initialValues.breaksDescription);
    setBreaksDate(initialValues.breaksDate);
    setErrors({});
  };
  const validations = {
    breaksStart: [],
    breaksEnd: [],
    breaksBehavior: [],
    breaksDescription: [],
    breaksDate: [],
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
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          breaksStart,
          breaksEnd,
          breaksBehavior,
          breaksDescription,
          breaksDate,
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
          await DataStore.save(new Breaks(modelFields));
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
      {...getOverrideProps(overrides, "BreaksCreateForm")}
      {...rest}
    >
      <TextField
        label="Breaks start"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={breaksStart}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              breaksStart: value,
              breaksEnd,
              breaksBehavior,
              breaksDescription,
              breaksDate,
            };
            const result = onChange(modelFields);
            value = result?.breaksStart ?? value;
          }
          if (errors.breaksStart?.hasError) {
            runValidationTasks("breaksStart", value);
          }
          setBreaksStart(value);
        }}
        onBlur={() => runValidationTasks("breaksStart", breaksStart)}
        errorMessage={errors.breaksStart?.errorMessage}
        hasError={errors.breaksStart?.hasError}
        {...getOverrideProps(overrides, "breaksStart")}
      ></TextField>
      <TextField
        label="Breaks end"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={breaksEnd}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              breaksStart,
              breaksEnd: value,
              breaksBehavior,
              breaksDescription,
              breaksDate,
            };
            const result = onChange(modelFields);
            value = result?.breaksEnd ?? value;
          }
          if (errors.breaksEnd?.hasError) {
            runValidationTasks("breaksEnd", value);
          }
          setBreaksEnd(value);
        }}
        onBlur={() => runValidationTasks("breaksEnd", breaksEnd)}
        errorMessage={errors.breaksEnd?.errorMessage}
        hasError={errors.breaksEnd?.hasError}
        {...getOverrideProps(overrides, "breaksEnd")}
      ></TextField>
      <TextField
        label="Breaks behavior"
        isRequired={false}
        isReadOnly={false}
        value={breaksBehavior}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              breaksStart,
              breaksEnd,
              breaksBehavior: value,
              breaksDescription,
              breaksDate,
            };
            const result = onChange(modelFields);
            value = result?.breaksBehavior ?? value;
          }
          if (errors.breaksBehavior?.hasError) {
            runValidationTasks("breaksBehavior", value);
          }
          setBreaksBehavior(value);
        }}
        onBlur={() => runValidationTasks("breaksBehavior", breaksBehavior)}
        errorMessage={errors.breaksBehavior?.errorMessage}
        hasError={errors.breaksBehavior?.hasError}
        {...getOverrideProps(overrides, "breaksBehavior")}
      ></TextField>
      <TextField
        label="Breaks description"
        isRequired={false}
        isReadOnly={false}
        value={breaksDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              breaksStart,
              breaksEnd,
              breaksBehavior,
              breaksDescription: value,
              breaksDate,
            };
            const result = onChange(modelFields);
            value = result?.breaksDescription ?? value;
          }
          if (errors.breaksDescription?.hasError) {
            runValidationTasks("breaksDescription", value);
          }
          setBreaksDescription(value);
        }}
        onBlur={() =>
          runValidationTasks("breaksDescription", breaksDescription)
        }
        errorMessage={errors.breaksDescription?.errorMessage}
        hasError={errors.breaksDescription?.hasError}
        {...getOverrideProps(overrides, "breaksDescription")}
      ></TextField>
      <TextField
        label="Breaks date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={breaksDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              breaksStart,
              breaksEnd,
              breaksBehavior,
              breaksDescription,
              breaksDate: value,
            };
            const result = onChange(modelFields);
            value = result?.breaksDate ?? value;
          }
          if (errors.breaksDate?.hasError) {
            runValidationTasks("breaksDate", value);
          }
          setBreaksDate(value);
        }}
        onBlur={() => runValidationTasks("breaksDate", breaksDate)}
        errorMessage={errors.breaksDate?.errorMessage}
        hasError={errors.breaksDate?.hasError}
        {...getOverrideProps(overrides, "breaksDate")}
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
          gap="15px"
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
