import { defineStore } from 'pinia'

interface ICommonState {
  isShowNav: boolean
}

export const useThemeStore = defineStore({
  id: 'theme',

  state: () =>
    <ICommonState>{
      isShowNav: false
    },

  actions: {
    toggleIsShowNav(): void {
      this.isShowNav = !this.isShowNav
    }
  }
})
