import React, { useEffect }   from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classes from './Articles.css';

const Articles = (props) => {

    const searchedQuery = useSelector(store => store.articleSearch.searchQuery); 
    const articles      = useSelector(store => store.articleSearch.articles);

    let content = null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    if(articles.length === 0){
        content = (
            <div 
                className = {classes.contentMain}
                style = {{alignItems: 'center'}}
            >
                <div className= {classes.contentMainHeadline}>
                    <p className = {classes.contentMainHeadlineText}>
                        We can't seem to find any searched articles yet. Check out our <NavLink 
                            to = '/home' 
                            style = {{color: 'var( --color-item-selected-sidebar)'}}
                        >'Dashboard.'
                        </NavLink>
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
        )
    }else{
        content = (
            <div>
                <p className = {classes.contentHeadingText}>
                    Articles on <span className = {classes.Bold}>"{searchedQuery}"</span> brought to you by <span className = {classes.Bold}>NYTimes.com</span>...
                </p>
                <div className = {classes.cardContainer}>
                {
                    articles.map((article, index) => {
                        let returnedArticle = null;

                        let imgURL = "assets/images/logo-placeholder.png";
                        if(article.multimedia.length > 0) 
                            imgURL = 'http://nytimes.com/' + article.multimedia[0].url;

                        if(index < 9)
                            returnedArticle = (
                                <div className = {classes.card} key = {index}>
                                <div 
                                    className = {[
                                        classes.cardSide, 
                                        classes.cardSideFront].join(' ')
                                    }
                                >
                                    <img 
                                        alt   = ""
                                        src   = {imgURL}
                                        style = {{
                                            width: '100%',
                                            height: '50%'
                                        }}
                                    />
                                    <span className = {classes.headline}>
                                        {article.headline.main}
                                    </span>
                                    <span className = {classes.byline}>
                                        {article.byline.original}
                                    </span>
                                    <span className = {classes.abstract}>
                                        {article.abstract.substring(0, 175)}...
                                    </span>
                                </div>
                                <div 
                                    className = {[
                                        classes.cardSide, 
                                        classes.cardSideBack].join(' ')
                                    }
                                >
                                    <a 
                                        href      = {article.web_url}
                                        className = {classes.Link}
                                        target    = "_blank"
                                        rel       = "noopener"
                                    >Read More</a>
                                </div>
                            </div>
                            )
                        return returnedArticle;    
                    })
                }
                </div>
            </div>
        );
    }

    return (
        <div className = {classes.layoutContent}>
            {content}
        </div>
    )
}

export default Articles;