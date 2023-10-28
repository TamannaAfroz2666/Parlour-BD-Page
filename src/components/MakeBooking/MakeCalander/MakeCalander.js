import React from 'react';
import './MakeCalander.css';
import { useState } from 'react';

const MakeCalander = () => {
    // const calendarInput = document.querySelector(".calendar-input");
    const calendarWidget = document.querySelector(".calendar-widget");

    // calendarInput.addEventListener("click", function () {
    //   calendarWidget.style.display = "block";
    // });

    // Hide the calendar widget when clicking outside of it
    // document.addEventListener("click", function (event) {
    //   if (!calendarWidget.contains(event.target) && event.target !== calendarInput) {
    //     calendarWidget.style.display = "none";
    //   }
    // });
    // var isCalender;
    const [isCalander, setIsCalander] = useState(false);
    const [storeData, setStoreData] = useState('');
    const makeDate =() =>{
        const calendarWidget = document.getElementById("calendar-widget");
        // const valueIs = 

        // calendarWidget.style.display = "block";
        setIsCalander(true);
        if(isCalander){
            console.log('value', calendarWidget);
            
        }

    }
    
    // calendarWidget.style.display = "none";

    return (
        <div className='calander'>
            <div className="caladrerHead">
                <div class="custom-dropdown">
                    <input type="text" class="calendar-input" placeholder="Select a date" onClick={makeDate} value={storeData} />
                        <div class="calendar-widget">
                            {/* <!-- Calendar widget content goes here --> */}
                            <input type="date" onChange={e => setStoreData(e.target.value)} id="datepicker" style={{ display: isCalander ? 'block' : 'none' }}/>
                        </div>
                </div>



            </div>

        </div>
    );
};

export default MakeCalander;