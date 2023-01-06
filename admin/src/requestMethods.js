import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// ****************************************************************
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
// const TOKEN =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTYwYjU0OWY3MDc3NjAzZWI1OTU2NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzAzMTIxOSwiZXhwIjoxNjczMjkwNDE5fQ.0CmnsFelDxkSdoLGGCtdejcRQWW3vw8Ah-llqHCOmHo";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
// console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken);

// *****************************************************************

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
