import { useCart } from "../../contexts/CartProvider"

 

export function Finalizado() {
  const { cart } = useCart()

  return (
    <div>
      <h1>Resumo do seu pedido</h1>

      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.title} - {item.quantity}x - R$ {(item.price * item.quantity).toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
