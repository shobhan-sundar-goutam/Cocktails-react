import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>oops! it's a dead end</h1>
        <NavLink className="btn btn-primary" to={"/"}>
          back home
        </NavLink>
      </div>
    </section>
  );
};

export default Error;
