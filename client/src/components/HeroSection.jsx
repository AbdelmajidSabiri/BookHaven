import heroImage from '/heroSectionBigPic.png'; // Replace with your image path

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="text-content">
          <h1>
            Discover the Joy of <span className="highlight">Reading</span> with <strong>Book Haven</strong>
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
      <div className="community-section">
        <div className="avatars">
          <img src="./assets/avatar1.png" alt="User 1" />
          <img src="./assets/avatar2.png" alt="User 2" />
          <img src="./assets/avatar3.png" alt="User 3" />
        </div>
        <p>50K+ Book lovers joined</p>
      </div>
    </section>
  );
}

export default HeroSection;
