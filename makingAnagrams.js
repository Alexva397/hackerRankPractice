

function makingAnagrams(a, b) {
    const largerString = a.length >= b.length ? a : b;
    const smallerString = a.length < b.length ? a : b;

    const stored = {}
    let counter = 0;
    for (const letter of largerString) {
        stored[letter] = (stored[letter] || 0) + 1;
    }
    for (const letter of smallerString) {
        if (stored[letter] && stored[letter] > 0) {
            stored[letter]--
            counter++
        }
    }
    const smallerDiff = (smallerString.length - counter)
    const largerDiff = (largerString.length - smallerString.length)
    console.log((2 * smallerDiff) + largerDiff)
    return (2 * smallerDiff) + largerDiff;


}




makingAnagrams('abc', 'cde')