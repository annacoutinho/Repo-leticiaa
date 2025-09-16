import { FaShoppingCart } from 'react-icons/fa'
import { IoMoon, IoSunny } from 'react-icons/io5'
import { Link, NavLink, useNavigate } from 'react-router'
import logo from '../../assets/logo.png'
import { useCart } from '../../context/CartContext'
import { useThemeContext } from '../../context/ThemeContext'

function Navbar() {
  const { theme, toggleTheme } = useThemeContext()
  const { cartQuantity } = useCart()

  const navigate = useNavigate()

  return (
    <header className="bg-white dark:bg-zinc-900 w-full fixed z-50">
      <nav className="flex justify-between items-center px-4 py-4 max-w-[1200px] mx-auto sm:px-8">
        <Link
          to="/"
          aria-label="Página inicial"
          className="flex items-center gap-2 font-semibold"
        >
          <img src={logo} alt="Logo da TechWave" className="w-10" />
          <span className="hidden dark:text-white md:inline-block">
            TechWave
          </span>
        </Link>

        <div className="gap-4 flex sm:gap-6">
          <NavLink
            to="/eletronicos"
            aria-label="Ir para Eletrônicos"
            className={({ isActive }) =>
              `font-medium border-b-2 border-b-transparent py-0.5 px-[3px] transition-colors duration-250 ${
                isActive
                  ? 'text-blue-700 border-b-blue-700 dark:text-white dark:border-b-white'
                  : 'dark:text-white hover:text-blue-700'
              }`
            }
          >
            Eletrônicos
          </NavLink>
          <NavLink
            to="/acessorios"
            aria-label="Ir para Acessórios"
            className={({ isActive }) =>
              `font-medium border-b-2 border-b-transparent py-0.5 px-[3px] transition-colors duration-250 ${
                isActive
                  ? 'text-blue-700 border-b-blue-700 dark:text-white dark:border-b-white'
                  : 'dark:text-white hover:text-blue-700'
              }`
            }
          >
            Acessórios
          </NavLink>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <button
            aria-label={
              theme === 'light'
                ? 'Alternar para tema escuro'
                : 'Alternar para tema claro'
            }
            onClick={toggleTheme}
            className="bg-transparent flex justify-center items-center text-lg text-blue-700 dark:text-white h-[30px] w-[31px] rounded-full border-3 border-blue-700 dark:border-white dark:hover:bg-white dark:hover:text-zinc-900 hover:bg-blue-700 hover:text-white cursor-pointer transition-colors duration-250"
          >
            {theme === 'light' ? (
              <IoMoon aria-hidden="true" />
            ) : (
              <IoSunny aria-hidden="true" />
            )}
          </button>

          <button
            onClick={() => navigate('/cart')}
            aria-label="Ver itens do carrinho"
            className="flex justify-between items-center h-[40px] w-[85px] py-2 px-[14px] rounded-full text-normal font-medium dark:text-white bg-zinc-100 dark:bg-zinc-800 hover:brightness-96 transition-all duration-250 cursor-pointer"
          >
            <FaShoppingCart
              aria-hidden="true"
              className="text-[1.3rem] text-blue-700 dark:text-white"
            />
            <span
              role="status"
              aria-live="polite"
              aria-label="Itens no carrinho"
            >
              {cartQuantity}
            </span>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
