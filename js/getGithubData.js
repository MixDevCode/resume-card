import { get } from './axios.min.js';

async function getGithubData() {
    const { data: reposData } = await get('https://api.github.com/users/MixDevCode/repos');
    reposData.forEach(element => {
        console.log(element);
    });
}