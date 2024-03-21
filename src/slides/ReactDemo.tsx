import { GenerateGradient } from "../utils/generateGradient";

export function ReactDemo() {
  return (
    <section data-background-gradient={GenerateGradient()}>
      <h2>React demo time</h2>
      <p>
        Provide a good example of how react works that shows it's advantages,
        include consumption of API
      </p>
    </section>
  );
}
