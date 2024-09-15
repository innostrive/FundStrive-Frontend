import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (token) {
    return children;
  }
  return <Navigate to="/login" replace={true} />;
};

export default ProtectedRoute;
