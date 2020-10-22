import React from 'react';
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component'

//First outermost container
const HomePage = () => (
    <div className='homepage'>
        <Directory/>
    </div>
)

export default HomePage;