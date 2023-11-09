type BannerProps = {
  bgImgUrl: string;
  title: string;
  description: string;
  btnText: string;
  btnAction?: () => void;
};

const Banner = ({
  bgImgUrl,
  title,
  description,
  btnText,
  btnAction,
}: BannerProps) => {
  return (
    <section
      style={{ backgroundImage: `url(${bgImgUrl})` }}
      className="banner-section"
    >
      <div className="banner">
        <h2 className="banner-title">{title}</h2>
        <p className="banner-description">{description}</p>
        <button onClick={btnAction} className="banner-btn">
          {btnText}
        </button>
      </div>
    </section>
  );
};

export default Banner;
