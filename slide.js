export const calculateSum = (layers, nextIndex) => {
    return layers.reduce((accumulator, layer, layerIndex) => {
        let acc = accumulator;
        if (layerIndex == 0) {
            console.log(layer[layerIndex])
            acc += layer[layerIndex];
            nextIndex = findSmallestIndex(layers[layerIndex+1])
        } else {
            console.log(layer[nextIndex])
            acc += layer[nextIndex];
            if (layerIndex < layers.length-1) {
                nextIndex = getSmallestAdjacentNode( nextIndex, layers[layerIndex + 1]);
            } 
        }
        return acc;
    }, 0)
}

export const findSmallestIndex = arr => {
    const smallest = arr.map(value => value).sort()[0];
    return arr.indexOf(smallest);
}

export const getSmallestAdjacentNode = (index, adjacentLayer) => {
    const adjacentNodes = [adjacentLayer[index], adjacentLayer[index+1]];
    return adjacentLayer.indexOf(Math.min(...adjacentNodes));
}
