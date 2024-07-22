/* 게시글 생성 스크립트 */
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDirectory = path.join(process.cwd(), 'content', 'posts');
const outputFile = path.join(process.cwd(), 'src', 'data', 'posts.json');

function generatePosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    // 파일 이름에서 ".md"를 제거하여 ID를 가져옴.
    const id = fileName.replace(/\.md$/, '');

    // 마크다운 파일을 문자열로 읽음
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // 회색 영역을 사용하여 포스트 메타데이터 섹션 구문 분석
    const matterResult = matter(fileContents);

    // 데이터를 ID와 결합
    return {
      id,
      ...matterResult.data,
      content: matterResult.content
    };
  });

  // 날짜별로 글 정렬함
  const sortedPosts = allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  // 결과를 JSON 파일에 씀
  fs.writeFileSync(outputFile, JSON.stringify(sortedPosts, null, 2));
  console.log(`Generated ${sortedPosts.length} posts.`);
}

generatePosts();