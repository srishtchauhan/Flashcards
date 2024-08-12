

// import React, { useState, useEffect } from 'react';

// const TodoComponent = () => {
//     const [todo, setTodo] = useState(null);
//     const [page, setPage] = useState(1);
//     const [showTitle, setShowTitle] = useState(true); // Show title initially

//     useEffect(() => {
//         fetchTodo();
//     }, [page]);

//     const fetchTodo = async () => {
//         try {
//             const response = await fetch(`http://localhost:5000/getData?page=${page}&limit=1`);
//             const data = await response.json();
//             if (data.todos.length > 0) {
//                 setTodo(data.todos[0]); // Since we're fetching 1 todo per page, grab the first item
//             }
//         } catch (error) {
//             console.error("Error fetching todo:", error);
//         }
//     };

//     const handleNext = () => {
//         setPage(prevPage => prevPage + 1);
//         setShowTitle(true); // Reset to show title when fetching new todo
//     };

//     const handlePrev = () => {
//         if (page > 1) {
//             setPage(prevPage => prevPage - 1);
//             setShowTitle(true); // Reset to show title when fetching new todo
//         }
//     };

//     const toggleContent = () => {
//         setShowTitle(prev => !prev); // Toggle between showing title and description
//     };

//     return (
//         <div className="todo-container">
//             {todo ? (
//                 <div className="todo-card">
//                     {showTitle ? (
//                         <h2>{todo.title}</h2>
//                     ) : (
//                         <p>{todo.description}</p>
//                     )}
//                     <button onClick={toggleContent}>
//                         {showTitle ? "Show answer" : "Show question"}
//                     </button>
//                     <div className="pagination-controls">
//                         <button onClick={handlePrev} disabled={page === 1}>Previous</button>
//                         <button onClick={handleNext}>Next</button>
//                     </div>
//                 </div>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// };

// export default TodoComponent;



//*****************************************tailwind************************************************8 */
// import React, { useState, useEffect } from 'react';

// const TodoComponent = () => {
//     const [todo, setTodo] = useState(null);
//     const [page, setPage] = useState(1);
//     const [showTitle, setShowTitle] = useState(true); // Show title initially

//     useEffect(() => {
//         fetchTodo();
//     }, [page]);

//     const fetchTodo = async () => {
//         try {
//             const response = await fetch(`http://localhost:5000/getData?page=${page}&limit=1`);
//             const data = await response.json();
//             if (data.todos.length > 0) {
//                 setTodo(data.todos[0]); // Since we're fetching 1 todo per page, grab the first item
//             }
//         } catch (error) {
//             console.error("Error fetching todo:", error);
//         }
//     };

//     const handleNext = () => {
//         setPage(prevPage => prevPage + 1);
//         setShowTitle(true); // Reset to show title when fetching new todo
//     };

//     const handlePrev = () => {
//         if (page > 1) {
//             setPage(prevPage => prevPage - 1);
//             setShowTitle(true); // Reset to show title when fetching new todo
//         }
//     };

//     const toggleContent = () => {
//         setShowTitle(prev => !prev); // Toggle between showing title and description
//     };

