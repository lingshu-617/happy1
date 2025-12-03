import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import Experience from './components/Experience';
import Overlay from './components/Overlay';
import { TreeState } from './types';

function App() {
  const [treeState, setTreeState] = useState<TreeState>(TreeState.TREE_SHAPE);

  const toggleState = () => {
    setTreeState((prev) => 
      prev === TreeState.TREE_SHAPE ? TreeState.SCATTERED : TreeState.TREE_SHAPE
    );
  };

  return (
    <div className="w-full h-screen bg-[#010a05] relative overflow-hidden">
      
      {/* 3D Canvas */}
      <Canvas
        shadows
        dpr={[1, 2]} // Support high DPI screens
        gl={{ 
          antialias: false, // Rely on post-processing
          toneMapping: 3, // CineonToneMapping often looks best for cinematic
          toneMappingExposure: 1.2
        }}
      >
        <Suspense fallback={null}>
           <Experience treeState={treeState} />
        </Suspense>
      </Canvas>

      {/* UI Layer */}
      <Overlay currentState={treeState} onToggle={toggleState} />
      
      {/* Loading Indicator */}
      <Loader 
        containerStyles={{ background: '#010a05' }} 
        innerStyles={{ width: '200px', height: '2px', background: '#333' }}
        barStyles={{ background: '#FFD700', height: '2px' }}
        dataStyles={{ color: '#FFD700', fontFamily: 'Montserrat' }}
      />
    </div>
  );
}

export default App;