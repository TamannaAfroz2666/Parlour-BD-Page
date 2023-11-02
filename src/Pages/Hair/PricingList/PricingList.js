import React from 'react';
import './PricingList.css'

const PricingList = () => {
    return (
        <div className='pricingListPage'>
            <div className="listPrice">
                <h1 className='priceListTitle'>Pricing list</h1>
            </div>
            <div className="listInfoPrice">
                <div className="hairCutContents">
                    <div className="nameCutting">
                        <h3 className='cutTitle'>Women's hair cut</h3>
                    </div>
                    <div className="cutLine">
                        <hr className='cutLineHr'/>
                    </div>
                    <div className="cuttingPrice">
                        <p>tk 1200</p>
                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default PricingList;