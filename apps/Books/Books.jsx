const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM;
// import { AppHeader } from './cmps/AppHeader.jsx'
// import { BookFilter } from './cmps/BookFilter.jsx'
import { BookApp } from './pages/BookApp.jsx'
// import { BookDetails } from './pages/BookDetails'



export function Books() {
    return (
        <section className="app">
            {<Router>
                <header>
                    {/* <AppHeader /> */}
                </header>
                <div className="content-container">
                    <main>
                        {/* <BookApp/> */}
                        <Switch>
                            {/* <Route component={BookDetails} path="/miss-books/book/:bookId" /> */}
                            <Route component={BookApp} path="/miss-books" />
                        </Switch>
                    </main>
                    
                </div>
            </Router>}
        </section>   
    )
}

