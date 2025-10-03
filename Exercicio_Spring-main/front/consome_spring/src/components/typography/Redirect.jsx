import { Link } from "react-router-dom";
import BodyText from "./BodyText";

const Redirect = ({ path, children }) => {
  return (
    <BodyText hover={true}>
      <Link to={path}>{children}</Link>
    </BodyText>
  );
};

export default Redirect;
