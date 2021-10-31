import React from 'react';
import GideCards from './GideCards';

const Gides = () => {
    const gides = [
        {id:'12',name:'Dany Bailey',skill:"Software Engineer",image:'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80'},
        {id:'14',name:'Dany Bailey',skill:"Software Engineer",image:'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80'},
        {id:'16',name:'Dany Bailey',skill:"Software Engineer",image:'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80'},
        {id:'17',name:'Dany Bailey',skill:"Software Engineer",image:'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80'},
        {id:'21',name:'Dany Bailey',skill:"Software Engineer",image:'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80'},
        {id:'23',name:'Dany Bailey',skill:"Software Engineer",image:'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80'}
       
    ]
    return (
        <div>
            <div className="w-full bg-gray-600">
                <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                    <div className="text-center pb-12">
                        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
                            Check our awesome team memwhite
                        </h1>
                    </div>
                       
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                   
                        {
                            gides.map(gide=> <GideCards key={gide.id} gidedata={gide} />)
                     }
                    </div>
                </section>
                  
                    
            </div>
        </div>
    );
};

export default Gides;