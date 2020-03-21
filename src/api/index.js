import { Request } from "./Request"
import { URLs,SEARCH_URL,GET_SONG_BY_NAME_URL,GET_DETAIL_BY_SONG_URL ,GET_ARTIST_ALPHABET_URL} from "./API_HOST"

export const AlbumAPI = {
    getAllSearchFullText: (searchText) => {
        const url = SEARCH_URL +"/"+searchText
        return Request.get(url)
    },

    getSongByNameFullText: (searchText) => {
        const url = GET_SONG_BY_NAME_URL +"/"+searchText
        return Request.get(url)
    }
    ,
    getDetailSongByNameFullText: (searchTextArtistName,searchTextAlbumName,searchTextSongName) => {
        const url = GET_DETAIL_BY_SONG_URL +"/"+searchTextArtistName +"/album/"+ searchTextAlbumName+"/song/"+ searchTextSongName
        return Request.get(url)
    },
    getArtisteByAlphabetFullText: (searchTextAlphabetName) => {
        const url = GET_ARTIST_ALPHABET_URL +"/"+searchTextAlphabetName +"/page/0"
        return Request.get(url)
    },

}