import React, { useState } from 'react';
import './ShowAll.css';
import image1 from '../../../../assets/image/Pictures/Blogs/23.jpg'
import image2 from '../../../../assets/image/Pictures/Blogs/HotSone.jpg';
import data from '../../../../Utilies/showAll.json';

const ShowAll = () => {
    const [hairStyle, setHairStyle] = useState(data.hairStyle);
    console.log('hair style', hairStyle);
    const [color, setColor] = useState(data.coloring);
    console.log('hair color  :', color);
    const [products, setProducts] = useState(data.hairProducts);
    console.log('hair products', products);

    const allData = hairStyle.concat(color, products);
    console.log('all data showing', allData);

    const [showAllData, setShowAllData] = useState(allData);

    const imageHandle =() =>{
        console.log('see more pic');
    }


    return (
        <div className='showAllPort'>
            <div className="headAllPort">
                <div className="bodyAllPort">

                    {
                        showAllData.slice(0, 9 ).map((dataInfo) =>{
                            return(

                                <div className="imgAll">
                                <img src= {dataInfo.image} alt=""  className="image" />
                                <div className="overlay">
                                    <div className="text">
                                        <h1 className='hell'>{dataInfo.name}</h1>
                                        <h1 className='hell'>{dataInfo.description}</h1>
                                    </div>
                                </div>
                            </div>
                                
                            )
                        })
                    }

                   <div className="areaBtn">
                    <button className='areaButton' onClick={imageHandle}>
                        Load more
                    </button>
                    </div> 

                </div>
            </div>

        </div>
    );
};

export default ShowAll;