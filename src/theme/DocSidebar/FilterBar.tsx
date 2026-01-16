import React from 'react';

import {useSidebarFilters} from './filters';
import styles from './styles.module.css';

export default function FilterBar(): JSX.Element {
  const {
    showTags,
    setShowTags,
    grouping,
    setGrouping,
    priority,
    setPriority,
  } = useSidebarFilters();

  const togglePriority = () => {
    const next = !priority;
    setPriority(next);
    if (next) {
      setGrouping(false);
    }
  };
  return (
    <div className={styles.filterBar}>
      <div className={styles.filterItem}>
        <button
          type="button"
          className={`${styles.toggle} ${showTags ? styles.toggleOn : ''}`}
          aria-pressed={showTags}
          onClick={() => {
            const next = !showTags;
            if (priority && next) {
              setPriority(false);
            }
            setShowTags(next);
          }}>
          <span className={styles.knob} />
        </button>
        <span>Теги</span>
      </div>
      <div className={styles.filterItem}>
        <button
          type="button"
          className={`${styles.toggle} ${grouping ? styles.toggleOn : ''}`}
          aria-pressed={grouping}
          onClick={() => {
            if (priority) setPriority(false);
            setGrouping(!grouping);
          }}>
          <span className={styles.knob} />
        </button>
        <span>Группы</span>
      </div>
      <div className={`${styles.filterItem} ${styles.filterItemFull}`}>
        <button
          type="button"
          className={`${styles.toggle} ${priority ? styles.toggleOn : ''}`}
          aria-pressed={priority}
          onClick={togglePriority}>
          <span className={styles.knob} />
        </button>
        <span>Первый приоритет</span>
      </div>
    </div>
  );
}
