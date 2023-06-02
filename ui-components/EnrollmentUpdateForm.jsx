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
import { Enrollment, Classes, Term, Activities, Students } from "../models";
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
export default function EnrollmentUpdateForm(props) {
  const {
    id: idProp,
    enrollment: enrollmentModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    ClassesEnrollment: undefined,
    TermEnrollment: undefined,
    ActivitiesEnrollment: [],
    studentsID: undefined,
    enrollmentCode: "",
  };
  const [ClassesEnrollment, setClassesEnrollment] = React.useState(
    initialValues.ClassesEnrollment
  );
  const [TermEnrollment, setTermEnrollment] = React.useState(
    initialValues.TermEnrollment
  );
  const [ActivitiesEnrollment, setActivitiesEnrollment] = React.useState(
    initialValues.ActivitiesEnrollment
  );
  const [studentsID, setStudentsID] = React.useState(initialValues.studentsID);
  const [enrollmentCode, setEnrollmentCode] = React.useState(
    initialValues.enrollmentCode
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = enrollmentRecord
      ? {
          ...initialValues,
          ...enrollmentRecord,
          ClassesEnrollment,
          TermEnrollment,
          ActivitiesEnrollment: linkedActivitiesEnrollment,
          studentsID,
        }
      : initialValues;
    setClassesEnrollment(cleanValues.ClassesEnrollment);
    setCurrentClassesEnrollmentValue(undefined);
    setCurrentClassesEnrollmentDisplayValue("");
    setTermEnrollment(cleanValues.TermEnrollment);
    setCurrentTermEnrollmentValue(undefined);
    setCurrentTermEnrollmentDisplayValue("");
    setActivitiesEnrollment(cleanValues.ActivitiesEnrollment ?? []);
    setCurrentActivitiesEnrollmentValue(undefined);
    setCurrentActivitiesEnrollmentDisplayValue("");
    setStudentsID(cleanValues.studentsID);
    setCurrentStudentsIDValue(undefined);
    setCurrentStudentsIDDisplayValue("");
    setEnrollmentCode(cleanValues.enrollmentCode);
    setErrors({});
  };
  const [enrollmentRecord, setEnrollmentRecord] =
    React.useState(enrollmentModelProp);
  const [linkedActivitiesEnrollment, setLinkedActivitiesEnrollment] =
    React.useState([]);
  const canUnlinkActivitiesEnrollment = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Enrollment, idProp)
        : enrollmentModelProp;
      setEnrollmentRecord(record);
      const ClassesEnrollmentRecord = record
        ? await record.ClassesEnrollment
        : undefined;
      setClassesEnrollment(ClassesEnrollmentRecord);
      const TermEnrollmentRecord = record
        ? await record.TermEnrollment
        : undefined;
      setTermEnrollment(TermEnrollmentRecord);
      const linkedActivitiesEnrollment = record
        ? await record.ActivitiesEnrollment.toArray()
        : [];
      setLinkedActivitiesEnrollment(linkedActivitiesEnrollment);
      const studentsIDRecord = record ? await record.studentsID : undefined;
      setStudentsID(studentsIDRecord);
    };
    queryData();
  }, [idProp, enrollmentModelProp]);
  React.useEffect(resetStateValues, [
    enrollmentRecord,
    ClassesEnrollment,
    TermEnrollment,
    linkedActivitiesEnrollment,
    studentsID,
  ]);
  const [
    currentClassesEnrollmentDisplayValue,
    setCurrentClassesEnrollmentDisplayValue,
  ] = React.useState("");
  const [currentClassesEnrollmentValue, setCurrentClassesEnrollmentValue] =
    React.useState(undefined);
  const ClassesEnrollmentRef = React.createRef();
  const [
    currentTermEnrollmentDisplayValue,
    setCurrentTermEnrollmentDisplayValue,
  ] = React.useState("");
  const [currentTermEnrollmentValue, setCurrentTermEnrollmentValue] =
    React.useState(undefined);
  const TermEnrollmentRef = React.createRef();
  const [
    currentActivitiesEnrollmentDisplayValue,
    setCurrentActivitiesEnrollmentDisplayValue,
  ] = React.useState("");
  const [
    currentActivitiesEnrollmentValue,
    setCurrentActivitiesEnrollmentValue,
  ] = React.useState(undefined);
  const ActivitiesEnrollmentRef = React.createRef();
  const [currentStudentsIDDisplayValue, setCurrentStudentsIDDisplayValue] =
    React.useState("");
  const [currentStudentsIDValue, setCurrentStudentsIDValue] =
    React.useState(undefined);
  const studentsIDRef = React.createRef();
  const getIDValue = {
    ClassesEnrollment: (r) => JSON.stringify({ id: r?.id }),
    TermEnrollment: (r) => JSON.stringify({ id: r?.id }),
    ActivitiesEnrollment: (r) => JSON.stringify({ id: r?.id }),
  };
  const ClassesEnrollmentIdSet = new Set(
    Array.isArray(ClassesEnrollment)
      ? ClassesEnrollment.map((r) => getIDValue.ClassesEnrollment?.(r))
      : getIDValue.ClassesEnrollment?.(ClassesEnrollment)
  );
  const TermEnrollmentIdSet = new Set(
    Array.isArray(TermEnrollment)
      ? TermEnrollment.map((r) => getIDValue.TermEnrollment?.(r))
      : getIDValue.TermEnrollment?.(TermEnrollment)
  );
  const ActivitiesEnrollmentIdSet = new Set(
    Array.isArray(ActivitiesEnrollment)
      ? ActivitiesEnrollment.map((r) => getIDValue.ActivitiesEnrollment?.(r))
      : getIDValue.ActivitiesEnrollment?.(ActivitiesEnrollment)
  );
  const classesRecords = useDataStoreBinding({
    type: "collection",
    model: Classes,
  }).items;
  const termRecords = useDataStoreBinding({
    type: "collection",
    model: Term,
  }).items;
  const activitiesRecords = useDataStoreBinding({
    type: "collection",
    model: Activities,
  }).items;
  const studentsRecords = useDataStoreBinding({
    type: "collection",
    model: Students,
  }).items;
  const getDisplayValue = {
    ClassesEnrollment: (r) =>
      `${r?.className ? r?.className + " - " : ""}${r?.id}`,
    TermEnrollment: (r) => `${r?.winter ? r?.winter + " - " : ""}${r?.id}`,
    ActivitiesEnrollment: (r) =>
      `${r?.actName ? r?.actName + " - " : ""}${r?.id}`,
    studentsID: (r) => `${r?.stuName ? r?.stuName + " - " : ""}${r?.id}`,
  };
  const validations = {
    ClassesEnrollment: [],
    TermEnrollment: [],
    ActivitiesEnrollment: [],
    studentsID: [{ type: "Required" }],
    enrollmentCode: [],
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
          ClassesEnrollment,
          TermEnrollment,
          ActivitiesEnrollment,
          studentsID,
          enrollmentCode,
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
          const promises = [];
          const activitiesEnrollmentToLink = [];
          const activitiesEnrollmentToUnLink = [];
          const activitiesEnrollmentSet = new Set();
          const linkedActivitiesEnrollmentSet = new Set();
          ActivitiesEnrollment.forEach((r) =>
            activitiesEnrollmentSet.add(getIDValue.ActivitiesEnrollment?.(r))
          );
          linkedActivitiesEnrollment.forEach((r) =>
            linkedActivitiesEnrollmentSet.add(
              getIDValue.ActivitiesEnrollment?.(r)
            )
          );
          linkedActivitiesEnrollment.forEach((r) => {
            if (
              !activitiesEnrollmentSet.has(getIDValue.ActivitiesEnrollment?.(r))
            ) {
              activitiesEnrollmentToUnLink.push(r);
            }
          });
          ActivitiesEnrollment.forEach((r) => {
            if (
              !linkedActivitiesEnrollmentSet.has(
                getIDValue.ActivitiesEnrollment?.(r)
              )
            ) {
              activitiesEnrollmentToLink.push(r);
            }
          });
          activitiesEnrollmentToUnLink.forEach((original) => {
            if (!canUnlinkActivitiesEnrollment) {
              throw Error(
                `Activities ${original.id} cannot be unlinked from Enrollment because enrollmentID is a required field.`
              );
            }
            promises.push(
              DataStore.save(
                Activities.copyOf(original, (updated) => {
                  updated.enrollmentID = null;
                })
              )
            );
          });
          activitiesEnrollmentToLink.forEach((original) => {
            promises.push(
              DataStore.save(
                Activities.copyOf(original, (updated) => {
                  updated.enrollmentID = enrollmentRecord.id;
                })
              )
            );
          });
          const modelFieldsToSave = {
            ClassesEnrollment: modelFields.ClassesEnrollment,
            TermEnrollment: modelFields.TermEnrollment,
            studentsID: modelFields.studentsID,
            enrollmentCode: modelFields.enrollmentCode,
          };
          promises.push(
            DataStore.save(
              Enrollment.copyOf(enrollmentRecord, (updated) => {
                Object.assign(updated, modelFieldsToSave);
                if (!modelFieldsToSave.ClassesEnrollment) {
                  updated.enrollmentClassesEnrollmentId = undefined;
                }
                if (!modelFieldsToSave.TermEnrollment) {
                  updated.enrollmentTermEnrollmentId = undefined;
                }
              })
            )
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "EnrollmentUpdateForm")}
      {...rest}
    >
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              ClassesEnrollment: value,
              TermEnrollment,
              ActivitiesEnrollment,
              studentsID,
              enrollmentCode,
            };
            const result = onChange(modelFields);
            value = result?.ClassesEnrollment ?? value;
          }
          setClassesEnrollment(value);
          setCurrentClassesEnrollmentValue(undefined);
          setCurrentClassesEnrollmentDisplayValue("");
        }}
        currentFieldValue={currentClassesEnrollmentValue}
        label={"Classes enrollment"}
        items={ClassesEnrollment ? [ClassesEnrollment] : []}
        hasError={errors?.ClassesEnrollment?.hasError}
        errorMessage={errors?.ClassesEnrollment?.errorMessage}
        getBadgeText={getDisplayValue.ClassesEnrollment}
        setFieldValue={(model) => {
          setCurrentClassesEnrollmentDisplayValue(
            model ? getDisplayValue.ClassesEnrollment(model) : ""
          );
          setCurrentClassesEnrollmentValue(model);
        }}
        inputFieldRef={ClassesEnrollmentRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Classes enrollment"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Classes"
          value={currentClassesEnrollmentDisplayValue}
          options={classesRecords
            .filter(
              (r) =>
                !ClassesEnrollmentIdSet.has(getIDValue.ClassesEnrollment?.(r))
            )
            .map((r) => ({
              id: getIDValue.ClassesEnrollment?.(r),
              label: getDisplayValue.ClassesEnrollment?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentClassesEnrollmentValue(
              classesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentClassesEnrollmentDisplayValue(label);
            runValidationTasks("ClassesEnrollment", label);
          }}
          onClear={() => {
            setCurrentClassesEnrollmentDisplayValue("");
          }}
          defaultValue={ClassesEnrollment}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.ClassesEnrollment?.hasError) {
              runValidationTasks("ClassesEnrollment", value);
            }
            setCurrentClassesEnrollmentDisplayValue(value);
            setCurrentClassesEnrollmentValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "ClassesEnrollment",
              currentClassesEnrollmentDisplayValue
            )
          }
          errorMessage={errors.ClassesEnrollment?.errorMessage}
          hasError={errors.ClassesEnrollment?.hasError}
          ref={ClassesEnrollmentRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "ClassesEnrollment")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              ClassesEnrollment,
              TermEnrollment: value,
              ActivitiesEnrollment,
              studentsID,
              enrollmentCode,
            };
            const result = onChange(modelFields);
            value = result?.TermEnrollment ?? value;
          }
          setTermEnrollment(value);
          setCurrentTermEnrollmentValue(undefined);
          setCurrentTermEnrollmentDisplayValue("");
        }}
        currentFieldValue={currentTermEnrollmentValue}
        label={"Term enrollment"}
        items={TermEnrollment ? [TermEnrollment] : []}
        hasError={errors?.TermEnrollment?.hasError}
        errorMessage={errors?.TermEnrollment?.errorMessage}
        getBadgeText={getDisplayValue.TermEnrollment}
        setFieldValue={(model) => {
          setCurrentTermEnrollmentDisplayValue(
            model ? getDisplayValue.TermEnrollment(model) : ""
          );
          setCurrentTermEnrollmentValue(model);
        }}
        inputFieldRef={TermEnrollmentRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Term enrollment"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Term"
          value={currentTermEnrollmentDisplayValue}
          options={termRecords
            .filter(
              (r) => !TermEnrollmentIdSet.has(getIDValue.TermEnrollment?.(r))
            )
            .map((r) => ({
              id: getIDValue.TermEnrollment?.(r),
              label: getDisplayValue.TermEnrollment?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentTermEnrollmentValue(
              termRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentTermEnrollmentDisplayValue(label);
            runValidationTasks("TermEnrollment", label);
          }}
          onClear={() => {
            setCurrentTermEnrollmentDisplayValue("");
          }}
          defaultValue={TermEnrollment}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.TermEnrollment?.hasError) {
              runValidationTasks("TermEnrollment", value);
            }
            setCurrentTermEnrollmentDisplayValue(value);
            setCurrentTermEnrollmentValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "TermEnrollment",
              currentTermEnrollmentDisplayValue
            )
          }
          errorMessage={errors.TermEnrollment?.errorMessage}
          hasError={errors.TermEnrollment?.hasError}
          ref={TermEnrollmentRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "TermEnrollment")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              ClassesEnrollment,
              TermEnrollment,
              ActivitiesEnrollment: values,
              studentsID,
              enrollmentCode,
            };
            const result = onChange(modelFields);
            values = result?.ActivitiesEnrollment ?? values;
          }
          setActivitiesEnrollment(values);
          setCurrentActivitiesEnrollmentValue(undefined);
          setCurrentActivitiesEnrollmentDisplayValue("");
        }}
        currentFieldValue={currentActivitiesEnrollmentValue}
        label={"Activities enrollment"}
        items={ActivitiesEnrollment}
        hasError={errors?.ActivitiesEnrollment?.hasError}
        errorMessage={errors?.ActivitiesEnrollment?.errorMessage}
        getBadgeText={getDisplayValue.ActivitiesEnrollment}
        setFieldValue={(model) => {
          setCurrentActivitiesEnrollmentDisplayValue(
            model ? getDisplayValue.ActivitiesEnrollment(model) : ""
          );
          setCurrentActivitiesEnrollmentValue(model);
        }}
        inputFieldRef={ActivitiesEnrollmentRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Activities enrollment"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Activities"
          value={currentActivitiesEnrollmentDisplayValue}
          options={activitiesRecords
            .filter(
              (r) =>
                !ActivitiesEnrollmentIdSet.has(
                  getIDValue.ActivitiesEnrollment?.(r)
                )
            )
            .map((r) => ({
              id: getIDValue.ActivitiesEnrollment?.(r),
              label: getDisplayValue.ActivitiesEnrollment?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentActivitiesEnrollmentValue(
              activitiesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentActivitiesEnrollmentDisplayValue(label);
            runValidationTasks("ActivitiesEnrollment", label);
          }}
          onClear={() => {
            setCurrentActivitiesEnrollmentDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.ActivitiesEnrollment?.hasError) {
              runValidationTasks("ActivitiesEnrollment", value);
            }
            setCurrentActivitiesEnrollmentDisplayValue(value);
            setCurrentActivitiesEnrollmentValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "ActivitiesEnrollment",
              currentActivitiesEnrollmentDisplayValue
            )
          }
          errorMessage={errors.ActivitiesEnrollment?.errorMessage}
          hasError={errors.ActivitiesEnrollment?.hasError}
          ref={ActivitiesEnrollmentRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "ActivitiesEnrollment")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              ClassesEnrollment,
              TermEnrollment,
              ActivitiesEnrollment,
              studentsID: value,
              enrollmentCode,
            };
            const result = onChange(modelFields);
            value = result?.studentsID ?? value;
          }
          setStudentsID(value);
          setCurrentStudentsIDValue(undefined);
        }}
        currentFieldValue={currentStudentsIDValue}
        label={"Students id"}
        items={studentsID ? [studentsID] : []}
        hasError={errors?.studentsID?.hasError}
        errorMessage={errors?.studentsID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.studentsID(
                studentsRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentStudentsIDDisplayValue(
            value
              ? getDisplayValue.studentsID(
                  studentsRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentStudentsIDValue(value);
        }}
        inputFieldRef={studentsIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Students id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Students"
          value={currentStudentsIDDisplayValue}
          options={studentsRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.studentsID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentStudentsIDValue(id);
            setCurrentStudentsIDDisplayValue(label);
            runValidationTasks("studentsID", label);
          }}
          onClear={() => {
            setCurrentStudentsIDDisplayValue("");
          }}
          defaultValue={studentsID}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.studentsID?.hasError) {
              runValidationTasks("studentsID", value);
            }
            setCurrentStudentsIDDisplayValue(value);
            setCurrentStudentsIDValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("studentsID", currentStudentsIDValue)
          }
          errorMessage={errors.studentsID?.errorMessage}
          hasError={errors.studentsID?.hasError}
          ref={studentsIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "studentsID")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Enrollment code"
        isRequired={false}
        isReadOnly={false}
        value={enrollmentCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ClassesEnrollment,
              TermEnrollment,
              ActivitiesEnrollment,
              studentsID,
              enrollmentCode: value,
            };
            const result = onChange(modelFields);
            value = result?.enrollmentCode ?? value;
          }
          if (errors.enrollmentCode?.hasError) {
            runValidationTasks("enrollmentCode", value);
          }
          setEnrollmentCode(value);
        }}
        onBlur={() => runValidationTasks("enrollmentCode", enrollmentCode)}
        errorMessage={errors.enrollmentCode?.errorMessage}
        hasError={errors.enrollmentCode?.hasError}
        {...getOverrideProps(overrides, "enrollmentCode")}
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
          isDisabled={!(idProp || enrollmentModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || enrollmentModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
