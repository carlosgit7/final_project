import { ref } from "vue";
import axios from "axios";

const quotes = ref([]);

const api = axios.create({
    baseURL: "https://zenquotes.io/api/random/",
});


const getRandomQuote = async () => {
    const response = await api.get();
    if (response.status === 200) {
        quotes.value = response.data;
    }
};

export const famousQuotes = () => {
    getRandomQuote();
    const multipleQuotes = async (multiple) => {
     const response = await api.get(`/${multiple}`);

     if (response.status === 200) {
        quotes.value = response.data;
    }
};

  return { quotes, multipleQuotes };
};