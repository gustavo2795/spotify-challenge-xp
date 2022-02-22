import Types from './types';

// Action Creators
export const Creators = {
  autenticate: () => ({ 
    type: Types.AUTENTICATION,
  }),

  searchAlbumsTracksArtist: (payload) => ({
    type: Types.SEARCH_API,
    payload,
  }),

  getAlbumInfo: (payload) => ({
    type: Types.GET_ALBUM_INFO,
    payload,
  })

}