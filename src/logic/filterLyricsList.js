const filterLyricsList = function(value, lyricsList) {
  return lyricsList.filter(item =>
    item.lyricsName.toLowerCase().includes(value.toLowerCase())
  );
};

export default filterLyricsList;
