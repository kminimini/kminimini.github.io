import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getPostById, getPostsByCategory } from '../../data/postManager';
import {
  PostWrapper,
  PostTitle,
  PostMeta,
  PostContent,
  NavigationButtons,
  NavButton
} from '../../styles/components/pages/PostDetail.styles';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // 현재 게시글 가져오기
  const post = getPostById(parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  // 같은 카테고리의 모든 게시글 가져오기
  const categoryPosts = getPostsByCategory(post.category);
  
  // 현재 게시글의 인덱스 찾기
  const currentIndex = categoryPosts.findIndex(p => p.id === post.id);

  // 이전 게시글과 다음 게시글 찾기
  const prevPost = currentIndex > 0 ? categoryPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < categoryPosts.length - 1 ? categoryPosts[currentIndex + 1] : null;

  return (
    <PostWrapper>
      <PostTitle>{post.title}</PostTitle>
      <PostMeta>{post.date} | {post.category}</PostMeta>
      <PostContent>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
        >
          {post.content}
        </ReactMarkdown>
      </PostContent>
      <NavigationButtons>
        {prevPost && (
          <NavButton onClick={() => navigate(`/post/${prevPost.id}`)}>
            ← {prevPost.title}
          </NavButton>
        )}
        {nextPost && (
          <NavButton onClick={() => navigate(`/post/${nextPost.id}`)} isNext={true}>
            {nextPost.title} →
          </NavButton>
        )}
      </NavigationButtons>
    </PostWrapper>
  );
};

export default PostDetail;