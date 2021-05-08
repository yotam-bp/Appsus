
export function About() {
    return (
        <section className="about-page">
            <div className="about">
                <h2>
                    Welcome to
                    <span className="logo">
                        <span>A</span>ppsus!
                    </span>
                </h2>
                <br />
                <h4>
                    The app that will manage your emails, notes and books.
            </h4>
                <h4>
                    Our vision is keeping in one place everything we want to remember, but keep forgetting.
            </h4>
                <br />
                <p>
                    Mister Email is an app for reciving and sending emails. You can even star emails and keep them stored and organized for later use.
            </p>
                <br />
                <p>
                    Miss Books is an app for keeping your favorite books. You can add new books by searching their title, leave a review and rate them!
            </p>
                <br />
                <p>
                    Miss Notes is an app for keeping anything you want: todos, images you like, videos you want to watch later etc. This way, you will have everything you liked and want to keep AT THE SAME PLACE! How awesome is that?
            </p>
            </div>
            <hr />
            <section className="team-contaier">
                <div className="team-member-1">
                    <img className="profile-img" src="../assets/img/yotam.JPG" />
                    <div className="member-info">
                        <h3>Hi! I'm Yotam</h3>
                        <p>I need to update this but I have no time because I'm working on the Notes App</p>
                    </div>

                </div>
                <div className="team-member-2">
                    <div className="member-info">
                        <h3>Hi! I'm Naama</h3>
                        <p>
                            I'm 26 years old, living in Tel Aviv. In my free time I love baking, working out and Coding of course! I'm an aspiring programer and this is my first big React app!
                    </p>
                    </div>
                    <img className="profile-img" src="../assets/img/naama-img.jpeg" />
                </div>
            </section>
        </section>
    )
}