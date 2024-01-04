import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";

interface Props {
  text: string;
  href: string;
}

const activeStyle: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

export const ActiveLink: FC<Props> = ({ text, href }) => {
  const { asPath } = useRouter();
  return (
    <Link href={href} style={asPath === href ? activeStyle : undefined}>
      {text}
    </Link>
  );
};