//     return (
//         <div className="flex flex-col items-center p-6 space-y-6 bg-gray-100 min-h-screen">
//             {todo ? (
//                 <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
//                     <div className="p-6">
//                         <div className="text-center">
//                             {showTitle ? (
//                                 <h2 className="text-2xl font-semibold text-gray-800 mb-4">{todo.title}</h2>
//                             ) : (
//                                 <p className="text-lg text-gray-600">{todo.description}</p>
//                             )}
//                             <button
//                                 onClick={toggleContent}
//                                 className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
//                             >
//                                 {showTitle ? "Show Description" : "Show Title"}
//                             </button>
//                         </div>
//                         <div className="mt-6 flex justify-between">
//                             <button
//                                 onClick={handlePrev}
//                                 disabled={page === 1}
//                                 className="px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md disabled:opacity-50"
//                             >
//                                 Previous
//                             </button>
//                             <button
//                                 onClick={handleNext}
//                                 className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
//                             >
//                                 Next
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             ) : (
//                 <p className="text-lg text-gray-700">Loading...</p>
//             )}
//         </div>
//     );
// };

// export default TodoComponent;





// //******************************************tailwind 2**************************************************************** */
// import React, { useState, useEffect } from 'react';

// const TodoComponent = () => {
//     const [todo, setTodo] = useState(null);
//     const [page, setPage] = useState(1);
//     const [showTitle, setShowTitle] = useState(true); // Show title initially

//     useEffect(() => {
//         fetchTodo();
//     }, [page]);

//     const fetchTodo = async () => {
//         try {
//             const response = await fetch(`http://localhost:5000/getData?page=${page}&limit=1`);
//             const data = await response.json();
//             if (data.todos.length > 0) {
//                 setTodo(data.todos[0]); // Since we're fetching 1 todo per page, grab the first item
//             }
//         } catch (error) {
//             console.error("Error fetching todo:", error);
//         }
//     };

//     const handleNext = () => {
//         setPage(prevPage => prevPage + 1);
//         setShowTitle(true); // Reset to show title when fetching new todo
//     };

//     const handlePrev = () => {
//         if (page > 1) {
//             setPage(prevPage => prevPage - 1);
//             setShowTitle(true); // Reset to show title when fetching new todo
//         }
//     };

//     const toggleContent = () => {
//         setShowTitle(prev => !prev); // Toggle between showing title and description
//     };

//     return (
//         <div className="flex flex-col items-center p-8 space-y-8 bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen">
//             {todo ? (
//                 <div className="max-w-md w-full bg-white shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105">
//                     <div className="p-8">
//                         <div className="text-center">
//                             {showTitle ? (
//                                 <h2 className="text-3xl font-bold text-indigo-700 mb-6">{todo.title}</h2>
//                             ) : (
//                                 <p className="text-xl text-gray-700">{todo.description}</p>
//                             )}
//                             <button
//                                 onClick={toggleContent}
//                                 className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition duration-300"
//                             >
//                                 {showTitle ? "Show Description" : "Show Title"}
//                             </button>
//                         </div>
//                         <div className="mt-8 flex justify-between">
//                             <button
//                                 onClick={handlePrev}
//                                 disabled={page === 1}
//                                 className="px-6 py-3 bg-gray-400 text-gray-800 font-semibold rounded-full shadow-md disabled:opacity-50 hover:bg-gray-500 transition duration-300"
//                             >
//                                 Previous
//                             </button>
//                             <button
//                                 onClick={handleNext}
//                                 className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition duration-300"
//                             >
//                                 Next
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             ) : (
//                 <p className="text-xl text-gray-800">Loading...</p>
//             )}
//         </div>
//     );
// };

// export default TodoComponent;




//**************************************TAILWIND-3************************************************ */
import React, { useState, useEffect } from 'react';

const TodoComponent = () => {
    const [todo, setTodo] = useState(null);
    const [page, setPage] = useState(1);
    const [showTitle, setShowTitle] = useState(true);
    const [isFlipping, setIsFlipping] = useState(false); // State to handle the flip animation

    useEffect(() => {
        fetchTodo();
    }, [page]);

    const fetchTodo = async () => {
        try {
            const response = await fetch(`https://flashcards-id03.onrender.com/get_data?page=${page}&limit=1`);
            const data = await response.json();
            if (data.todos.length > 0) {
                setTodo(data.todos[0]);
            }
        } catch (error) {
            console.error("Error fetching todo:", error);
        }
    };

    const handleNext = () => {
        setPage(prevPage => prevPage + 1);
        setShowTitle(true);
    };

    const handlePrev = () => {
        if (page > 1) {
            setPage(prevPage => prevPage - 1);
            setShowTitle(true);
        }
    };

    const toggleContent = () => {
        setIsFlipping(true);
        setTimeout(() => {
            setShowTitle(prev => !prev);
            setIsFlipping(false);
        }, 300); // Adjust timing to match the animation duration
    };

    return (
        <div className="flex flex-col items-center p-8 space-y-8 bg-gray-300 min-h-screen">
            {todo ? (
                <div
                    className={`max-w-md w-full bg-blue-50 shadow-xl rounded-lg overflow-hidden transform transition-transform duration-500 ${
                        isFlipping ? 'rotate-y-180' : ''
                    }`}
                >
                    <div className="p-8">
                        <div className="text-center">
                            {showTitle ? (
                                <h2 className="text-3xl font-bold text-blue-800 mb-6">{todo.title}</h2>
                            ) : (
                                <p className="text-xl text-gray-700">{todo.description}</p>
                            )}
                            <button
                                onClick={toggleContent}
                                className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-400 transition duration-300"
                            >
                                {showTitle ? "Show Description" : "Show Title"}
                            </button>
                        </div>
                        <div className="mt-8 flex justify-between">
                            <button
                                onClick={handlePrev}
                                disabled={page === 1}
                                className="px-6 py-3 bg-blue-800 text-white font-semibold rounded-full shadow-lg disabled:opacity-50 hover:bg-blue-700 transition duration-300"
                            >
                                Previous
                            </button>
                            <button
                                onClick={handleNext}
                                className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-xl text-gray-800">Loading...</p>
            )}
        </div>
    );
};

export default TodoComponent;
