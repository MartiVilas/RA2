export const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-start">
        <img
          src="Interficies\src\assets\riot-games-rgb-logos-web\Riot_Games_RGB_Logos\001_RG_2021_Logomark\001.1_RG_2021_LOGOMARK_RED.png"
          alt=""
        />
        <h1 className="text-sm font-bold tracking-wide hover:text-blue-400 transition-colors">
          Riot Games
        </h1>

        {/* Menú */}
        <ul className="flex flex-row gap-8 list-none m-0 p-0 text-lg">
          <li>
            <a href="/About" className="hover:text-blue-400 transition-colors duration-200">
              Quienes somos
            </a>
          </li>
          <li>
            <a href="/trabaja" className="hover:text-blue-400 transition-colors duration-200">
              Trabaja con nosotros
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
