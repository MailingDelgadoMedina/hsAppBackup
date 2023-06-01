/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField, useTheme } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Classes } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ClassesUpdateForm(props) {
  const {
    id: idProp,
    classes: classesModelProp,
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
    className: "",
    classLevel: "",
  };
  const [className, setClassName] = React.useState(initialValues.className);
  const [classLevel, setClassLevel] = React.useState(initialValues.classLevel);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = classesRecord
      ? { ...initialValues, ...classesRecord }
      : initialValues;
    setClassName(cleanValues.className);
    setClassLevel(cleanValues.classLevel);
    setErrors({});
  };
  const [classesRecord, setClassesRecord] = React.useState(classesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Classes, idProp)
        : classesModelProp;
      setClassesRecord(record);
    };
    queryData();
  }, [idProp, classesModelProp]);
  React.useEffect(resetStateValues, [classesRecord]);
  const validations = {
    className: [],
    classLevel: [],
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
      rowGap={tokens.space.medium.value}
      columnGap={tokens.space.medium.value}
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          className,
          classLevel,
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
          await DataStore.save(
            Classes.copyOf(classesRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ClassesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Class name"
        isRequired={false}
        isReadOnly={false}
        value={className}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              className: value,
              classLevel,
            };
            const result = onChange(modelFields);
            value = result?.className ?? value;
          }
          if (errors.className?.hasError) {
            runValidationTasks("className", value);
          }
          setClassName(value);
        }}
        onBlur={() => runValidationTasks("className", className)}
        errorMessage={errors.className?.errorMessage}
        hasError={errors.className?.hasError}
        {...getOverrideProps(overrides, "className")}
      ></TextField>
      <TextField
        label="Class level"
        isRequired={false}
        isReadOnly={false}
        value={classLevel}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              className,
              classLevel: value,
            };
            const result = onChange(modelFields);
            value = result?.classLevel ?? value;
          }
          if (errors.classLevel?.hasError) {
            runValidationTasks("classLevel", value);
          }
          setClassLevel(value);
        }}
        onBlur={() => runValidationTasks("classLevel", classLevel)}
        errorMessage={errors.classLevel?.errorMessage}
        hasError={errors.classLevel?.hasError}
        {...getOverrideProps(overrides, "classLevel")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || classesModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap={tokens.space.medium.value}
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || classesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
