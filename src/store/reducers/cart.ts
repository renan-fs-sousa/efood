import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuProducts } from '../../pages/Menu'
import Home from '../../pages/Home'

type CartState = {
  items: MenuProducts[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

// Payload add precisa ser do tipo prato, não restaurant

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MenuProducts>) => {
      const produto = state.items.find((item) => item.id === action.payload.id)

      if (!produto) {
        state.items.push(action.payload)
      } else {
        alert('Este produto já está no carrinho.')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer
