import React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

// Styled component for Material UI Switch
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 70, // Reduced width
  height: 35, // Reduced height
  padding: 4, // Adjusted padding
  "& .MuiSwitch-switchBase": {
    padding: 2,
    width: 30, // Reduced switch base width
    height: 30, // Reduced switch base height
    "&.Mui-checked": {
      transform: "translateX(35px)", // Adjusted transform for smaller size
      color: theme.palette.common.white,
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  "& .MuiSwitch-track": {
    borderRadius: 17.5, // Adjusted for smaller track
    backgroundColor: theme.palette.grey[400],
  },
}));

export default function CustomizedSwitches({ isSeller, onRoleChange }) {
  const handleChange = (event) => {
    const newRole = event.target.checked ? "seller" : "buyer";
    onRoleChange(newRole); // Notify parent component to update the role
  };

  return (
    <FormGroup>
      <FormControlLabel
        label={isSeller ? "Seller" : "Buyer"} // Display based on role
        control={
          <MaterialUISwitch
            checked={isSeller} // Reflect the seller state
            onChange={handleChange} // Handle role change
          />
        }
        labelPlacement="start" // Position the label before the switch
      />
    </FormGroup>
  );
}
