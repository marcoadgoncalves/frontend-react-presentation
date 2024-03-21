import { PropsWithChildren } from "react";
import { GenerateGradient } from "../utils/generateGradient";

type Props = {
  animated?: boolean;
};

export function Section({ animated, children }: PropsWithChildren<Props>) {
  return (
    <section
      data-auto-animate={animated}
      data-background-gradient={GenerateGradient()}
    >
      {children}
    </section>
  );
}
