import React from 'react';
import UserCard from './UserCard';
import TodoList from './TodoList';

function ComponentExamples() {
    return (
        <div style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>

            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '2px solid #333',
                borderRadius: '8px',
                backgroundColor: '#e69bc9ff'
            }}>
                {/* <h2 style={{ color: '#333', marginBottom: '20px' }}>
                    User card
                </h2> */}
                <UserCard />
            </section>
            
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '2px solid #333',
                borderRadius: '8px',
                backgroundColor: '#e69bc9ff'
            }}>
                <TodoList />
            </section>
        </div>
    );
}

export default ComponentExamples;