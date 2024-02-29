const {makeSketch} = require('./util');
const {vec2Create, vec3Create, VEC3_ZERO} = require('../core/vec');

// const size = 16;
// const height = size + 4;


const size = 64;
const height = size + size/3;


makeSketch({x: size, y: size, z: height}, {padFrac: 0.1}, (scene, ops) => {
  ops.fillScene(scene);
  ops.makeHollowShell(scene, {x: 0, y: 0, z:0}, {x: size, y: size, z: height}, 1);
  
  for (let i = 0; i < 2500; i++) {
    ops.randomBox(scene, (Math.random() < 0.85 ? 0 : 1));
  }

  ops.topFrontCutaway(scene, 0.5);

  // ops.predicateFill(scene, 1, (x, y, z) => {
  //   const zval = Math.random() * size;

  //   if (z < size / 2)
  //   return true;

  //   if (zval < z)
  //     return false;

  //   return true;
  // });





  //ops.fillBox(scene, vec3Create(0, 0, 0), vec3Create(size, size, size / 3), 1);

  //ops.randomBox(scene, 0);
  //ops.toggleVoxel(scene, 0,0,0);
  //ops.toggleVoxel(scene, 1,1,1);
});


