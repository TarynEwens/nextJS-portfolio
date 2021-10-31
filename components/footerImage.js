import styles from "./footerImage.module.css";

export default function FooterImage() {
  let imageOfThePage = pickImage();
  let linkUrl = imageOfThePage.link;
  let src = imageOfThePage.src;
  let alt = imageOfThePage.alt;

  function pickImage() {
    let images = [
      {
        link: "https://codepen.io/tarynewens/pen/KbeNYX",
        src: "/img/gelato.png",
        alt: "CSS image of a gelato cone with happy faces",
      },
      {
        link: "https://codepen.io/tarynewens/pen/OKbWKy",
        src: "/img/plant1.png",
        alt: "CSS image of a plant in a pink pot",
      },
      {
        link: "https://codepen.io/tarynewens/pen/rEqONM",
        src: "/img/plant2.png",
        alt: "CSS image of a plant in a pink pot",
      },
      {
        link: "https://codepen.io/tarynewens/pen/WmwgJR",
        src: "/img/pig.png",
        alt: "CSS image of a geometric pig",
      },
      {
        link: "https://codepen.io/tarynewens/pen/WPgwZO",
        src: "/img/heart.png",
        alt: "CSS image of a geometric heart",
      },
    ];

    let n = Math.floor(Math.random() * images.length);
    return images[n];
  }

  return (
    <div className={styles.footerImageWrapper}>
      <a
        href={linkUrl}
        rel="noopener noreferrer"
        target="_blank"
        className={styles.footerImageLink}
      >
        <img src={src} alt={alt} className={styles.footerImage} />
      </a>
    </div>
  );
}
