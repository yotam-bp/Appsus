const { Link } = ReactRouterDOM
export class Home extends React.Component {

    render() {
        return (
            <section className="main-homepage">
                <div>
                    <img src="./assets/img/main-img.jpeg" />
                </div>
                <div>
                    <h1>
                        Your app for managing
                    </h1>
                    <h2>
                        <span className="logo email"><span>E</span></span>mail,<br />
                        <span className="logo notes"><span>N</span></span>otes <br />
                        & <br />
                        <span className="logo books"><span>B</span></span>ooks
                    </h2>

                </div>
            </section>
        )
    }
}