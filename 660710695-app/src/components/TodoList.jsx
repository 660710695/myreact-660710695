import React from 'react';

const TodoList = () => {
    // ข้อมูลที่จะแสดง
    const todos = [
        { id: 1, text: 'Review lecture notes', completed: true },
        { id: 2, text: 'Review Go language code', completed: true },
        { id: 3, text: 'Practice Go language coding', completed: false },
        { id: 4, text: 'Complete pending assignments', completed: true },
        { id: 5, text: 'Read Go documentation', completed: false },
        { id: 6, text: 'Work on a coding project', completed: false },
        { id: 7, text: 'Plan study schedule', completed: false }
    ];
    
    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;
    const percentage = Math.round((completedCount / totalCount) * 100);
    
    return (
        <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px' }}>
            <h3>To do list</h3>
            
            {/* Progress Bar */}
            <div style={{
                backgroundColor: '#ffffffff',
                borderRadius: '20px',
                border: '1px solid #333',
                padding: '3px',
                margin: '15px 0'
            }}>
                <div style={{
                    backgroundColor: '#e28e5eff',
                    width: `${percentage}%`,
                    textAlign: 'center',
                    borderRadius: '17px',
                    border: '1px solid #333',
                    padding: '8px 0',
                    color: 'white',
                    fontWeight: 'bold',
                    transition: 'width 0.3s ease'
                }}>
                    {percentage}%
                </div>
            </div>
            
            {/* Todo Items */}
            <div style={{ margin: '20px 0' }}>
                {todos.map(todo => (
                    <div 
                        key={todo.id}
                        style={{
                            padding: '12px',
                            margin: '8px 0',
                            borderRadius: '8px',
                            border: '1px solid #333',
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: todo.completed ? '#f1cfbcff' : '#fff',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        <span style={{ marginRight: '12px', fontSize: '18px' }}>
                            {todo.completed ? '✅' : '⬜'}
                        </span>
                        <span style={{
                            flex: 1,
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            color: todo.completed ? '#888' : '#333'
                        }}>
                            {todo.text}
                        </span>
                    </div>
                ))}
            </div>
            
            {/* Summary */}
            <div style={{
                marginTop: '20px',
                textAlign: 'center',
                padding: '15px',
                background: '#e28e5eff',
                color: 'white',
                borderRadius: '8px',
                border: '1px solid #333',
                fontWeight: 'bold'
            }}>
                สำเร็จ {completedCount} จาก {totalCount} รายการ
            </div>
        </div>
    );
};

export default TodoList;