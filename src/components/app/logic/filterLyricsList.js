const filterLyricsList = function(value, lyricsList) {
   const filteredList = lyricsList.filter(item =>
      item.lyricsName.toLowerCase().includes(value.toLowerCase())
   );
   return filteredList;
};

export default filterLyricsList;
