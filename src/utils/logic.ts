export const transformRegionsToSelectFormat = (e: any) =>
  e.map((item: any) => {
    return {
      name: item.english_name,
      value: item.iso_3166_1,
    };
  });

export const tranforsmDataGenresToFormatGroupSideBar = (Genres: any) =>
  Genres.map((e: any) => {
    return { name: e.name, slug: e.id };
  });
