import React from 'react';
import { text } from '@/app/utils/data';
import Header from '@/app/components/header/header';
import { styles } from './projectsStyles';
import Card from '@/app/components/card/card';

export default function Projects() {
    return (
        <div style={styles.container}>
            <Header title={text.projects.title} />
            <div className='row'>
                {
                    text.projects.list.map((project, index) => (
                        <div key={index} className='col-lg-4 col-md-6'>
                            <Card key={index} project={project} />
                        </div>

                    ))
                }
            </div>
        </div>
    )
}
