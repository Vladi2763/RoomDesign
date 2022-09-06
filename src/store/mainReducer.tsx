export type Product = {
  electrification: string;
  height: number;
  id: number;
  image: string;
  isDarkMode: boolean;
  material: string;
  name: string;
  published_at: string;
  weight: number;
  width: number;
};

export type InitialState = {
  products: Array<Product>;
  selectedProduct: null | Product;
  isDark: boolean;
};

export type Action = {
  type: string;
  products: Array<Product>;
  selectedProduct: Product;
};

const initialState: InitialState = {
  products: [],
  selectedProduct: null,
  isDark: false,
};

const mainReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SET_PRODUCTS": {
      const products = action.products;

      return {
        ...state,
        products: [...products],
      };
    }

    case "SELECT_PRODUCT": {
      const selectedProduct = action.selectedProduct;
      return {
        ...state,
        selectedProduct: { ...selectedProduct },
      };
    }

    case "SWITCH_ON": {
      return {
        ...state,
        isDark: false,
      };
    }

    case "SWITCH_OFF": {
      if (state.selectedProduct?.isDarkMode) {
        const isDark = true;

        return {
          ...state,
          isDark: true,
        };
      }
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default mainReducer;
