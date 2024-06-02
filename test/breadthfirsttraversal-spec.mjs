import { expect } from 'chai';
import { breadthFirstTraversal } from '../problems/breadthfirsttraversal.mjs';


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

describe('breadthFirstTraversal', () => {
    it('should return an array in the correct order', () => {
        const result = breadthFirstTraversal(startingNode, graphData);
        const expected = ['SF', 'LA', 'SEA', 'NY', 'CHI', 'MIA', 'DEN', 'DAL', 'ATL'];
        expect(result).to.eql(expected);
    })
})