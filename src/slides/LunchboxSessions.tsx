import { Section } from "../components/Section";

export function LunchboxSessions() {
  return (
    <Section>
      <section>
        <h3>Lunchbox sessions</h3>
        <p className="fragment grow">grow together</p>
        <p>share space</p>
        <p>any topic</p>
        <p className="fragment shrink">low effort</p>
      </section>
      <section>
        <h2>Target</h2>
        <p className="fragment custom blur">anyone</p>
      </section>
      <section data-auto-animate>
        <h2>Lunchbox sessions</h2>
        <p>
          Watch a new episode of The Vampire Diaries on Netflix while having
          lunch
        </p>
      </section>
      <section data-auto-animate>
        <h2>Lunchbox sessions</h2>
        <p
          style={{
            textDecoration: "line-through",
            color: "darkgray",
            fontSize: "1.5rem",
          }}
        >
          Watch a new episode of The Vampire Diaries on Netflix while having
          lunch
        </p>
        <p>Attend a Lunchbox session 😎</p>
      </section>
    </Section>
  );
}
