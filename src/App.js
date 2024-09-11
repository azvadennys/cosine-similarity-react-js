// App.js
import React, { useState } from 'react';
import { textToVector, cosineSimilarity } from './cosineSimilarity';

function App() {
    const [textA, setTextA] = useState('');
    const [textB, setTextB] = useState('');
    const [result, setResult] = useState(null);

    const handleCalculate = () => {
        const vectorA = textToVector(textA);
        const vectorB = textToVector(textB);

        const similarityResult = cosineSimilarity(vectorA, vectorB);
        setResult(similarityResult);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
            <h1>Cosine Similarity Calculator (Text)</h1>
            <div style={{ marginBottom: '20px' }}>
                <label>Text A:</label>
                <textarea
                    value={textA}
                    onChange={(e) => setTextA(e.target.value)}
                    placeholder="Enter first text"
                    style={{ width: '100%', padding: '10px', marginTop: '10px', height: '100px' }}
                />
            </div>
            <div style={{ marginBottom: '20px' }}>
                <label>Text B:</label>
                <textarea
                    value={textB}
                    onChange={(e) => setTextB(e.target.value)}
                    placeholder="Enter second text"
                    style={{ width: '100%', padding: '10px', marginTop: '10px', height: '100px' }}
                />
            </div>
            <button onClick={handleCalculate} style={{ padding: '10px 20px' }}>Calculate</button>

            {result && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Calculation Details:</h3>
                    <p><strong>Dot Product:</strong> {result.dotProduct}</p>
                    <p><strong>Magnitude of Text A:</strong> {result.magnitudeA}</p>
                    <p><strong>Magnitude of Text B:</strong> {result.magnitudeB}</p>
                    <p><strong>Cosine Similarity:</strong> {result.similarity}</p>
                </div>
            )}
        </div>
    );
}

export default App;
