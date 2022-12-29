import { createSlice } from "@reduxjs/toolkit";

const ProjectSlice = createSlice({
  name: "project",
  initialState: { allProject: "", UserProject: "" },
  reducers: {
    AddUserProject(state, action) {
      state.UserProject = action.payload;
    },
  },
});

export const { AddUserProject } = ProjectSlice.actions;
export const selectedProject = (state) => state.project;

export default ProjectSlice.reducer;
