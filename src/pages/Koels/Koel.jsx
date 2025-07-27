import { NavLink } from "react-router-dom";

const Koel = () => {
  return (
    <div className="Koel page">
      <section className="Hero">
        <header className="header">
          <h1 className="logo">Koel's</h1>

          <nav>
            <NavLink to="" className={"link"}>
              About
            </NavLink>
            <NavLink to="" className={"link"}>
              Feature
            </NavLink>
            <NavLink to="" className={"link"}>
              Blog
            </NavLink>
            <NavLink to="" className={"link"}>
              Menu
            </NavLink>
          </nav>
        </header>
      </section>
    </div>
  );
};

export default Koel;
