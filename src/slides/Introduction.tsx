import { Section } from "../components/Section";

const NOTE = "Hello!";

export function Introduction() {
  return (
    <Section note={NOTE}>
      <h2>Hello there 👋</h2>
      <p className="fragment fade-in-then-semi-out">I'm Marco, 30 years old</p>
      <p className="fragment fade-in-then-semi-out">Born in Faro, Algarve</p>
      <p className="fragment fade-in-then-semi-out">Sports + Nature</p>
      <p className="fragment fade-in-then-semi-out">Working in IT since 2011</p>
      <p className="fragment fade-in-then-semi-out">
        In & Out Lynxmind since 2019
      </p>
      <p className="fragment fade-in-then-semi-out">
        Frontend engineer at Sky since 2022
      </p>
    </Section>
  );
}
