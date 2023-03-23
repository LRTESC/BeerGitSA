import axios from "axios";

const API_URL = "https://api.punkapi.com/v2/beers";

export interface Beer {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
  abv: number;
}

export const fetchBeers = async (page = 1, perPage = 25) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        page,
        per_page: perPage,
      },
    });
    return response.data as Beer[];
  } catch (error) {
    console.error("Error fetching beers:", error);
    return [];
  }
};
