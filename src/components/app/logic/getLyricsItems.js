const getLyricsItems = function(lyricsJson) {
  const pairedNames = lyricsJson.map(item => {
    return item.songs.map(function(song) {
      return {
        lyricsName: item.artist + " - " + song.name,
        fileVersion: song.fileVersion
      };
    });
  });
  const reducedPairedNames = pairedNames.reduce(function(total, item, index) {
    const arr = total.concat(item),
      addId = a => {
        for (let i = 0; i < a.length; i++) {
          a[i].id = i;
        }
        return a;
      };
    return addId(arr);
  });

  reducedPairedNames.sort((a, b) => {
    return a.lyricsName < b.lyricsName ? -1 : 1;
  });

  return reducedPairedNames;
};

export default getLyricsItems;
