import React, { createContext, ReactNode, useContext, useState } from 'react'

export type CartItem = {
  id: string
  title: string
  price: number
  quantity: number
  image: string
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
  removeFromCart: (id: string) => void
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
      return [...prev, {
        id: coffee.id,
        title: coffee.title,
        price: coffee.price,
        quantity: 1,
        image: coffee.image
      }]
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
  function removeFromCart(id: string) {
    setCart(prev => prev.filter(item => item.id !== id));
  }



  function clearCart() {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}


interface AddressData {
  cep: string
  rua: string
  numero: string
  complemento?: string
  bairro: string
  cidade: string
  uf: string
}

interface AddressContextType {
  address: AddressData
  setAddress: (data: AddressData) => void
}

const AddressContext = createContext({} as AddressContextType)

export function AddressProvider({ children }: { children: ReactNode }) {
  const [address, setAddress] = useState<AddressData>({
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: ''
  })

  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  )
}

export function useAddress() {
  return useContext(AddressContext)
}