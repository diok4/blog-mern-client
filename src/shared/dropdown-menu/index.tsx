import { Button, Menu, Portal } from "@chakra-ui/react";
import type React from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.css";

type MenuItem = {
  value: string;
  label: string;
  to?: string;
  onClick?: () => void;
};

type DropdownMenuProps = {
  triggerLabel: React.ReactElement;
  items: MenuItem[];
};

export const DropdownMenu = ({ triggerLabel, items }: DropdownMenuProps) => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button className={styles.trigger}>{triggerLabel}</Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content className={styles.panel}>
            {items.map((item) =>
              item.to ? (
                <Menu.Item key={item.value} value={item.value} asChild>
                  <NavLink to={item.to} className={styles.item}>
                    {item.label}
                  </NavLink>
                </Menu.Item>
              ) : (
                <Menu.Item
                  key={item.value}
                  value={item.value}
                  onClick={item.onClick}
                  className={styles.item}
                >
                  {item.label}
                </Menu.Item>
              )
            )}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
