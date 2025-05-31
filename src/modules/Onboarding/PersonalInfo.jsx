import {
  Button,
  FormControl,
  FormLabel,
  OutlinedInput,
  FormHelperText
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";

const PersonalInfo = () => {
  const init = {
    name: "",
    age: "",
    phone: "",
    email: ""
  }

  const schema = yup.object({
    name: yup
      .string()
      .trim()
      .required("Name is required")
      .min(1, "Minimum 1 character")
      .max(100, "Maximum 100 characters"),
    age: yup
      .number()
      .required("Age is required")
      .min(1, "Please enter valid age")
      .typeError("Age must be a number"),
    phone: yup
      .string()
      .required("Phone is required")
      .matches(/^\d{10}$/, "Phone number must be 10 digits"),
    email: yup
      .string()
      .trim()
      .email("Please enter a valid email")
      .required("Email is required"),
  });

  return (
    <Formik
      validationSchema={schema}
      initialValues={init}
      onSubmit={(values) => {
        localStorage.setItem('PersonalInfo:', values)
      }}>
      {({
        handleChange,
        handleSubmit,
        handleBlur,
        resetForm,
        values,
        setFieldValue,
        isValid,
        errors,
        isSubmitting,
        touched,
      }) =>

      (<div className="flex justify-center items-center min-h-screen bg-[#fff9fa] px-4">
        <div className="w-full max-w-md bg-white p-6 rounded-3xl shadow-md">
          <div className="text-3xl font-bold text-center text-[#9a4f50] mb-6">
            Personal Information
          </div>

          {/* Full Name */}
          <FormLabel style={{ fontWeight: 600 }}>Full Name</FormLabel>
          <FormControl fullWidth sx={{ mb: 2 }} error={!!errors.name}>
            <OutlinedInput
              name="name"
              placeholder="Your name"
              value={values.name}
              onChange={handleChange}
            />
            <FormHelperText>{errors.name}</FormHelperText>
          </FormControl>

          {/* Age */}
          <FormLabel style={{ fontWeight: 600 }}>Age</FormLabel>
          <FormControl fullWidth sx={{ mb: 2 }} error={!!errors.age}>
            <OutlinedInput
              name="age"
              placeholder="18"
              value={values.age}
              onChange={handleChange}
            />
            <FormHelperText>{errors.age}</FormHelperText>
          </FormControl>

          {/* Phone */}
          <FormLabel style={{ fontWeight: 600 }}>Phone Number</FormLabel>
          <FormControl fullWidth sx={{ mb: 2 }} error={!!errors.phone}>
            <OutlinedInput
              name="phone"
              placeholder="9902453897"
              value={values.phone}
              onChange={handleChange}
            />
            <FormHelperText>{errors.phone}</FormHelperText>
          </FormControl>

          {/* Email */}
          <FormLabel style={{ fontWeight: 600 }}>Email Address</FormLabel>
          <FormControl fullWidth sx={{ mb: 2 }} error={!!errors.email}>
            <OutlinedInput
              name="email"
              placeholder="youremail@gmail.com"
              value={values.email}
              onChange={handleChange}
            />
            <FormHelperText>{errors.email}</FormHelperText>
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
      )}
    </Formik>
  );
};

export default PersonalInfo;
