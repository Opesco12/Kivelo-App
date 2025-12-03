import * as Yup from "yup";

export const ParentRegistrationSchema = Yup.object().shape({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  phoneNo: Yup.string()
    .required("Phone number is required")
    .matches(
      /^\+[1-9]\d{1,14}$/,
      "Phone number must be in format +[country code][number] (e.g., +2348012345678)"
    )
    .min(10, "Phone number is too short")
    .max(17, "Phone number is too long"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^[A-Za-z\d@$!%*?#&]+$/,
      "Password can only contain letters, numbers, and @$!%*#?&"
    )
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/\d/, "Password must contain at least one number"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
  dob: Yup.date()
    .required("Date of birth is required")
    .max(new Date(), "Date of birth cannot be in the future")
    .test("age", "You must be at least 18 years old", (value) => {
      if (!value) return false;
      const today = new Date();
      const birthDate = new Date(value);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      return age >= 18;
    }),
});
