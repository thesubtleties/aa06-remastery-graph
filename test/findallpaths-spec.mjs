import { expect } from 'chai';
import { findAllPaths } from '../problems/findallpaths.mjs';


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
const endingNode = 'DAL'

describe('findAllPaths', () => {
    it('should return an array of all paths from starting city to ending city with no cycles', () => {
        const result = findAllPaths(startingNode, endingNode, graphData);
        const expected = [
            [ 'SF', 'LA', 'NY', 'CHI', 'DAL' ],
            [ 'SF', 'LA', 'NY', 'MIA', 'DAL' ],
            [ 'SF', 'LA', 'NY', 'CHI', 'DEN', 'DAL' ],
            [ 'SF', 'SEA', 'LA', 'NY', 'CHI', 'DAL' ],
            [ 'SF', 'SEA', 'LA', 'NY', 'MIA', 'DAL' ],
            [ 'SF', 'SEA', 'LA', 'NY', 'CHI', 'DEN', 'DAL' ]
          ]
        expect(result).to.eql(expected);
    })
})