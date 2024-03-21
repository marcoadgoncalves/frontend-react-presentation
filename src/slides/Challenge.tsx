import { GenerateGradient } from "../utils/generateGradient";

export function Challenge() {
  return (
    <section data-background-gradient={GenerateGradient()}>
      <h2>Challenge</h2>
      <p>Follow the README here</p>
      <p>Launch this React project locally and explore!</p>
    </section>
  );
}
