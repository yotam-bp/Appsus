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
                        Email, Notes & Books
                    </h2>

                </div>
            </section>
        )
    }
}