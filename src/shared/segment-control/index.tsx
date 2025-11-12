import type { FC } from "react";
import { NavLink } from "react-router";
import styles from "./index.module.css";

export const AuthFormSegmentControl: FC = () => {
  return (
    <div className={styles.container}>
      <NavLink
        to="/auth/login"
        className={({ isActive }) => {
          return isActive ? styles.isActive : undefined;
        }}
      >
        Sign In
      </NavLink>

      <NavLink
        to="/auth/register"
        className={({ isActive }) => {
          return isActive ? styles.isActive : undefined;
        }}
      >
        Sign Up
      </NavLink>
    </div>
  );
};
