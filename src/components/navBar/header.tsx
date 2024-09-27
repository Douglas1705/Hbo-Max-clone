import UniversalButton from "../../common/UniversalButton";
function Header() {
  return (
    <header className="xs:bg-mobileImgHeader sm:bg-tabletImgHeader lg:bg-desktopImgHeader bg-no-repeat bg-cover bg-center pt-36">
      <div className="flex justify-center relative xs:mt-4 sm:mt-48 h-[370px] inset-0 z-0 bg-gradient-to-t from-black to-transparent border border-red-200">
        <div className="flex flex-col text-center items-center relative z-10 border border-red-200">
          <img
            src="https://www.max.com/img/max-h-w-l.svg"
            className=" max-w-xs w-[400px] mb-2 "
            alt="Logo-Max"
          />
          <h2 className="text-4xl mb-5">MUITO MAIS A VER</h2>
          <p className="text-3xl mb-2">
            Planos a partir de{" "}
            <span className="font-gilroy-bold">R$18,90 / mês</span>
          </p>
          <div className="w-30">
            <UniversalButton title="ASSINE AGORA" size="large" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
