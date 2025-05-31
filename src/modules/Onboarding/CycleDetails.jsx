import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  OutlinedInput,
  Switch
} from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from "dayjs";
import { Formik } from "formik";
import * as yup from "yup";

const CycleDetails = ({ data, onComplete }) => {
  const schema = yup.object({
    avgPeriodLength: yup.number().required("Period Length is required").min(1).typeError("Must be a number"),
    avgCycleLength: yup.number().required("Cycle Length is required").min(1).typeError("Must be a number"),
    lastPeriodStartDate: yup.date(),
    isPeriodRegular: yup.boolean(),
  });

  return (
    <Formik
      validationSchema={schema}
      initialValues={data}
      onSubmit={(values) => {
        console.log('values', values)
        onComplete(values);
      }}
    >
      {({
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue
      }) => (
        <div className="flex justify-center items-center min-h-screen bg-[#fff9fa] px-4">
          <div className="w-full max-w-md bg-white p-6 rounded-3xl shadow-md">
            <div className="text-3xl font-bold text-center text-[#9a4f50] mb-6">
              Cycle Details
            </div>

            <FormLabel style={{ fontWeight: 600 }}>Average Period Length</FormLabel>
            <FormControl fullWidth sx={{ mb: 2 }} error={!!errors.avgPeriodLength && touched.avgPeriodLength}>
              <OutlinedInput
                name="avgPeriodLength"
                placeholder="5"
                value={values.avgPeriodLength}
                onChange={handleChange}
              />
              <FormHelperText>{errors.avgPeriodLength}</FormHelperText>
            </FormControl>

            <FormLabel style={{ fontWeight: 600 }}>Average Cycle Length</FormLabel>
            <FormControl fullWidth sx={{ mb: 2 }} error={!!errors.avgCycleLength && touched.avgCycleLength}>
              <OutlinedInput
                name="avgCycleLength"
                placeholder="28"
                value={values.avgCycleLength}
                onChange={handleChange}
              />
              <FormHelperText>{errors.avgCycleLength}</FormHelperText>
            </FormControl>

            <FormLabel style={{ fontWeight: 600 }}>Last Period Start Date</FormLabel>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Controlled picker"
                  value={dayjs(values.lastPeriodStartDate)}
                  onChange={(newValue) => {
                    setFieldValue("lastPeriodStartDate", newValue);
                  }}
                />
              </LocalizationProvider>
            </FormControl>


            <FormControl sx={{ mb: 2 }}>
              <FormLabel>Is your period regular?</FormLabel>
              <Switch
                name="isPeriodRegular"
                checked={values.isPeriodRegular}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            </FormControl>


            <Button
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              sx={{
                backgroundColor: "#9a4f50",
                borderRadius: "999px",
                paddingY: "12px",
                fontWeight: "600",
                fontSize: "16px",
                textTransform: "none",
                boxShadow: "0px 4px 12px rgba(154, 79, 80, 0.3)",
                "&:hover": {
                  backgroundColor: "#803f40"
                }
              }}
            >
              Next
            </Button>
          </div>
        </div>
      )
      }
    </Formik >
  );
};

export default CycleDetails;
