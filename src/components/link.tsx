import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children?: ReactNode;
};

function isExternalHref(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

export default function Link({ href, children, ...props }: LinkProps) {
  if (isExternalHref(href) || props.target === "_blank") {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <RouterLink to={href} {...props}>
      {children}
    </RouterLink>
  );
}
