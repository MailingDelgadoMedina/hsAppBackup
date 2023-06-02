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
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { PottyLog, Students } from "../models";
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
export default function PottyLogCreateForm(props) {
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
    pottyDate: "",
    pottyTime: "",
    urine: false,
    bowel: false,
    underwareAccident: false,
    toilet: false,
    selfInitiated: false,
    prompted: false,
    exactTime: "",
    PottyStudents: undefined,
  };
  const [pottyDate, setPottyDate] = React.useState(initialValues.pottyDate);
  const [pottyTime, setPottyTime] = React.useState(initialValues.pottyTime);
  const [urine, setUrine] = React.useState(initialValues.urine);
  const [bowel, setBowel] = React.useState(initialValues.bowel);
  const [underwareAccident, setUnderwareAccident] = React.useState(
    initialValues.underwareAccident
  );
  const [toilet, setToilet] = React.useState(initialValues.toilet);
  const [selfInitiated, setSelfInitiated] = React.useState(
    initialValues.selfInitiated
  );
  const [prompted, setPrompted] = React.useState(initialValues.prompted);
  const [exactTime, setExactTime] = React.useState(initialValues.exactTime);
  const [PottyStudents, setPottyStudents] = React.useState(
    initialValues.PottyStudents
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPottyDate(initialValues.pottyDate);
    setPottyTime(initialValues.pottyTime);
    setUrine(initialValues.urine);
    setBowel(initialValues.bowel);
    setUnderwareAccident(initialValues.underwareAccident);
    setToilet(initialValues.toilet);
    setSelfInitiated(initialValues.selfInitiated);
    setPrompted(initialValues.prompted);
    setExactTime(initialValues.exactTime);
    setPottyStudents(initialValues.PottyStudents);
    setCurrentPottyStudentsValue(undefined);
    setCurrentPottyStudentsDisplayValue("");
    setErrors({});
  };
  const [
    currentPottyStudentsDisplayValue,
    setCurrentPottyStudentsDisplayValue,
  ] = React.useState("");
  const [currentPottyStudentsValue, setCurrentPottyStudentsValue] =
    React.useState(undefined);
  const PottyStudentsRef = React.createRef();
  const getIDValue = {
    PottyStudents: (r) => JSON.stringify({ id: r?.id }),
  };
  const PottyStudentsIdSet = new Set(
    Array.isArray(PottyStudents)
      ? PottyStudents.map((r) => getIDValue.PottyStudents?.(r))
      : getIDValue.PottyStudents?.(PottyStudents)
  );
  const studentsRecords = useDataStoreBinding({
    type: "collection",
    model: Students,
  }).items;
  const getDisplayValue = {
    PottyStudents: (r) => `${r?.stuName ? r?.stuName + " - " : ""}${r?.id}`,
  };
  const validations = {
    pottyDate: [],
    pottyTime: [],
    urine: [],
    bowel: [],
    underwareAccident: [],
    toilet: [],
    selfInitiated: [],
    prompted: [],
    exactTime: [],
    PottyStudents: [],
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
          pottyDate,
          pottyTime,
          urine,
          bowel,
          underwareAccident,
          toilet,
          selfInitiated,
          prompted,
          exactTime,
          PottyStudents,
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
          await DataStore.save(new PottyLog(modelFields));
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
      {...getOverrideProps(overrides, "PottyLogCreateForm")}
      {...rest}
    >
      <TextField
        label="Potty date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={pottyDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pottyDate: value,
              pottyTime,
              urine,
              bowel,
              underwareAccident,
              toilet,
              selfInitiated,
              prompted,
              exactTime,
              PottyStudents,
            };
            const result = onChange(modelFields);
            value = result?.pottyDate ?? value;
          }
          if (errors.pottyDate?.hasError) {
            runValidationTasks("pottyDate", value);
          }
          setPottyDate(value);
        }}
        onBlur={() => runValidationTasks("pottyDate", pottyDate)}
        errorMessage={errors.pottyDate?.errorMessage}
        hasError={errors.pottyDate?.hasError}
        {...getOverrideProps(overrides, "pottyDate")}
      ></TextField>
      <TextField
        label="Potty time"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={pottyTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pottyDate,
              pottyTime: value,
              urine,
              bowel,
              underwareAccident,
              toilet,
              selfInitiated,
              prompted,
              exactTime,
              PottyStudents,
            };
            const result = onChange(modelFields);
            value = result?.pottyTime ?? value;
          }
          if (errors.pottyTime?.hasError) {
            runValidationTasks("pottyTime", value);
          }
          setPottyTime(value);
        }}
        onBlur={() => runValidationTasks("pottyTime", pottyTime)}
        errorMessage={errors.pottyTime?.errorMessage}
        hasError={errors.pottyTime?.hasError}
        {...getOverrideProps(overrides, "pottyTime")}
      ></TextField>
      <SwitchField
        label="Urine"
        defaultChecked={false}
        isDisabled={false}
        isChecked={urine}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              pottyDate,
              pottyTime,
              urine: value,
              bowel,
              underwareAccident,
              toilet,
              selfInitiated,
              prompted,
              exactTime,
              PottyStudents,
            };
            const result = onChange(modelFields);
            value = result?.urine ?? value;
          }
          if (errors.urine?.hasError) {
            runValidationTasks("urine", value);
          }
          setUrine(value);
        }}
        onBlur={() => runValidationTasks("urine", urine)}
        errorMessage={errors.urine?.errorMessage}
        hasError={errors.urine?.hasError}
        {...getOverrideProps(overrides, "urine")}
      ></SwitchField>
      <SwitchField
        label="Bowel"
        defaultChecked={false}
        isDisabled={false}
        isChecked={bowel}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              pottyDate,
              pottyTime,
              urine,
              bowel: value,
              underwareAccident,
              toilet,
              selfInitiated,
              prompted,
              exactTime,
              PottyStudents,
            };
            const result = onChange(modelFields);
            value = result?.bowel ?? value;
          }
          if (errors.bowel?.hasError) {
            runValidationTasks("bowel", value);
          }
          setBowel(value);
        }}
        onBlur={() => runValidationTasks("bowel", bowel)}
        errorMessage={errors.bowel?.errorMessage}
        hasError={errors.bowel?.hasError}
        {...getOverrideProps(overrides, "bowel")}
      ></SwitchField>
      <SwitchField
        label="Underware accident"
        defaultChecked={false}
        isDisabled={false}
        isChecked={underwareAccident}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              pottyDate,
              pottyTime,
              urine,
              bowel,
              underwareAccident: value,
              toilet,
              selfInitiated,
              prompted,
              exactTime,
              PottyStudents,
            };
            const result = onChange(modelFields);
            value = result?.underwareAccident ?? value;
          }
          if (errors.underwareAccident?.hasError) {
            runValidationTasks("underwareAccident", value);
          }
          setUnderwareAccident(value);
        }}
        onBlur={() =>
          runValidationTasks("underwareAccident", underwareAccident)
        }
        errorMessage={errors.underwareAccident?.errorMessage}
        hasError={errors.underwareAccident?.hasError}
        {...getOverrideProps(overrides, "underwareAccident")}
      ></SwitchField>
      <SwitchField
        label="Toilet"
        defaultChecked={false}
        isDisabled={false}
        isChecked={toilet}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              pottyDate,
              pottyTime,
              urine,
              bowel,
              underwareAccident,
              toilet: value,
              selfInitiated,
              prompted,
              exactTime,
              PottyStudents,
            };
            const result = onChange(modelFields);
            value = result?.toilet ?? value;
          }
          if (errors.toilet?.hasError) {
            runValidationTasks("toilet", value);
          }
          setToilet(value);
        }}
        onBlur={() => runValidationTasks("toilet", toilet)}
        errorMessage={errors.toilet?.errorMessage}
        hasError={errors.toilet?.hasError}
        {...getOverrideProps(overrides, "toilet")}
      ></SwitchField>
      <SwitchField
        label="Self initiated"
        defaultChecked={false}
        isDisabled={false}
        isChecked={selfInitiated}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              pottyDate,
              pottyTime,
              urine,
              bowel,
              underwareAccident,
              toilet,
              selfInitiated: value,
              prompted,
              exactTime,
              PottyStudents,
            };
            const result = onChange(modelFields);
            value = result?.selfInitiated ?? value;
          }
          if (errors.selfInitiated?.hasError) {
            runValidationTasks("selfInitiated", value);
          }
          setSelfInitiated(value);
        }}
        onBlur={() => runValidationTasks("selfInitiated", selfInitiated)}
        errorMessage={errors.selfInitiated?.errorMessage}
        hasError={errors.selfInitiated?.hasError}
        {...getOverrideProps(overrides, "selfInitiated")}
      ></SwitchField>
      <SwitchField
        label="Prompted"
        defaultChecked={false}
        isDisabled={false}
        isChecked={prompted}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              pottyDate,
              pottyTime,
              urine,
              bowel,
              underwareAccident,
              toilet,
              selfInitiated,
              prompted: value,
              exactTime,
              PottyStudents,
            };
            const result = onChange(modelFields);
            value = result?.prompted ?? value;
          }
          if (errors.prompted?.hasError) {
            runValidationTasks("prompted", value);
          }
          setPrompted(value);
        }}
        onBlur={() => runValidationTasks("prompted", prompted)}
        errorMessage={errors.prompted?.errorMessage}
        hasError={errors.prompted?.hasError}
        {...getOverrideProps(overrides, "prompted")}
      ></SwitchField>
      <TextField
        label="Exact time"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={exactTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pottyDate,
              pottyTime,
              urine,
              bowel,
              underwareAccident,
              toilet,
              selfInitiated,
              prompted,
              exactTime: value,
              PottyStudents,
            };
            const result = onChange(modelFields);
            value = result?.exactTime ?? value;
          }
          if (errors.exactTime?.hasError) {
            runValidationTasks("exactTime", value);
          }
          setExactTime(value);
        }}
        onBlur={() => runValidationTasks("exactTime", exactTime)}
        errorMessage={errors.exactTime?.errorMessage}
        hasError={errors.exactTime?.hasError}
        {...getOverrideProps(overrides, "exactTime")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              pottyDate,
              pottyTime,
              urine,
              bowel,
              underwareAccident,
              toilet,
              selfInitiated,
              prompted,
              exactTime,
              PottyStudents: value,
            };
            const result = onChange(modelFields);
            value = result?.PottyStudents ?? value;
          }
          setPottyStudents(value);
          setCurrentPottyStudentsValue(undefined);
          setCurrentPottyStudentsDisplayValue("");
        }}
        currentFieldValue={currentPottyStudentsValue}
        label={"Potty students"}
        items={PottyStudents ? [PottyStudents] : []}
        hasError={errors?.PottyStudents?.hasError}
        errorMessage={errors?.PottyStudents?.errorMessage}
        getBadgeText={getDisplayValue.PottyStudents}
        setFieldValue={(model) => {
          setCurrentPottyStudentsDisplayValue(
            model ? getDisplayValue.PottyStudents(model) : ""
          );
          setCurrentPottyStudentsValue(model);
        }}
        inputFieldRef={PottyStudentsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Potty students"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Students"
          value={currentPottyStudentsDisplayValue}
          options={studentsRecords
            .filter(
              (r) => !PottyStudentsIdSet.has(getIDValue.PottyStudents?.(r))
            )
            .map((r) => ({
              id: getIDValue.PottyStudents?.(r),
              label: getDisplayValue.PottyStudents?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentPottyStudentsValue(
              studentsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentPottyStudentsDisplayValue(label);
            runValidationTasks("PottyStudents", label);
          }}
          onClear={() => {
            setCurrentPottyStudentsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.PottyStudents?.hasError) {
              runValidationTasks("PottyStudents", value);
            }
            setCurrentPottyStudentsDisplayValue(value);
            setCurrentPottyStudentsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "PottyStudents",
              currentPottyStudentsDisplayValue
            )
          }
          errorMessage={errors.PottyStudents?.errorMessage}
          hasError={errors.PottyStudents?.hasError}
          ref={PottyStudentsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "PottyStudents")}
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
