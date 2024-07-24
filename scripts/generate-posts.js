const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDirectory = path.join(process.cwd(), 'content', 'posts');
const outputFile = path.join(process.cwd(), 'src', 'data', 'generated-posts.json');

function generatePosts() {
  try {
    if (!fs.existsSync(postsDirectory)) {
      console.error(`디렉토리가 존재하지 않습니다: ${postsDirectory}`);
      return;
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map(fileName => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        id,
        ...matterResult.data,
        content: matterResult.content
      };
    });

    const sortedPosts = allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });

    fs.writeFileSync(outputFile, JSON.stringify(sortedPosts, null, 2));
    console.log(`${sortedPosts.length}개의 게시글이 생성되었습니다.`);
  } catch (error) {
    console.error('게시글 생성 중 오류 발생:', error);
  }
}

generatePosts();