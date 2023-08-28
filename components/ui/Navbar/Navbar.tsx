import NextLink from "next/link";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

import styles from "./navbar.module.css";

export const NavbarUI = () => {
  return (
    <Navbar>
      <NavbarContent></NavbarContent>

      <NavbarContent className=" gap-4" justify="center">
        <NextLink href="/" passHref>
          <h1 className={styles["focus-in-contract_title"]}>Inventory</h1>
        </NextLink>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <NextLink href="/listInventory" passHref>
            <Button
              color="primary"
              radius="full"
              size="md"
              className={styles["focus-in-contract_button"]}
              style={{ fontSize: "15px", fontWeight: "bold" }}
            >
              List Invetory
            </Button>
          </NextLink>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
