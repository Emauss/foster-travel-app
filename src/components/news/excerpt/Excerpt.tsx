import { ReactElement } from 'react';

export const Excerpt = ({ description, maxLength = 60 }: { description: string; maxLength?: number }): ReactElement => {
  let text = description;

  if (description && description.length > maxLength) {
    text = text.slice(0, maxLength);
    text = text.slice(0, Math.min(text.length, text.lastIndexOf(' '))) + '...';
  }

  return <p className='article-desc'>{text}</p>;
};
