import React, {useEffect, useRef, useState} from 'react';

import styles from './styles.module.css';

type MediaItem =
  | {type: 'video'; src: string; label?: string}
  | {type: 'image'; src: string; alt: string};

export function MediaScroller({items}: {items: MediaItem[]}) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const scrollNext = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const firstCard = scroller.querySelector<HTMLElement>(`.${styles.card}`);
    const cardWidth = firstCard?.offsetWidth ?? 0;
    const gap = 16;
    const delta = cardWidth + gap;
    scroller.scrollBy({left: delta, behavior: 'smooth'});
  };
  const scrollPrev = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const firstCard = scroller.querySelector<HTMLElement>(`.${styles.card}`);
    const cardWidth = firstCard?.offsetWidth ?? 0;
    const gap = 16;
    const delta = cardWidth + gap;
    scroller.scrollBy({left: -delta, behavior: 'smooth'});
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const update = () => setCanScrollPrev(scroller.scrollLeft > 8);
    update();
    scroller.addEventListener('scroll', update, {passive: true});
    return () => scroller.removeEventListener('scroll', update);
  }, []);

  return (
    <section className={styles.shell} aria-label="Media gallery">
      {canScrollPrev ? (
        <button
          type="button"
          className={`${styles.navBtn} ${styles.prevBtn}`}
          aria-label="Previous"
          onClick={scrollPrev}>
          <span className={styles.navIcon}>
            <img
              src="https://static.wixstatic.com/shapes/91d9b3_a5cf806eeccc45db8641e6f23a931531.svg"
              alt=""
              aria-hidden="true"
            />
          </span>
        </button>
      ) : (
        <div className={styles.navSpacer} aria-hidden="true" />
      )}
      <div className={styles.wrap}>
        <div ref={scrollerRef} className={styles.scroller}>
          {items.map((item, idx) => (
            <div className={styles.card} key={`${item.type}-${idx}`}>
              {item.type === 'video' ? (
                <video
                  className={styles.media}
                  controls
                  preload="metadata"
                  playsInline
                  muted
                  aria-label={item.label ?? 'Demo video'}>
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  className={styles.media}
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className={`${styles.navBtn} ${styles.nextBtn}`}
        aria-label="Next"
        onClick={scrollNext}>
        <span className={styles.navIcon}>
          <img
            src="https://static.wixstatic.com/shapes/91d9b3_89db3e41dad74ad69f2a8567739d3ce0.svg"
            alt=""
            aria-hidden="true"
          />
        </span>
      </button>
    </section>
  );
}
