let token = localStorage.getItem("token");

export const config = {
  headers: { Authorization: `${token}` },
};

export const URL = "http://localhost:4000";
