import type { Heading } from 'nextra';

import React from 'react';
type Props = {
  headings: Heading[];
};
export default function ContentsList(props: Props) {
  return (
    <div>
      <p>目次</p>
      <ul>
        {props.headings.map((heading) => (
          //hedings.depthに応じてインデントをつける
          <li
            key={heading.value}
            style={{ marginLeft: `${heading.depth * 5}px` }}
            className={`${heading.depth === 1 ? 'font-bold' : ''}`}
          >
            {heading.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
