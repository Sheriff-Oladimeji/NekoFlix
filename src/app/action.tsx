"use server";
import axios from "axios";
const LIMIT = 8;

export async function fetchAnimes(page: number) {
  try {
    const response = await axios.get(
      `https://shikimori.one/api/animes?page=${page}&limit=${LIMIT}&order=popularity`
    );
      const data = response.data;
      return data
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}
