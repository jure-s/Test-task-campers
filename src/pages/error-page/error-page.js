import { Navigate } from "react-router";

const ErrorPage = () => {
  return <Navigate to={"/catalog"} />;
};
export default ErrorPage;
