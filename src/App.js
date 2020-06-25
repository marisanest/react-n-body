import React, { useState, useEffect } from 'react';
import './App.css';
import { ResponsiveScatterPlot } from '@nivo/scatterplot'

const DataGenerator = (data) => {
    let iteration = 0
    let dataset = data
    let iteration_dataset = dataset[iteration]

    return {
        next: () => {
            if (iteration === data.length - 1)
                iteration = 0
            else
                iteration++
            iteration_dataset = dataset[iteration]
        },
        getData: () => {
            return iteration_dataset
        },
    }
}

const dataGenerator = DataGenerator([
        [
            {
                "id": "Body",
                "data": [
                    {
                        "x": 0,
                        "y": 0
                    },
                    {
                        "x": 0,
                        "y": 5
                    }]
            }
        ],
        [
            {
                "id": "Body",
                "data": [
                    {
                        "x": 10,
                        "y": 10
                    },
                    {
                        "x": 3,
                        "y": 8
                    }]
            }
        ],
        [
            {
                "id": "Body",
                "data": [{
                    "x": 20,
                    "y": 20
                },
                    {
                        "x": 8,
                        "y": 15
                    }]
            }
        ]
    ])

function App() {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            dataGenerator.next()
            setCurrent(current + 1)
        }, 2000)
        return () => clearTimeout(timer)
    }, [current, setCurrent])

    const data = dataGenerator.getData()

    console.log(data)

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