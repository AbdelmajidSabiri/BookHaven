import heroImage from '/heroSectionBigPic.png'; // Replace with your image path

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="text-content">
          <h1>
            Discover the Joy of <span className="highlight1">Reading</span> with <strong className="highlight2">Book Haven</strong>
          </h1>
          <p>
            Welcome to Book Haven, where we believe in the power of books to entertain, inspire, and transform lives. Explore our collection and embark on a journey of imagination and knowledge.
          </p>
          <div className="buttons">
            <button className="btn explore">Explore</button>
            <button className="btn join">Join Now</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Person reading a book" />
        </div>
      </div>
      <img src="/stars1.png" alt="Star" className="star star1" />
      <img src="/stars2.png" alt="Star" className="star star2" />
      <img src="/stars3.png" alt="Star" className="star star3" />

      <div className="community-section">
        <div className="avatars">
          <img src="/avatar1.png" alt="User 1" />
          <img src="/avatar2.png" alt="User 2" />
          <img src="/avatar3.png" alt="User 3" />
        </div>
        <p>50K+ Book lovers joined</p>
      </div>
    </section>
  );
}

export default HeroSection;
