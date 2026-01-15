import React, {useMemo} from 'react';
import OriginalDocSidebar from '@theme-original/DocSidebar';
import type {Props} from '@theme/DocSidebar';

import {SidebarFiltersProvider, useSidebarFilters} from './filters';

type Item = any;

function flatten(items?: Item[]): Item[] {
  const out: Item[] = [];
  for (const it of items ?? []) {
    if (!it) continue;
    if (it.type === 'category' && Array.isArray(it.items)) out.push(...flatten(it.items));
    else out.push(it);
  }
  return out;
}

function sortAlpha(items: Item[]): Item[] {
  return [...items].sort((a,b)=>String(a?.label??a?.id??'').localeCompare(String(b?.label??b?.id??'')));
}

const normalizeName = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]/g, '');

const PRIORITY_COMPONENTS = new Set(
  [
    'TwoLineTitleView',
    'Text Field',
    'TableViewHeaderFooterView',
    'TableViewCell',
    'TabBarView',
    'SegmentedControl',
    'PillButto',
    'PillButton',
    'PillButtonBar',
    'Listitem',
    'ListItem',
    'Label',
    'Button',
    'TextField',
  ].map(normalizeName),
);

const PRIORITY_TOKENS = new Set(
  [
    'Typography Tokens',
    'Alias Color Tokens',
    'Global Color Tokens',
  ].map(normalizeName),
);

function Inner(props: Props) {
  const {grouping, priority} = useSidebarFilters();

  const patched = useMemo(() => {
    const sidebar = props.sidebar as any;
    const items = Array.isArray(sidebar) ? sidebar : sidebar?.items;
    if (!Array.isArray(items) || (grouping && !priority)) return props;

    const nextItems = items.map((it:any) => {
      if (
        priority &&
        it?.type === 'category' &&
        it?.label === 'Tokens' &&
        Array.isArray(it.items)
      ) {
        const filteredTokens = it.items.filter((tok:any) => {
          const name = String(tok?.label ?? tok?.id ?? '');
          return PRIORITY_TOKENS.has(normalizeName(name));
        });
        return {...it, items: sortAlpha(filteredTokens), collapsed: false};
      }
      if (
        it?.type === 'category' &&
        it?.label === 'Компоненты WebView' &&
        Array.isArray(it.items)
      ) {
        const flat = flatten(it.items);
        const filtered = priority
          ? flat.filter((comp:any) => {
              const name = String(comp?.label ?? comp?.id ?? '');
              return PRIORITY_COMPONENTS.has(normalizeName(name));
            })
          : flat;
        const sorted = sortAlpha(filtered).map((comp:any) =>
          priority ? {...comp, customProps: {...comp?.customProps, priority: 1}} : comp,
        );
        return {...it, items: sorted, collapsed: false};
      }
      return it;
    });

    if (Array.isArray(sidebar)) {
      return {...props, sidebar: nextItems} as Props;
    }
    return {...props, sidebar: {...sidebar, items: nextItems}} as Props;
  }, [props, grouping, priority]);

  return <OriginalDocSidebar {...patched}/>;
}

export default function DocSidebar(props: Props): JSX.Element {
  return (<SidebarFiltersProvider><Inner {...props}/></SidebarFiltersProvider>);
}
