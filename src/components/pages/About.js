const About = () => {
  return (
    <div>
      <h1 className="display-4 font-weight-bold">
        About{' '}
        <span className="text-warning font-weight-bolder">Contact Manager</span>
      </h1>
      <p className="lead">
        Simple contact management app I made to learn React. This time, I
        migrated all my class based components to functional components - the
        world of hooks. With{' '}
        <a
          href="https://redux.js.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Redux
        </a>{' '}
        as my state management solution my app runs smoothly 😊.
      </p>
      <p className="text-secondary">Version 2.0.0</p>
    </div>
  );
};

export default About;
