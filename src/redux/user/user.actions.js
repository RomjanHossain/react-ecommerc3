import { userType } from "./user.types";
export const setCurrentUser = (user) => ({
  type: userType.SET_CURRENT_USER,
  payload: user,
});
