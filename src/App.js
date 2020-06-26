import React, { useState, useEffect } from 'react';
import './App.css';
import { ResponsiveScatterPlot } from '@nivo/scatterplot'
import data from './data/data.json';

const DataGenerator = () => {
    let iteration = 0

    return {
        next: () => {
            if (iteration === data.length - 1)
                iteration = 0
            else
                iteration++
        },
        getData: () => {
            return data[iteration]
        },
    }
}

const dataGenerator = DataGenerator()

function App() {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            dataGenerator.next()
            // setCurrent(current + 1)
        }, 2000)
        return () => clearTimeout(timer)
    }, [current, setCurrent])

    const data = dataGenerator.getData()

    return (
        <div className="App">
            <div className="Chart">
                <ResponsiveScatterPlot
                    data={data}
                    margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
                    xScale={{ type: 'linear', min: 0, max: 20 }}
                    xFormat={function(e){return e}}
                    yScale={{ type: 'linear', min: 0, max: 20 }}
                    yFormat={function(e){return e}}
                    blendMode="normal"
                    nodeSize={5}
                    enableGridX={false}
                    enableGridY={false}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={null}
                    axisLeft={null}
                    legends={[]}
                    colors={['#ffffff']}
                    motionStiffness={20}
                    motionDamping={20}
                />
            </div>
        </div>
    );
}

export default App;