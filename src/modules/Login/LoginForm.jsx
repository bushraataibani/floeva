import {
  Alert,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import LockOutlineRoundedIcon from '@mui/icons-material/LockOutlineRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState('');

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };


  const handleLogin = () => {
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

    if (!existingUser) {
      setErrorMsg("User not found. Please sign up.");
      return;
    }

    if (existingUser.password !== password) {
      setErrorMsg("Incorrect password.");
      return;
    }

    // Save session (optional)
    localStorage.setItem("loggedInUser", JSON.stringify(existingUser));

    // Redirect to home or calendar
    let onboardingData = localStorage.getItem("onboardingData");

    if (onboardingData) {
      try {
        const parsedData = JSON.parse(onboardingData);
        if (parsedData.personalInfo?.email === email) {
          navigate("/calendar");
        } else {
          navigate("/home");
        }
      } catch (error) {
        navigate("/home");
      }
    } else {
      navigate("/home");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 md:p-10 w-full">
      <div className="text-4xl md:text-4xl font-bold mb-6">Login</div>

      {errorMsg && <Alert severity="error" className="mb-4">{errorMsg}</Alert>}


      {/* Email Field */}
      <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
        <OutlinedInput
          id="outlined-adornment-email"
          type="text"
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
          sx={{
            borderRadius: "12px",
            backgroundColor: "#fff",
          }}
        />
      </FormControl>

      {/* Password Field */}
      <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
        <OutlinedInput
          id="outlined-adornment-password"
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
          sx={{
            borderRadius: "12px",
            backgroundColor: "#fff",
          }}
        />
      </FormControl>

      {/* Login Button */}
      <div className="w-full max-w-[300px]">
        <Button
          variant="contained"
          onClick={handleLogin}
          fullWidth
          sx={{
            backgroundColor: '#9a4f50',
            borderRadius: '999px',
            paddingY: '12px',
            fontWeight: '600',
            fontSize: '16px',
            textTransform: 'none',
            boxShadow: '0px 4px 12px rgba(154, 79, 80, 0.3)',
            '&:hover': {
              backgroundColor: '#803f40',
            },
          }}
        >
          Login
        </Button>
      </div>

      {/* Signup Link */}
      <div className="text-base mt-2 text-center">
        Don't have an account?{" "}
        <span className="text-[#9a4f50] font-semibold cursor-pointer hover:underline" onClick={() => navigate("/signup")}>
          Sign Up
        </span>
      </div>

      {/* <Snackbar
        open={errorOpen}
        autoHideDuration={3000}
        onClose={() => setErrorOpen(false)}
        message="User not found. Please sign up."
      /> */}

    </div>
  );
};

export default LoginForm;
