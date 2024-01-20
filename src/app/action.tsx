"use server";
import axios from "axios";
import { ToastContainer } from "react-toastify";
const LIMIT = 8;

export async function fetchAnimes(page: number) {
  try {
    const response = await axios.get(
      `https://shikimori.one/api/animes?page=${page}&limit=${LIMIT}&order=popularity`
    );
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching animes: ", error);
  }
}
export async function fetchAnime(id: number) {
  try {
    const anime = await axios.get(`https://shikimori.one/api/animes/:${id}`);
    const video = await axios.get(
      `https://shikimori.one/api/animes/:anime_id/videos`
    );
    const data = { anime: anime.data, video: video.data };
    return data;
  } catch (error) {
    console.error("Error fetching anime: ", error);
  }
}
export async function searchAnime(page: number) {
  try {
    const response = await axios.get(`https://shikimori.one/api/animes/search`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching animes: ", error);
  }
}
