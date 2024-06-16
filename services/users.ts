import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { auth, db, storage } from '@/config/firebase.config';
import { UserData } from '@/types';

export const UserService = {
  registerUser: async function (email: string, password: string) {
    const user = await createUserWithEmailAndPassword(auth, email, password);

    return { user };
  },

  signInUser: async function (email: string, password: string) {
    const { user } = await signInWithEmailAndPassword(auth, email, password)

    return user
  },

  handleLogout: async () => {
    return await signOut(auth);
  },

  getUrlFromFileUpload: async function (_fileRef: any, userId: any, loanId: any, file: any) {
    const fileRef = ref(
      storage,
      `${_fileRef}/${userId}__${loanId}__${new Date().getTime()}`
    );

    const snapshot = await uploadBytes(fileRef, file);
    const fileUrl = await getDownloadURL(snapshot.ref);

    return fileUrl;
  },





  setUserData: async function <T extends UserData>(data: T) {
    await setDoc(doc(db, 'users', data.id), {
      ...data,
    });

    return { ok: true };
  },

  uploadUserSelfie: async function (userId: string, randomId: any, file: any) {
    const url = await this.getUrlFromFileUpload(
      'userSelfies',
      userId,
      randomId,
      file
    );

    return url;
  },

};
