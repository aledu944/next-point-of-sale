import { StateCreator, create } from 'zustand';

interface UiState {
    isMenuOpen: boolean;
}


interface Actions {
    handleMenuOpen: () => void;
}

const storeApi: StateCreator<UiState & Actions> = (set, get) => ({
    isMenuOpen: false,
    handleMenuOpen: () => {
        
        const { isMenuOpen } = get();

        set({
            isMenuOpen: !isMenuOpen,
        })
    }

})


export const useUiStore = create<UiState & Actions>()(
    storeApi
);