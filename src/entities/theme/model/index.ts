import { defineStore } from 'pinia'

interface ICommonModel {
  isShowNav: boolean
}

export const useThemeModel = defineStore({
  id: 'theme',

  state: () =>
    <ICommonModel>{
      isShowNav: false
    },

  actions: {
    toggleIsShowNav(): void {
      this.isShowNav = !this.isShowNav
    }
  }
})
