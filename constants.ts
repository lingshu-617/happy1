import * as THREE from 'three';

export const COLORS = {
  emerald: new THREE.Color('#004225'),
  deepGreen: new THREE.Color('#012110'),
  gold: new THREE.Color('#FFD700'),
  warmGold: new THREE.Color('#C5A000'),
  white: new THREE.Color('#FFFFFF'),
};

export const COUNTS = {
  foliage: 300,
  needles: 150, // Increased density
  baubles: 600,
  gifts: 120,
};

// Tree Math
export const TREE_HEIGHT = 10;
export const TREE_RADIUS = 4; // Tightened from 5.5

// Generate a random point in a sphere
export const getRandomSpherePoint = (radius: number): [number, number, number] => {
  const u = Math.random();
  const v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  const r = Math.cbrt(Math.random()) * radius;
  const sinPhi = Math.sin(phi);
  return [
    r * sinPhi * Math.cos(theta),
    r * sinPhi * Math.sin(theta),
    r * Math.cos(phi)
  ];
};

// Generate a point on a cone surface (Tree)
export const getTreePoint = (height: number, maxRadius: number, yOffset: number = -height/2): [number, number, number] => {
  const y = Math.random() * height; // Height from bottom (0 to height)
  const percentUp = y / height;
  
  // Radius shrinks as we go up
  const currentRadius = maxRadius * (1 - percentUp);
  
  const angle = Math.random() * Math.PI * 2;
  const r = Math.sqrt(Math.random()) * currentRadius; // Uniform distribution on disk
  
  const x = r * Math.cos(angle);
  const z = r * Math.sin(angle);
  
  return [x, y + yOffset, z];
};