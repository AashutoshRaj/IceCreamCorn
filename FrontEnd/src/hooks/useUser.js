import { useMutation } from "@tanstack/react-query";
import api from "../api/apiClient";

export function useSignup(onSuccess, onError) {
  return useMutation({
    mutationFn: (userData) =>
      api.post("/auth/signup", userData).then((res) => res.data),
    onSuccess: (data) => {
      if (data?.accessToken && data?.refreshToken) {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
      }
      onSuccess?.(data);
    },
    onError: (error) => {
      console.error("Signup error:", error);
      onError?.(error);
    },
  });
}

export function useLogin(onSuccess, onError) {
  return useMutation({
    mutationFn: (credentials) =>
      api.post("/auth/login", credentials).then((res) => res.data),
    onSuccess: (data) => {
      if (data?.accessToken && data?.refreshToken) {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
      }
      onSuccess?.(data);
      navigate("/"); // Redirect to home or dashboard after login
    },
    onError: (error) => {
      console.error("Login error:", error);
      onError?.(error);
    },
  });
}

export function useLogout(onSuccess, onError) {
  return useMutation({
    mutationFn: () =>
      api.post("/auth/logout", {}).then((res) => res.data),
    onSuccess: (data) => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      onSuccess?.(data);
    },
    onError: (error) => {
      console.error("Logout error:", error);
      onError?.(error);
    },
  });
}