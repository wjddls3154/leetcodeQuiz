/*
◎
문제에서 이중 배열(image)과, 시작점이 되는 row(= sr)와 column(= sc) 위치, 
새로운 색상(= newColor)이 주어진다.
문제에서 제공하는 시작 위치의 값과, 시작 위치를 기준으로 4방향에 존재하는 요소의 값이 동일하다면, 해당 요소의 값을 newColor로 대체하는 것이 문제의 핵심이다.
 */

const floodFill = (image, sr, sc, newColor, oldColor = image[sr][sc]) => {
    if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[sr].length || image[sr][sc] !== oldColor || image[sr][sc] === newColor)   {
        return image; 
    }
    
    image[sr][sc] = newColor;
    
    floodFill(image, sr + 1, sc, newColor, oldColor);
    floodFill(image, sr - 1, sc, newColor, oldColor);
    floodFill(image, sr, sc + 1, newColor, oldColor);
    floodFill(image, sr, sc - 1, newColor, oldColor);
    
    return image;
};
