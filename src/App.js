import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BlogPost 
          title="첫 번째 블로그 포스트" 
          content="블로그 내용" 
        />
        <BlogPost 
          title="두 번째 블로그 포스트" 
          content="블로그 내용" 
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;