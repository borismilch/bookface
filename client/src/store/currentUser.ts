import { makeAutoObservable, observable } from 'mobx'

class CurrentUserState {

  mutes = observable([]) as string[]
  friendsReq = observable([]) as string[]
  yourFriendReqs = observable([]) as string[]
  friends = observable([]) as string[]


  picture = '' as string
  bgPicture = '' as string
  username = '' as string
  

  email = ''
  isLoadedUser = false as boolean

  constructor () {
    makeAutoObservable(this)
  }

  setMutes (mutes: string[]) {
    this.mutes = mutes
  }

  setEmail(val: string) {
    this.email = val
  }

  setLoadedUser (val: boolean) {
    this.isLoadedUser = val
  }

  setFriendsReqs (val: string[]) {
    this.friendsReq = val
  }

  setYourFriendReq (val: string[]) {
    this.yourFriendReqs = val
  }

  setFriends (val: string[]) {
    this.friends = val
  }

  setPicture (val: string) {
    this.picture = val
  }

  setBgPicture (val: string) {
    this.bgPicture = val
  }

}

export default new CurrentUserState()