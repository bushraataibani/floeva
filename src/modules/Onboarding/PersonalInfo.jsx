import {
  Button,
  FormControl,
  FormLabel,
  OutlinedInput,
  FormHelperText
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";

const PersonalInfo = ({ data, onComplete, setOnboardingData }) => {
  const schema = yup.object({
    name: yup.string().trim().required("Name is required"),
    age: yup.number().required("Age is required").min(1).typeError("Must be a number"),
    phone: yup.string().required("Phone is required").matches(/^\d{10}$/, "10 digits only"),
    email: yup.string().email("Invalid email").required("Email is required"),
  });

  return (
    <Formik
      validationSchema={schema}
      initialValues={data}
      onSubmit={(values) => {
        onComplete(values);
        setOnboardingData(prev => ({
          ...prev,
          personalInfo: {
            ...prev.personalInfo,
            name: values.name,
            age: values.age,
            phone: values.phone,
            email: values.email
          }
        }));
      }}
    >
      {({
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <div className="flex justify-center items-center min-h-screen bg-[#fff9fa] px-4">
          <div className="w-full max-w-md bg-white p-6 rounded-3xl shadow-md">
            <div className="text-3xl font-bold text-center text-[#9a4f50] mb-6">
              Personal Information
            </div>

            <FormLabel style={{ fontWeight: 600 }}>Full Name</FormLabel>
            <FormControl fullWidth sx={{ mb: 2 }} error={!!errors.name && touched.name}>
              <OutlinedInput
                name="name"
                placeholder="Your name"
                value={values.name}
                onChange={handleChange}
              />
              <FormHelperText>{errors.name}</FormHelperText>
            </FormControl>

            <FormLabel style={{ fontWeight: 600 }}>Age</FormLabel>
            <FormControl fullWidth sx={{ mb: 2 }} error={!!errors.age && touched.age}>
              <OutlinedInput
                name="age"
                placeholder="18"
                value={values.age}
                onChange={handleChange}
              />
              <FormHelperText>{errors.age}</FormHelperText>
            </FormControl>

            <FormLabel style={{ fontWeight: 600 }}>Phone Number</FormLabel>
            <FormControl fullWidth sx={{ mb: 2 }} error={!!errors.phone && touched.phone}>
              <OutlinedInput
                name="phone"
                placeholder="9902453897"
                value={values.phone}
                onChange={handleChange}
              />
              <FormHelperText>{errors.phone}</FormHelperText>
            </FormControl>

            <FormLabel style={{ fontWeight: 600 }}>Email Address</FormLabel>
            <FormControl fullWidth sx={{ mb: 2 }} error={!!errors.email && touched.email}>
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
