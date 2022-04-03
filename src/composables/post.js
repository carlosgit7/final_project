import { ref } from 'vue'
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
} from 'firebase/firestore'

import { db } from './useFirebase'
import userAuth from './userAuth'

const { user } = userAuth()

const posts = ref([])

const usePosts= () => {
  const postsCollection = collection(db, 'userPosts')

  const postQuery = query(postsCollection, orderBy('date', 'desc'))

  const unsubscribe = onSnapshot(postQuery, querySnapshot => {
    posts.value = []
    querySnapshot.forEach(doc => {
      posts.value.push({ id: doc.id, ...doc.data() })
    })
  })

  const sendPost = async postText => {
    await addDoc(postsCollection, {
      content: postText,
      userName: user.value,
      date: new Date(),      
    })
  }


  return { posts, unsubscribe, sendPost }
}

export default usePosts