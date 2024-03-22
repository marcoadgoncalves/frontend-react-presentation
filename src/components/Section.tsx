import { PropsWithChildren } from "react";
import { GenerateGradient } from "../utils/generateGradient";

type Props = {
  animated?: boolean;
  note?: string;
};

export function Section({
  animated,
  note,
  children,
}: PropsWithChildren<Props>) {
  return (
    <section
      data-auto-animate={animated}
      data-background-gradient={GenerateGradient()}
    >
      {children}
      {note && <aside className="notes">{note} 📝</aside>}
    </section>
  );
}
