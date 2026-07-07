import type { ReactNode } from "react";

import styles from "./Stack.module.css";

type SpacingSize = "xs" | "sm" | "md" | "lg" | "xl";

interface StackProps {
  children: ReactNode;
  spacing?: SpacingSize;
  direction?: "vertical" | "horizontal";
  className?: string;
}

const spacingMap: Record<SpacingSize, string> = {
  xs: "var(--space-2)",
  sm: "var(--space-3)",
  md: "var(--space-4)",
  lg: "var(--space-6)",
  xl: "var(--space-8)",
};

export function Stack({
  children,
  spacing = "md",
  direction = "vertical",
  className = "",
}: StackProps) {
  const spaceValue = spacingMap[spacing];
  const isVertical = direction === "vertical";

  return (
    <div
      className={`${styles.stack} ${className}`.trim()}
      style={
        {
          "--stack-space": spaceValue,
          "--stack-direction": isVertical ? "column" : "row",
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
