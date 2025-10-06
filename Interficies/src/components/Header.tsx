import { Link, NavLink } from 'react-router-dom'
import RiotLogo from '@/assets/riot-games-rgb-logos-web/Riot_Games_RGB_Logos/001_RG_2021_Logomark/001.1_RG_2021_LOGOMARK_RED.png'

export const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 flex items-center justify-between px-8 py-4 bg-[#3d3d3d] text-white z-50 shadow-md">
      {/* Logo + nombre */}
      <div className="flex items-center gap-4">
        <img src={RiotLogo} alt="Riot Games Logo" className="w-[60px] h-auto" />
        <h1 className="text-2xl font-bold tracking-wide">
          <Link to="/" className="hover:text-red-400 transition-colors"></Link>
        </h1>
      </div>

      {/* Menú de navegación */}
      <ul className="flex gap-8 list-none m-0 p-0 text-lg">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-red-400' : 'hover:text-red-400 transition-colors'
            }
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-red-400' : 'hover:text-red-400 transition-colors'
            }
          >
            Quienes somos
          </NavLink>
        </li>
      </ul>
    </header>
  )
}
