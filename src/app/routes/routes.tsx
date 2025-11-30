import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "../layout/auth";
import { MainLayout } from "../layout/main";
import { RegisterPage } from "@/pages/auth/register";
import { LoginPage } from "@/pages/auth/login";
import { MainPage } from "@/pages/main";
import { ProfilePage } from "@/pages/profile";
import { CreatePostPage } from "@/pages/posts/create-post";
import { PostPage } from "@/pages/posts/post";
import { ProfileByIdPage } from "@/pages/profile/profile-by-id";
import { SettingsPage } from "@/pages/settings";

export const router = createBrowserRouter([
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { path: "register", element: <RegisterPage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "user/:id", element: <ProfileByIdPage /> },
      { path: "post/create", element: <CreatePostPage /> },
      { path: "post/:id", element: <PostPage /> },
      { path: "post/:id/edit", element: <CreatePostPage /> },
      { path: "settings", element: <SettingsPage /> },
    ],
  },
]);
