export const getPosts = async () => {
   return await fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json())
}

export const getPostDetail = async ({ slug }) => {
    return await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`).then((response) => response.json())
}