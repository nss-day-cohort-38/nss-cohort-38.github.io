import React from "react";
import "./Thanks.css";
// Author: Sam Pita
// Purpose: To create a Thanks section to render on our homepage

const Thanks = () => (
  <>
    <p id="border-img">
    <section className="about-us" id="thanks">
      <h1 className="thanks">Thank You...</h1>

      <p className="thanks-paragraph">
        <div className="thanks-section">
          <span className="thanks-titles">
            To Our Instructors, <br />
            Andy &amp; Jisie: <br />
          </span>
          <div className="thanks-message">
            Thank you for shepherding the beginning of this new &amp; exciting
            journey upon which we have all embarked. Your insights, humor,
            encouragement, and wisdom set the standard that we all strive to
            someday achieve. <br /> <br />
            Andy, thank you for your dry wit, your book recommendations, your
            thoughtful advice, and thank you for reminding us that sometimes
            it’s okay to fail. <br /> <br /> Jisie, thank you for your patience
            and understanding, for your jokes and for putting up with ours, and
            for always being available when we needed someone to listen.
          </div>
        </div>
        <div className="thanks-section">
          <span className="thanks-titles">
            {" "}
            To Our Junior Instructors, <br />
            Kristen, Bryan, and Chase: <br />
          </span>
          <div className="thanks-message">
            Thank you for being a source of knowledge, an extra set of eyes, an
            ear to vent toward, or an infinite dispenser of awesome hi-fives as
            the situation needed. <br /> <br />
            Kristen, the one who was with us from beginning to end: thank you
            for your efficiency and knowledge, for the speed and determination
            with which you learned python so that you could help us as we
            stumbled through, and for not abandoning us for Cohort 40. <br />{" "}
            <br /> Bryan, master of hi-fives: thank you for your emotional
            support and constant encouragement, for checking in even after
            leaving us, and for the levity and sense of fun you brought to the
            classroom every day. <br /> <br /> Chase, even though we didn’t have
            the opportunity to get to know you in person, thanks for always
            being there to help us debug, for laughing at our jokes, and for
            asking the questions none of us thought to ask.
          </div>
        </div>
        <div className="thanks-section">
          <span className="thanks-titles">
            To The NSS Admin &amp; Staff, <br />
            Ashley, Kristin, John Wark &amp; Co: <br />
          </span>
          <div className="thanks-message">
            Ashley and Kristin, our career dev gurus: thank you for your
            invaluable advice, for coordinating talks with members of the
            industry, and for preparing us for our future in software development. <br /> <br />
            John, thank you for creating this incredible place where we can all
            congregate, learn, and better ourselves. All of our lives have been
            changed by your work and we can’t express enough gratitude for that.{" "}
            <br /> <br /> Thank you to the NSS Admin &amp; Staff who were always
            looking out for us behind the scenes.
          </div>
        </div>
        <div className="thanks-section">
          <span className="thanks-titles">
            To Our Fellow Students &amp; Alums: <br />
          </span>
          <div className="thanks-message">
            Our fellow learners, the ones right next to us in the trenches, our
            Cohort 38 partners in crime. We shared triumphs, failures, bad
            jokes, and late nights. This experience wouldn’t have been the same
            without all of the amazing people we met along the way. <br />{" "}
            <br />
            Thank you to our big sibs and the NSS Alum who gave their time and
            knowledge to help us on our journeys, and a special thank you to
            Alyssa for providing us with daily caffeine.
          </div>
        </div>
        <div className="thanks-section">
          <span className="thanks-titles">
            Lastly, <br />
            To Our Friends and Family: <br />
          </span>
          <div className="thanks-message">
            Thank you to our families and friends, the ones who have supported
            us not only in this massive endeavor but throughout our lives. <br/><br/>
            Special shoutout to our four-legged friends who made quarantine a
            little bit more bearable.
          </div>
        </div>
      </p>
    </section>
    </p>
  </>
);

export default Thanks;
