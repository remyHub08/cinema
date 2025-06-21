export interface Movie {
  id: string;
  title: string;
  genre: string;
  image: string;
  video?: string; // Optional video link for each movie
  trailer: string; // Trailer link for each movie
  rating: number;
  duration?: string; // Make duration optional
  createdAt?: string; // Add createdAt field
  description: string;
  director: string;
  cast: string[];
  releaseDate: string;
  seriesId?: string; // Optional series identifier for series support
}

export const movies: Movie[] = [
  {
    id: '0',
    title: 'the guest',
    genre: 'Action, Adventure, Sci-Fi',
    image: 'https://image.tmdb.org/t/p/original/x9BvRmPsXzN6e2cxvf5ZCBh7FQh.jpg',
    video: 'https://www.mediafire.com/file/izztjj95mka01je/The_Guest_Sankara.mp4/file',
    trailer: 'https://youtu.be/9tyL6OzBMt8',
    rating: 8.0,
    duration: '2h 23min',
    description: 'Earthxs mightiest heroes must come together and learn to fight as a team.',
    director: 'Rocky',
    cast: ['remybetty'],
    releaseDate: '2025-20-04'
  },  
  {
    id: '1',
    title: '13 SINS',
    genre: 'Action, Adventure, Sci-Fi',
    image: 'https://image.tmdb.org/t/p/original/x4tC1s6oFG9nEyxVSM0FiIsLea1.jpg',
    video: 'https://www.mediafire.com/file/lexz2h6ba3ur99e/13_SINS_.mp4/file',
    trailer: 'https://youtu.be/dtyF9dRI7tc',
    rating: 8.0,
    duration: '2h 23min',
    description: 'Earthxs mightiest heroes must come together and learn to fight as a team.',
    director: 'Rocky',
    cast: ['remybetty'],
    releaseDate: '2025-20-04'
  },
  {
    id: '2',
    title: 'diablo A',
    genre: 'Action, Adventure, Sci-Fi',
    image: 'https://image.tmdb.org/t/p/original/qhHXBt9y24YHJOkmtfsmB7JtTBp.jpg',
    video: 'https://www.mediafire.com/file/ddgnnoaeqob6bey/DIABLO_A.mp4/file',
    trailer: 'https://youtu.be/ANKPsCTh0Og',
    rating: 8.0,
    duration: '2h 23min',
    description: 'Earthxs mightiest heroes must come together and learn to fight as a team.',
    director: 'sankara da premier',
    cast: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson'],
    releaseDate: '2012-05-04'
  },
  {
    id: '3',
    title: 'diablo B',
    genre: 'Action, Adventure, Sci-Fi',
    image: 'https://image.tmdb.org/t/p/original/qhHXBt9y24YHJOkmtfsmB7JtTBp.jpg',
    video: 'https://www.mediafire.com/file/ijwph0kt117fvrm/DIABLO_B.mp4/file',
    trailer: 'https://youtu.be/ANKPsCTh0Og',
    rating: 8.0,
    duration: '2h 23min',
    description: 'Earthxs mightiest heroes must come together and learn to fight as a team.',
    director: 'sankara da premier',
    cast: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson'],
    releaseDate: '2012-05-04'
  },
  {
    id: '4',
    title: 'UNHINGED A',
    genre: 'Action, Adventure, Sci-Fi',
    image: 'https://image.tmdb.org/t/p/original/1R1BP2Wo5YxHrZ5iIOpqXmP93os.jpg',
    video: 'https://www.mediafire.com/file/lm3q6eg5uj5s7yj/UNHINGED_A.mp4/file',
    trailer: 'https://youtu.be/vNJ0szhjvdM',
    rating: 8.0,
    duration: '2h 23min',
    description: 'Earthxs mightiest heroes must come together and learn to fight as a team.',
    director: 'rocky',
    cast: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson'],
    releaseDate: '2012-05-04'
  },
  {
    id: '5',
    title: 'UNKHINGED B',
    genre: 'Action, Adventure, Sci-Fi',
    image: 'https://image.tmdb.org/t/p/original/1R1BP2Wo5YxHrZ5iIOpqXmP93os.jpg',
    video: 'https://www.mediafire.com/file/nmeb2tkapwcxahj/UNHINGED_B.mp4/file',
    trailer: 'https://youtu.be/vNJ0szhjvdM',
    rating: 8.0,
    duration: '2h 23min',
    description: 'Earthxs mightiest heroes must come together and learn to fight as a team.',
    director: 'rocky',
    cast: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson'],
    releaseDate: '2012-05-04'
  },
  {
    id: '6',
    title: 'closs range',
    genre: 'Action, Adventure, Sci-Fi',
    image: 'https://image.tmdb.org/t/p/original/1mB2uLg9qDzLX6BpJReAFAPyAtv.jpg',
    video: 'https://www.mediafire.com/file/znqdxutcxhgm1q7/Close_Range_Sankara_...er250_.mp4/file',
    trailer: 'https://youtu.be/7a6u6jGGOhw',
    rating: 8.0,
    duration: '2h 23min',
    description: 'Earthxs mightiest heroes must come together and learn to fight as a team.',
    director: 'sankara da premier',
    cast: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson'],
    releaseDate: '2012-05-04'
  },
  {
    id: '7',
    title: 'ghost rider',
    genre: 'Action, Adventure, Sci-Fi',
    image: 'https://image.tmdb.org/t/p/original/r0xS36paHndFpSlXKXMFNO1Fpv4.jpg',
    video: 'https://www.mediafire.com/file/o9pxxtfp21siygz/Ghost_Rider_Sankara_1.mp4/file',
    trailer: 'https://youtu.be/nu6R7ypaz5g',
    rating: 8.0,
    duration: '2h 23min',
    description: 'Earthxs mightiest heroes must come together and learn to fight as a team.',
    director: 'sankara da premier',
    cast: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson'],
    releaseDate: '2012-05-04'
  },
  {
    id: '8',
    title: 'until down',
    genre: 'Action, Adventure, Sci-Fi',
    image: 'https://image.tmdb.org/t/p/original/6UABPe0EWpSWhFnu8MuLXi6cQwB.jpg',
    video: 'https://www.mediafire.com/file/o7j1t8lgfmh1vs9/Until_Dawn_by_sankra.mp4/file',
    trailer: 'https://youtu.be/xR3lVHnh0Gg',
    rating: 8.0,
    duration: '2h 23min',
    description: 'Earthxs mightiest heroes must come together and learn to fight as a team.',
    director: 'sankara da premier',
    cast: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson'],
    releaseDate: '2012-05-04'
  },
  {
    id: '9',
    title: 'sinners A',
    genre: 'Action, Adventure, Sci-Fi',
    image: 'https://image.tmdb.org/t/p/original/9ZmdDOIbiFCZOvRXBQ7muWUu32l.jpg',
    video: 'https://www.mediafire.com/file/bjwc0p47k9t0n4i/SINNERS_A.mp4/file',
    trailer: 'https://youtu.be/bKGxHflevuk',
    rating: 8.0,
    duration: '2h 23min',
    description: 'Earthxs mightiest heroes must come together and learn to fight as a team.',
    director: 'rocky kimomo',
    cast: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson'],
    releaseDate: '2012-05-04'
  },
  {
    id: '10',
    title: 'sinners B',
    genre: 'Action, Adventure, Sci-Fi',
    image: 'https://image.tmdb.org/t/p/original/9ZmdDOIbiFCZOvRXBQ7muWUu32l.jpg',
    video: 'https://www.mediafire.com/file/bjwc0p47k9t0n4i/SINNERS_A.mp4/file',
    trailer: 'https://youtu.be/bKGxHflevuk',
    rating: 8.0,
    duration: '2h 23min',
    description: 'Earthxs mightiest heroes must come together and learn to fight as a team.',
    director: 'rocky kimomo',
    cast: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson'],
    releaseDate: '2012-05-04'
  },
  {
    id: '11',
    title: 'headhunters', 
    genre: 'drama, Action',
    image: 'https://image.tmdb.org/t/p/original/4ebkIb28HlmymekSFtueo8m2jAc.jpg',
    video: 'https://www.mediafire.com/file/djl8fn8k32z83f0/Headhunters_by_sankra.mp4/file',
    trailer: 'https://www.youtube.com/watch?v=dKrVegVI0Us',
    rating: 8.8,
    duration: '2h 28min',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    director: 'sankara da premier',
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
    releaseDate: '2010-07-16'
  },
  {
    id: '12',
    title: 'rosario',
    genre: 'Drama',
    image: 'https://image.tmdb.org/t/p/original/beLZhuHT97849WkWgty2X1hkWUa.jpg',
    video: 'https://www.mediafire.com/file/u4ydbqovsj8wbni/Rosario_by__sankra.mp4/file',
    trailer: 'https://www.youtube.com/watch?v=7SlILk2WMTI',   rating: 9.3,
    duration: '2h 22min',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    director: 'sankara da premier',
    cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
    releaseDate: '1994-10-14'
  },
  {
    id: '13',
    title: 'captain americ brave new world',
    genre: 'Action, Crime, Drama',
    image: 'https://i.pinimg.com/736x/7d/b4/7a/7db47a4f2af662065b63d40b99128a9a.jpg',
    video: 'https://www.mediafire.com/file/sywdzya9tojivi4/Capital+American+Brave+New+World(2025).mp4/file',
    trailer: 'https://youtu.be/1pHDWnXmK7Y',
    rating: 9.0,
    duration: '2h 32min',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    director: 'sankara da premier',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
    releaseDate: '2008-07-18'
  },
  {
    id: '14',
    title: 'fury 12 hours',
    genre: 'action, Drama',
    image: 'https://i.pinimg.com/736x/4f/26/ce/4f26ce669e1c6d95c7f3a6f4b94a2599.jpg',
    video: 'https://www.mediafire.com/file/1tkwabb0wwf9llx/Fury_12_Hours_sankra%25282%2529.mp4/file',
    trailer: 'https://www.youtube.com/watch?v=-OGvZoIrXpg',
    rating: 8.9,
    duration: '2h 34min',
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    director: 'sankara da premier',
    cast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
    releaseDate: '1994-10-14'
  },
  {
    id: '15',
    title: 'FINAL DESTINATION',
    genre: 'Action, Adventure, drama',
    image: 'https://i.pinimg.com/736x/31/26/99/3126998997eadc34b49789f72736ce5c.jpg',
    video: 'https://www.mediafire.com/file/4dqg3z4gpmdqv8e/Final_Destination_Bloodline.mp4/file',
    trailer: 'https://www.youtube.com/watch?v=J1Yq8sD7QBA',
    rating: 8.0,
    duration: '2h 23min',
    description: 'Earthxs mightiest heroes must come together and learn to fight as a team.',
    director: 'Joss Whedon',
    cast: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson'],
    releaseDate: '2012-05-04'
  },
  {
    id: '17',
    title: 'mayhem',
    genre: 'Action, Adventure, Sci-Fi',
    image: 'https://i.pinimg.com/736x/ae/ea/62/aeea62428f9908989a66da8a7dad0914.jpg',
    video: 'https://anonsharing.com/file/3474e0dd5b8f0fbc/Mayhem.mp4',
    trailer: 'https://www.youtube.com/watch?v=K9GYn8osI1Q',
    rating: 8.0,
    duration: '2h 23min',
    description: 'Earthxs mightiest heroes must come together and learn to fight as a team.',
    director: 'gaheza simba',
    cast: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson'],
    releaseDate: '2012-05-04'
  },
  {
    id: '18',
    title: 'G.I. Joe: Retaliation',
    genre: 'Action, Adventure, Sci-Fi',
    image: 'https://i.pinimg.com/736x/62/70/d6/6270d6f122d78949ce1cab6622723803.jpg',
    video: 'https://anonsharing.com/file/0d11c8126c46a393/G.I._Joe_-__Retaliation.mp4',
    trailer: 'https://www.youtube.com/watch?v=XW2E2PnhQwo',
    rating: 8.0,
    duration: '2h 23min',
    description: 'Earthxs mightiest heroes must come together and learn to fight as a team.',
    director: 'sankara da premier',
    cast: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson'],
    releaseDate: '2012-05-04'
  }]
.map(movie => {
  const withDuration = { ...movie, duration: movie.duration || '2h 00min' };
  // Add createdAt only if not present
  return {
    ...withDuration,
    createdAt: (movie as any).createdAt || new Date().toISOString(),
  };
});
