import Image from "next/image";
import "@/styles/BlogDetailsCard.css";

function BlogDetailsCard() {
  // let blogDetailsData;
  // const blogCardDetails = localStorage.getItem("blogCarddetails");

  // try {
  //   if (blogCardDetails) {
  //     blogDetailsData = JSON.parse(blogCardDetails);
  //   }
  // } catch (error) {
  //   console.error("JSON.parse error", error);
  // }

  return (
    <div className="blog-details-card">
      {/* <Image src={blogDetailsData.img} alt="Blog style" style={{ borderRadius: "10px" }} /> */}
      <div className="blog-details-tray">
        <div>
          &#128197; <p>30 Aug 2023</p>
        </div>
        <div>
          &#9200;<p>Ms. Savannah Beer</p>
        </div>
        <div>
          &#127568;<p>Instagram</p>
        </div>
      </div>

      <div className="blogDetails-section1">
        <div className="blog-details-card-heading">
          {/* <h1>{blogDetailsData?.blogHeader}</h1> */}
        </div>

        <p>
          Getting Instagram likes without using hashtags can be a bit
          challenging, as hashtags are one of the primary ways to increase the
          discoverability of your content. However, there are still several
          strategies you can employ to boost your likes organically:
        </p>

        <ol>
          <li>
            <h4>Create High-Quality Content:</h4>
            <p>
              Ensuring your photos and videos are of the highest quality is
              paramount. This means capturing clear, well-composed images and
              videos. Pay attention to lighting, framing, and composition. Use
              editing tools to enhance colors, contrast, and sharpness if
              necessary.{" "}
            </p>
          </li>
          <li>
            <h4>Leverage Location Tags:</h4>
            <p>
              When you add a location to your posts, you're tapping into a
              powerful discovery tool. This is especially effective for
              businesses, events, or places of interest. It allows your content
              to show up in location-based searches and on location-specific
              explore pages.{" "}
            </p>
          </li>
          <li>
            <h4>Collaborate with Influencers or Accounts in Your Niche:</h4>
            <p>
              Partnering with influencers or accounts in your niche can expose
              your content to a broader audience. Look for accounts that share a
              similar target demographic and values.
            </p>
          </li>
          <li>
            <h4>Encourage User-Generated Content:</h4>
            <p>
              Encouraging your followers to create content related to your brand
              or niche can lead to a stronger sense of community. Consider
              creating a unique hashtag or challenge for your followers to
              participate in.
            </p>
          </li>
          <li>
            <h4>Interact with Relevant Communities:</h4>
            <p>
              Partnering with influencers or accounts in your niche can expose
              your content to a broader audience. Look for accounts that share a
              similar target demographic and values.
            </p>
          </li>
        </ol>
      </div>

      <div className="blogDetails-section2">
        <div className="blog-details-card-heading">
          <h1>How to fix disappearing Instagram likes</h1>
        </div>
        <p>
          If you're experiencing issues with disappearing Instagram likes, it
          can be frustrating, but there are a few steps you can take to
          troubleshoot and potentially resolve the problem:
        </p>
        <p>
          If you find yourself facing the perplexing issue of disappearing
          Instagram likes, it's essential to address it promptly. Start by
          ensuring you have a stable internet connection and that your Instagram
          app is updated to the latest version. Clearing your app's cache and
          restarting your device can also help resolve any potential technical
          glitches.
        </p>
        <p>
          <strong>Next,</strong> delve into your privacy settings and make sure
          your account isn't set to private, as this could restrict who can view
          your likes. It's equally important to review your account's activity
          for any suspicious behavior or engagement automation, which can
          trigger Instagram's spam filters. Avoid using third-party bots and
          excessive engagement tactics to maintain healthy account visibility.
        </p>
        <p>
          Additionally, revoke access from any third-party apps that may have
          permission to interact with your account. If, after taking these
          steps, the issue persists, consider reaching out to Instagram's
          support team for further assistance. Remember, patience and
          persistence are key when troubleshooting technical issues, and a
          systematic approach is often the most effective way to resolve them.
        </p>
      </div>

      <div className="blogDetails-section3">
        <div className="blog-details-card-heading">
          <h1>Preventing disappearing Instagram likes in the future</h1>
        </div>
        <p>
          "To safeguard against the frustration of disappearing Instagram likes,
          it's imperative to adopt a thoughtful and authentic approach to
          engagement. First and foremost, avoid the temptation of resorting to
          third-party engagement bots or automation tools. These tactics may
          seem enticing for quick results, but they often run afoul of
          Instagram's guidelines, leading to decreased visibility and potential
          removal of likes.
        </p>
        <p>
          {" "}
          Additionally, it's crucial to respect Instagram's activity limits.
          Refrain from excessive liking, commenting, or following/unfollowing in
          a short span, as this behavior can trigger the platform's spam
          filters. Adhering to Instagram's community guidelines and terms of
          service is paramount; understanding and respecting these rules will
          help maintain a trustworthy and reputable presence.
        </p>
        <p>
          Lastly, use relevant hashtags judiciously, steering clear of overuse
          or reliance on banned or flagged tags. By employing these strategies,
          you can foster genuine engagement and ensure your likes remain intact,
          offering a more gratifying experience for both you and your audience."
        </p>
      </div>

      <div className="blogDetails-section4">
        <h4>
          In the sprawling landscape of social media, Instagram stands as a
          vibrant hub of creativity and connection. At its heart, the currency
          of this dynamic platform lies in the form of 'likes'.
        </h4>
        <p>Ms. Savannah Beer</p>
      </div>
    </div>
  );
}

export default BlogDetailsCard;
