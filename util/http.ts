import axios from "axios";

export async function checkHeath() {
  try {
    const res = await axios.get("http://localhost:8080/healthcheck");
    console.log(">>>", res);
    const result = await res.data;
    console.log(">>>", result);
    return result;
  } catch (e) {
    console.error(e);
    return e;
  }
}
