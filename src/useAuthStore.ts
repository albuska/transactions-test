import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthStore {
  isLoggedIn: boolean;
  registerZustandUser: () => void;
  logout: () => void;
}
const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      isLoggedIn: false,
      registerZustandUser: () => {
        const userLocalStorage = localStorage.getItem("accessToken");
        console.log(userLocalStorage, "localStorage");
        if (userLocalStorage) {
          set({ isLoggedIn: true });
        }
      },
      logout: () => {
        set({ isLoggedIn: false });
        localStorage.clear();
      },
    }),
    {
      name: "userLoginStatus",
    }
  )
);

export default useAuthStore;
