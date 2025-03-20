import React from "react";

function HomePage() {

    return (
        <div style={{ 
            fontFamily: "Arial, sans-serif", 
            lineHeight: 1.6, 
            direction: "rtl", 
            textAlign: "right", 
            height: "auto", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "center",

            }}>
            <header style={{ textAlign: "center", marginBottom: "40px" }}>
                <h1 style={{ fontSize: "2.5rem", color: "#2c3e50" }}>
                    בעל בר? מסעדה? יש לנו פתרון מעולה בשבילך!
                </h1>
                <p style={{ fontWeight:'bold', fontSize: "1.5rem", color: "#34495e", maxWidth: "800px", margin: "20px auto" }}>
                    הכירו את קולקציית הכוסות המעוצבות שלנו מושלמות לקוקטיילים ייחודיים, ומיועדות לבעלי עסקים בתחום המזון והמשקאות.
                    העניקו ללקוחות שלכם חוויית שתייה בלתי נשכחת עם עיצוב אלגנטי ומרשים שמתאים בדיוק למסעדות, ברים ואירועים מיוחדים.
                </p>
            </header>
            <video width="100%" height="500" autoPlay muted loop controls style={{ borderRadius: "12px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                <source src="homePageVideo.mp4" type="video/mp4" />
                הדפדפן שלך אינו תומך בניגון וידאו.
            </video>
        </div>
    );
}

export default HomePage;
