/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import {
  Students,
  Enrollment,
  Classes,
  Parents,
  ClassesStudents,
} from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function MyStudentCreateForm(props) {
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
    stuName: "",
    stuLastName: "",
    email: "",
    age: "",
    imageProfileStu: "",
    parentsID: undefined,
    StudentEnrollments: [],
    classess: [],
  };
  const [stuName, setStuName] = React.useState(initialValues.stuName);
  const [stuLastName, setStuLastName] = React.useState(
    initialValues.stuLastName
  );
  const [email, setEmail] = React.useState(initialValues.email);
  const [age, setAge] = React.useState(initialValues.age);
  const [imageProfileStu, setImageProfileStu] = React.useState(
    initialValues.imageProfileStu
  );
  const [parentsID, setParentsID] = React.useState(initialValues.parentsID);
  const [StudentEnrollments, setStudentEnrollments] = React.useState(
    initialValues.StudentEnrollments
  );
  const [classess, setClassess] = React.useState(initialValues.classess);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setStuName(initialValues.stuName);
    setStuLastName(initialValues.stuLastName);
    setEmail(initialValues.email);
    setAge(initialValues.age);
    setImageProfileStu(initialValues.imageProfileStu);
    setParentsID(initialValues.parentsID);
    setCurrentParentsIDValue(undefined);
    setCurrentParentsIDDisplayValue("");
    setStudentEnrollments(initialValues.StudentEnrollments);
    setCurrentStudentEnrollmentsValue(undefined);
    setCurrentStudentEnrollmentsDisplayValue("");
    setClassess(initialValues.classess);
    setCurrentClassessValue(undefined);
    setCurrentClassessDisplayValue("");
    setErrors({});
  };
  const [currentParentsIDDisplayValue, setCurrentParentsIDDisplayValue] =
    React.useState("");
  const [currentParentsIDValue, setCurrentParentsIDValue] =
    React.useState(undefined);
  const parentsIDRef = React.createRef();
  const [
    currentStudentEnrollmentsDisplayValue,
    setCurrentStudentEnrollmentsDisplayValue,
  ] = React.useState("");
  const [currentStudentEnrollmentsValue, setCurrentStudentEnrollmentsValue] =
    React.useState(undefined);
  const StudentEnrollmentsRef = React.createRef();
  const [currentClassessDisplayValue, setCurrentClassessDisplayValue] =
    React.useState("");
  const [currentClassessValue, setCurrentClassessValue] =
    React.useState(undefined);
  const classessRef = React.createRef();
  const getIDValue = {
    StudentEnrollments: (r) => JSON.stringify({ id: r?.id }),
    classess: (r) => JSON.stringify({ id: r?.id }),
  };
  const StudentEnrollmentsIdSet = new Set(
    Array.isArray(StudentEnrollments)
      ? StudentEnrollments.map((r) => getIDValue.StudentEnrollments?.(r))
      : getIDValue.StudentEnrollments?.(StudentEnrollments)
  );
  const classessIdSet = new Set(
    Array.isArray(classess)
      ? classess.map((r) => getIDValue.classess?.(r))
      : getIDValue.classess?.(classess)
  );
  const parentsRecords = useDataStoreBinding({
    type: "collection",
    model: Parents,
  }).items;
  const enrollmentRecords = useDataStoreBinding({
    type: "collection",
    model: Enrollment,
  }).items;
  const classesRecords = useDataStoreBinding({
    type: "collection",
    model: Classes,
  }).items;
  const getDisplayValue = {
    parentsID: (r) => `${r?.parentName ? r?.parentName + " - " : ""}${r?.id}`,
    StudentEnrollments: (r) =>
      `${r?.enrollmentCode ? r?.enrollmentCode + " - " : ""}${r?.id}`,
    classess: (r) => `${r?.className ? r?.className + " - " : ""}${r?.id}`,
  };
  const validations = {
    stuName: [],
    stuLastName: [],
    email: [{ type: "Email" }],
    age: [],
    imageProfileStu: [{ type: "URL" }],
    parentsID: [{ type: "Required" }],
    StudentEnrollments: [],
    classess: [],
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
          stuName,
          stuLastName,
          email,
          age,
          imageProfileStu,
          parentsID,
          StudentEnrollments,
          classess,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
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
          const modelFieldsToSave = {
            stuName: modelFields.stuName,
            stuLastName: modelFields.stuLastName,
            email: modelFields.email,
            age: modelFields.age,
            imageProfileStu: modelFields.imageProfileStu,
            parentsID: modelFields.parentsID,
          };
          const students = await DataStore.save(
            new Students(modelFieldsToSave)
          );
          const promises = [];
          promises.push(
            ...StudentEnrollments.reduce((promises, original) => {
              promises.push(
                DataStore.save(
                  Enrollment.copyOf(original, (updated) => {
                    updated.studentsID = students.id;
                  })
                )
              );
              return promises;
            }, [])
          );
          promises.push(
            ...classess.reduce((promises, classes) => {
              promises.push(
                DataStore.save(
                  new ClassesStudents({
                    students,
                    classes,
                  })
                )
              );
              return promises;
            }, [])
          );
          await Promise.all(promises);
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
      {...getOverrideProps(overrides, "MyStudentCreateForm")}
      {...rest}
    >
      <TextField
        label="Student Name"
        isRequired={false}
        isReadOnly={false}
        value={stuName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              stuName: value,
              stuLastName,
              email,
              age,
              imageProfileStu,
              parentsID,
              StudentEnrollments,
              classess,
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
        label="Student Last Name"
        isRequired={false}
        isReadOnly={false}
        value={stuLastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              stuName,
              stuLastName: value,
              email,
              age,
              imageProfileStu,
              parentsID,
              StudentEnrollments,
              classess,
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
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              stuName,
              stuLastName,
              email: value,
              age,
              imageProfileStu,
              parentsID,
              StudentEnrollments,
              classess,
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
        label="Age"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={age}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              stuName,
              stuLastName,
              email,
              age: value,
              imageProfileStu,
              parentsID,
              StudentEnrollments,
              classess,
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
        label="Student Profile Image"
        isRequired={false}
        isReadOnly={false}
        value={imageProfileStu}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              stuName,
              stuLastName,
              email,
              age,
              imageProfileStu: value,
              parentsID,
              StudentEnrollments,
              classess,
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
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              stuName,
              stuLastName,
              email,
              age,
              imageProfileStu,
              parentsID: value,
              StudentEnrollments,
              classess,
            };
            const result = onChange(modelFields);
            value = result?.parentsID ?? value;
          }
          setParentsID(value);
          setCurrentParentsIDValue(undefined);
        }}
        currentFieldValue={currentParentsIDValue}
        label={"Parents Id"}
        items={parentsID ? [parentsID] : []}
        hasError={errors?.parentsID?.hasError}
        errorMessage={errors?.parentsID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.parentsID(
                parentsRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentParentsIDDisplayValue(
            value
              ? getDisplayValue.parentsID(
                  parentsRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentParentsIDValue(value);
        }}
        inputFieldRef={parentsIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Parents Id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Parents"
          value={currentParentsIDDisplayValue}
          options={parentsRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.parentsID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentParentsIDValue(id);
            setCurrentParentsIDDisplayValue(label);
            runValidationTasks("parentsID", label);
          }}
          onClear={() => {
            setCurrentParentsIDDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.parentsID?.hasError) {
              runValidationTasks("parentsID", value);
            }
            setCurrentParentsIDDisplayValue(value);
            setCurrentParentsIDValue(undefined);
          }}
          onBlur={() => runValidationTasks("parentsID", currentParentsIDValue)}
          errorMessage={errors.parentsID?.errorMessage}
          hasError={errors.parentsID?.hasError}
          ref={parentsIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "parentsID")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              stuName,
              stuLastName,
              email,
              age,
              imageProfileStu,
              parentsID,
              StudentEnrollments: values,
              classess,
            };
            const result = onChange(modelFields);
            values = result?.StudentEnrollments ?? values;
          }
          setStudentEnrollments(values);
          setCurrentStudentEnrollmentsValue(undefined);
          setCurrentStudentEnrollmentsDisplayValue("");
        }}
        currentFieldValue={currentStudentEnrollmentsValue}
        label={"Student Enrollments"}
        items={StudentEnrollments}
        hasError={errors?.StudentEnrollments?.hasError}
        errorMessage={errors?.StudentEnrollments?.errorMessage}
        getBadgeText={getDisplayValue.StudentEnrollments}
        setFieldValue={(model) => {
          setCurrentStudentEnrollmentsDisplayValue(
            model ? getDisplayValue.StudentEnrollments(model) : ""
          );
          setCurrentStudentEnrollmentsValue(model);
        }}
        inputFieldRef={StudentEnrollmentsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Student Enrollments"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Enrollment"
          value={currentStudentEnrollmentsDisplayValue}
          options={enrollmentRecords
            .filter(
              (r) =>
                !StudentEnrollmentsIdSet.has(getIDValue.StudentEnrollments?.(r))
            )
            .map((r) => ({
              id: getIDValue.StudentEnrollments?.(r),
              label: getDisplayValue.StudentEnrollments?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentStudentEnrollmentsValue(
              enrollmentRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentStudentEnrollmentsDisplayValue(label);
            runValidationTasks("StudentEnrollments", label);
          }}
          onClear={() => {
            setCurrentStudentEnrollmentsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.StudentEnrollments?.hasError) {
              runValidationTasks("StudentEnrollments", value);
            }
            setCurrentStudentEnrollmentsDisplayValue(value);
            setCurrentStudentEnrollmentsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "StudentEnrollments",
              currentStudentEnrollmentsDisplayValue
            )
          }
          errorMessage={errors.StudentEnrollments?.errorMessage}
          hasError={errors.StudentEnrollments?.hasError}
          ref={StudentEnrollmentsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "StudentEnrollments")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              stuName,
              stuLastName,
              email,
              age,
              imageProfileStu,
              parentsID,
              StudentEnrollments,
              classess: values,
            };
            const result = onChange(modelFields);
            values = result?.classess ?? values;
          }
          setClassess(values);
          setCurrentClassessValue(undefined);
          setCurrentClassessDisplayValue("");
        }}
        currentFieldValue={currentClassessValue}
        label={"Classess"}
        items={classess}
        hasError={errors?.classess?.hasError}
        errorMessage={errors?.classess?.errorMessage}
        getBadgeText={getDisplayValue.classess}
        setFieldValue={(model) => {
          setCurrentClassessDisplayValue(
            model ? getDisplayValue.classess(model) : ""
          );
          setCurrentClassessValue(model);
        }}
        inputFieldRef={classessRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Classess"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Classes"
          value={currentClassessDisplayValue}
          options={classesRecords
            .filter((r) => !classessIdSet.has(getIDValue.classess?.(r)))
            .map((r) => ({
              id: getIDValue.classess?.(r),
              label: getDisplayValue.classess?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentClassessValue(
              classesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentClassessDisplayValue(label);
            runValidationTasks("classess", label);
          }}
          onClear={() => {
            setCurrentClassessDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.classess?.hasError) {
              runValidationTasks("classess", value);
            }
            setCurrentClassessDisplayValue(value);
            setCurrentClassessValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("classess", currentClassessDisplayValue)
          }
          errorMessage={errors.classess?.errorMessage}
          hasError={errors.classess?.hasError}
          ref={classessRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "classess")}
        ></Autocomplete>
      </ArrayField>
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
