import { makeAutoObservable } from 'mobx'

class ChangeCommentStore {

  constructor () {
    makeAutoObservable(this)
  }
  
  currentText = '' as string
  currentId = '' as string
  

  addCangedCommet (text: string, id: string ) {
 
    this.currentId = id
    this.currentText = text

  }

  clearChnagedComment () {
    this.currentId = ''
    this.currentText = ''
  }
}

export default new ChangeCommentStore()