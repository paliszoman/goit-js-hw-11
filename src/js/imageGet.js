import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';

const imageGet = async (quote,page,perPage) => { 
    let response = axios.get(`?key=19743646-38e1a9cdaadffbdd4b9ec2ba3&q=${quote}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`)
return response
}

export { imageGet } 