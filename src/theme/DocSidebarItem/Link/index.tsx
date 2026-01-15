import React from 'react';
import Link from '@docusaurus/Link';
import type {Props} from '@theme/DocSidebarItem/Link';

import {useSidebarFilters} from '../../DocSidebar/filters';
import styles from './styles.module.css';

export default function DocSidebarItemLink(props: Props): JSX.Element {
  const {item, href, label, activePath, isActive, ...rest} = props as any;
  const {showTags} = useSidebarFilters();
  const tag = showTags ? (item?.customProps?.tag ?? null) : null;

  return (
    <Link to={href} {...rest}>
      <span className={styles.row}>
        <span className={styles.text}>{label}</span>
        {tag ? <span className={styles.tag}>{String(tag)}</span> : null}
      </span>
    </Link>
  );
}
