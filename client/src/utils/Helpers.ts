import { getDownloadURL, ref, uploadString } from "firebase/storage"
import { v4 as uuid } from 'uuid'
import { storage } from "../firebase"

 export const addFileToStorage = async (data_url: string, url: string) => {
    const id = uuid()

    const imageRef = ref(storage, `users/${url}/` + id)

    await uploadString(imageRef, data_url, 'data_url')

    const downloadUrl = getDownloadURL(imageRef)

    return downloadUrl
  }