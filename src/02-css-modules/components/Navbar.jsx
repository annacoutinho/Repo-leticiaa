import { FaShoppingCart } from 'react-icons/fa'
import { IoMoon, IoSunny } from 'react-icons/io5'
import { Link, NavLink, useNavigate } from 'react-router'
import logo from '../../assets/logo.png'
import { useCart } from '../../context/CartContext'
import { useThemeContext } from '../../context/ThemeContext'
import styles from './Navbar.module.css'

function Navbar() {
  const { theme, toggleTheme } = useThemeContext()
  const { cartQuantity } = useCart()

  const navigate = useNavigate()

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link
          to="/"
          className={`${styles.logo} ${styles.link}`}
          aria-label="Página inicial da TechWave"
        >
          <img
            src={logo}
            alt="Logo da TechWave"
            className={`${styles.logoImg} h-30 w-auto`}
          />
          <span className={styles.logoText}>TechWave</span>
        </Link>

        <div className={styles.pages}>
          <NavLink
            to="/eletronicos"
            className={({ isActive }) =>
              `${styles.pageLink} ${styles.link} ${isActive ? 'active' : ''}`
            }
            aria-label="Ir para Eletrônicos"
          >
            Eletrônicos
          </NavLink>
          <NavLink
            to="/acessorios"
            className={({ isActive }) =>
              `${styles.pageLink} ${styles.link} ${isActive ? 'active' : ''}`
            }
            aria-label="Ir para Acessórios"
          >
            Acessórios
          </NavLink>
        </div>

        <div className={styles.buttons}>
          <button
            className={styles.themeToggleBtn}
            aria-label={
              theme === 'light'
                ? 'Alternar para tema escuro'
                : 'Alternar para tema claro'
            }
            onClick={toggleTheme}
          >
            {theme === 'light' ? (
              <IoMoon aria-hidden="true" />
            ) : (
              <IoSunny aria-hidden="true" />
            )}
          </button>

          <button
            onClick={() => navigate('/cart')}
            className={styles.cartBtn}
            aria-label="Ver itens do carrinho"
          >
            <FaShoppingCart className={styles.cartIcon} aria-hidden="true" />
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
