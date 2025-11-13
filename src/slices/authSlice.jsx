import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, onAuthStateChanged,} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase";

const initialState = {
  user: null,
  loading: false,
  error: null,
};


export const signupUser = createAsyncThunk(
  "auth/signup",
  async ({ email, password, role }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user in Firestore with role
      await setDoc(doc(db, "users", user.uid), { 
        email, role, createdAt: new Date().toISOString(),
      });

      return { email: user.email, uid: user.uid, role };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const listenToAuthChanges = createAsyncThunk(
  "auth/listenToAuthChanges",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            const data = userDoc.data();
            dispatch(setUserLocal({ email: user.email, uid: user.uid, role: data.role }));
          } else {
            dispatch(setUserLocal(null));
          }
        } else {
          dispatch(setUserLocal(null));
        }
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
    setUserLocal(state, action) {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
     
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })       
  },
});

export const { clearError, setUserLocal } = authSlice.actions;
export default authSlice.reducer;
