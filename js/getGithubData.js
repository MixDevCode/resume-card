import { get } from './axios.min.js';

export default async () => {
    const { data: reposData } = await get('https://api.github.com/users/MixDevCode/repos');
    reposData.forEach(element => {
        console.log(element);
    });
}