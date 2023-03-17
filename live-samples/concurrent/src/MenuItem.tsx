import { PropsWithChildren } from "react";

export const MenuItem = ({
  children,
  active,
  onClick,
}: PropsWithChildren<{ active: boolean; onClick: () => void }>) => (
  <button
    style={{
      padding: "0.5rem 1rem",
      margin: "0.5rem 1rem",
      background: active ? "#abcdef" : "inherit",
    }}
    onClick={() => {
      onClick();
    }}
  >
    {children}
  </button>
);
