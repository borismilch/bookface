import { makeAutoObservable } from 'mobx'

class SidebarState {

  isOpen = false as boolean

  constructor () {
    makeAutoObservable(this)
  }

}

export default new SidebarState()