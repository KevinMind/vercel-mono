import * as React from 'react';

export default function Container({ children }) {
    return (
        <main className="container mx-auto max-w-md">
            <h1 className="my-4 text-5xl font-thin text-center">
                todos
            </h1>
            <div className="text-center mb-2">
                Styled with Tailwind.css
            </div>
            <div className="container mx-auto shadow-lg">
                {children}
            </div>
            <div className="text-center mt-2 pt-4">
                Visit <a href={process.env.NEXT_PUBLIC_APP_TWO_HREF} className="text-blue-300">App Two</a>
            </div>
        </main>
    );
}