import NextLink from "next/link";
import { Navbar, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { useMediaQuery } from "react-responsive";

import styles from "./navbar.module.css";

export const NavbarUI = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 600 });

  return (
    <Navbar>
      <NavbarContent className="hidden sm:block"></NavbarContent>

      <NavbarContent className=" gap-4" justify="center">
        <NextLink href="/" passHref>
          {isSmallScreen ? (
            <h1 className={styles["focus-in-contract_title"]}>Inv.</h1>
          ) : (
            <h1 className={styles["focus-in-contract_title"]}>Inventions</h1>
          )}
        </NextLink>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <NextLink href="/create-invention" passHref>
            <Button
              color="primary"
              radius="full"
              size="md"
              className={styles["focus-in-contract_button"]}
              style={{ fontSize: "15px", fontWeight: "bold" }}
            >
              Create Invention Record
            </Button>
          </NextLink>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
