import {articleData} from "./articles-data.js"



const recentPost = document.getElementById("recent-posts")

let articleHtml = ``

for(let i = 0; i< 3; i++) {
    articleHtml += `
    <article>
    <img src="${articleData[i].articleImage}" alt="">
    <p class="featured-blog-date small">${articleData[i].articledate}</p>
    <strong class="article-tittle">${articleData[i].articleTittle}</strong>
    <p>${articleData[i].articlePara}</p>
    </article>
    `

}
recentPost.innerHTML = articleHtml