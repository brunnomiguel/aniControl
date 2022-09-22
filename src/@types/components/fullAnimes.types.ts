export interface Iimages {
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

export interface Ilinks {
  name: string;
  url: string;
}

export interface Igenre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface Ianime {
  mal_id: number;
  images: Iimages;
  trailer: {
    url: string;
  };
  title: string;
  episodes?: number;
  status?: string;
  duration?: string;
  rating: string;
  streaming: Ilinks[];
  external: Ilinks[];
  score: number;
  rank?: number;
  favorites?: number;
  synopsis: string;
  season?: string;
  year: number;
  genres: Igenre[];
}
