import { useContext } from "react";
import { UserContext } from "./parent";

export const Child2: React.FC<{ dark: boolean }> = () => {
  const darkTheme = useContext(UserContext);

  const theme = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "white" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return <div style={theme}>Child 2</div>;
};
