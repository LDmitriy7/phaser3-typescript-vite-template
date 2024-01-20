import { GL } from "./lib"

function createPositionBuffer(gl: GL) {
  const positions = [1, 1, -1, 1, 1, -1, -1, -1].map((i) => i * 2)
  // const positions = [-1, 0, -0.7, -1, 0, 1]
  // const positions = [1, 0, 0.7, -1, 0, 1, -0.7, -1, -1, 0, 0, 0]
  const buffer = gl.createBuffer()
  if (!buffer) throw new Error("Could not create buffer")
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW)
  return buffer
}

export class Buffers {
  position: WebGLBuffer

  constructor(gl: GL) {
    this.position = createPositionBuffer(gl)
  }
}

export function createBuffers(gl: GL) {
  return {
    position: createPositionBuffer(gl),
  }
}
