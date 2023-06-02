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
import { Activities, Enrollment } from "../models";
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
export default function ActivitiesCreateForm(props) {
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
    actName: "",
    actType: "",
    actDate: "",
    actStart: "",
    actEnd: "",
    actDescription: "",
    actDocument: "",
    enrollmentID: undefined,
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
  const [enrollmentID, setEnrollmentID] = React.useState(
    initialValues.enrollmentID
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setActName(initialValues.actName);
    setActType(initialValues.actType);
    setActDate(initialValues.actDate);
    setActStart(initialValues.actStart);
    setActEnd(initialValues.actEnd);
    setActDescription(initialValues.actDescription);
    setActDocument(initialValues.actDocument);
    setEnrollmentID(initialValues.enrollmentID);
    setCurrentEnrollmentIDValue(undefined);
    setCurrentEnrollmentIDDisplayValue("");
    setErrors({});
  };
  const [currentEnrollmentIDDisplayValue, setCurrentEnrollmentIDDisplayValue] =
    React.useState("");
  const [currentEnrollmentIDValue, setCurrentEnrollmentIDValue] =
    React.useState(undefined);
  const enrollmentIDRef = React.createRef();
  const enrollmentRecords = useDataStoreBinding({
    type: "collection",
    model: Enrollment,
  }).items;
  const getDisplayValue = {
    enrollmentID: (r) =>
      `${r?.enrollmentCode ? r?.enrollmentCode + " - " : ""}${r?.id}`,
  };
  const validations = {
    actName: [],
    actType: [],
    actDate: [],
    actStart: [],
    actEnd: [],
    actDescription: [],
    actDocument: [{ type: "URL" }],
    enrollmentID: [{ type: "Required" }],
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
          actName,
          actType,
          actDate,
          actStart,
          actEnd,
          actDescription,
          actDocument,
          enrollmentID,
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
          await DataStore.save(new Activities(modelFields));
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
      {...getOverrideProps(overrides, "ActivitiesCreateForm")}
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
              enrollmentID,
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
              enrollmentID,
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
              enrollmentID,
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
              enrollmentID,
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
              enrollmentID,
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
              enrollmentID,
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
              enrollmentID,
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
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              actName,
              actType,
              actDate,
              actStart,
              actEnd,
              actDescription,
              actDocument,
              enrollmentID: value,
            };
            const result = onChange(modelFields);
            value = result?.enrollmentID ?? value;
          }
          setEnrollmentID(value);
          setCurrentEnrollmentIDValue(undefined);
        }}
        currentFieldValue={currentEnrollmentIDValue}
        label={"Enrollment id"}
        items={enrollmentID ? [enrollmentID] : []}
        hasError={errors?.enrollmentID?.hasError}
        errorMessage={errors?.enrollmentID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.enrollmentID(
                enrollmentRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentEnrollmentIDDisplayValue(
            value
              ? getDisplayValue.enrollmentID(
                  enrollmentRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentEnrollmentIDValue(value);
        }}
        inputFieldRef={enrollmentIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Enrollment id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Enrollment"
          value={currentEnrollmentIDDisplayValue}
          options={enrollmentRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.enrollmentID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentEnrollmentIDValue(id);
            setCurrentEnrollmentIDDisplayValue(label);
            runValidationTasks("enrollmentID", label);
          }}
          onClear={() => {
            setCurrentEnrollmentIDDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.enrollmentID?.hasError) {
              runValidationTasks("enrollmentID", value);
            }
            setCurrentEnrollmentIDDisplayValue(value);
            setCurrentEnrollmentIDValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("enrollmentID", currentEnrollmentIDValue)
          }
          errorMessage={errors.enrollmentID?.errorMessage}
          hasError={errors.enrollmentID?.hasError}
          ref={enrollmentIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "enrollmentID")}
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
