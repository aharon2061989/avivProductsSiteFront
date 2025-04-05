import React from "react";
import "./HomePage.css";
import ProductList from "./ProductList";

function HomePage() {
  return (
    <div>
        <div className="home-container">
          <header className="home-header">
            <h1 className="home-title">
              " קוקטייל טוב מתחיל בכוס המושלמת "
            </h1>
            <p className="home-description">
              הכירו את קולקציית הכוסות המעוצבות שלנו מושלמות לקוקטיילים ייחודיים, ומיועדות לבעלי עסקים בתחום המזון והמשקאות וללקוחות פרטיים.
              העניקו ללקוחות שלכם חוויית שתייה בלתי נשכחת עם עיצוב אלגנטי ומרשים שמתאים בדיוק למסעדות, ברים ואירועים מיוחדים.
            </p>
          </header>

          <video className="video-style" autoPlay muted loop controls>
            <source src="homePageVideo.mp4" type="video/mp4" />
            הדפדפן שלך אינו תומך בניגון וידאו.
          </video>
        </div>
        <ProductList/>
    </div>
  );
}

export default HomePage;
