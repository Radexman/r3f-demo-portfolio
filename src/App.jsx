const App = () => {
  return (
    <>
      <header className="bg-black-500 container mx-auto mt-6 px-4 py-6">
        <h1 className="text-white-800 text-5xl font-bold tracking-wide max-md:text-3xl">
          R3F Demo Portfolio
        </h1>
      </header>
      <main>
        <ul className="nav-ul">
          <li className="nav-li">
            <a className="nav-li_a" href="#">
              Link 1
            </a>
          </li>
          <li className="nav-li">
            <a className="nav-li_a" href="#">
              Link 2
            </a>
          </li>
          <li className="nav-li">
            <a className="nav-li_a" href="#">
              Link 1
            </a>
          </li>
        </ul>
        <div className="background-image min-h-screen"></div>
      </main>
    </>
  );
};

export default App;
