import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { FaCartPlus } from "react-icons/fa"

function AddButton({ id }) {
  const [isPending, setIsPending] = useState(false)

  const { addToCart } = useCart()

  const handleClick = () => {
    if (!id || isPending) return
    setIsPending(true)
    setTimeout(() => {
      addToCart(id)
      setIsPending(false)
    }, 600)
  }

  return (
    <button
    onClick={handleClick}
    className="add-to-cart-btn"
    aria-label="Adicionar produto ao carrinho"
    disabled={isPending} 
    aria-disabled={isPending}
    aria-busy={isPending}
    >
      {isPending
      ? "Adicionando..."
      : <>
          <FaCartPlus aria-hidden="true" /> Adicionar
        </>
      }
    </button>
  )
}

export default AddButton
