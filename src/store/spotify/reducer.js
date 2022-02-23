import Types from './types';

const INITIAL_STATE = {
  loading: false,
  error: false,
  errorGetAlbum: false,
  errorSearch: false,
  token: null,
  albums: [],
  artists: [],
  tracks: [],
  lastSearchs: {
    lastStrings: [],
    lastAlbums: [],
  },
  selectedAlbumInfo: {},
}

// Reducer
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.AUTENTICATION:
      return {
        ...state,
        loading: true,
      }
    case Types.AUTENTICATION_CONCLUDED:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        errorGetAlbum: false,
        errorSearch: false,
      }
    case Types.AUTENTICATION_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        token: null,
      }

    case Types.SEARCH_API:
      return {
        ...state,
        loading: true,
      }

    case Types.SEARCH_API_CONCLUDED:
      return {
        ...state,
        loading: false,
        albums: action.payload.albums.items,
        tracks: action.payload.tracks.items,
        artists: action.payload.artists.items,
        lastSearchs: action.payload.lastSearchs,
      }

    case Types.SEARCH_API_ERROR:
      return {
        ...state,
        loading: false,
        errorSearch: true
      }

    case Types.GET_ALBUM_INFO:
      return {
        ...state,
        loading: true,
      }

    case Types.GET_ALBUM_INFO_CONCLUDED:
      return {
        ...state,
        loading: false,
        selectedAlbumInfo: action.payload.selectedAlbumInfo,
      }

    case Types.GET_ALBUM_INFO_ERROR:
      return {
        ...state,
        loading: false,
        errorGetAlbum: true
      }

    default:
      return state;
  }
}