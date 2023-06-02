/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Parents } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ParentsCreateForm(props) {
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
    parentName: "",
    parentLastName: "",
    email: "",
    imageProfile: "",
  };
  const [parentName, setParentName] = React.useState(initialValues.parentName);
  const [parentLastName, setParentLastName] = React.useState(
    initialValues.parentLastName
  );
  const [email, setEmail] = React.useState(initialValues.email);
  const [imageProfile, setImageProfile] = React.useState(
    initialValues.imageProfile
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setParentName(initialValues.parentName);
    setParentLastName(initialValues.parentLastName);
    setEmail(initialValues.email);
    setImageProfile(initialValues.imageProfile);
    setErrors({});
  };
  const validations = {
    parentName: [],
    parentLastName: [],
    email: [{ type: "Email" }],
    imageProfile: [{ type: "URL" }],
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
          parentName,
          parentLastName,
          email,
          imageProfile,
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
          await DataStore.save(new Parents(modelFields));
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
      {...getOverrideProps(overrides, "ParentsCreateForm")}
      {...rest}
    >
      <TextField
        label="Parent name"
        isRequired={false}
        isReadOnly={false}
        value={parentName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              parentName: value,
              parentLastName,
              email,
              imageProfile,
            };
            const result = onChange(modelFields);
            value = result?.parentName ?? value;
          }
          if (errors.parentName?.hasError) {
            runValidationTasks("parentName", value);
          }
          setParentName(value);
        }}
        onBlur={() => runValidationTasks("parentName", parentName)}
        errorMessage={errors.parentName?.errorMessage}
        hasError={errors.parentName?.hasError}
        {...getOverrideProps(overrides, "parentName")}
      ></TextField>
      <TextField
        label="Parent last name"
        isRequired={false}
        isReadOnly={false}
        value={parentLastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              parentName,
              parentLastName: value,
              email,
              imageProfile,
            };
            const result = onChange(modelFields);
            value = result?.parentLastName ?? value;
          }
          if (errors.parentLastName?.hasError) {
            runValidationTasks("parentLastName", value);
          }
          setParentLastName(value);
        }}
        onBlur={() => runValidationTasks("parentLastName", parentLastName)}
        errorMessage={errors.parentLastName?.errorMessage}
        hasError={errors.parentLastName?.hasError}
        {...getOverrideProps(overrides, "parentLastName")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              parentName,
              parentLastName,
              email: value,
              imageProfile,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Image profile"
        isRequired={false}
        isReadOnly={false}
        value={imageProfile}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              parentName,
              parentLastName,
              email,
              imageProfile: value,
            };
            const result = onChange(modelFields);
            value = result?.imageProfile ?? value;
          }
          if (errors.imageProfile?.hasError) {
            runValidationTasks("imageProfile", value);
          }
          setImageProfile(value);
        }}
        onBlur={() => runValidationTasks("imageProfile", imageProfile)}
        errorMessage={errors.imageProfile?.errorMessage}
        hasError={errors.imageProfile?.hasError}
        {...getOverrideProps(overrides, "imageProfile")}
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
