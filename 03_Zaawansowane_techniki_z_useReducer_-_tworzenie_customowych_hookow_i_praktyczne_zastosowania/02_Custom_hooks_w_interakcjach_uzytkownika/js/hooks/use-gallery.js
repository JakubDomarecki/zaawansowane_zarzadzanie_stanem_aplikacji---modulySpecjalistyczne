import { useReducer } from 'react';

const actions = {
  NEXT_PHOTO: 'NEXT_PHOTO',
  PREV_PHOTO: 'PREV_PHOTO',
};

const galleryReducer = (state, action) => {
  switch (action.type) {
    case actions.NEXT_PHOTO:
      return {
        ...state,
        currentPhotoIndex: (state.currentPhotoIndex + 1) % state.photos.length,
      };
    case actions.PREV_PHOTO:
      return {
        ...state,
        currentPhotoIndex:
          (state.currentPhotoIndex - 1 + state.photos.length) % state.photos.length,
      };
    default:
      throw new Error('Unknown action type');
  }
};

export const useGallery = (photos) => {
  const initialState = {photos, currentPhotoIndex: 0}
  const [state, dispatch] = useReducer(galleryReducer, initialState);
  
  const nextPhoto = () => {
    dispatch({type: actions.NEXT_PHOTO})
  }

  const prevPhoto = () => {
    dispatch({type: actions.PREV_PHOTO})
  }
  
  const currentPhoto = state.photos[state.currentPhotoIndex];

  return { currentPhoto, nextPhoto, prevPhoto };
};
