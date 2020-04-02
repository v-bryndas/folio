/**

    Here on top you can find the uniforms for each distortion. 

    // ShaderShaping funcitns
    https://thebookofshaders.com/05/
     Steps 
     1. Write getDistortion in GLSL
     2. Write custom uniforms for tweak parameters. Put them outside the object.
     3. Re-create the GLSl funcion in javascript to get camera paning

     Notes: 
     LookAtAmp AND lookAtOffset are hand tuned to get a good camera panning.
 */
import * as THREE from 'three'

const LongRaceUniforms = {
  // x, y
  uFreq: new THREE.Uniform(new THREE.Vector2(3, 2)),
  uAmp: new THREE.Uniform(new THREE.Vector2(15, 30))
};

let LongRaceDistortion = {
  uniforms: LongRaceUniforms,
  getDistortion: `

    uniform vec2 uFreq;
    uniform vec2 uAmp;
				#define PI 3.14159265358979
				
				vec3 getDistortion(float progress){

						float camProgress = 0.0125;
						return vec3( 
							sin(progress * PI * uFreq.x +uTime) * uAmp.x - sin(camProgress * PI * uFreq.x+uTime ) * uAmp.x,
							sin(progress * PI * uFreq.y +uTime) * uAmp.y - sin(camProgress * PI * uFreq.y+uTime ) * uAmp.y,
							0.
						);
					}
        `,
  getJS: (progress, time) => {
    let camProgress = 0.0125;

    let uFreq = LongRaceUniforms.uFreq.value;
    let uAmp = LongRaceUniforms.uAmp.value;
    // Uniforms

    let distortion = new THREE.Vector3(
      Math.sin(progress * Math.PI * uFreq.x + time) * uAmp.x -
        Math.sin(camProgress * Math.PI * uFreq.x + time) * uAmp.x,
      Math.sin(progress * Math.PI * uFreq.y + time) * uAmp.y -
        Math.sin(camProgress * Math.PI * uFreq.y + time) * uAmp.y,
      0
    );

    let lookAtAmp = new THREE.Vector3(0, 0.2, 0);
    let lookAtOffset = new THREE.Vector3(0, 0, -4);
    return distortion.multiply(lookAtAmp).add(lookAtOffset);
  }
};

export { LongRaceDistortion };