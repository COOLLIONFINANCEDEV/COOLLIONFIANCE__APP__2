import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice({
  name: "card",
  initialState: { projects: [] },
  reducers: {
    addProject(state, action) {
      const projects = state.projects;
      projects.push(action.payload);
      state.projects = projects;
    },
    deleteProject(state, action) {
      const id = action.payload;
      const element = state.projects.find((item) => item.project.id === id);

      const index = state.projects.indexOf(element);
      if (index > -1) {
        state.projects.splice(index, 1);
      }
    },
    resetProject(state, action) {
      state.projects = [];
    },
  },
});

export const { addProject, deleteProject, resetProject } = CardSlice.actions;

export const selectProject = (state) => state.card;

export default CardSlice.reducer;
