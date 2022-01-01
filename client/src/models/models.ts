import { User } from "@auth0/auth0-react";
import { ChangeEvent } from "react";

export interface CommentUser {
  username: string
  email: string,
  _id: string
  __typename: string
}

export interface IStory {
  name: string
  src: string
  profile: string
}

export interface ILike {
  userId: string
  username: string
  _id: string
}

export interface IComment {
  userId: string
  username: string
  _id?: string
  body: string
  userImg: string
  createdAt: string
  user?: CommentUser
}


export interface IPost {
  _id: string
  image: string
  body: string
  createdAt: Date
  userId: string
  comments: IComment[]
  likes: ILike[]
  likeCount: number
  commentCount: number
  userImg: string
  user: { username: string, email: string }
  groupId: String
}

export interface CommentContextParams {
  opened: boolean, setDelete: (val: boolean) => void, setOpened: (val: boolean) => void, commentId: string, commentText: string
}

export interface IChangedComment {body: string, id: string}

export interface CommentFormContextParams {
  changedComment: IChangedComment, changeChangedComment: (val: string, id: string ) => void
}

export interface ISidebarItem {src: string, to: string, title: string}

export interface ISidebarRow { text: string, icon: Function, to: string }

export interface ExtendedUser extends User {
  mutes?: string[]
  friends?: string[]
  friendRequests?: string[]
  yourSendedFriendReq?: string[]
}

export interface IPhoto { image: string, _id: string }

export interface ICreateGroupContextProps {title: string, changeHandler: (e:ChangeEvent<HTMLInputElement>) => void, createGroup: () => void}

export interface IGroup {
  bgPicture: string,
  picture: string,
  customers: string[],
  title: string,
  postsIds: string[]
  _id?: string
  creatorId: string

  users?: User[]
  creator?: User
}