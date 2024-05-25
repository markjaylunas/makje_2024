import { LinkProps, Link as _Link } from "@nextui-org/react";
import NextLink from "next/link";

export default function Link({ children, ...props }: LinkProps) {
  return (
    <_Link as={NextLink} {...props}>
      {children}
    </_Link>
  );
}
