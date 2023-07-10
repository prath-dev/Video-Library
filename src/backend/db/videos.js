/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

import { v4 as uuid } from "uuid";

export const videos = [
  
  {
    _id: "6pY7EjqD3QA",
    thumbnailImg: "https://img.youtube.com/vi/6pY7EjqD3QA/maxresdefault.jpg",
    videoLink: "https://www.youtube-nocookie.com/embed/6pY7EjqD3QA/?autoplay=1",
    description:
      "The four-letter code to selling anything | Derek Thompson | TEDxBinghamtonUniversity",
    creatorsLogo:
      "https://yt3.ggpht.com/ytc/AKedOLQGnY6McntoY-eWaRDI047FWFqj7pVlw2nBfkwz7w=s88-c-k-c0x00ffffff-no-rj",
    creator: "TEDx Talks",
    premiumCreator: true,
    category: "sales",
    views: "2.6M",
    time: "3 years",
  },
 
  {
    _id: "N5Zi_G2MTHw",
    thumbnailImg: "https://img.youtube.com/vi/N5Zi_G2MTHw/maxresdefault.jpg",
    videoLink: "https://www.youtube-nocookie.com/embed/N5Zi_G2MTHw/?autoplay=1",
    description: "Why Listening is Better Than Talking | Brian Tracy",
    creatorsLogo:
      "https://yt3.ggpht.com/ytc/AKedOLSR1-iR0FfdYGEqZj5slytUw7z628az9maQ05SQNg=s88-c-k-c0x00ffffff-no-rj",
    creator: "Brian Tracy",
    premiumCreator: true,
    category: "communication",
    views: "55k",
    time: "1 year",
  },
  {
    _id: "ujaCbzLwuB8",
    thumbnailImg: "https://img.youtube.com/vi/ujaCbzLwuB8/maxresdefault.jpg",
    videoLink: "https://www.youtube-nocookie.com/embed/ujaCbzLwuB8/?autoplay=1",
    description:
      "Learn Photography - Simple, Practical - Free Photography Course 1/10",
    creatorsLogo:
      "https://yt3.ggpht.com/ocTn4Jj8pvGDh4ZHVuu5tWytVKUGF5mYrNc1nnP_ywBAMM6f4JngWFQuPD_g8SZvQzRGa00Xyg=s88-c-k-c0x00ffffff-no-rj",
    creator: "Chris Bray Photography",
    premiumCreator: true,
    category: "photography",
    views: "666k",
    time: "6 year",
    date: "13 Jun 2016",
  },
  {
    _id: "d536ca4BzRs",
    thumbnailImg: "https://img.youtube.com/vi/d536ca4BzRs/maxresdefault.jpg",
    videoLink: "https://www.youtube-nocookie.com/embed/d536ca4BzRs/?autoplay=1",
    description:
      "How To Sell ANYTHING to ANYONE in HINDI | बेचने की कला सीखो ! Sales Motivation !",
    creatorsLogo:
      "https://yt3.ggpht.com/ytc/AKedOLTAoqk7oUQEP-jf3bZh1embvt-G2qyyI6XM09o9UA=s88-c-k-c0x00ffffff-no-rj",
    creator: "Ranveer Allahbadia",
    premiumCreator: true,
    category: "sales",
    views: "2.1M",
    time: "10 months",
  },
  {
    _id: "My1Z2_e4EPI",
    thumbnailImg: "https://img.youtube.com/vi/My1Z2_e4EPI/maxresdefault.jpg",
    videoLink: "https://www.youtube-nocookie.com/embed/My1Z2_e4EPI/?autoplay=1",
    description:
      "Get off 'Auto' mode - Photography Basics: Photography Course 2/10",
    creatorsLogo:
      "https://yt3.ggpht.com/ocTn4Jj8pvGDh4ZHVuu5tWytVKUGF5mYrNc1nnP_ywBAMM6f4JngWFQuPD_g8SZvQzRGa00Xyg=s88-c-k-c0x00ffffff-no-rj",
    creator: "Chris Bray Photography",
    premiumCreator: true,
    category: "photography",
    views: "301k",
    time: "6 year",
    date: "17 sep 2016",
  },
  {
    _id: "oS1BlGm91Bs",
    thumbnailImg: "https://img.youtube.com/vi/oS1BlGm91Bs/maxresdefault.jpg",
    videoLink: "https://www.youtube-nocookie.com/embed/oS1BlGm91Bs/?autoplay=1",
    description:
      "Learn Video Editing Full Course For Beginners Step By Step Guide",
    creatorsLogo:
      "https://yt3.ggpht.com/tC7T8-4MvARqycrxkYbYQh5ygYMjqIn4ET9s-OAjmWeM349qscepubONTcBvb_vG43jwW_Xi_g=s88-c-k-c0x00ffffff-no-rj",
    creator: "Technology Gyan",
    premiumCreator: true,
    category: "video editing",
    views: "2M",
    time: "1 years",
  },
  {
    _id: "5V4uuNdmRHc",
    thumbnailImg: "https://img.youtube.com/vi/5V4uuNdmRHc/maxresdefault.jpg",
    videoLink: "https://www.youtube-nocookie.com/embed/5V4uuNdmRHc/?autoplay=1",
    description: "Top 10 Composition Tips - Photography Course 3/10",
    creatorsLogo:
      "https://yt3.ggpht.com/ocTn4Jj8pvGDh4ZHVuu5tWytVKUGF5mYrNc1nnP_ywBAMM6f4JngWFQuPD_g8SZvQzRGa00Xyg=s88-c-k-c0x00ffffff-no-rj",
    creator: "Chris Bray Photography",
    premiumCreator: true,
    category: "photography",
    views: "1.2M",
    time: "6 year",
    date: "11 May 2016",
  },
  {
    _id: "dFSia1LZI4Y",
    thumbnailImg: "https://img.youtube.com/vi/dFSia1LZI4Y/maxresdefault.jpg",
    videoLink: "https://www.youtube-nocookie.com/embed/dFSia1LZI4Y/?autoplay=1",
    description:
      "What is Graphic Design? Ep1/45 [Beginners Guide to Graphic Design]",
    creatorsLogo:
      "https://yt3.ggpht.com/y5Nj-jmdjcz7vfoeb6zunz69t2uOsunzPGT7DVOzSMB_hL1N4EGozgcdCGOihINB9Y_nBOIi6A=s88-c-k-c0x00ffffff-no-rj",
    creator: "Gareth David Studio",
    premiumCreator: true,
    category: "graphic design",
    views: "1.6M",
    time: "2 years",
  },
  {
    _id: "jmY3Nac26yc",
    thumbnailImg: "https://img.youtube.com/vi/jmY3Nac26yc/maxresdefault.jpg",
    videoLink: "https://www.youtube-nocookie.com/embed/jmY3Nac26yc/?autoplay=1",
    description:
      "Perfect Exposure & Metering made EASY - Photography Course 4/10",
    creatorsLogo:
      "https://yt3.ggpht.com/ocTn4Jj8pvGDh4ZHVuu5tWytVKUGF5mYrNc1nnP_ywBAMM6f4JngWFQuPD_g8SZvQzRGa00Xyg=s88-c-k-c0x00ffffff-no-rj",
    creator: "Chris Bray Photography",
    premiumCreator: true,
    category: "photography",
    views: "1.2M",
    time: "3 years",
    date: "11 May 2019",
  },
  {
    _id: "HAnw168huqA",
    thumbnailImg: "https://img.youtube.com/vi/HAnw168huqA/maxresdefault.jpg",
    videoLink: "https://www.youtube-nocookie.com/embed/HAnw168huqA/?autoplay=1",
    description: "Think Fast, Talk Smart: Communication Techniques",
    creatorsLogo:
      "https://yt3.ggpht.com/ytc/AKedOLRSMpZ9D2BtDJbw9rL4jBf7TvEZaDFgZ49b_Ah16Q=s88-c-k-c0x00ffffff-no-rj",
    creator: "Stanford",
    premiumCreator: true,
    category: "communication",
    views: "44k",
    time: "11 months",
  },

  {
    _id: "2Yw6dFQBklA",
    thumbnailImg: "https://img.youtube.com/vi/2Yw6dFQBklA/maxresdefault.jpg",
    videoLink: "https://www.youtube-nocookie.com/embed/2Yw6dFQBklA/?autoplay=1",
    description:
      "The Art of Effective Communication | Marcus Alexander Velazquez | TEDxWolcottSchool",
    creatorsLogo:
      "https://yt3.ggpht.com/ytc/AKedOLQGnY6McntoY-eWaRDI047FWFqj7pVlw2nBfkwz7w=s88-c-k-c0x00ffffff-no-rj",
    creator: "TEDx Talks",
    premiumCreator: true,
    category: "communication",
    views: "173k",
    time: "2 years",
  },
  {
    _id: "ywwg-H1otaY",
    thumbnailImg: "https://img.youtube.com/vi/ywwg-H1otaY/maxresdefault.jpg",
    videoLink: "https://www.youtube-nocookie.com/embed/ywwg-H1otaY/?autoplay=1",
    description: "SALES Is Just Like DATING | Simon Sinek",
    creatorsLogo:
      "https://yt3.ggpht.com/ytc/AKedOLRWK-7SEE7uTtp3PTvRHClj1yGpZLruhkD8pyGoQw=s88-c-k-c0x00ffffff-no-rj",
    creator: "Simon Sinek",
    premiumCreator: false,
    category: "sales",
    views: "169k",
    time: "1 years",
  },
  {
    _id: "-6Tt46y6nAs",
    thumbnailImg: "https://img.youtube.com/vi/-6Tt46y6nAs/maxresdefault.jpg",
    videoLink: "https://www.youtube-nocookie.com/embed/-6Tt46y6nAs/?autoplay=1",
    description: "Top 5 Best Video Editing Apps⚡January 2022",
    creatorsLogo:
      "https://yt3.ggpht.com/EYXEN3n0cfYgs_zDqlSVk8JY1y6gLrzfmdV17uce1zkMEKRoH7VlLwaptPBh6zBk_ie-c7Qw=s88-c-k-c0x00ffffff-no-rj",
    creator: "rakin Tech",
    premiumCreator: true,
    category: "video editing",
    views: "864k",
    time: "1 years",
  },
  {
    _id: "xr1q-uBtIH4",
    thumbnailImg: "https://img.youtube.com/vi/xr1q-uBtIH4/maxresdefault.jpg",
    videoLink: "https://www.youtube-nocookie.com/embed/xr1q-uBtIH4/?autoplay=1",
    description: "5 Ways to Improve your COMMUNICATION Skills",
    creatorsLogo:
      "https://yt3.ggpht.com/ytc/AKedOLQsQBOEYJH18b9JCwChN4KfOcQLPxitNatuPAlhGw=s88-c-k-c0x00ffffff-no-rj",
    creator: "Evan Carmichael",
    premiumCreator: true,
    category: "communication",
    views: "2.7M",
    time: "2 years",
  },
  {
    _id: "5jprIWG8f5g",
    thumbnailImg: "https://img.youtube.com/vi/5jprIWG8f5g/maxresdefault.jpg",
    videoLink: "https://www.youtube-nocookie.com/embed/5jprIWG8f5g/?autoplay=1",
    description:
      "‘Shape’ Visual element of Graphic Design / Design theory Ep4/45 [Beginners guide to Graphic Design]",
    creatorsLogo:
      "https://yt3.ggpht.com/y5Nj-jmdjcz7vfoeb6zunz69t2uOsunzPGT7DVOzSMB_hL1N4EGozgcdCGOihINB9Y_nBOIi6A=s88-c-k-c0x00ffffff-no-rj",
    creator: "Gareth David Studio",
    premiumCreator: true,
    category: "graphic design",
    views: "266`k",
    time: "2 years",
  },

  {
    _id: "c1sKrhPwC24",
    thumbnailImg: "https://img.youtube.com/vi/c1sKrhPwC24/maxresdefault.jpg",
    videoLink: "https://www.youtube-nocookie.com/embed/c1sKrhPwC24/?autoplay=1",
    description:
      "Freelance Video Editor: Earn Rs. 2000/hr! | How to Become a Video Editor",
    creatorsLogo:
      "https://yt3.ggpht.com/5NTOTidzy2R9HriIqLFcXdCL26eTgqz3_iKBFqTTOYY2lzWzBOlsI8nx8Vt4dobCA3x8ABXKLsU=s88-c-k-c0x00ffffff-no-rj",
    creator: "Ishan Sharma",
    premiumCreator: true,
    category: "video editing",
    views: "111k",
    time: "2 months",
  },
  {
    _id: "ZUKLrTl22gg",
    thumbnailImg: "https://img.youtube.com/vi/ZUKLrTl22gg/maxresdefault.jpg",
    videoLink: "https://www.youtube-nocookie.com/embed/ZUKLrTl22gg/?autoplay=1",
    description:
      "Sales Skills And Techniques Explained In Hindi | Ranveer Allahbadia",
    creatorsLogo:
      "https://yt3.ggpht.com/ytc/AKedOLSbIq4XmLWjHnDXQB-8lUgih_aQ5cFabXp2yIVMVw=s88-c-k-c0x00ffffff-no-rj",
    creator: "Ranveer Allahbadia",
    premiumCreator: true,
    category: "sales",
    views: "2.3M",
    time: "1 years",
  },
  {
    _id: "F0PTse89XIE",
    thumbnailImg: "https://img.youtube.com/vi/F0PTse89XIE/maxresdefault.jpg",
    videoLink: "https://www.youtube-nocookie.com/embed/F0PTse89XIE/?autoplay=1",
    description:
      "‘Line’ Visual element of Graphic Design / Design theory Ep2/45 [Beginners guide to Graphic Design]",
    creatorsLogo:
      "https://yt3.ggpht.com/y5Nj-jmdjcz7vfoeb6zunz69t2uOsunzPGT7DVOzSMB_hL1N4EGozgcdCGOihINB9Y_nBOIi6A=s88-c-k-c0x00ffffff-no-rj",
    creator: "Gareth David Studio",
    premiumCreator: true,
    category: "graphic design",
    views: "528k",
    time: "2 years",
  },
  {
    _id: "fOBd_hLOnGI",
    thumbnailImg: "https://img.youtube.com/vi/fOBd_hLOnGI/maxresdefault.jpg",
    videoLink: "https://www.youtube-nocookie.com/embed/fOBd_hLOnGI/?autoplay=1",
    description: "How to Edit Video Fast in Adobe Premiere Pro | Rachit Singh",
    creatorsLogo:
      "https://yt3.ggpht.com/ytc/AKedOLTyqgtsRL1H85VOwtipJ-bXzA3s5w0NMJAptmfQrg=s88-c-k-c0x00ffffff-no-rj",
    creator: "Rachit Singh",
    premiumCreator: true,
    category: "video editing",
    views: "86k",
    time: "1 years",
  },
  {
    _id: "hECQpBM0b0Q",
    thumbnailImg: "https://img.youtube.com/vi/hECQpBM0b0Q/maxresdefault.jpg",
    videoLink: "https://www.youtube-nocookie.com/embed/hECQpBM0b0Q/?autoplay=1",
    description:
      "‘Texture’ Visual element of Graphic Design Ep5/45 [Beginners guide to Graphic Design]",
    creatorsLogo:
      "https://yt3.ggpht.com/y5Nj-jmdjcz7vfoeb6zunz69t2uOsunzPGT7DVOzSMB_hL1N4EGozgcdCGOihINB9Y_nBOIi6A=s88-c-k-c0x00ffffff-no-rj",
    creator: "Gareth David Studio",
    premiumCreator: true,
    category: "graphic design",
    views: "197k",
    time: "2 years",
  },
  {
    _id: "PwwgGOBw1oE",
    thumbnailImg: "https://img.youtube.com/vi/PwwgGOBw1oE/maxresdefault.jpg",
    videoLink: "https://www.youtube-nocookie.com/embed/PwwgGOBw1oE/?autoplay=1",
    description: "10 SALES Techniques That Will Make You RICH in 2022!",
    creatorsLogo:
      "https://yt3.ggpht.com/ytc/AKedOLQsQBOEYJH18b9JCwChN4KfOcQLPxitNatuPAlhGw=s88-c-k-c0x00ffffff-no-rj",
    creator: "Evan Carmichael",
    premiumCreator: true,
    category: "sales",
    views: "1.3M",
    time: "6 years",
  },
];
export default videos