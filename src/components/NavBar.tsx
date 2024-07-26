import { HStack, Image, useColorModeValue } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const navigate = useNavigate();
  const bg = useColorModeValue("white", "gray.800");
  return (
    <HStack
      padding="10px"
      position="sticky"
      top={0}
      bg={bg}
      width="100%"
      zIndex={9999}
    >
      <Image
        src={logo}
        boxSize="60px"
        objectFit="cover"
        onClick={() => {
          navigate("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        cursor="pointer"
      />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
