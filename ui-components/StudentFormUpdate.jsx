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
  Heading,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Students } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function StudentFormUpdate(props) {
  const {
    id: idProp,
    students: studentsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const { tokens } = useTheme();
  const initialValues = {
    stuName: "",
    stuLastName: "",
    age: "",
    email: "",
    imageProfileStu: "",
  };
  const [stuName, setStuName] = React.useState(initialValues.stuName);
  const [stuLastName, setStuLastName] = React.useState(
    initialValues.stuLastName
  );
  const [age, setAge] = React.useState(initialValues.age);
  const [email, setEmail] = React.useState(initialValues.email);
  const [imageProfileStu, setImageProfileStu] = React.useState(
    initialValues.imageProfileStu
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = studentsRecord
      ? { ...initialValues, ...studentsRecord }
      : initialValues;
    setStuName(cleanValues.stuName);
    setStuLastName(cleanValues.stuLastName);
    setAge(cleanValues.age);
    setEmail(cleanValues.email);
    setImageProfileStu(cleanValues.imageProfileStu);
    setErrors({});
  };
  const [studentsRecord, setStudentsRecord] = React.useState(studentsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Students, idProp)
        : studentsModelProp;
      setStudentsRecord(record);
    };
    queryData();
  }, [idProp, studentsModelProp]);
  React.useEffect(resetStateValues, [studentsRecord]);
  const validations = {
    stuName: [],
    stuLastName: [],
    age: [],
    email: [{ type: "Email" }],
    imageProfileStu: [{ type: "URL" }],
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
      columnGap="15px"
      padding={tokens.space.large.value}
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          stuName,
          stuLastName,
          age,
          email,
          imageProfileStu,
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
            Students.copyOf(studentsRecord, (updated) => {
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
      {...getOverrideProps(overrides, "StudentFormUpdate")}
      {...rest}
    >
      <Heading
        level={3}
        children="Student Form Update"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid1")}
      >
        <TextField
          label="Student Name"
          isRequired={false}
          isReadOnly={false}
          placeholder="Name"
          value={stuName}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                stuName: value,
                stuLastName,
                age,
                email,
                imageProfileStu,
              };
              const result = onChange(modelFields);
              value = result?.stuName ?? value;
            }
            if (errors.stuName?.hasError) {
              runValidationTasks("stuName", value);
            }
            setStuName(value);
          }}
          onBlur={() => runValidationTasks("stuName", stuName)}
          errorMessage={errors.stuName?.errorMessage}
          hasError={errors.stuName?.hasError}
          {...getOverrideProps(overrides, "stuName")}
        ></TextField>
        <TextField
          label="Student Lastname"
          isRequired={false}
          isReadOnly={false}
          placeholder="Lastname"
          value={stuLastName}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                stuName,
                stuLastName: value,
                age,
                email,
                imageProfileStu,
              };
              const result = onChange(modelFields);
              value = result?.stuLastName ?? value;
            }
            if (errors.stuLastName?.hasError) {
              runValidationTasks("stuLastName", value);
            }
            setStuLastName(value);
          }}
          onBlur={() => runValidationTasks("stuLastName", stuLastName)}
          errorMessage={errors.stuLastName?.errorMessage}
          hasError={errors.stuLastName?.hasError}
          {...getOverrideProps(overrides, "stuLastName")}
        ></TextField>
      </Grid>
      <TextField
        label="Student Age"
        isRequired={false}
        isReadOnly={false}
        placeholder="Age"
        value={age}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              stuName,
              stuLastName,
              age: value,
              email,
              imageProfileStu,
            };
            const result = onChange(modelFields);
            value = result?.age ?? value;
          }
          if (errors.age?.hasError) {
            runValidationTasks("age", value);
          }
          setAge(value);
        }}
        onBlur={() => runValidationTasks("age", age)}
        errorMessage={errors.age?.errorMessage}
        hasError={errors.age?.hasError}
        {...getOverrideProps(overrides, "age")}
      ></TextField>
      <TextField
        label="Student Email"
        isRequired={false}
        isReadOnly={false}
        placeholder="Email"
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              stuName,
              stuLastName,
              age,
              email: value,
              imageProfileStu,
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
        label="Student Picture"
        isRequired={false}
        isReadOnly={false}
        placeholder="image url"
        value={imageProfileStu}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              stuName,
              stuLastName,
              age,
              email,
              imageProfileStu: value,
            };
            const result = onChange(modelFields);
            value = result?.imageProfileStu ?? value;
          }
          if (errors.imageProfileStu?.hasError) {
            runValidationTasks("imageProfileStu", value);
          }
          setImageProfileStu(value);
        }}
        onBlur={() => runValidationTasks("imageProfileStu", imageProfileStu)}
        errorMessage={errors.imageProfileStu?.errorMessage}
        hasError={errors.imageProfileStu?.hasError}
        {...getOverrideProps(overrides, "imageProfileStu")}
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
          isDisabled={!(idProp || studentsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || studentsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
