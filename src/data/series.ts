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
    id: "the-originals",
    title: "The Originals",
    description: "A family of power-hungry thousand-year-old vampires look to take back the city that they built and dominate all those who have done them wrong.",
    image: "https://image.tmdb.org/t/p/original/eacMAYAC1bqTOdEGdcI6j1dBD8P.jpg",
    director: "dylana kabaka",
    cast: ["Joseph Morgan", "Daniel Gillies", "Phoebe Tonkin"],
    genre: "Drama, Fantasy, Horror",
    releaseDate: "2013-10-03",
    seasons: [
      {
        id: "season-1",
        seasonNumber: 1,
        episodes: [
          {
            id: "to-s1e13",
            title: "the orginals13",
            description: "Klaus returns to New Orleans, the city his family helped build.",
            image: "https://image.tmdb.org/t/p/original/eacMAYAC1bqTOdEGdcI6j1dBD8P.jpg",
            duration: "42m",
            releaseDate: "2013-10-03",
            video: "https://www.mediafire.com/file/0vj46k347motptp/The_Originals_s2_ep13.mp4/file",
            trailer: "https://www.youtube.com/embed/2lxkZcF7gqA"
          },
          {
            id: "to-s1e14",
            title: "the orginals14",
            description: "Klaus returns to New Orleans, the city his family helped build.",
            image: "https://image.tmdb.org/t/p/original/eacMAYAC1bqTOdEGdcI6j1dBD8P.jpg",
            duration: "42m",
            releaseDate: "2013-10-08",
            video: "https://www.mediafire.com/file/gdtid91ez2tl74p/The_Originals_s1_ep14.mp4/file",
            trailer: "https://www.youtube.com/embed/2lxkZcF7gqA"
          },
          {
            id: "to-s1e15",
            title: "the orginals15",
            description: "Klaus returns to New Orleans, the city his family helped build.",
            image: "https://image.tmdb.org/t/p/original/eacMAYAC1bqTOdEGdcI6j1dBD8P.jpg",
            duration: "42m",
            releaseDate: "2013-10-08",
            video: "https://www.mediafire.com/file/fsfvtlxh5igku27/The_Originals_s1_ep15.mp4/file",
            trailer: "https://www.youtube.com/embed/2lxkZcF7gqA"
          },
          {
            id: "to-s1e16 final",
            title: "the orginals 16 final",
            description: "Klaus returns to New Orleans, the city his family helped build.",
            image: "https://image.tmdb.org/t/p/original/eacMAYAC1bqTOdEGdcI6j1dBD8P.jpg",
            duration: "42m",
            releaseDate: "2013-10-08",
            video: "https://www.mediafire.com/file/mupl5lng24zb6dp/The_Originals_s1_ep16.mp4/file",
            trailer: "https://www.youtube.com/embed/2lxkZcF7gqA"
          }

        ]
      }
    ]
  },
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
            trailer: "https://www.youtube.com/embed/wSZUISc0ESE"
          },
          {
            id: "s1e2",
            title: "Ep2 triada",
            description: "The plan faces its first big challenge.",
            image: "https://image.tmdb.org/t/p/original/qrgl150Zn55WTkVKwZIQhziZS0l.jpg",
            duration: "50m",
            releaseDate: "2017-05-09",
            video: "https://www.mediafire.com/file/xbpaki9w39stqxm/TRIAD_2.mp4/file",
            trailer: "https://www.youtube.com/embed/wSZUISc0ESE"
          },
          {
            id: "s1e3",
            title: "Ep3 triada",
            description: "Tensions rise among the robbers and hostages.",
            image: "https://image.tmdb.org/t/p/original/qrgl150Zn55WTkVKwZIQhziZS0l.jpg",
            duration: "50m",
            releaseDate: "2017-05-16",
            video: "https://www.mediafire.com/file/826eom8g5ut6ash/Triada_ep3.mp4/file",
            trailer: "https://www.youtube.com/embed/wSZUISc0ESE"
          },
          {
            id: "s1e4",
            title: "Ep4 triada",
            description: "A betrayal threatens the heist.",
            image: "https://image.tmdb.org/t/p/original/qrgl150Zn55WTkVKwZIQhziZS0l.jpg",
            duration: "50m",
            releaseDate: "2017-05-23",
            video: "https://example.com/lcdp-s1e4.mp4",
            trailer: "https://www.youtube.com/embed/wSZUISc0ESE"
          },
          {
            id: "s1e5",
            title: "Ep5 triada",
            description: "Triada",
            image: "https://image.tmdb.org/t/p/original/qrgl150Zn55WTkVKwZIQhziZS0l.jpg",
            duration: "50m",
            releaseDate: "2017-05-02",
            video: "https://www.mediafire.com/file/5prr4a8on70hslf/Triada_ep5.mp4/file",
            trailer: "https://www.youtube.com/embed/wSZUISc0ESE"
          }
        ]
      }
    ]
  },
  {
    id: "the cleaning lady s2", 
    title: "the cleaning lady s2",
    description: "Sheriff's deputy Rick Grimes wakes up from a coma to find a post-apocalyptic world dominated by flesh-eating zombies.",
    image: "https://image.tmdb.org/t/p/original/6JwnRnEQtD1Rreck76i4MYrjcJ3.jpg",
    director: "sankara da premier",
    cast: ["Andrew Lincoln", "Norman Reedus", "Melissa McBride"],
    genre: "Drama, Horror, Thriller",
    releaseDate: "2010-10-31",
    seasons: [
      {
        id: "season-4",
        seasonNumber: 4,
        episodes: [
          {
            id: "the cleaning lady s4 ep1",
            title: "the cleaning lady s4 ep1",
            description: "Rick awakens from a coma to find the world overrun by zombies.",
            image: "https://image.tmdb.org/t/p/original/6JwnRnEQtD1Rreck76i4MYrjcJ3.jpg",
            duration: "44m",
            releaseDate: "2010-10-31",
            video: "https://www.mediafire.com/file/ntkmwlboax6cjbd/The_Cleaning_Lady_s4_ep1.mp4/file",
            trailer: "https://www.youtube.com/embed/HoKWURfXhMc"
          },
          {
            id: "the cleaning lady s4 ep2",
            title: "the cleaning lady s4 ep2",
            description: "Rick meets other survivors and learns about the new world.",
            image: "https://image.tmdb.org/t/p/original/6JwnRnEQtD1Rreck76i4MYrjcJ3.jpg",
            duration: "44m",
            releaseDate: "2010-11-07",
            video: "https://www.mediafire.com/file/rxu5et7tly5wdhh/The_Cleaning_Lady_s4_ep2.mp4/file",
            trailer: "https://www.youtube.com/embed/dYrx2StPl5A"
          }
        ]
      }
    ]
  }
];

