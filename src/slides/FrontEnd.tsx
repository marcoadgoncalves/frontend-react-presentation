import { GenerateGradient } from "../utils/generateGradient";

export function FrontEnd() {
  return (
    <>
      <section data-auto-animate data-background-gradient={GenerateGradient()}>
        <h2>What is FrontEnd?</h2>
        <aside className="notes">
          Front-end development, often referred to as client-side development,
          is the practice of creating the graphical user interface (GUI) of a
          website or web application so that users can view and interact with it
          directly. It involves the use of HTML, CSS, and JavaScript, which are
          the core technologies for building web pages, along with various
          frameworks and libraries like React, Angular, and Vue.js to enhance
          functionality, interactivity, and user experience. 📝
        </aside>
      </section>
      <section data-auto-animate data-background-gradient={GenerateGradient()}>
        <h2>What is FrontEnd?</h2>
        <p>(spoiler alert: we build websites)</p>
        <aside className="notes">
          Front-end development, often referred to as client-side development,
          is the practice of creating the graphical user interface (GUI) of a
          website or web application so that users can view and interact with it
          directly. It involves the use of HTML, CSS, and JavaScript, which are
          the core technologies for building web pages, along with various
          frameworks and libraries like React, Angular, and Vue.js to enhance
          functionality, interactivity, and user experience. 📝
        </aside>
      </section>
      <section data-auto-animate data-background-gradient={GenerateGradient()}>
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
        <aside className="notes">
          User Interface (UI) Creation: The primary role of front-end
          development is to build the layout and visual aspects of a website or
          web application. This includes everything users see and interact with
          on the screen, such as buttons, texts, images, forms, and animations.
          HTML is used to structure the content, CSS for styling and layout, and
          JavaScript for dynamic interactions. Interactivity: Front-end
          development makes web pages interactive. This means not just
          displaying information but allowing users to interact with that
          information through clicks, drags, hovers, and other actions.
          JavaScript, along with various libraries and frameworks, plays a
          crucial role in creating these dynamic interactions. Responsiveness
          and Adaptability: A significant aspect of modern front-end development
          is ensuring websites are responsive, meaning they adapt seamlessly to
          different screen sizes and devices (desktops, tablets, smartphones).
          This is crucial for providing a good user experience across all
          platforms. Performance Optimization: Front-end developers work to
          optimize the performance of websites and applications. This includes
          making sure that the pages load quickly and efficiently, which
          involves optimizing images, minifying CSS and JavaScript files, and
          implementing lazy loading and other techniques. Accessibility:
          Ensuring that web applications are accessible to all users, including
          those with disabilities, is a key part of front-end development. This
          involves following best practices and guidelines, such as the Web
          Content Accessibility Guidelines (WCAG), to make web content more
          accessible to people with a wide range of disabilities. Integration
          with Back-end Services: While front-end development focuses on the
          client side, it also involves integrating with back-end services and
          APIs. This integration is necessary for dynamic web applications that
          require data to be exchanged between the server and the client in real
          time, such as user authentication, data retrieval, and data storage.
          📝
        </aside>
      </section>
    </>
  );
}
