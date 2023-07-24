import { useContext } from "react";
import { UserContext } from "./parent";

export const Child1: React.FC<{ dark: boolean }> = ({ dark }) => {
  const { dark } = useContext(UserContext);

  const theme = {
    backgroundColor: dark ? "#333" : "#CCC",
    color: dark ? "white" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return <div style={theme}>Child 1</div>;
};

export default Child1;
