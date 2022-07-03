/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useColorModeValue } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { useRouter } from "next/router";

const NavLink = ({ children }: { children: string }) => {
    const router = useRouter();
    return (
        <Link
            px={2}
            py={1}
            rounded={"md"}
            _hover={{
                textDecoration: "none",
                bg: useColorModeValue("#2980B9", "white"),
                color: useColorModeValue("white", "#2980B9"),
            }}
            _focus={{ outline: "none" }}
            bg={
                router.asPath === `/${children.toLowerCase()}`
                    ? "#2980B9"
                    : "transparent"
            }
            color={
                router.asPath === `/${children.toLowerCase()}`
                    ? "white"
                    : useColorModeValue("black", "white")
            }
            href={children.toString().toLowerCase()}
        >
            {children}
        </Link>
    );
};

export default NavLink;
