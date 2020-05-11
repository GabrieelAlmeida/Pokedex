import React, {useState} from  'react';

import '../Types/style.css';

const Type = ({title, color}) =>(
    title.map(types =>(
        <div className='types'><p id='type' style={{background:color}}>{types}</p></div>
    ))


);

export default Type;