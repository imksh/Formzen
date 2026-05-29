import { create } from "zustand";
import { User } from "../types/user.type";
import api from "../lib/api";
import toast from "react-hot-toast";

interface AuthPayload {
  email: string;
  password: string;
}

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

interface AuthState {
  isAuthenticated: boolean;
  isCheckingAuth: boolean;
  isLogging: boolean;
  isRegistering: boolean;

  user: User | null;

  setUser: (user: User | null) => void;

  checkAuth: () => Promise<void>;

  login: (data: AuthPayload) => Promise<User | void>;

  register: (data: RegisterPayload) => Promise<User | void>;

  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,

  isCheckingAuth: true,

  isLogging: false,

  isRegistering: false,

  user: null,

  setUser: (user) =>
    set({
      user,
      isAuthenticated: !!user,
    }),

  checkAuth: async () => {
    try {
      const res = await api.get("/auth/check");

      set({
        user: res.data.data,
        isAuthenticated: true,
      });
    } catch (error) {
      console.log("error in checkAuth :", error);

      set({
        user: null,
        isAuthenticated: false,
      });
    } finally {
      set({
        isCheckingAuth: false,
      });
    }
  },

  register: async (data) => {
    set({
      isRegistering: true,
    });

    try {
      const res = await api.post("/auth/register", data);

      set({
        user: res.data.data,
        isAuthenticated: true,
      });

      toast.success("Account created successfully");

      return res.data.data;
    } catch (error: any) {
      console.log("error in Register :", error);

      toast.error(error?.response?.data?.message || "An error occurred");
    } finally {
      set({
        isRegistering: false,
      });
    }
  },

  login: async (data) => {
    set({
      isLogging: true,
    });

    try {
      const res = await api.post("/auth/login", data);

      set({
        user: res.data.data,
        isAuthenticated: true,
      });

      toast.success("Logged in successfully");

      return res.data.data;
    } catch (error: any) {
      console.log("error in login :", error);

      toast.error(error?.response?.data?.message || "An error occurred");
    } finally {
      set({
        isLogging: false,
      });
    }
  },

  logout: async () => {
    try {
      await api.post("/auth/logout");

      set({
        user: null,
        isAuthenticated: false,
      });

      toast.success("Logged out successfully");
    } catch (error: any) {
      console.log("error in logout :", error);

      toast.error(error?.response?.data?.message || "An error occurred");
    }
  },
}));
