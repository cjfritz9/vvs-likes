import blog_img1 from "../images/blog_img1.png";
import blog_img2 from "../images/blog_img2.png";
import blog_img3 from "../images/blog_img3.png";
import blog_img4 from "../images/blog_img4.png";
import blog_img5 from "../images/blog_img5.png";
import blog_img6 from "../images/blog_img6.png";
import blog_img7 from "../images/blog_img7.png";
import blog_img8 from "../images/blog_img8.png";
import blog_img9 from "../images/blog_img9.png";
import footer_logo from "../images/footer-logo.png";

export interface IBlogMetadata {
  id: number;
  img: string;
  type: string;
  date: string;
  blogHeader: string;
  blogDescription: string;
  authorProfilePic: string;
  authorName: string;
}

const blogData: IBlogMetadata[] = [
  {
    id: 1,
    img: blog_img1,
    type: "instagram",
    date: "Aug 30,2023",
    blogHeader: "How To Get Instagram Likes Without Hashtag",
    blogDescription:
      "In 2007, the first hashtag was used on a Twitter post. Ten years later, hashtags have been introduced on every major social m...",
    authorProfilePic: footer_logo,
    authorName: "Prof. Betty Howell V",
  },
  {
    id: 2,
    img: blog_img2,
    type: "instagram",
    date: "Aug 30, 2023",
    blogHeader: "How To Get Instagram Verified",
    blogDescription:
      "Getting verified on Instagram is the biggest free promotional opportunity the popular app hands out. The blue check mark so...",
    authorProfilePic: footer_logo,
    authorName: "Prof. Betty Howell V",
  },
  {
    id: 3,
    img: blog_img3,
    type: "instagram",
    date: "Aug 30, 2023",
    blogHeader: "Understanding the Importance of Instagram Likes",
    blogDescription:
      "Explanation of how likes contribute to visibility and engagement. Insights into how they impact your profile's algorithmic rank..",
    authorProfilePic: footer_logo,
    authorName: "Lillie Kessler MD",
  },
  {
    id: 4,
    img: blog_img4,
    type: "instagram",
    date: "Aug 30, 2023",
    blogHeader: "Perfecting Captions and Hashtags",
    blogDescription:
      "Crafting engaging captions that complement your visuals. Understanding the role of hashtags and how to use them effectively.",
    authorProfilePic: footer_logo,
    authorName: "Essie O'Connell",
  },
  {
    id: 5,
    img: blog_img5,
    type: "instagram",
    date: "Aug 30, 2023",
    blogHeader: "Timing Is Everything",
    blogDescription:
      "Analyzing your audience's behavior and preferences. Utilizing scheduling tools for optimal posting times.",
    authorProfilePic: footer_logo,
    authorName: "Mr. Patrick Abbott",
  },
  {
    id: 6,
    img: blog_img6,
    type: "instagram",
    date: "Aug 30, 2023",
    blogHeader: "Engaging with Your Audience",
    blogDescription:
      "Responding to comments and direct messages. Initiating conversations and fostering a sense of community.",
    authorProfilePic: footer_logo,
    authorName: "Kathy Quigley",
  },
  {
    id: 7,
    img: blog_img7,
    type: "instagram",
    date: "Aug 30, 2023",
    blogHeader: "Collaborations and Influencer Partnerships",
    blogDescription:
      "How collaborations can expand your reach and bring in new followers. Finding and approaching potential partners for mutu..",
    authorProfilePic: footer_logo,
    authorName: "Miss Lauren Rodriguez",
  },
  {
    id: 8,
    img: blog_img8,
    type: "instagram",
    date: "Aug 30, 2023",
    blogHeader: "Analyzing Your Performance",
    blogDescription:
      "Utilizing Instagram's analytics tools to track your progress. Making data-driven decisions to refine your content strategy..",
    authorProfilePic: footer_logo,
    authorName: "Michele Lesch",
  },
  {
    id: 9,
    img: blog_img9,
    type: "instagram",
    date: "Aug 30, 2023",
    blogHeader: "Avoiding Common Pitfalls",
    blogDescription:
      "Overusing automation tools and bots. Neglecting authentic engagement for quantity over quality.",
    authorProfilePic: footer_logo,
    authorName: "Nadine Langworth",
  },
];

export default blogData;
