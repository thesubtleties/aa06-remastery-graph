import { expect } from 'chai';
import { depthFirstTraversal } from '../problems/depthfirsttraversal.mjs'


const graphData = [
    { city: 'NY', flights: ['LA', 'CHI', 'MIA'] },
    { city: 'LA', flights: ['NY', 'SF', 'SEA'] },
    { city: 'CHI', flights: ['NY', 'DEN', 'DAL'] },
    { city: 'MIA', flights: ['NY', 'DAL', 'ATL'] },
    { city: 'SF', flights: ['LA', 'SEA'] },
    { city: 'SEA', flights: ['LA', 'SF'] },
    { city: 'DEN', flights: ['CHI', 'DAL'] },
    { city: 'DAL', flights: ['CHI', 'MIA', 'DEN'] },
    { city: 'ATL', flights: ['MIA'] }
];
const startingNode = 'SF';

describe('depthFirstTraversal', () => {
    it('should return an array in the correct order', () => {
        const result = depthFirstTraversal(startingNode, graphData);
        const expected = ['SF', 'LA', 'NY', 'CHI', 'DEN', 'DAL', 'MIA', 'ATL', 'SEA'];
        expect(result).to.eql(expected);
    })
})