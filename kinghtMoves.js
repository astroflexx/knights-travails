function knightMoves(source, dest) {

    // up left, up right, down left, down right, left up, left down, right up, right down

    let dx = [-2, -2, 2, 2, -1, 1, -1, 1];
    let dy = [-1, 1, -1, 1, -2, -2, 2, 2];

    let visited = Array(8).fill().map(() => Array(8).fill(false));

    let [sx, sy] = source;
    let [destx, desty] = dest;

    let q = [];
    q.push([sx, sy]);

    visited[sx][sy] = true;

    let prev = Array(8).fill().map(() => Array(8));

    prev[sx][sy] = [-1, -1];

    while (q.length > 0) {
        let [x, y] = q[0];
        q.shift(1);

        if (x === destx && y === desty) {
            let path = [[destx, desty]];

            let [prevx, prevy] = prev[destx][desty];

            while (prevx !== -1) {
                path.push([prevx, prevy]);
                [prevx, prevy] = prev[prevx][prevy];
            }

            path.reverse();

            console.log(`You made it in ${path.length - 1} moves! Here's your path:`);

            for (let cell of path) {
                console.log(`[${cell[0]}, ${cell[1]}]`);
            }

            return;
        }

        for (let i = 0; i < 8; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];

            if (nx >= 0 && nx < 8 && ny >= 0 && ny < 8 && !visited[nx][ny]) {
                q.push([nx, ny]);
                visited[nx][ny] = true;
                prev[nx][ny] = [x, y];
            }
        }
    }
}

export default knightMoves;