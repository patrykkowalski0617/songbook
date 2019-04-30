import React from 'react';
import LyricsItem from './Lyrics_Item';
// import lyrics_list from '../data/lyrics_list';

const LyricsList = ({items}) => {
  return (
    <ul>
      {items.map(lyricsNames => <LyricsItem key={lyricsNames.id} lyricsName={lyricsNames.lyricsName}/>)}
    </ul>
  )
}

export default LyricsList;
