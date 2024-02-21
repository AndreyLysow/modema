
import React from 'react';
import { Stage, Layer, RegularPolygon, Circle, Text } from 'react-konva';

const App = () => {
  const writeMessage = (message) => {
    // Реализуйте логику функции в соответствии с вашими требованиями
  };

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <RegularPolygon
          x={80}
          y={120}
          sides={3}
          radius={80}
          fill='#00D2FF'
          stroke='black'
          strokeWidth={4}
          onMouseOut={() => writeMessage('Мышь ушла с треугольника')}
          onMouseMove={(e) =>
            writeMessage(`x: ${e.target.x()}, y: ${e.target.y()}`)
          }
        />
        <Circle
          x={230}
          y={100}
          radius={60}
          fill='red'
          stroke='black'
          strokeWidth={4}
          onMouseOver={() => writeMessage('Мышь над кругом')}
          onMouseOut={() => writeMessage('Мышь ушла с круга')}
          onMouseDown={() => writeMessage('Нажата кнопка мыши на круге')}
          onMouseUp={() => writeMessage('Отпущена кнопка мыши на круге')}
        />
        <Text x={10} y={10} fontFamily='Calibri' fontSize={24} text='' fill='black' />
      </Layer>
    </Stage>
  );
};

export default App;