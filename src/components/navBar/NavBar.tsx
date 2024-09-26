import UniversalButton from "../../common/UniversalButton";

function NavBar() {
  return (
    <div className="bg-gray-950 flex flex-row p-2.5 justify-between">
      <img src="https://www.max.com/img/max-h-w-l.svg" className="" alt="Logo-Max" />
      <div>
        <UniversalButton
          title="ENTRAR"
          backgroundColor="black"
        ></UniversalButton>
        <UniversalButton title="ASSINE AGORA"></UniversalButton>
      </div>
    </div>
  );
}

export default NavBar;
