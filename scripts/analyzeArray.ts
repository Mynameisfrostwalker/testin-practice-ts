const analyzeArray = (arr: number[]) => {
    if (arr.length === 0) {
        return null;
    }
    const sortedArr = arr.sort((a, b) => a - b);
    const average = sortedArr.reduce((acc, curr) => acc + curr, 0) / sortedArr.length;
    return {
        average,
        min: sortedArr[0],
        max: sortedArr[sortedArr.length - 1],
        length: sortedArr.length
    }
}

export default analyzeArray;
