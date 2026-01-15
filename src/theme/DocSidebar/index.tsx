import React, {useMemo} from 'react';
import OriginalDocSidebar from '@theme-original/DocSidebar';
import type {Props} from '@theme/DocSidebar';

import styles from './styles.module.css';
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

function FilterBar() {
  const {showTags,setShowTags,grouping,setGrouping} = useSidebarFilters();
  return (
    <div className={styles.filterBar}>
      <div className={styles.filterItem}>
        <button type="button" className={`${styles.toggle} ${showTags ? styles.toggleOn : ''}`} aria-pressed={showTags} onClick={()=>setShowTags(!showTags)}>
          <span className={styles.knob}/>
        </button>
        <span>Теги</span>
      </div>
      <div className={styles.filterItem}>
        <button type="button" className={`${styles.toggle} ${grouping ? styles.toggleOn : ''}`} aria-pressed={grouping} onClick={()=>setGrouping(!grouping)}>
          <span className={styles.knob}/>
        </button>
        <span>Группировать</span>
      </div>
    </div>
  );
}

function Inner(props: Props) {
  const {grouping} = useSidebarFilters();

  const patched = useMemo(() => {
    const sidebar = props.sidebar;
    const items = sidebar?.items;
    if (!sidebar || !Array.isArray(items) || grouping) return props;

    const newItems = items.map((it:any) => {
      if (it?.type === 'category' && Array.isArray(it.items)) {
        return {...it, items: sortAlpha(flatten(it.items)), collapsed: false};
      }
      return it;
    });

    return {...props, sidebar: {...sidebar, items: newItems}} as Props;
  }, [props, grouping]);

  return (<><FilterBar/><OriginalDocSidebar {...patched}/></>);
}

export default function DocSidebar(props: Props): JSX.Element {
  return (<SidebarFiltersProvider><Inner {...props}/></SidebarFiltersProvider>);
}
