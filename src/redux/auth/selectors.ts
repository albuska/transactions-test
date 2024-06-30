/* eslint-disable @typescript-eslint/no-explicit-any */
export const selectUser = (state: any) => state.auth.user;
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
