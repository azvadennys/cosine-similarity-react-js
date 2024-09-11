// cosineSimilarity.js
export function textToVector(text) {
    const words = text.toLowerCase().split(/\W+/); // Pisahkan teks ke dalam kata
    const frequencyMap = {};

    words.forEach(word => {
        if (word) {
            frequencyMap[word] = (frequencyMap[word] || 0) + 1;
        }
    });

    return frequencyMap;
}

export function cosineSimilarity(vectorA, vectorB) {
    const uniqueWords = new Set([...Object.keys(vectorA), ...Object.keys(vectorB)]);

    let dotProduct = 0;
    let magnitudeA = 0;
    let magnitudeB = 0;

    uniqueWords.forEach(word => {
        const aVal = vectorA[word] || 0;
        const bVal = vectorB[word] || 0;

        dotProduct += aVal * bVal;
        magnitudeA += aVal * aVal;
        magnitudeB += bVal * bVal;
    });

    magnitudeA = Math.sqrt(magnitudeA);
    magnitudeB = Math.sqrt(magnitudeB);

    return {
        dotProduct,
        magnitudeA,
        magnitudeB,
        similarity: magnitudeA && magnitudeB ? dotProduct / (magnitudeA * magnitudeB) : 0,
    };
}
