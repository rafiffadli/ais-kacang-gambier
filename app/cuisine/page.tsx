export default function CuisinePage() {
  return (
    <main className="cuisine-page">
      <section className="cuisine-hero">
        <div className="cuisine-hero-copy">
          <div className="cuisine-category">Little Heritage House</div>
          <h1>A Taste of History</h1>
          <p className="cuisine-lede">
            Nyonya cuisine is a living conversation between Chinese, Malay,
            Indonesian, Indian and Sarawakian traditions — simmered slowly and
            served with warmth.
          </p>

          <div className="cuisine-meta">
            <span>Peranakan Kitchen</span>
            <span>House-Made Sauces</span>
            <span>Gula Apong</span>
          </div>

          <div className="cuisine-actions">
            <a className="cuisine-button cuisine-button-primary" href="#menu">
              Explore the Menu
            </a>
            <a className="cuisine-button cuisine-button-ghost" href="/contact">
              Reserve a Table
            </a>
          </div>

          <div className="cuisine-proof">
            <div>
              <span className="proof-number">01</span>
              <span className="proof-label">Fresh from the farm</span>
            </div>
            <div>
              <span className="proof-number">02</span>
              <span className="proof-label">100% homemade sauces</span>
            </div>
            <div>
              <span className="proof-number">03</span>
              <span className="proof-label">Heritage recipes</span>
            </div>
          </div>
        </div>

        <div className="cuisine-hero-visual">
          <div className="spinning-bowl-stage">
            <div className="orbit-ring orbit-ring-one" />
            <div className="orbit-ring orbit-ring-two" />
            <div className="spinning-bowl-wrap">
              <div className="bowl-shadow" />
              <div className="spinning-bowl">
                <div className="bowl-rim">
                  <span className="rim-spear rim-spear-one" />
                  <span className="rim-spear rim-spear-two" />
                  <span className="rim-spear rim-spear-three" />
                </div>
                <div className="bowl-food">
                  <span className="food-grain food-grain-one" />
                  <span className="food-grain food-grain-two" />
                  <span className="food-grain food-grain-three" />
                  <span className="food-grain food-grain-four" />
                  <span className="food-grain food-grain-five" />
                </div>
                <span className="bowl-sauce" />
                <span className="bowl-sauce bowl-sauce-two" />
              </div>
            </div>
          </div>

          <div className="visual-card">
            <div>
              <span className="visual-card-label">Today’s Heritage Bowl</span>
              <span className="visual-card-title">Laksa Nyonya</span>
            </div>
            <span className="visual-card-price">RM 11.50</span>
          </div>
        </div>
      </section>

      <section className="cuisine-section" id="menu">
        <div className="section-heading">
          <span className="section-kicker">Cuisine Collection</span>
          <h2>From Nyonya Kitchen to Waterfront Table</h2>
        </div>

        <div className="cuisine-grid">
          <article className="cuisine-tile">
            <span className="tile-index">01</span>
            <h3>Sambal & Broth</h3>
            <p>
              Slow-simmered rempah, house sambal belacan and comforting bowls
              made for sharing.
            </p>
          </article>
          <article className="cuisine-tile">
            <span className="tile-index">02</span>
            <h3>Fresh Garden</h3>
            <p>
              Herbs, greens and aromatics are sourced for a bright and layered
              river-town finish.
            </p>
          </article>
          <article className="cuisine-tile">
            <span className="tile-index">03</span>
            <h3>Gula Apong</h3>
            <p>
              The signature sweetness of nipa palm sugar carries the experience
              from savory to dessert.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
