export interface imagesProps {
  jpg: {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
  };
  webp?: {
    image_url: string;
    small_image_url: string;
    large_image_url: string;
  };
}

export interface streamingProps {
  name: string;
  url: string;
}

export interface genreProps {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface animeProps {
  mal_id: number;
  images: imagesProps;
  trailer: {
    url: string;
  };
  title: string;
  episodes?: number;
  status?: string;
  duration?: string;
  rating: string;
  streaming?: streamingProps[];
  score: number;
  rank?: number;
  favorites?: number;
  synopsis: string;
  season?: string;
  year: number;
  genres: genreProps[];
}
