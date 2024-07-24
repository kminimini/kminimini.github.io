import dummyPosts from './dummy-posts.json';

// 개발 환경에서는 dummy-posts.json을, 프로덕션 환경에서는 generated-posts.json을 사용.
let posts;
if (process.env.NODE_ENV === 'production') {
  try {
    posts = require('./generated-posts.json');
  } catch (error) {
    console.warn('generated-posts.json을 찾을 수 없습니다. dummy-posts.json을 사용합니다.');
    posts = dummyPosts;
  }
} else {
  posts = dummyPosts;
}

// 모든 게시글 가져오기
export const getPosts = () => posts;

// 모든 카테고리 가져오기
export const getCategories = () => {
  return [...new Set(posts.map(post => post.category))];
};

// 카테고리별 게시글 수 가져오기
export const getCategoryCounts = () => {
  return posts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {});
};

// 특정 카테고리의 게시글 가져오기
export const getPostsByCategory = (category) => {
  return posts.filter(post => post.category.toLowerCase() === category.toLowerCase());
};

// ID로 특정 게시글 가져오기
export const getPostById = (id) => {
  // ID를 문자열로 처리하여 비교.
  return posts.find(post => post.id === id);
};

// 새 게시글 추가 함수 (개발 환경에서만 사용)
export const addPost = (newPost) => {
  if (process.env.NODE_ENV !== 'production') {
    posts.push(newPost);
  } else {
    console.warn('현재 환경에서 게시물 추가는 지원되지 않습니다.');
  }
};