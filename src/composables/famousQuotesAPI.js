 import { ref } from "vue";
 import axios from "axios";

 const quotes = ref([]);

 const api = axios.create({
     baseURL: "https://api.quotable.io/random?tags=inspirational|happiness|famous-quotes",
 });

 const getRandomQuote = async () => {
     const response = await api.get();
     if (response.status === 200) {
         quotes.value = [response.data];
     }
 };

 export const famousQuotes = () => {
    getRandomQuote();

   return {quotes};
};