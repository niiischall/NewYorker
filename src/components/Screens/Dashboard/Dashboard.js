import React from 'react';
import classes from './Dashboard.css';

const Dashboard = (props) => {
    return(
    <div className = {classes.layoutMain}>
        <div className = {classes.layoutContent}>
            <div className = {classes.contentSearch}>
                <img 
                    src       = "assets/images/magnifying-glass.svg" 
                    className = {classes.searchInputLogo}
                    alt       = "Search"
                />
                <input 
                    placeholder = "What's on your mind?" 
                    type        = "text" 
                    className   = {classes.searchInput} 
                />
                <button className = {classes.searchButton}>
                    Search
                </button>
            </div>
            {false ?
            <div className = {classes.contentMain}>
                <div>
                    <p className = {classes.contentHeadingText}>
                        Here are your search results for, “Elections.”
                    </p>
                </div>
                <div className = {classes.contentMainArticles}>
                    <div className = {classes.articlesHeading}>
                        <p className = {classes.articlesHeadingText}>
                            articles
                        </p>
                    </div>
                    <div className = {classes.articlesColumnHeading}>
                        <span className = {[
                                classes.articlesColumnHeadings,
                                classes.headingDate
                        ].join(' ')}>
                            Published Date
                        </span>
                        <span className = {[
                            classes.articlesColumnHeadings,
                            classes.headingHeadline
                        ].join(' ')}>
                            Headline
                        </span>
                        <span className = {[
                            classes.articlesColumnHeadings,
                            classes.headingSummary
                        ].join(' ')}>
                            Summary
                        </span>
                        <span className = {[
                            classes.articlesColumnHeadings,
                            classes.headingUrl
                        ].join(' ')}>
                            URL
                        </span>
                        <span className = {[
                            classes.articlesColumnHeadings, 
                            classes.headingSource
                        ].join(' ')}>
                            Source
                        </span>
                    </div>
                    <div className = {[
                            classes.articlesColumn, 
                            classes.greyed
                    ].join(' ')}>
                        <p className = {[
                            classes.articlesColumns,
                            classes.columnsDate
                        ].join(' ')}>
                            01-01-2019
                        </p>
                        <p className = {[
                            classes.articlesColumns,
                            classes.columnsHeadline
                        ].join(' ')}>
                            S Economy Unlikely to Recover as Rapidly as It Collapsed
                        </p>
                        <p className = {[
                            classes.articlesColumns,
                            classes.columnsSummary
                        ].join(' ')}>
                            lawn sign for Bernie Sanders was left in a yard after he ended his…
                        </p>
                        <div className = {[
                            classes.articlesColumns,
                            classes.columnsUrl
                        ].join(' ')}>
                            <a 
                                className = {classes.columnsUrlLink} 
                                href = "https://www.nytimes.com/"
                            >
                                https://www.nytimes.com/2020/04/09/us/politics/biden-sanders-trump…
                            </a>
                        </div>                            
                        <p className = {[
                            classes.articlesColumns,
                            classes.columnsSource
                        ].join(' ')}>
                            The New York Times
                        </p>
                    </div>
                    <div className = {classes.articlesColumn}>
                        <p className = {[
                            classes.articlesColumns,
                            classes.columnsDate
                        ].join(' ')}>
                            01-01-2019
                        </p>
                        <p className = {[
                            classes.articlesColumns,
                            classes.columnsHeadline
                        ].join(' ')}>
                            S Economy Unlikely to Recover as Rapidly as It Collapsed
                        </p>
                        <p className = {[
                            classes.articlesColumns,
                            classes.columnsSummary
                        ].join(' ')}>
                            lawn sign for Bernie Sanders was left in a yard after he ended his…
                        </p>
                        <div className = {[
                            classes.articlesColumns,
                            classes.columnsUrl
                        ].join(' ')}>
                            <a 
                                className = {classes.columnsUrlLink} 
                                href = "https://www.nytimes.com/"
                            >
                                https://www.nytimes.com/2020/04/09/us/politics/biden-sanders-trump…
                            </a>
                        </div>                            
                        <p className = {[
                            classes.articlesColumns,
                            classes.columnsSource
                        ].join(' ')}>
                            The New York Times
                        </p>
                    </div>
                    <div className = {[classes.articlesColumn, classes.greyed].join(' ')}>
                        <p className = {[
                            classes.articlesColumns,
                            classes.columnsDate
                        ].join(' ')}>
                            01-01-2019
                        </p>
                        <p className = {[
                            classes.articlesColumns,
                            classes.columnsHeadline
                        ].join(' ')}>
                            S Economy Unlikely to Recover as Rapidly as It Collapsed
                        </p>
                        <p className = {[
                            classes.articlesColumns,
                            classes.columnsSummary
                        ].join(' ')}>
                            lawn sign for Bernie Sanders was left in a yard after he ended his…
                        </p>
                        <div className = {[
                            classes.articlesColumns,
                            classes.columnsUrl
                        ].join(' ')}>
                            <a 
                                className = {classes.columnsUrlLink} 
                                href = "https://www.nytimes.com/"
                            >
                                https://www.nytimes.com/2020/04/09/us/politics/biden-sanders-trump…
                            </a>
                        </div>                            
                        <p className = {[
                            classes.articlesColumns,
                            classes.columnsSource
                        ].join(' ')}>
                            The New York Times
                        </p>
                    </div>
                    <div className = {classes.articlesColumn}>
                        <p className = {[
                            classes.articlesColumns,
                            classes.columnsDate
                        ].join(' ')}>
                            01-01-2019
                        </p>
                        <p className = {[
                            classes.articlesColumns,
                            classes.columnsHeadline
                        ].join(' ')}>
                            S Economy Unlikely to Recover as Rapidly as It Collapsed
                        </p>
                        <p className = {[
                            classes.articlesColumns,
                            classes.columnsSummary
                        ].join(' ')}>
                            lawn sign for Bernie Sanders was left in a yard after he ended his…
                        </p>
                        <div className = {[
                            classes.articlesColumns,
                            classes.columnsUrl
                        ].join(' ')}>
                            <a 
                                className = {classes.columnsUrlLink} 
                                href = "https://www.nytimes.com/"
                            >
                                https://www.nytimes.com/2020/04/09/us/politics/biden-sanders-trump…
                            </a>
                        </div>                            
                        <p className = {[
                            classes.articlesColumns,
                            classes.columnsSource
                        ].join(' ')}>
                            The New York Times
                        </p>
                    </div>
                    <div className = {[classes.articlesColumn, classes.greyed].join(' ')}>
                        <p className = {[
                            classes.articlesColumns,
                            classes.columnsDate
                        ].join(' ')}>
                            01-01-2019
                        </p>
                        <p className = {[
                            classes.articlesColumns,
                            classes.columnsHeadline
                        ].join(' ')}>
                            S Economy Unlikely to Recover as Rapidly as It Collapsed
                        </p>
                        <p className = {[
                            classes.articlesColumns,
                            classes.columnsSummary
                        ].join(' ')}>
                            lawn sign for Bernie Sanders was left in a yard after he ended his…
                        </p>
                        <div className = {[
                            classes.articlesColumns,
                            classes.columnsUrl
                        ].join(' ')}>
                            <a 
                                className = {classes.columnsUrlLink} 
                                href = "https://www.nytimes.com/"
                            >
                                https://www.nytimes.com/2020/04/09/us/politics/biden-sanders-trump…
                            </a>
                        </div>                            
                        <p className = {[
                            classes.articlesColumns,
                            classes.columnsSource
                        ].join(' ')}>
                            The New York Times
                        </p>
                    </div>
                </div>                        
                <div className = {classes.contentToggle}>
                    <ul className = {classes.contentToggleList}>
                        <li className = {[
                            classes.contentToggleItem, 
                            classes.selectedItem
                        ].join(' ')}>1</li>
                        <li className = {classes.contentToggleItem}>2</li>
                        <li className = {classes.contentToggleItem}>3</li>
                        <li className = {classes.contentToggleItem}>4</li>
                        <li className = {classes.contentToggleItem}>5</li>
                        <li className = {classes.contentToggleItem}>6</li>
                        <li className = {classes.contentToggleItem}>7</li>
                        <li className = {classes.contentToggleItem}>8</li>
                        <li className = {classes.contentToggleItem}>9</li>
                        <li 
                            className = {classes.contentToggleItem} 
                            style = {{ padding :"2px"}}
                        >10</li>
                        <li className = {classes.contentToggleItem}>&rarr;</li>
                    </ul>
                </div>
                <div className = {classes.contentMainGraph}>
                    <div className = {classes.articlesHeading}>
                        <p className = {classes.articlesHeadingText}>
                            NUMBER OF ARTICLES PUBLISHED FOR “Elections”
                        </p>
                    </div>
                </div>
            </div>
            :<div 
                className = {classes.contentMain}
                style = {{alignItems: 'center'}}
            >
                <div className= {classes.contentMainHeadline}>
                    <p className = {classes.contentMainHeadlineText}>
                        Search for breaking news from across the world, across the times.
                    </p>
                </div>
                <div className = {classes.contentMainPlaceholder}>
                    <img 
                        src       = "assets/images/undraw-treasure.svg" 
                        className = {classes.contentPlaceholderImg}
                        alt       = "Placeholder Logo"
                    />
                </div>
            </div>
            }
        </div>
    </div>
    )
}

export default Dashboard;