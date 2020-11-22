import React, { useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ReactApexChart from 'react-apexcharts'

import classes      from './Analytics.css';
import * as actions from '../../../Store/actions/analytics';
import Spinner      from '../../CommonComponents/Spinner/Spinner';

const Analytics = (props) => {

    const dispatch      = useDispatch();
    const searchedQuery = useSelector(store => store.articleSearch.searchQuery); 
    const analytics     = useSelector(store => store.analytics.analytics);
    const isLoading     = useSelector(store => store.analytics.detailedAnalyticsLoader);

    const source   = useSelector(store => store.analytics.analyticsSource);
    const material = useSelector(store => store.analytics.analyticsMaterial);
    const document = useSelector(store => store.analytics.analyticsDocument);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const fetchAnalytics = useCallback(() => {
        if(searchedQuery && source.length === 0 && material.length === 0 && document.length === 0){
            dispatch(actions.analyticsDetail(searchedQuery, 'source'));
            dispatch(actions.analyticsDetail(searchedQuery, 'news_desk'));
            dispatch(actions.analyticsDetail(searchedQuery, 'document_type'));
        }
    }, [searchedQuery,actions.analyticsDetail])

    useEffect(() => {
        fetchAnalytics();
    }, [analytics]);


    let content = null;

    if(!searchedQuery)
    content = (
        <div 
            className = {classes.contentMain}
            style = {{alignItems: 'center'}}
        >
            <img 
                className = {classes.drawerLogo}
                src       = "assets/images/icons-menu.png" 
                alt       = "Side Drawer" 
                onClick   = {props.toggleSidebar}
            />
            <div className= {classes.contentMainHeadline}>
                <p className = {classes.contentMainHeadlineText}>
                    We can't seem to find any searches yet. Check out our <NavLink 
                    to = '/home' style = {{color: 'var( --color-item-selected-sidebar)'}}>'Dashboard.'
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
    );

    if(searchedQuery)
        content = (
            <div style = {{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                <div style = {{display: 'flex', width: '100%'}}>
                    <img 
                        className = {classes.drawerLogo}
                        src       = "assets/images/icons-menu.png" 
                        alt       = "Side Drawer" 
                        onClick   = {props.toggleSidebar}
                    />
                    <p className = {classes.contentHeadingText}>
                    Analytics on the topic of <span className = {classes.Bold}>"{searchedQuery}"</span>, brought to you by <span className = {classes.Bold}>NYTimes.com</span>...
                    </p>
                </div>
            </div>
        )

    let mainContent = null;
    
    if(source.length !== 0 && material.length !== 0 && document.length !== 0)
      mainContent = (
        <div className = {classes.GraphContainer}>
            <div style = {{marginBottom: '3rem'}}>
                <div className = {classes.contentMainGraph}>
                    <p className = {classes.articlesHeadingText}>
                        SOURCES THAT WROTE ABOUT “{searchedQuery}.”
                    </p>
                    <ReactApexChart 
                        series  = {source.map(source => source.count)}
                        options = {{
                            chart: {
                                width: 600,
                                type: 'pie',
                            },
                            labels: source.map(source => source.term),
                            responsive: [{
                                breakpoint: 500,
                                options: {
                                    chart: {
                                        width: 380,
                                        height: 300
                                    },
                                    legend: {
                                        position: 'bottom'
                                    }
                                }   
                            }]
                        }}
                        type   = "pie" 
                        width  = {600}
                    />
                </div>
            </div>
            <div style = {{marginBottom: '3rem'}}>
                <div className = {classes.contentMainGraph}>
                    <p className = {classes.articlesHeadingText}>
                       NEWS SECTIONS WHICH MENTIONED “{searchedQuery}."
                    </p>
                    <ReactApexChart 
                        options = {{
                            chart: {
                                height: 390,
                                type: 'radialBar',
                            },
                            plotOptions: {
                                radialBar: {
                                    offsetY: 0,
                                    startAngle: 0,
                                    endAngle: 270,
                                    hollow: {
                                        margin: 5,
                                        size: '30%',
                                        background: 'transparent',
                                        image: undefined,
                                    },
                                    dataLabels: {
                                        name: {
                                            show: false,
                                        },
                                        value: {
                                            show: false,
                                        }
                                    }
                                }
                            },
                            colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
                            labels: material.map(source => source.term) ,
                            legend: {
                                show: true,
                                floating: true,
                                fontSize: '13px',
                                position: 'left',
                                offsetX: 100,
                                offsetY: 0,
                                labels: {
                                  useSeriesColors: true,
                                },
                                markers: {
                                  width: 0,
                                  height: 0
                                },
                                formatter: function(seriesName, opts) {
                                  return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                                },
                                itemMargin: {
                                  vertical: 0
                                }
                            },
                            responsive: [{
                                breakpoint: 500,
                                options: {
                                    chart: {
                                        width: 300,
                                        height: 300
                                    },
                                    legend: {
                                      show: true,
                                      offsetX: 0,
                                      offsetY: 0,
                                      fontSize: '10px',
                                    }
                                }
                            }]
                        }} 
                        series  = {material.map(source => source.count)} 
                        type    = "radialBar" 
                        height  = {400} 
                        width   = {600}
                    />
                </div>
            </div>
            <div style = {{marginBottom: '3rem'}}>
                <div className = {classes.contentMainGraph}>
                    <p className = {classes.articlesHeadingText}>
                        SUBJECT CONTENT ON “{searchedQuery}."
                    </p>
                    <ReactApexChart 
                        options = {{
                          chart: {
                            type: 'donut',
                          },
                          labels: document.map(document => document.term),
                          responsive: [{
                            breakpoint: 500,
                            options: {
                                chart: {
                                    width: 400,
                                    height: 325
                                },
                                labels: document.map(document => document.term),
                                legend: {
                                    position: 'bottom'
                                }
                            }
                          }]
                        }} 
                        series  = {document.map(document => document.count)} 
                        type    = "donut" 
                        width   = {550}
                    />
                </div>               
            </div>
        </div>
    );

    return (
        <div className = {classes.layoutContent}>
            {content}
            {
                isLoading 
                ? <Spinner />
                : mainContent
            }
        </div>
    )
}

export default Analytics;