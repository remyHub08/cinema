export interface Episode {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  releaseDate: string;
  video?: string; 
  trailer?: string;
}

export interface Season {
  id: string;
  seasonNumber: number;
  episodes: Episode[];
}

export interface Series {
  id: string;
  title: string;
  description: string;
  image: string;
  director: string;
  cast: string[];
  genre: string;
  releaseDate: string;
  seasons: Season[];
}

export const series: Series[] = [
  {
    id: "triada",
    title: "triada",
    description: "A criminal mastermind recruits eight people to carry out an ambitious heist.",
    image: "https://image.tmdb.org/t/p/original/qrgl150Zn55WTkVKwZIQhziZS0l.jpg",
    director: "Álex Pina",
    cast: ["Úrsula Corberó", "Álvaro Morte", "Itziar Ituño"],
    genre: "Crime, Thriller",
    releaseDate: "2017-05-02",
    seasons: [
      {
        id: "season-1",
        seasonNumber: 1,
        episodes: [
          {
            id: "s1e1",
            title: "Ep1 triada",
            description: "Triada",
            image: "https://image.tmdb.org/t/p/original/qrgl150Zn55WTkVKwZIQhziZS0l.jpg",
            duration: "50m",
            releaseDate: "2017-05-02",
            video: "https://www.mediafire.com/file/3gt76zhvgly4d02/Triada_ep1.mp4/file",
            trailer: "https://youtu.be/wSZUISc0ESE" // Example trailer (YouTube embed)
          },
          {
            id: "s1e2",
            title: "Ep2 triada",
            description: "The plan faces its first big challenge.",
            image: "https://image.tmdb.org/t/p/original/qrgl150Zn55WTkVKwZIQhziZS0l.jpg",
            duration: "50m",
            releaseDate: "2017-05-09",
            video: "https://www.mediafire.com/file/xbpaki9w39stqxm/TRIAD_2.mp4/file",
            trailer: "https://youtu.be/wSZUISc0ESE"
          },
          {
            id: "s1e3",
            title: "Ep3 triada",
            description: "Tensions rise among the robbers and hostages.",
            image: "https://image.tmdb.org/t/p/original/qrgl150Zn55WTkVKwZIQhziZS0l.jpg",
            duration: "50m",
            releaseDate: "2017-05-16",
            video: "https://www.mediafire.com/file/826eom8g5ut6ash/Triada_ep3.mp4/file",
            trailer: "https://youtu.be/wSZUISc0ESE"
          },
          {
            id: "s1e4",
            title: "Ep4 triada",
            description: "A betrayal threatens the heist.",
            image: "https://image.tmdb.org/t/p/original/qrgl150Zn55WTkVKwZIQhziZS0l.jpg",
            duration: "50m",
            releaseDate: "2017-05-23",
            video: "https://example.com/lcdp-s1e4.mp4",
            trailer: "https://youtu.be/wSZUISc0ESE"
          },
          
        ]
      },
      
    ]
  }
];
    
