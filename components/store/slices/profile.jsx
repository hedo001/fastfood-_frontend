import { createSlice } from "@reduxjs/toolkit";

export const ProfileSlice = createSlice({
  name: "profile",
  initialState: {
    information: {
      name: "Диёра",
      surname: "Умарова",
      brithday: "04.03.1997",
      tel: "+998 (91) 214-03-38",
    },
  },
  reducers: {
    editProfile: (state, change) => {
      console.log(change.payload);
      if (
        state.name !== change.payload.name ||
        state.brithday !== change.payload.brithday ||
        state.tel !== change.payload.tel
      ) {
        return change.payload;
      }
    },
  },
});
export const { editProfile } = ProfileSlice.actions;
export default ProfileSlice.reducer;
