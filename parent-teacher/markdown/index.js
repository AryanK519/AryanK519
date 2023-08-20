import React from 'react';
import fs from 'fs';
import path from 'path';
import MarkdownRenderer from '../../components/MarkdownRenderer'; // Adjust the path accordingly

const MarkdownPage = ({ content }) => {
  return (
    <div>
      <MarkdownRenderer content={content} />
    </div>
  );
};

export async function getStaticPaths() {
  const contentDirectory = path.join(process.cwd(), 'content');
  const filenames = fs.readdirSync(contentDirectory);

  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace('.md', '') },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'content', `${params.slug}.md`);
  const content = fs.readFileSync(filePath, 'utf8');

  return {
    props: {
      content,
    },
  };
}

export default MarkdownPage;
