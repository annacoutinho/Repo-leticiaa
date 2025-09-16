import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { useCart } from '../context/CartContext'
import styles from './Cart.module.css'
import CartItem from './components/CartItem'
import Navbar from './components/Navbar'

function Cart() {
  const [loading, setLoading] = useState(true)
  const [total, setTotal] = useState(0)
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [orderFinished, setOrderFinished] = useState(false)
  const [buyerName, setBuyerName] = useState('')

  const { cart, cartQuantity, clearCart } = useCart()

  useEffect(() => {
    let value = 0
    if (cart.length > 0) {
      cart.forEach(item => (value += item.price * item.quantity))
    }
    setTotal(value)
  }, [cart])

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(t)
  }, [])

  const handleFinishOrder = e => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)

    const name = (fd.get('name') || '').toString().trim()
    const address = (fd.get('address') || '').toString().trim()
    const cep = (fd.get('cep') || '').toString().trim()

    if (!name || !address || !cep) {
      alert('Preencha nome, endereço e CEP.')
      return
    }

    setBuyerName(name.split(' ')[0]) // só o primeiro nome p/ mensagem
    setOrderFinished(true)
    clearCart()
  }

  return (
    <section>
      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>Carrinho</h1>

        {orderFinished ? (
          <div className={styles.container} style={{ maxWidth: 520 }}>
            <p className={styles.thankYou} style={{ fontSize: 18 }}>
              Obrigada pela compra{buyerName ? `, ${buyerName}` : ''}!<br />
              Seu pedido foi registrado com sucesso.
            </p>
          </div>
        ) : cart.length <= 0 ? (
          <p className={styles.emptyCart}>Seu carrinho está vazio.</p>
        ) : (
          <section className={styles.mainContent}>
            <section
              aria-label="Itens no carrinho"
              className={`${styles.cartSection} ${styles.items}`}
            >
              <h2 className={styles.sectionTitle}>Meus itens</h2>
              <section className={`${styles.container} ${styles.myItems}`}>
                {cart.map(item => (
                  <CartItem key={item.id} product={item} loading={loading} />
                ))}
              </section>
            </section>

            {/* Resumo */}
            <section
              aria-label="Resumo da compra"
              className={`${styles.cartSection} ${styles.summary}`}
            >
              <h2 className={styles.sectionTitle}>Resumo</h2>

              <section className={styles.container}>
                <div className={`${styles.summaryLine} ${styles.detail}`}>
                  <p>Subtotal ({cartQuantity} itens)</p>
                  <span className={styles.price}>
                    {total.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    })}
                  </span>
                </div>

                <div className={`${styles.summaryLine} ${styles.detail}`}>
                  <p>Frete</p>
                  <span className={styles.price}>R$ 5,00</span>
                </div>

                <div
                  className={`${styles.summaryLine} ${styles.total}`}
                  aria-label="Total da compra"
                >
                  <p>Total</p>
                  <span>
                    {(total + 5).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    })}
                  </span>
                </div>

                {!checkoutOpen ? (
                  <button
                    onClick={() => setCheckoutOpen(true)}
                    className={`${styles.button} ${styles.checkoutButton}`}
                  >
                    Fechar Checkout
                  </button>
                ) : (
                  <form
                    onSubmit={handleFinishOrder}
                    className={styles.checkoutForm}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      marginTop: '12px'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 6
                      }}
                    >
                      <label htmlFor="name">Nome completo</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Ex.: Maria Silva"
                        autoComplete="name"
                        required
                      />
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 6
                      }}
                    >
                      <label htmlFor="email">E-mail (opcional)</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="voce@email.com"
                        autoComplete="email"
                      />
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 6
                      }}
                    >
                      <label htmlFor="address">Endereço</label>
                      <input
                        id="address"
                        name="address"
                        type="text"
                        placeholder="Rua, número, bairro"
                        autoComplete="street-address"
                        required
                      />
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 6
                      }}
                    >
                      <label htmlFor="cep">CEP</label>
                      <input
                        id="cep"
                        name="cep"
                        type="text"
                        inputMode="numeric"
                        placeholder="00000-000"
                        autoComplete="postal-code"
                        required
                      />
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 6
                      }}
                    >
                      <label htmlFor="payment">Método de pagamento</label>
                      <select
                        id="payment"
                        name="payment"
                        defaultValue="pix"
                        required
                      >
                        <option value="pix">PIX</option>
                        <option value="credito">Cartão de Crédito</option>
                        <option value="boleto">Boleto</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className={`${styles.button} ${styles.finalizeButton}`}
                    >
                      Finalizar Pedido
                    </button>
                  </form>
                )}
              </section>
            </section>
          </section>
        )}
      </main>

      <footer className={styles.footer}>
        <section className={styles.footerContainer}>
          <img
            src={logo}
            alt="Logo da TechWave"
            className={styles.footerLogo}
          />
          <p>© 2025 TechWave</p>
          <p>Todos os direitos reservados.</p>
        </section>
      </footer>
    </section>
  )
}

export default Cart
