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
        <h3>Target</h3>
        <p className="fragment custom blur">anyone</p>
        <aside className="notes">
          Note about how the presentation has anyone's knowledge into account 📝
        </aside>
      </section>
      <aside className="notes">Shhh, these are your private notes 📝</aside>
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
