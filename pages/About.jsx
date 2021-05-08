
export function About() {
    return (
        <section>
            <h2>
                Welcome to Apsus!
                </h2>
            <br></br>
            The app that will manage your emails, notes and books. Our vision is keeping in one place everything we want to remember, but keep forgetting.
            <br></br>
            Mister Email is an app for reciving and sending emails. You can even star emails and keep them stored and organized for later use.
            <br></br>
            Miss Books is an app for keeping your favorite books. You can add new books by searching their title, leave a review and rate them!
            <br></br>
            Miss Notes is an app for keeping anything you want: todos, images you like, videos you want to watch later etc. This way, you will have everything you liked and want to keep AT THE SAME PLACE! How awesome is that?
            <section className="team-contaier">
                <div className="team-member">
                    <h3>Hi! I'm Yotam</h3>
                    <img className="profile-img" src="../assets/img/yotam.JPG" />
                    <p>I need to update this but I have no time because I'm working on the Notes App</p>
                </div>
                <div className="team-member">
                    <h3>Hi! I'm Naama</h3>
                    <img className="profile-img" src="../assets/img/naama-img.jpeg" />
                    <p>
                        I'm 26 years old, living in Tel Aviv. In my free time I love baking, working out and Coding of course! I'm an aspiring programer and this is my first big React app!
                    </p>
                </div>
            </section>
        </section>
    )
}