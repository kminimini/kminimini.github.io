import dummyPosts from './dummy-posts.json';

// 개발 환경에서는 dummy-posts.json을, 프로덕션 환경에서는 generated-posts.json을 사용.
const posts = process.env.NODE_ENV === 'production'
  ? require('./generated-posts.json')
  : dummyPosts;

export const getPosts = () => posts;

export const getCategories = () => {
  return [...new Set(posts.map(post => post.category))];
};

export const getCategoryCounts = () => {
  return posts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {});
};

export const getPostsByCategory = (category) => {
  return posts.filter(post => post.category.toLowerCase() === category.toLowerCase());
};

export const getPostById = (id) => {
  // ID를 숫자로 변환하여 비교.
  return posts.find(post => post.id === parseInt(id, 10));
};

// 새 게시글 추가 함수 (개발 환경에서만 사용)
export const addPost = (newPost) => {
  if (process.env.NODE_ENV !== 'production') {
    posts.push(newPost);
  } else {
    console.warn('현재 환경에서 게시물 추가는 지원되지 않음.');
  }
};