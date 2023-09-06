export const getAllPosts = () => {
    return fetch('http://localhost:8088/posts?_expand=topic').then(res => res.json())
}

export const getExpandedPosts = () => {
    return fetch('http://localhost:8088/posts?_expand=topic').then(res => res.json())
}