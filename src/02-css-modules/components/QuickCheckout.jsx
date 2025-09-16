import { useState } from "react"
import { useCart } from "../../context/CartContext" 
import styles from "../Cart.module.css"

function QuickCheckout() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({
    name: "",
    address: "",
    cep: "",
    payment: "pix",
  })
  const [message, setMessage] = useState("")
  const { clearCart } = useCart() // ⬅️ função que limpa o carrinho

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setMessage("🎉 Obrigada pela compra, " + form.name + "!")
    clearCart() // ⬅️ esvazia o carrinho
    setOpen(false)

    // depois de 3 segundos, apaga a mensagem
    setTimeout(() => setMessage(""), 3000)
  }

  return (
    <div className={styles.checkoutWrapper}>
      {message && <p className={styles.successMsg}>{message}</p>}

      {!message && (
        <>
          <button
            className={`${styles.button} ${styles.checkoutButton}`}
            onClick={() => setOpen(!open)}
          >
            {open ? "Fechar Checkout" : "Continuar para Checkout"}
          </button>

          {open && (
            <form onSubmit={handleSubmit} className={styles.checkoutForm}>
              <label>
                Nome completo
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </label>

              <label>
                Endereço
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </label>

              <label>
                CEP
                <input
                  type="text"
                  name="cep"
                  value={form.cep}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </label>

              <label>
                Método de pagamento
                <select
                  name="payment"
                  value={form.payment}
                  onChange={handleChange}
                  className={styles.input}
                >
                  <option value="pix">PIX</option>
                  <option value="card">Cartão de Crédito</option>
                  <option value="boleto">Boleto</option>
                </select>
              </label>

              <button type="submit" className={styles.button}>
                Finalizar Pedido
              </button>
            </form>
          )}
        </>
      )}
    </div>
  )
}

export default QuickCheckout
