import React from 'react';

function Body() {
    return (
        <main className="container mx-auto p-4">
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Latest Posts</h2>
                <article className="bg-white p-6 rounded shadow-md mb-4">
                    <h3 className="text-xl font-bold">Lyman's Law and Rendaku in Japanese</h3>
                    <p className="mt-2 text-gray-700">An in-depth exploration of Lyman's Law and its effects on rendaku in Japanese linguistics.</p>
                </article>
                {/* More articles can go here */}
            </section>
        </main>
    );
}

export default Body;
