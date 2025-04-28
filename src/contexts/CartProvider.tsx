import React, { createContext, ReactNode, useContext, useState } from 'react'

export type CartItem = {
  id: string
  title: string
  price: number
  quantity: number
}

export type CoffeeType = {
  id: string
  title: string
  price: number
  description: string
  image: string
  tags: string[]
}

type CartContextType = {
  cart: CartItem[]
  addToCart: (coffee: CoffeeType) => void
  increaseQuantity: (id: string) => void
  decreaseQuantity: (id: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType>({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  function addToCart(coffee: CoffeeType) {
    setCart(prev => {
      const exists = prev.find(item => item.id === coffee.id)
      if (exists) {
        return prev.map(item =>
          item.id === coffee.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { id: coffee.id, title: coffee.title, price: coffee.price, quantity: 1 }]
    })
  }

  function increaseQuantity(id: string) {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  function decreaseQuantity(id: string) {
    setCart(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    )
  }

  function clearCart() {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
