import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import type { ReduxFileSubmitActions, SubmittedFile, SubmitStatus } from '../../types/Submit';

const initialState = {
  metadataStatus: '',
  submittedFiles: [{
    id: '',
    progress: 0,
    status: '',
  }],
}

export const submitSlice = createSlice({
  name: 'submit',
  initialState,
  reducers: {
    // setIsSubmittingMeta: (state, action: PayloadAction<boolean>) => {
    //   state.isSubmittingMeta = action.payload;
    // },
    // setIsSubmittingFiles: (state, action: PayloadAction<boolean>) => {
    //   state.isSubmittingFiles = action.payload;
    // },
    setMetadataSubmitStatus: (state, action: PayloadAction<SubmitStatus>) => {
      state.metadataStatus = action.payload;
    },
    setFilesSubmitStatus: (state, action: PayloadAction<ReduxFileSubmitActions>) => {
      const { id, progress, status } = action.payload;
      const file = state.submittedFiles.find( (file: SubmittedFile) => file.id === id);
      if (file) {
        // file already in state, let's update it
        file.progress = progress ? progress : file.progress;
        file.status = status ? status : file.status;
      }
      else {
        // otherwise add it
        state.submittedFiles.push({
          id: id, 
          progress: progress as number,
          status: status as SubmitStatus,
        })
      }
    },
    resetFilesSubmitStatus: (state) => {
      state['submittedFiles'] = initialState.submittedFiles;
    },
  }
});

export const { setMetadataSubmitStatus, setFilesSubmitStatus, resetFilesSubmitStatus } = submitSlice.actions;

// Select values from state
export const getMetadataSubmitStatus = (state: RootState) => state.submit.metadataStatus;
export const getFilesSubmitStatus = (state: RootState) => state.submit.submittedFiles.filter(f => f.id !== '');
export const getSingleFileSubmitStatus = (id: string) => (state: RootState) => state.submit.submittedFiles.find( (file: SubmittedFile) => file.id === id);

export default submitSlice.reducer;
