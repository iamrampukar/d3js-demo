const _data = [{
    width: 100,
    height: 200,
    fill: 'orange',
    x: 0,
    y: 0
}];
const canvas = d3.select('.canvas');
const svg = canvas.append('svg')
    .attr('height', 600)
    .attr('width', 600);

const rect = svg.append('rect')
    .data(_data)
    .attr('height', (d) => d.width)
    // .attr('height', function (d, i, n) {
    //     console.log(i);
    //     console.log(n);
    //     return d.height;
    // })
    .attr('width', (d) => d.height)
    .attr('fill', (d) => d.fill)
    .attr('x', (d) => d.x)
    .attr('y', (d) => d.y);