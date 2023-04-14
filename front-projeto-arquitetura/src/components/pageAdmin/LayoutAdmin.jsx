import NavigationPanel from "./NavigationPanel";

const LayoutAdmin = ({children}) => {
  return (
    <>
      <header className="admin-header">
        <center>
          <h2 style={{ color: "white" }}>Página do administrador</h2>
        </center>
      </header>
      <section className="panel">
        <div className="container">
          <NavigationPanel />
          {children}
        </div>
      </section>
    </>
  );
};

export default LayoutAdmin;
