import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/onboarding");

  }
  return (
    <div className="min-h-screen flex justify-center items-center  bg-[#fff9fa]">
      <div className="flex justify-center items-center flex-col gap-10">
        <h1 className="text-3xl font-bold text-[#9a4f50]">Welcome to Floeva ❤️</h1>
        <Button
          fullWidth
          variant="contained"
          onClick={handleStart}
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
          Let's get you onboard!
        </Button>
      </div>
    </div>
  );
};

export default Home;