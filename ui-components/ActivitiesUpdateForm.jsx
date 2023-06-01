/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField, useTheme } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Activities } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ActivitiesUpdateForm(props) {
  const {
    id: idProp,
    activities: activitiesModelProp,
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
    actName: "",
    actType: "",
    actDate: "",
    actStart: "",
    actEnd: "",
    actDescription: "",
    actDocument: "",
  };
  const [actName, setActName] = React.useState(initialValues.actName);
  const [actType, setActType] = React.useState(initialValues.actType);
  const [actDate, setActDate] = React.useState(initialValues.actDate);
  const [actStart, setActStart] = React.useState(initialValues.actStart);
  const [actEnd, setActEnd] = React.useState(initialValues.actEnd);
  const [actDescription, setActDescription] = React.useState(
    initialValues.actDescription
  );
  const [actDocument, setActDocument] = React.useState(
    initialValues.actDocument
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = activitiesRecord
      ? { ...initialValues, ...activitiesRecord }
      : initialValues;
    setActName(cleanValues.actName);
    setActType(cleanValues.actType);
    setActDate(cleanValues.actDate);
    setActStart(cleanValues.actStart);
    setActEnd(cleanValues.actEnd);
    setActDescription(cleanValues.actDescription);
    setActDocument(cleanValues.actDocument);
    setErrors({});
  };
  const [activitiesRecord, setActivitiesRecord] =
    React.useState(activitiesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Activities, idProp)
        : activitiesModelProp;
      setActivitiesRecord(record);
    };
    queryData();
  }, [idProp, activitiesModelProp]);
  React.useEffect(resetStateValues, [activitiesRecord]);
  const validations = {
    actName: [],
    actType: [],
    actDate: [],
    actStart: [],
    actEnd: [],
    actDescription: [],
    actDocument: [{ type: "URL" }],
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
          actName,
          actType,
          actDate,
          actStart,
          actEnd,
          actDescription,
          actDocument,
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
            Activities.copyOf(activitiesRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ActivitiesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Act name"
        isRequired={false}
        isReadOnly={false}
        value={actName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              actName: value,
              actType,
              actDate,
              actStart,
              actEnd,
              actDescription,
              actDocument,
            };
            const result = onChange(modelFields);
            value = result?.actName ?? value;
          }
          if (errors.actName?.hasError) {
            runValidationTasks("actName", value);
          }
          setActName(value);
        }}
        onBlur={() => runValidationTasks("actName", actName)}
        errorMessage={errors.actName?.errorMessage}
        hasError={errors.actName?.hasError}
        {...getOverrideProps(overrides, "actName")}
      ></TextField>
      <TextField
        label="Act type"
        isRequired={false}
        isReadOnly={false}
        value={actType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              actName,
              actType: value,
              actDate,
              actStart,
              actEnd,
              actDescription,
              actDocument,
            };
            const result = onChange(modelFields);
            value = result?.actType ?? value;
          }
          if (errors.actType?.hasError) {
            runValidationTasks("actType", value);
          }
          setActType(value);
        }}
        onBlur={() => runValidationTasks("actType", actType)}
        errorMessage={errors.actType?.errorMessage}
        hasError={errors.actType?.hasError}
        {...getOverrideProps(overrides, "actType")}
      ></TextField>
      <TextField
        label="Act date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={actDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              actName,
              actType,
              actDate: value,
              actStart,
              actEnd,
              actDescription,
              actDocument,
            };
            const result = onChange(modelFields);
            value = result?.actDate ?? value;
          }
          if (errors.actDate?.hasError) {
            runValidationTasks("actDate", value);
          }
          setActDate(value);
        }}
        onBlur={() => runValidationTasks("actDate", actDate)}
        errorMessage={errors.actDate?.errorMessage}
        hasError={errors.actDate?.hasError}
        {...getOverrideProps(overrides, "actDate")}
      ></TextField>
      <TextField
        label="Act start"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={actStart}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              actName,
              actType,
              actDate,
              actStart: value,
              actEnd,
              actDescription,
              actDocument,
            };
            const result = onChange(modelFields);
            value = result?.actStart ?? value;
          }
          if (errors.actStart?.hasError) {
            runValidationTasks("actStart", value);
          }
          setActStart(value);
        }}
        onBlur={() => runValidationTasks("actStart", actStart)}
        errorMessage={errors.actStart?.errorMessage}
        hasError={errors.actStart?.hasError}
        {...getOverrideProps(overrides, "actStart")}
      ></TextField>
      <TextField
        label="Act end"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={actEnd}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              actName,
              actType,
              actDate,
              actStart,
              actEnd: value,
              actDescription,
              actDocument,
            };
            const result = onChange(modelFields);
            value = result?.actEnd ?? value;
          }
          if (errors.actEnd?.hasError) {
            runValidationTasks("actEnd", value);
          }
          setActEnd(value);
        }}
        onBlur={() => runValidationTasks("actEnd", actEnd)}
        errorMessage={errors.actEnd?.errorMessage}
        hasError={errors.actEnd?.hasError}
        {...getOverrideProps(overrides, "actEnd")}
      ></TextField>
      <TextField
        label="Act description"
        isRequired={false}
        isReadOnly={false}
        value={actDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              actName,
              actType,
              actDate,
              actStart,
              actEnd,
              actDescription: value,
              actDocument,
            };
            const result = onChange(modelFields);
            value = result?.actDescription ?? value;
          }
          if (errors.actDescription?.hasError) {
            runValidationTasks("actDescription", value);
          }
          setActDescription(value);
        }}
        onBlur={() => runValidationTasks("actDescription", actDescription)}
        errorMessage={errors.actDescription?.errorMessage}
        hasError={errors.actDescription?.hasError}
        {...getOverrideProps(overrides, "actDescription")}
      ></TextField>
      <TextField
        label="Act document"
        isRequired={false}
        isReadOnly={false}
        value={actDocument}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              actName,
              actType,
              actDate,
              actStart,
              actEnd,
              actDescription,
              actDocument: value,
            };
            const result = onChange(modelFields);
            value = result?.actDocument ?? value;
          }
          if (errors.actDocument?.hasError) {
            runValidationTasks("actDocument", value);
          }
          setActDocument(value);
        }}
        onBlur={() => runValidationTasks("actDocument", actDocument)}
        errorMessage={errors.actDocument?.errorMessage}
        hasError={errors.actDocument?.hasError}
        {...getOverrideProps(overrides, "actDocument")}
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
          isDisabled={!(idProp || activitiesModelProp)}
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
              !(idProp || activitiesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
