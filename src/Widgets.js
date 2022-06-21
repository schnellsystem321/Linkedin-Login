import React from 'react'
import "./Widgets.css"
import InfoIcon from '@material-ui/icons/Info';
// import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecordIcon";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widgets_articleLeft">

           < FiberManualRecordIcon/>
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
        );
    return (
        <div className='widgets'>
            <div className="widgets_header">
                <h2>Linked News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Article one is here",'Top news -9099 redaers')}
            {newsArticle("Article two is here",'Top news -7456 redaers')}
            {newsArticle(" Article three is here ",'Top news -7456 redaers')}
            {/* {newsArticle("Article one is here",'linkedin')} */}
        </div>
    );
}

export default Widgets;
