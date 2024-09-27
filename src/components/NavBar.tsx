import UniversalButton from "../common/UniversalButton";

function NavBar() {
  return (
    <nav className="bg-gray-950 flex flex-row p-2.5 justify-between px-5">
      <img
        src="https://www.max.com/img/max-h-w-l.svg"
        className="w-25"
        alt="Logo-Max"
      />
      <div>
        <UniversalButton
          title="ENTRAR"
          backgroundColor="black"
        ></UniversalButton>
        <UniversalButton title="ASSINE AGORA"></UniversalButton>
      </div>
    </nav>
  );
}

export default NavBar;
