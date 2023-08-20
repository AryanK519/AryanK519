import React from 'react';
import remark from 'remark';
import html from 'remark-html';
import grayMatter from 'gray-matter';

const MarkdownRenderer = ({ content }) => {
  const { content: markdownContent } = grayMatter(content);
  const processedContent = remark().use(html).processSync(markdownContent).toString();

  return <div dangerouslySetInnerHTML={{ __html: processedContent }} />;
};

export default MarkdownRenderer;
