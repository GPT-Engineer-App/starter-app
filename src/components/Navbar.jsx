import { Box, Flex, Link, Button, useDisclosure, Stack, IconButton, HStack } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="gray.800" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Box color="white" fontWeight="bold">YourApp</Box>
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            <Link as={RouterLink} to="/" color="white">Home</Link>
            <Link as={RouterLink} to="/about" color="white">About</Link>
            <Link as={RouterLink} to="/contact" color="white">Contact</Link>
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <Button as={RouterLink} to="/login" colorScheme="teal" size="sm" mr={4}>Login</Button>
          <Button as={RouterLink} to="/signup" colorScheme="teal" size="sm">Sign Up</Button>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            <Link as={RouterLink} to="/" color="white" onClick={onClose}>Home</Link>
            <Link as={RouterLink} to="/about" color="white" onClick={onClose}>About</Link>
            <Link as={RouterLink} to="/contact" color="white" onClick={onClose}>Contact</Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;