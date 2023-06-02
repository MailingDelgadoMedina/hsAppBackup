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
import { Parents, Students } from "../models";
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
    ParentStudents: [],
  };
  const [parentName, setParentName] = React.useState(initialValues.parentName);
  const [parentLastName, setParentLastName] = React.useState(
    initialValues.parentLastName
  );
  const [email, setEmail] = React.useState(initialValues.email);
  const [imageProfile, setImageProfile] = React.useState(
    initialValues.imageProfile
  );
  const [ParentStudents, setParentStudents] = React.useState(
    initialValues.ParentStudents
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setParentName(initialValues.parentName);
    setParentLastName(initialValues.parentLastName);
    setEmail(initialValues.email);
    setImageProfile(initialValues.imageProfile);
    setParentStudents(initialValues.ParentStudents);
    setCurrentParentStudentsValue(undefined);
    setCurrentParentStudentsDisplayValue("");
    setErrors({});
  };
  const [
    currentParentStudentsDisplayValue,
    setCurrentParentStudentsDisplayValue,
  ] = React.useState("");
  const [currentParentStudentsValue, setCurrentParentStudentsValue] =
    React.useState(undefined);
  const ParentStudentsRef = React.createRef();
  const getIDValue = {
    ParentStudents: (r) => JSON.stringify({ id: r?.id }),
  };
  const ParentStudentsIdSet = new Set(
    Array.isArray(ParentStudents)
      ? ParentStudents.map((r) => getIDValue.ParentStudents?.(r))
      : getIDValue.ParentStudents?.(ParentStudents)
  );
  const studentsRecords = useDataStoreBinding({
    type: "collection",
    model: Students,
  }).items;
  const getDisplayValue = {
    ParentStudents: (r) => `${r?.stuName ? r?.stuName + " - " : ""}${r?.id}`,
  };
  const validations = {
    parentName: [],
    parentLastName: [],
    email: [{ type: "Email" }],
    imageProfile: [{ type: "URL" }],
    ParentStudents: [],
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
          ParentStudents,
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
            parentName: modelFields.parentName,
            parentLastName: modelFields.parentLastName,
            email: modelFields.email,
            imageProfile: modelFields.imageProfile,
          };
          const parents = await DataStore.save(new Parents(modelFieldsToSave));
          const promises = [];
          promises.push(
            ...ParentStudents.reduce((promises, original) => {
              promises.push(
                DataStore.save(
                  Students.copyOf(original, (updated) => {
                    updated.parentsID = parents.id;
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
              ParentStudents,
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
              ParentStudents,
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
              ParentStudents,
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
              ParentStudents,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              parentName,
              parentLastName,
              email,
              imageProfile,
              ParentStudents: values,
            };
            const result = onChange(modelFields);
            values = result?.ParentStudents ?? values;
          }
          setParentStudents(values);
          setCurrentParentStudentsValue(undefined);
          setCurrentParentStudentsDisplayValue("");
        }}
        currentFieldValue={currentParentStudentsValue}
        label={"Parent students"}
        items={ParentStudents}
        hasError={errors?.ParentStudents?.hasError}
        errorMessage={errors?.ParentStudents?.errorMessage}
        getBadgeText={getDisplayValue.ParentStudents}
        setFieldValue={(model) => {
          setCurrentParentStudentsDisplayValue(
            model ? getDisplayValue.ParentStudents(model) : ""
          );
          setCurrentParentStudentsValue(model);
        }}
        inputFieldRef={ParentStudentsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Parent students"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Students"
          value={currentParentStudentsDisplayValue}
          options={studentsRecords
            .filter(
              (r) => !ParentStudentsIdSet.has(getIDValue.ParentStudents?.(r))
            )
            .map((r) => ({
              id: getIDValue.ParentStudents?.(r),
              label: getDisplayValue.ParentStudents?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentParentStudentsValue(
              studentsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentParentStudentsDisplayValue(label);
            runValidationTasks("ParentStudents", label);
          }}
          onClear={() => {
            setCurrentParentStudentsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.ParentStudents?.hasError) {
              runValidationTasks("ParentStudents", value);
            }
            setCurrentParentStudentsDisplayValue(value);
            setCurrentParentStudentsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "ParentStudents",
              currentParentStudentsDisplayValue
            )
          }
          errorMessage={errors.ParentStudents?.errorMessage}
          hasError={errors.ParentStudents?.hasError}
          ref={ParentStudentsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "ParentStudents")}
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
