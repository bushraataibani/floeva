import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import LockOutlineRoundedIcon from "@mui/icons-material/LockOutlineRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSignup = () => {
    if (!validateEmail(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setErrorMsg("Password should be at least 6 characters.");
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = storedUsers.find(user => user.email === email);
    if (existingUser) {
      setErrorMsg("Email already exists. Please log in.");
      return;
    }

    const newUser = { email, password };
    const updatedUsers = [...storedUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));

    setSuccessMsg("Sign up successful!");
    setErrorMsg("");
    navigate("/home");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#fff9fa] px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-3xl shadow-md">
        <div className="text-3xl font-bold text-center text-[#9a4f50] mb-6">
          Sign Up
        </div>

        {errorMsg && <Alert severity="error" className="mb-4">{errorMsg}</Alert>}
        {successMsg && <Alert severity="success" className="mb-4">{successMsg}</Alert>}

        <FormControl fullWidth sx={{ mb: 2 }} variant="outlined">
          <OutlinedInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <IconButton edge="start">
                  <MailOutlineRoundedIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl fullWidth sx={{ mb: 4 }} variant="outlined">
          <OutlinedInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <IconButton edge="start">
                  <LockOutlineRoundedIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Button
          fullWidth
          variant="contained"
          onClick={handleSignup}
          sx={{
            backgroundColor: "#9a4f50",
            borderRadius: "999px",
            paddingY: "12px",
            fontWeight: "600",
            fontSize: "16px",
            textTransform: "none",
            boxShadow: "0px 4px 12px rgba(154, 79, 80, 0.3)",
            "&:hover": {
              backgroundColor: "#803f40",
            },
          }}
        >
          Create Account
        </Button>

        {/* Login Link */}
        <div className="text-base mt-2 text-center">
          Don't have an account?{" "}
          <span className="text-[#9a4f50] font-semibold cursor-pointer hover:underline" onClick={() => navigate("/")}>
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
