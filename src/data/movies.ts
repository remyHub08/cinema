export interface Movie {
  id: string;
  title: string;
  genre: string;
  image: string;
  video?: string; // Optional video link for each movie
  trailer: string; // Trailer link for each movie
  rating: number;
  duration: string;
  description: string;
  director: string;
  cast: string[];
  releaseDate: string;
}

export const movies: Movie[] = [
  {
    id: '10',
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
    id: '16',
    title: 'until down',
    genre: 'Action, Adventure, Sci-Fi',
    image: 'https://i.pinimg.com/736x/ba/74/5f/ba745f4131e9a215fe7b0015fef97230.jpg',
    video: 'https://www.mediafire.com/file/v66sgezumbbkbwv/UNTIL_DOWN_.mp4/file',
    trailer: 'https://www.youtube.com/watch?v=gjJxGQZ0U5o',
    rating: 8.0,
    duration: '2h 23min',
    description: 'Earthxs mightiest heroes must come together and learn to fight as a team.',
    director: 'gaheza simbax',
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
  },
];