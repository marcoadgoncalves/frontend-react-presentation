import { Section } from "../components/Section";

const NOTE =
  "Técnica Pomodoro - é um técnica de gestão de tempo e por consequência uma ferramenta de produtividade";

export function ReactDemo() {
  return (
    <Section note={NOTE}>
      <h2>React demo</h2>
      <p>Pomodoro app 🍅 🕐</p>
    </Section>
  );
}
