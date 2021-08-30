import axios from 'axios';
const URL = `http://localhost:5000`;
const Api = axios.create({ baseURL: 'http://localhost:5000' });
Api.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})
export const fetchPosts = () => Api.get('/');
export const createPost = (newPost) => Api.post('/', newPost);
export const updatePost = (id, updatedPost) => Api.patch(`/${id}`, updatedPost);
export const deletePost = (id) => Api.delete(`/${id}`);
export const signIn = (user) => Api.post(`/user/signin`, user);
export const signUp = (user) => Api.post(`/user/signup`, user);
// export const fetchPosts=()=>axios.get(URL);
// export const createPost=(newPost)=>axios.post(URL,newPost);
// export const updatePost=(id,updatedPost)=>axios.patch(`${URL}/${id}`,updatedPost);
// export const deletePost=(id)=>axios.delete(`${URL}/${id}`);
// export const signIn=(user)=>axios.post(`${URL}/user/signin`,user);
// export const signUp=(user)=>axios.post(`${URL}/user/signup`,user);