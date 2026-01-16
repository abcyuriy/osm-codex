---
title: TableViewCell
tag: item
---

import {MediaScroller} from '@site/src/components/MediaScroller/MediaScroller';

export const items = [
  {
    type: "video",
    src: "https://video.wixstatic.com/video/91d9b3_31166a5c20be4481bfc2341da998672c/720p/mp4/file.mp4",
    label: "TableViewCell demo video",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_1af89298710d4b4488dbd505c69e10cf~mv2.png",
    alt: "TableViewCell image 1",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_22b36df76a74470e853625fa24034750~mv2.png",
    alt: "TableViewCell image 2",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_e21e5fdabc854741a88e360d49150c9a~mv2.png",
    alt: "TableViewCell image 3",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_674fcf568cb645818df613a63901367d~mv2.png",
    alt: "TableViewCell image 4",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_258570cdf6ca4a47828e22baf8f14f18~mv2.png",
    alt: "TableViewCell image 5",
  },
] ;

# TableViewCell

<MediaScroller items={items} />
