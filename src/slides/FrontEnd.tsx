import { Section } from "../components/Section";

const NOTE = `//// UI creation - Principal papel é desenvolver os aspectos visuais de um website\n
//// Accessability -> criar site tendo em conta utilizadores com deficiência\n
//// Responsiveness and Adaptability - adaptável a qualquer browser ou equipamento e design responsivo \n
`;

export function FrontEnd() {
  return (
    <>
      <Section animated>
        <h2>What is FrontEnd?</h2>
      </Section>
      <Section animated note={NOTE}>
        <h2>What is FrontEnd?</h2>
        <p>(spoiler alert: we build websites)</p>
      </Section>
      <Section animated note={NOTE}>
        <h2>What is FrontEnd?</h2>
        <p className="fragment fade-in-then-semi-out">UI creation</p>
        <p className="fragment fade-in-then-semi-out">Interactivity</p>
        <p className="fragment fade-in-then-semi-out">Accessability</p>
        <p className="fragment fade-in-then-semi-out">Performance</p>
        <p className="fragment fade-in-then-semi-out">Maintainability</p>
        <p className="fragment fade-in-then-semi-out">
          Responsiveness and Adaptability
        </p>
        <p className="fragment fade-in-then-semi-out">
          Integration with backend
        </p>
      </Section>
    </>
  );
}
