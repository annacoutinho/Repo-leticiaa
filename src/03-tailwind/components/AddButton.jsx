import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { FaCartPlus } from "react-icons/fa"

function AddButton({ id }) {
  const [isPending, setIsPending] = useState(false)

  const { addToCart } = useCart()

  const handleClick = () => {
    if (!id || isPending) return // Evita múltiplos cliques ou quando não há produto
    setIsPending(true) // Define o estado para indicar operação em andamento
    setTimeout(() => { // Simula um pequeno atraso de processamento
      addToCart(id) // Chama o callback informando o id
      setIsPending(false) // Libera o botão após simulação
    }, 600)
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Adicionar produto ao carrinho"
      disabled={isPending} // Desabilita quando em operação
      aria-disabled={isPending} // Reflete o estado para tecnologia assistiva
      aria-busy={isPending} // Indica que está processando
      className="flex justify-center items-center gap-2 border-2 text-medium border-transparent rounded-sm bg-blue-700 text-white text-lg py-1 px-10 h-[40px] cursor-pointer
        hover:not-[:active]:not-[:disabled]:border-blue-700
        dark:hover:not-[:active]:not-[:disabled]:border-white
        hover:not-[:disabled]:text-blue-700
        dark:hover:not-[:disabled]:text-white
        hover:not-[:active]:not-[:disabled]:bg-transparent
        active:bg-transparent active:text-blue-700 active:scale-90
        disabled:cursor-auto disabled:opacity-70
        transition-all duration-250"
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
