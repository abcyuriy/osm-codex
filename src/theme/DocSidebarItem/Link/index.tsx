import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {isActiveSidebarItem} from '@docusaurus/plugin-content-docs/client';
import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';
import type {Props} from '@theme/DocSidebarItem/Link';

import {useSidebarFilters} from '../../DocSidebar/filters';
import styles from './styles.module.css';

function LinkLabel({
  label,
  tag,
  priority,
}: {
  label: string;
  tag: string | null;
  priority: string | null;
}) {
  return (
    <span title={label} className={styles.linkLabel}>
      <span className={styles.text}>{label}</span>
      {priority ? <span className={styles.priority}>{priority}</span> : null}
      {tag ? <span className={styles.tag}>{tag}</span> : null}
    </span>
  );
}

export default function DocSidebarItemLink({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}: Props): ReactNode {
  const {showTags, priority} = useSidebarFilters();
  const tag = showTags ? (item?.customProps?.tag ?? null) : null;
  const priorityBadge = priority ? (item?.customProps?.priority ?? null) : null;
  const {href, label, className, autoAddBaseUrl} = item;
  const isActive = isActiveSidebarItem(item, activePath);
  const isInternalLink = isInternalUrl(href);

  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemLink,
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        'menu__list-item',
        className,
      )}
      key={label}>
      <Link
        className={clsx(
          'menu__link',
          !isInternalLink && styles.menuExternalLink,
          {
            'menu__link--active': isActive,
          },
        )}
        autoAddBaseUrl={autoAddBaseUrl}
        aria-current={isActive ? 'page' : undefined}
        to={href}
        {...(isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : undefined,
        })}
        {...props}>
        <LinkLabel
          label={label}
          tag={tag ? String(tag) : null}
          priority={priorityBadge ? String(priorityBadge) : null}
        />
        {!isInternalLink && <IconExternalLink />}
      </Link>
    </li>
  );
}
