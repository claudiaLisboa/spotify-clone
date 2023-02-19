import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery } from '../redux/services/shazamCore';

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songid });

  //console.log(songid);

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId="" songData={songData} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">AZLyrics : </h2>
        <div className="mt-5" />
        {songData?.sections[1].type === 'AZLYRICS'
          ? songData?.sections[1].text.map((Line, index) => (
            <p className="text-gray-400 text-base my-1">{Line}</p>
          )) : <p className="text-gray-400 text-base my-1">Sorry, no azlyrics found!</p> }
      </div>

    </div>
  );
};

export default SongDetails;
